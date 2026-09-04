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

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import main from "../../cli/main.js";
import type {
  LockedProperty,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import { DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME } from "../OntologySchemaLockfile.js";

const FIXTURES = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "fixtures",
);

/**
 * Drives the real CLI entrypoint over real files for ETE testing.
 */
describe("maker CLI", () => {
  let workDir: string;
  let output: string;
  let lockfile: string;

  beforeEach(async () => {
    workDir = await fs.mkdtemp(path.join(os.tmpdir(), "maker-cli-"));
    output = path.join(workDir, "ontology.json");
    lockfile = path.join(workDir, DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME);
  });

  afterEach(async () => {
    await fs.rm(workDir, { recursive: true, force: true });
  });

  async function runMaker(fixture: string, ...flags: string[]): Promise<void> {
    await main([
      "node",
      "maker",
      "-i",
      path.join(FIXTURES, `${fixture}.ts`),
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
  ): Promise<void> {
    const baseline: OntologySchemaLockfile = {
      version: 1,
      interfaces: {
        [apiName]: { schema: { properties }, transitions: [] },
      },
    };
    await fs.writeFile(lockfile, JSON.stringify(baseline, undefined, 2) + "\n");
  }

  async function readLockfile(): Promise<OntologySchemaLockfile> {
    return JSON.parse(await fs.readFile(lockfile, "utf-8"));
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
        JSON.parse(
          await fs.readFile(
            path.join(inputDir, DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME),
            "utf-8",
          ),
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
      /Missing dependent arguments:[\s\S]*yes -> writeLocks/u,
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
      /is out of date[\s\S]*\+ migration "requireLastName"/u,
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
});
