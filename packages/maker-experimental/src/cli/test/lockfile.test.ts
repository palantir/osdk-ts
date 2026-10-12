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

import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME } from "@osdk/maker";
import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import main from "../main.js";

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
