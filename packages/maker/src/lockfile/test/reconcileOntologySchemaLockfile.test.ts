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

import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { LockedProperty } from "../OntologySchemaLockfile.js";
import {
  lastNameFinalized,
  lastNameInFlight,
  notOptedIn,
  OPTIONAL_STRING,
  optedIn,
  person,
  REQUIRED_STRING,
  requireEmail,
  requireLastName,
  useLockfileHarness,
} from "./lockfileHarness.js";

describe("reconcileOntologySchemaLockfile", () => {
  const harness = useLockfileHarness();
  const { maker, published, readLockfile, lockfileExists } = harness;

  describe("opting in", () => {
    it("writes no lockfile for an interface that has not opted in", async () => {
      await maker(notOptedIn);
      expect(await lockfileExists()).toBe(false);
    });

    it("rejects an opted-in interface with no lockfile to check against", async () => {
      await expect(maker(optedIn)).rejects.toThrowError(
        /1 ontology entity is opted into schema migrations, but there is no lockfile/u,
      );
      expect(await lockfileExists()).toBe(false);
    });

    it("records the baseline schema when the empty transitions block is added", async () => {
      await published(optedIn);
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {
          Person: {
            schema: {
              properties: { firstName: { type: "string", required: true } },
            },
            transitions: [],
          },
        },
      });
    });

    it("drops the entry when the interface opts back out", async () => {
      await published(optedIn);
      await maker(notOptedIn, { writeLocks: true });
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {},
      });
    });

    it("still holds an opted-out interface to the last published schema", async () => {
      await published(lastNameFinalized);
      // Dropping `schemaMigrations` ends checking from the next release on, not from this one:
      // the interface is still published, so removing a required property is still a break.
      await expect(
        maker(person({ firstName: REQUIRED_STRING }), { writeLocks: true }),
      ).rejects.toThrowError(/property "lastName" was removed/u);
    });

    it("reports opting out distinctly from deleting the interface", async () => {
      await published(optedIn);
      // Both are legal, so each reads as a lockfile the author has yet to update — but the
      // rendered diff says which one it saw, since they are very different edits to make by
      // accident.
      await expect(maker(notOptedIn)).rejects.toThrowError(
        /- Person \(no longer opted into schema migrations\)/u,
      );
      await expect(maker(() => {})).rejects.toThrowError(
        /- Person \(interface no longer defined\)/u,
      );
    });

    it("accepts deleting an enrolled interface", async () => {
      // Removing an interface takes every promise its transitions made with it, since nothing is
      // left to reference it or to be broken by it.
      await published(lastNameFinalized);
      await maker(() => {}, { writeLocks: true });
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {},
      });
    });

    it("accepts deleting an interface that opted out in an earlier release", async () => {
      await published(lastNameFinalized);
      await maker(
        person({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
        { writeLocks: true },
      );
      await maker(() => {}, { writeLocks: true });
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {},
      });
    });
  });

  describe("staleness", () => {
    it("records the new transition and the leniently-added property", async () => {
      await published(optedIn);
      await maker(lastNameInFlight, { writeLocks: true });
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

    it("refuses to publish until the lockfile records the change", async () => {
      await published(optedIn);
      await expect(maker(lastNameInFlight)).rejects.toThrowError(
        /is out of date[\s\S]*Run maker again with --write-locks/u,
      );
    });

    it("explains what --write-locks would change", async () => {
      await published(optedIn);
      await expect(maker(lastNameInFlight)).rejects.toThrowError(
        /Person:\n {2}\+ property "lastName" \("string", required: false\)\n {2}\+ migration "requireLastName"/u,
      );
    });

    it("passes silently when the lockfile is already up to date", async () => {
      await published(lastNameInFlight);
      await expect(maker(lastNameInFlight)).resolves.toBeUndefined();
    });

    it("ignores title and description churn on an in-flight migration", async () => {
      await published(lastNameInFlight);
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
            {
              transitions: [
                {
                  ...requireLastName,
                  title: "Reworded",
                  description: "Also reworded",
                },
              ],
            },
          ),
        ),
      ).resolves.toBeUndefined();
    });
  });

  describe("confirming finalizations and deletions", () => {
    // `--write-locks` only prompts when attached to a terminal.
    let realIsTTY: PropertyDescriptor | undefined;

    beforeEach(() => {
      realIsTTY = Object.getOwnPropertyDescriptor(process.stdin, "isTTY");
      Object.defineProperty(process.stdin, "isTTY", {
        value: true,
        configurable: true,
      });
    });

    afterEach(() => {
      if (realIsTTY === undefined) {
        Reflect.deleteProperty(process.stdin, "isTTY");
      } else {
        Object.defineProperty(process.stdin, "isTTY", realIsTTY);
      }
    });

    it("lists what it detected before asking", async () => {
      const warn = vi.spyOn(consola, "warn").mockImplementation(() => {});
      vi.spyOn(consola, "prompt").mockResolvedValue(true);
      await published(lastNameInFlight);
      await maker(lastNameFinalized, { writeLocks: true, assumeYes: false });
      expect(warn).toHaveBeenCalledWith(
        "Detected interface schema migration finalizations/deletions:\nPerson:\n  FINALIZE requireLastName",
      );
    });

    it("leaves the lockfile alone when the author declines", async () => {
      vi.spyOn(consola, "warn").mockImplementation(() => {});
      vi.spyOn(consola, "prompt").mockResolvedValue(false);
      await published(lastNameInFlight);
      const before = await readLockfile();

      await expect(
        maker(lastNameFinalized, { writeLocks: true, assumeYes: false }),
      ).rejects.toThrowError(/Aborted[\s\S]*was not updated/u);
      expect(await readLockfile()).toStrictEqual(before);
    });

    it("does not prompt for changes that are neither a finalization nor a deletion", async () => {
      const prompt = vi.spyOn(consola, "prompt");
      await published(optedIn);
      await maker(lastNameInFlight, { writeLocks: true, assumeYes: false });
      expect(prompt).not.toHaveBeenCalled();
    });

    // Opting out discards an in-flight transition without its effects landing, which is a
    // deletion of that transition however the interface left.
    it("reports an in-flight migration dropped by opting out as a deletion", async () => {
      const warn = vi.spyOn(consola, "warn").mockImplementation(() => {});
      vi.spyOn(consola, "prompt").mockResolvedValue(true);
      await published(lastNameInFlight);
      await maker(
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
        { writeLocks: true, assumeYes: false },
      );
      expect(warn).toHaveBeenCalledWith(
        "Detected interface schema migration finalizations/deletions:\nPerson:\n  DELETE requireLastName",
      );
    });

    it("does not prompt when the interface is deleted outright", async () => {
      const warn = vi.spyOn(consola, "warn").mockImplementation(() => {});
      const prompt = vi.spyOn(consola, "prompt");
      await published(lastNameInFlight);
      // Deleting the interface takes its in-flight transition with it, so there is no checkpoint
      // to record and nothing to ask about.
      await maker(() => {}, { writeLocks: true, assumeYes: false });
      expect(warn).not.toHaveBeenCalled();
      expect(prompt).not.toHaveBeenCalled();
      expect(await readLockfile()).toStrictEqual({
        version: 1,
        interfaces: {},
      });
    });

    it("does not prompt when the interface leaves with nothing in flight", async () => {
      const prompt = vi.spyOn(consola, "prompt");
      await published(optedIn);
      await maker(notOptedIn, { writeLocks: true, assumeYes: false });
      expect(prompt).not.toHaveBeenCalled();
    });

    it("leaves the lockfile alone when the author declines an opt-out", async () => {
      vi.spyOn(consola, "warn").mockImplementation(() => {});
      vi.spyOn(consola, "prompt").mockResolvedValue(false);
      await published(lastNameInFlight);
      const before = await readLockfile();

      await expect(
        maker(
          person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
          { writeLocks: true, assumeYes: false },
        ),
      ).rejects.toThrowError(/Aborted[\s\S]*was not updated/u);
      expect(await readLockfile()).toStrictEqual(before);
    });

    // CI is where an unreviewed finalization does the most damage, so it is the last place that
    // should get one silently accepted on its behalf.
    it("refuses to assume consent when there is no terminal to ask at", async () => {
      vi.spyOn(consola, "warn").mockImplementation(() => {});
      Object.defineProperty(process.stdin, "isTTY", {
        value: undefined,
        configurable: true,
      });
      await published(lastNameInFlight);
      const before = await readLockfile();

      await expect(
        maker(lastNameFinalized, { writeLocks: true, assumeYes: false }),
      ).rejects.toThrowError(
        /not attached to a terminal and cannot prompt\. Re-run with --yes/u,
      );
      expect(await readLockfile()).toStrictEqual(before);
    });
  });

  describe("a hand-edited lockfile", () => {
    it("rejects invalid JSON", async () => {
      await fs.writeFile(harness.lockfilePath, "{ not json");
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /is not valid JSON/u,
      );
    });

    it("rejects a file that is not a lockfile", async () => {
      await fs.writeFile(harness.lockfilePath, JSON.stringify({ version: 1 }));
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /expected an object with an "interfaces" key/u,
      );
    });

    it("rejects a lockfile from a future version of maker", async () => {
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify({ version: 2, interfaces: {} }),
      );
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /has version 2, but this version of maker only understands version 1/u,
      );
    });

    it("rejects a lockfile with no version", async () => {
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify({ interfaces: {} }),
      );
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /expected an integer "version" key/u,
      );
    });

    // An empty instruction list makes `schemasAgreeOn` vacuously true, which would classify the
    // transition as a finalization and silently drop it.
    it("rejects a migration with no instructions", async () => {
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify({
          version: 1,
          interfaces: {
            Person: {
              schema: {
                properties: { firstName: { type: "string", required: true } },
              },
              transitions: [
                {
                  id: "requireLastName",
                  gracePeriod: { type: "afterInstall", days: 30 },
                  instructions: [],
                },
              ],
            },
          },
        }),
      );
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /schema migration "requireLastName" has no instructions/u,
      );
    });

    it("rejects a migration with an unrecognized instruction type", async () => {
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify({
          version: 1,
          interfaces: {
            Person: {
              schema: {
                properties: { firstName: { type: "string", required: true } },
              },
              transitions: [
                {
                  id: "requireLastName",
                  gracePeriod: { type: "afterInstall", days: 30 },
                  instructions: [
                    { type: "renameProperty", property: "lastName" },
                  ],
                },
              ],
            },
          },
        }),
      );
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /instruction of unknown type "renameProperty"/u,
      );
    });

    it("reports a structural difference it cannot summarize", async () => {
      await published(optedIn);
      const lockfile = await readLockfile();
      // A key the diff renderer knows nothing about: unequal, but nothing to describe.
      (
        lockfile.interfaces.Person.schema.properties
          .firstName as LockedProperty & { note?: string }
      ).note = "why";
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify(lockfile, undefined, 2),
      );

      await expect(maker(optedIn)).rejects.toThrowError(
        /differs structurally from the one generated for this ontology[\s\S]*hand-edit is the likely cause/u,
      );
    });
  });

  describe("determinism", () => {
    it("does not churn when the author reorders transitions or properties", async () => {
      await published(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: OPTIONAL_STRING,
            email: OPTIONAL_STRING,
          },
          { transitions: [requireLastName, requireEmail] },
        ),
      );
      await expect(
        maker(
          person(
            {
              email: OPTIONAL_STRING,
              lastName: OPTIONAL_STRING,
              firstName: REQUIRED_STRING,
            },
            { transitions: [requireEmail, requireLastName] },
          ),
        ),
      ).resolves.toBeUndefined();
    });
  });
});
