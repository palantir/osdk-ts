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

import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import main from "../../cli/main.js";
import type {
  LockedInterfaceSchema,
  LockedProperty,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import {
  DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME,
  LOCKFILE_HEADER_KEY,
} from "../OntologySchemaLockfile.js";

const FIXTURES = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "fixtures",
);

describe("maker CLI", () => {
  let workDir: string;
  let inputCopies: string;
  let output: string;
  let lockfile: string;
  let runs = 0;

  beforeEach(async () => {
    workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-cli-"));
    // Inputs have to live inside the package for their relative imports of maker's source to
    // resolve, so this sits at the same depth as `fixtures`.
    inputCopies = await fs.mkdtemp(path.join(path.dirname(FIXTURES), ".tmp-"));
    output = path.join(workDir, "ontology.json");
    lockfile = path.join(workDir, DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME);
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await fs.rm(workDir, { recursive: true, force: true });
    await fs.rm(inputCopies, { recursive: true, force: true });
  });

  async function runMaker(fixture: string, ...flags: string[]): Promise<void> {
    // maker loads its input with `import()`, which never re-evaluates a module it has already
    // loaded, so each run gets its own copy for a fixture to be usable more than once.
    const input = path.join(inputCopies, `${fixture}-${runs++}.ts`);
    await fs.copyFile(path.join(FIXTURES, `${fixture}.ts`), input);
    await main([
      "node",
      "maker",
      "-i",
      input,
      "-o",
      output,
      "--lockfile",
      lockfile,
      ...flags,
    ]);
  }

  /** The lockfile a previous release would have left behind. */
  async function writeBaselineLockfile(
    apiName: string,
    properties: Record<string, LockedProperty>,
    schema: Omit<LockedInterfaceSchema, "properties"> = {},
  ): Promise<void> {
    const baseline: OntologySchemaLockfile = {
      version: 1,
      interfaces: {
        [apiName]: { schema: { properties, ...schema }, transitions: [] },
      },
    };
    await fs.writeFile(lockfile, JSON.stringify(baseline, undefined, 2) + "\n");
  }

  /** Every warning maker logged, joined, so a test can look for the checkpoints it reported. */
  function spyOnWarnings(): () => string {
    const warn = vi.spyOn(consola, "warn").mockImplementation(() => {});
    return () => warn.mock.calls.map((args) => args.join(" ")).join("\n");
  }

  async function readLockfileAt(file: string): Promise<OntologySchemaLockfile> {
    const { [LOCKFILE_HEADER_KEY]: _header, ...contents } = JSON.parse(
      await fs.readFile(file, "utf-8"),
    );
    return contents;
  }

  async function readLockfile(): Promise<OntologySchemaLockfile> {
    return await readLockfileAt(lockfile);
  }

  async function exists(file: string): Promise<boolean> {
    return await fs.access(file).then(
      () => true,
      () => false,
    );
  }

  it("defaults the lockfile to sit beside the input, not the working directory", async () => {
    // The input has to live inside the package for its relative import of maker's source to
    // resolve, so this gets its own scratch directory at the same depth as `fixtures`.
    const inputDir = await fs.mkdtemp(
      path.join(path.dirname(FIXTURES), ".tmp-"),
    );
    const input = path.join(inputDir, "ontology.ts");
    await fs.copyFile(path.join(FIXTURES, "personOptedIn.ts"), input);

    const previousCwd = process.cwd();
    process.chdir(workDir);
    try {
      // No --lockfile, so this covers the default path.
      await main(["node", "maker", "-i", input, "-o", output, "--write-locks"]);

      const expectedLockfile = {
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
      expect(
        await readLockfileAt(
          path.join(inputDir, DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME),
        ),
      ).toStrictEqual(expectedLockfile);
      expect(await exists(lockfile)).toBe(false);
      expect(await exists(output)).toBe(true);
    } finally {
      process.chdir(previousCwd);
      await fs.rm(inputDir, { recursive: true, force: true });
    }
  });

  it("rejects --yes without --write-locks", async () => {
    await expect(runMaker("orderOptedIn", "--yes")).rejects.toThrowError(
      /yes -> writeLocks/u,
    );
  });

  it("does not write an ontology when the lockfile is missing", async () => {
    await expect(runMaker("orderOptedIn")).rejects.toThrowError(
      /there is no lockfile/u,
    );
    expect(await exists(output)).toBe(false);
    expect(await exists(lockfile)).toBe(false);
  });

  it("does not write an ontology when the lockfile is out of date", async () => {
    await writeBaselineLockfile("Person", {
      firstName: { type: "string", required: true },
    });

    await expect(runMaker("personWithMigration")).rejects.toThrowError(
      /is out of date[\s\S]*\n {2}Person\n/u,
    );
    expect(await exists(output)).toBe(false);
  });

  it("does not write an ontology for an undeclared breaking change", async () => {
    await writeBaselineLockfile("Person", {
      firstName: { type: "string", required: true },
    });

    await expect(
      runMaker("personUndeclaredBreak", "--write-locks"),
    ).rejects.toThrowError(/property "lastName" was added as required/u);
    expect(await exists(output)).toBe(false);
  });

  it("records a backwards compatible change and writes the ontology", async () => {
    await writeBaselineLockfile("Order", {
      orderId: { type: "string", required: true },
    });

    await runMaker("orderWithMigration", "--write-locks", "--yes");

    expect(await readLockfile()).toStrictEqual({
      version: 1,
      interfaces: {
        Order: {
          schema: {
            properties: {
              orderId: { type: "string", required: true },
              shippedAt: { type: "timestamp", required: false },
            },
          },
          transitions: [
            {
              id: "requireShippedAt",
              gracePeriod: { type: "afterInstall", days: 45 },
              instructions: [
                { type: "addRequiredProperty", property: "shippedAt" },
              ],
            },
          ],
        },
      },
    });
    expect(await exists(output)).toBe(true);
  });

  describe("an action type constraint phased in to required", () => {
    const inFlightLockfile: OntologySchemaLockfile = {
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

    it("records the migration in flight, then its finalization", async () => {
      await runMaker("personSendEmailInFlight", "--write-locks");
      expect(await readLockfile()).toStrictEqual(inFlightLockfile);

      const warnings = spyOnWarnings();
      await fs.rm(output);
      await runMaker("personSendEmailRequired", "--write-locks", "--yes");

      expect(warnings()).toContain("FINALIZE requireSendEmail");
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
      expect(await exists(output)).toBe(true);
    });

    it("does not write an ontology when the constraint is required without a migration", async () => {
      await writeBaselineLockfile(
        "Person",
        { firstName: { type: "string", required: true } },
        {
          actionTypeConstraints: {
            sendEmail: { requireImplementation: false },
          },
        },
      );
      const baseline = await fs.readFile(lockfile, "utf-8");

      await expect(
        runMaker("personSendEmailRequired", "--write-locks", "--yes"),
      ).rejects.toThrowError(
        /action type constraint "sendEmail" became required without a schema migration[\s\S]*type: "addRequiredActionTypeConstraint", actionTypeConstraint: "sendEmail"/u,
      );
      expect(await exists(output)).toBe(false);
      expect(await fs.readFile(lockfile, "utf-8")).toBe(baseline);
    });
  });

  describe("a deprecation", () => {
    const PERSON_SCHEMA: LockedInterfaceSchema = {
      properties: { name: { type: "string", required: true } },
    };

    /** Publishes the release that starts deprecating `Person`. */
    async function publishDeprecationInFlight(): Promise<void> {
      await runMaker("personDeprecationInFlight", "--write-locks");
      await fs.rm(output);
    }

    it("records the deprecation in flight in its lenient form, naming the replacement by api name", async () => {
      await publishDeprecationInFlight();

      // `PersonV2` is not opted in, and the in-flight `allowNewImplementations: false` is not
      // binding yet, so it is not recorded.
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          Person: {
            schema: PERSON_SCHEMA,
            transitions: [
              {
                id: "replaceWithPersonV2",
                gracePeriod: { type: "afterInstall", days: 30 },
                instructions: [
                  {
                    type: "deprecate",
                    replacement: {
                      interfaceType: "PersonV2",
                      propertyMappings: { name: "fullName" },
                    },
                  },
                ],
              },
            ],
          },
        },
      });
    });

    it("accepts finalizing it by disallowing new implementations", async () => {
      await publishDeprecationInFlight();

      const warnings = spyOnWarnings();
      await runMaker("personDeprecationFinalized", "--write-locks", "--yes");

      expect(warnings()).toContain("FINALIZE replaceWithPersonV2");
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          Person: {
            schema: { ...PERSON_SCHEMA, allowNewImplementations: false },
            transitions: [],
          },
        },
      });
      expect(await exists(output)).toBe(true);
    });

    it("accepts deleting it by still allowing new implementations", async () => {
      await publishDeprecationInFlight();

      const warnings = spyOnWarnings();
      await runMaker("personDeprecationDeleted", "--write-locks", "--yes");

      expect(warnings()).toContain("DELETE replaceWithPersonV2");
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: { Person: { schema: PERSON_SCHEMA, transitions: [] } },
      });
      expect(await exists(output)).toBe(true);
    });

    it("does not write an ontology that declares a migration after the deprecation is finalized", async () => {
      await publishDeprecationInFlight();
      await runMaker("personDeprecationFinalized", "--write-locks", "--yes");
      await fs.rm(output);
      const finalized = await fs.readFile(lockfile, "utf-8");

      await expect(
        runMaker("personMigratedAfterDeprecation", "--write-locks", "--yes"),
      ).rejects.toThrowError(
        /declares schema migration "requireNickname", but a previous release finalized its deprecation[\s\S]*No future transitions are allowed after a deprecation is finalized/u,
      );
      expect(await exists(output)).toBe(false);
      expect(await fs.readFile(lockfile, "utf-8")).toBe(finalized);
    });
  });
});
