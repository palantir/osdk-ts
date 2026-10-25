/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import type {
  InterfaceTypeBlockDataV2,
  OntologyBlockDataV2,
} from "@osdk/client.unstable";
import type { OutputShape } from "@osdk/client.unstable/api";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME } from "@osdk/maker";
import { consola } from "consola";
import invariant from "tiny-invariant";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ReadableIdGenerator } from "../../util/generateRid.js";
import main from "../main.js";
import { toBlockShapeId } from "../marketplaceSerialization/CodeBlockSpec.js";

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(TEST_DIR, "fixtures");

const PERSON_OPTED_IN = {
  version: 1,
  interfaces: {
    Person: {
      schema: {
        properties: { firstName: { type: "string", required: true } },
      },
      transitions: [],
    },
  },
};

describe("maker-experimental CLI ontology schema lockfile", () => {
  let workDir: string;
  // The inputs have to live inside the package for their `@osdk/maker` import to resolve.
  let inputDir: string;
  let lockfile: string;
  let output: string;
  let runs: number;

  beforeEach(async () => {
    vi.spyOn(consola, "log").mockImplementation(() => {});
    vi.spyOn(consola, "info").mockImplementation(() => {});
    vi.spyOn(consola, "success").mockImplementation(() => {});
    vi.spyOn(consola, "warn").mockImplementation(() => {});

    workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-experimental-"));
    inputDir = await fs.mkdtemp(path.join(TEST_DIR, ".tmp-"));
    lockfile = path.join(inputDir, DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME);
    output = path.join(workDir, "block_generator_result.json");
    runs = 0;
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await fs.rm(workDir, { recursive: true, force: true });
    await fs.rm(inputDir, { recursive: true, force: true });
  });

  /** Runs the CLI with its default lockfile location: beside the input. */
  async function run(fixture: string, ...flags: string[]): Promise<void> {
    // Module imports are cached by URL, so a fixture imported a second time would register
    // nothing. A fresh name per run makes every run evaluate its ontology.
    const input = path.join(inputDir, `ontology${runs++}.ts`);
    await fs.copyFile(path.join(FIXTURES, `${fixture}.ts`), input);
    await main([
      "node",
      "maker-experimental",
      "-i",
      input,
      "-o",
      output,
      "-b",
      path.join(workDir, "build"),
      "-c",
      path.join(workDir, "codegen"),
      "--valueTypesOutput",
      path.join(workDir, "value_types_block_generator_result.json"),
      ...flags,
    ]);
  }

  async function readLockfile(at: string = lockfile): Promise<unknown> {
    const { "//": _header, ...contents } = JSON.parse(
      await fs.readFile(at, "utf-8"),
    );
    return contents;
  }

  async function exists(file: string): Promise<boolean> {
    return await fs.access(file).then(
      () => true,
      () => false,
    );
  }

  it("does not require a lockfile when nothing has opted in", async () => {
    await run("personNotOptedIn");

    expect(await exists(output)).toBe(true);
    expect(await exists(lockfile)).toBe(false);
  });

  it("does not write block data when the lockfile is missing", async () => {
    await expect(run("personOptedIn")).rejects.toThrowError(
      /there is no lockfile/u,
    );

    expect(await exists(output)).toBe(false);
    expect(await exists(path.join(workDir, "build", "temp_block_data"))).toBe(
      false,
    );
    expect(await exists(lockfile)).toBe(false);
  });

  it("creates the lockfile beside the input with --write-locks", async () => {
    await run("personOptedIn", "--write-locks");

    expect(await readLockfile()).toStrictEqual(PERSON_OPTED_IN);
    expect(await exists(output)).toBe(true);
  });

  it("does not write block data when the lockfile is out of date", async () => {
    await run("personOptedIn", "--write-locks");
    await fs.rm(output);

    await expect(run("personLastNameInFlight")).rejects.toThrowError(
      /is out of date[\s\S]*\n {2}Person\n/u,
    );
    expect(await exists(output)).toBe(false);
    expect(await readLockfile()).toStrictEqual(PERSON_OPTED_IN);
  });

  it("updates an out of date lockfile with --write-locks", async () => {
    await run("personOptedIn", "--write-locks");

    await run("personLastNameInFlight", "--write-locks");

    expect(await readLockfile()).toStrictEqual({
      version: 1,
      interfaces: {
        Person: {
          schema: {
            properties: {
              firstName: { type: "string", required: true },
              lastName: { type: "string", required: false },
            },
          },
          transitions: [
            {
              id: "requireLastName",
              gracePeriod: { type: "afterInstall", days: 30 },
              instructions: [
                { type: "addRequiredProperty", property: "lastName" },
              ],
            },
          ],
        },
      },
    });
  });

  it("rejects --yes without --write-locks", async () => {
    await expect(run("personOptedIn", "--yes")).rejects.toThrowError(
      /yes -> writeLocks/u,
    );
  });

  it("uses the --lockfile path instead of the default", async () => {
    const override = path.join(workDir, "custom.lock.json");

    await run("personOptedIn", "--write-locks", "--lockfile", override);

    expect(await readLockfile(override)).toStrictEqual(PERSON_OPTED_IN);
    expect(await exists(lockfile)).toBe(false);
  });

  // The Foundry CLI can run maker-experimental twice per build, e.g. a second time for
  // function-backed actions.
  it("is idempotent across repeated passes", async () => {
    await run("personLastNameInFlight", "--write-locks");
    await run("personLastNameFinalized", "--write-locks", "--yes");
    const contents = await fs.readFile(lockfile, "utf-8");

    // Without --yes and without a TTY, this would throw if the finalization were detected again.
    await run("personLastNameFinalized", "--write-locks");
    await run("personLastNameFinalized");

    expect(await fs.readFile(lockfile, "utf-8")).toBe(contents);
  });

  async function readBlockData(): Promise<OntologyBlockDataV2> {
    return JSON.parse(
      await fs.readFile(
        path.join(workDir, "build", "temp_block_data", "ontology.json"),
        "utf-8",
      ),
    );
  }

  async function readOutputShapes(): Promise<Record<string, OutputShape>> {
    const [ontologyResult] = JSON.parse(await fs.readFile(output, "utf-8"));
    return ontologyResult.outputs;
  }

  function interfaceBlock(
    blockData: OntologyBlockDataV2,
    apiName: string,
  ): { rid: string; block: InterfaceTypeBlockDataV2 } {
    const found = Object.entries(blockData.interfaceTypes).find(
      ([, block]) => block.interfaceType.apiName === apiName,
    );
    invariant(found != null, `expected interface ${apiName}`);
    return { rid: found[0], block: found[1] };
  }

  function propertyRid(block: InterfaceTypeBlockDataV2, apiName: string) {
    const found = Object.entries(block.interfaceType.propertiesV3).find(
      ([, property]) =>
        property.type === "interfaceDefinedPropertyType" &&
        property.interfaceDefinedPropertyType.apiName === apiName,
    );
    invariant(found != null, `expected property ${apiName}`);
    return found[0];
  }

  function transitionShape(
    shapes: Record<string, OutputShape>,
    interfaceApiName: string,
    transitionId: string,
  ) {
    const shape =
      shapes[
        ReadableIdGenerator.getForInterfaceSchemaTransition(
          interfaceApiName,
          transitionId,
        )
      ];
    invariant(shape?.type === "interfaceTypeSchemaTransition");
    return shape.interfaceTypeSchemaTransition;
  }

  describe("addRequiredActionTypeConstraint", () => {
    const IN_FLIGHT = {
      version: 1,
      interfaces: {
        Person: {
          schema: {
            properties: { firstName: { type: "string", required: true } },
            actionTypeConstraints: {
              sendEmail: { requireImplementation: false },
            },
          },
          transitions: [
            {
              id: "requireSendEmail",
              gracePeriod: { type: "afterInstall", days: 30 },
              instructions: [
                {
                  type: "addRequiredActionTypeConstraint",
                  actionTypeConstraint: "sendEmail",
                },
              ],
            },
          ],
        },
      },
    };

    it("emits the in-flight migration and locks the lenient constraint", async () => {
      await run("personSendEmailInFlight", "--write-locks");

      expect(await readLockfile()).toStrictEqual(IN_FLIGHT);
      const { block } = interfaceBlock(await readBlockData(), "Person");
      const [constraint] = block.interfaceType.actionTypeConstraints;
      expect(constraint.requireImplementation).toBe(false);
      const [transition] = Object.values(
        block.schemaMigrations?.schemaTransitions ?? {},
      );
      expect(transition.migrations).toEqual([
        {
          type: "addRequiredActionTypeConstraint",
          addRequiredActionTypeConstraint: {
            actionTypeConstraintRid: constraint.rid,
          },
        },
      ]);
      expect(
        block.schemaMigrations?.interfaceActionTypeConstraintRidsToApiNames,
      ).toEqual({ [constraint.rid]: "sendEmail" });
      expect(
        transitionShape(await readOutputShapes(), "Person", "requireSendEmail")
          .migrations,
      ).toEqual([
        {
          type: "addRequiredActionTypeConstraint",
          addRequiredActionTypeConstraint: {
            actionTypeConstraint: toBlockShapeId(
              ReadableIdGenerator.getForInterfaceActionTypeConstraint(
                "Person",
                "sendEmail",
              ),
            ),
          },
        },
      ]);
    });

    it("locks the strict constraint once finalized", async () => {
      await run("personSendEmailInFlight", "--write-locks");

      await run("personSendEmailFinalized", "--write-locks", "--yes");

      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          Person: {
            schema: {
              properties: { firstName: { type: "string", required: true } },
              actionTypeConstraints: {
                sendEmail: { requireImplementation: true },
              },
            },
            transitions: [],
          },
        },
      });
      const { block } = interfaceBlock(await readBlockData(), "Person");
      expect(
        block.interfaceType.actionTypeConstraints.map(
          (constraint) => constraint.requireImplementation,
        ),
      ).toEqual([true]);
      expect(block.schemaMigrations?.schemaTransitions).toEqual({});
    });
  });

  describe("deprecate", () => {
    it("emits the in-flight migration and locks the lenient schema", async () => {
      await run("legacyPersonDeprecateInFlight", "--write-locks");

      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          LegacyPerson: {
            schema: {
              properties: { fullName: { type: "string", required: true } },
            },
            transitions: [
              {
                id: "replaceWithPerson",
                gracePeriod: { type: "afterInstall", days: 30 },
                instructions: [
                  {
                    type: "deprecate",
                    replacement: {
                      interfaceType: "Person",
                      propertyMappings: { fullName: "firstName" },
                    },
                  },
                ],
              },
            ],
          },
        },
      });

      const blockData = await readBlockData();
      const legacy = interfaceBlock(blockData, "LegacyPerson").block;
      const person = interfaceBlock(blockData, "Person");
      const [transition] = Object.values(
        legacy.schemaMigrations?.schemaTransitions ?? {},
      );
      const fullNameRid = propertyRid(legacy, "fullName");
      const firstNameRid = propertyRid(person.block, "firstName");
      expect(transition.migrations).toEqual([
        {
          type: "deprecate",
          deprecate: {
            replacement: {
              interfaceTypeRid: person.rid,
              propertyMappings: { [fullNameRid]: firstNameRid },
              linkTypeConstraintMappings: {},
              actionTypeConstraintMappings: {},
            },
          },
        },
      ]);
      expect(legacy.schemaMigrations).toMatchObject({
        interfaceTypeRidsToApiNames: { [person.rid]: "Person" },
        interfacePropertyTypeRidsToApiNames: {
          [fullNameRid]: "fullName",
          [firstNameRid]: "firstName",
        },
      });

      const blockId = toBlockShapeId;
      expect(
        transitionShape(
          await readOutputShapes(),
          "LegacyPerson",
          "replaceWithPerson",
        ).migrations,
      ).toEqual([
        {
          type: "deprecate",
          deprecate: {
            replacement: {
              interfaceType: blockId(
                ReadableIdGenerator.getForInterface("Person"),
              ),
              propertyMappings: {
                [blockId(
                  ReadableIdGenerator.getForInterfaceProperty(
                    "LegacyPerson",
                    "fullName",
                  ),
                )]: blockId(
                  ReadableIdGenerator.getForInterfaceProperty(
                    "Person",
                    "firstName",
                  ),
                ),
              },
              linkTypeConstraintMappings: {},
              actionTypeConstraintMappings: {},
            },
          },
        },
      ]);
    });

    it("locks allowNewImplementations: false once finalized", async () => {
      await run("legacyPersonDeprecateInFlight", "--write-locks");

      await run("legacyPersonDeprecateFinalized", "--write-locks", "--yes");

      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          LegacyPerson: {
            schema: {
              properties: { fullName: { type: "string", required: true } },
              allowNewImplementations: false,
            },
            transitions: [],
          },
        },
      });
      const legacy = interfaceBlock(
        await readBlockData(),
        "LegacyPerson",
      ).block;
      expect(legacy.interfaceType.status).toEqual({
        type: "deprecated",
        deprecated: {
          message: "Use Person instead",
          deadline: "2027-01-01T00:00:00Z",
          allowNewImplementations: false,
        },
      });
      expect(legacy.schemaMigrations?.schemaTransitions).toEqual({});
    });
  });

  describe("function-backed second pass", () => {
    const blockDataFile = () =>
      path.join(workDir, "build", "temp_block_data", "ontology.json");
    const secondPassFlags = () => [
      "-f",
      blockDataFile(),
      "--functionsDir",
      path.join(workDir, "functions"),
      "--nodeModulesDir",
      path.join(workDir, "node_modules"),
      "--functionsIrOutputFile",
      path.join(workDir, "functions_ir.json"),
    ];

    beforeEach(() => {
      // Real discovery needs a TypeScript functions project; only its IR output matters here.
      vi.spyOn(
        OntologyIrToFullMetadataConverter,
        "discoverTypeScriptFunctions",
      ).mockImplementation(async (_functionsDir, _nodeModulesDir, irFile) => {
        await fs.writeFile(
          irFile!,
          JSON.stringify({ discoveredFunctions: [] }),
        );
        return [];
      });
    });

    it("accepts the lockfile written by the first pass", async () => {
      await run("personOptedIn", "--write-locks");
      const contents = await fs.readFile(lockfile, "utf-8");
      await fs.rm(output);

      await run("personOptedIn", ...secondPassFlags());

      expect(
        OntologyIrToFullMetadataConverter.discoverTypeScriptFunctions,
      ).toHaveBeenCalledOnce();
      expect(await exists(output)).toBe(true);
      expect(await fs.readFile(lockfile, "utf-8")).toBe(contents);
    });

    it("does not write block data when the lockfile is out of date", async () => {
      await run("personOptedIn", "--write-locks");
      await fs.rm(output);

      await expect(
        run("personLastNameInFlight", ...secondPassFlags()),
      ).rejects.toThrowError(/is out of date/u);
      expect(await exists(output)).toBe(false);
      expect(await readLockfile()).toStrictEqual(PERSON_OPTED_IN);
    });
  });
});
