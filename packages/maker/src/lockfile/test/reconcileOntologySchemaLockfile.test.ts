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

    // --write-locks has to be run before checking, so we have baseline to compare against
    it("rejects an opted-in interface with no lockfile to check against", async () => {
      await expect(maker(optedIn)).rejects.toThrowError(
        /1 interface is opted into schema migrations, but there is no lockfile/u,
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
      const warn = vi.spyOn(consola, "warn");
      await published(optedIn);

      await maker(notOptedIn, { writeLocks: true });
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(
          "Interface Person no longer declares `schemaMigrations`",
        ),
      );

      // Deleting it takes the interface out of the ontology entirely, and there is nothing left to
      // stop checking.
      warn.mockClear();
      await published(optedIn);
      await maker(() => {}, { writeLocks: true });
      expect(warn).not.toHaveBeenCalled();
    });

    it("accepts deleting an enrolled interface", async () => {
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

    it("names the entities --write-locks would bring up to date", async () => {
      await published(optedIn);
      await expect(maker(lastNameInFlight)).rejects.toThrowError(
        /have changed since it was written:\n {2}Person\n/u,
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
      const warn = vi.spyOn(consola, "warn");
      vi.spyOn(consola, "prompt").mockResolvedValue(true);
      await published(lastNameInFlight);
      await maker(lastNameFinalized, { writeLocks: true, assumeYes: false });
      expect(warn).toHaveBeenCalledWith(
        "Detected interface schema migration finalizations/deletions:\nPerson:\n  FINALIZE requireLastName",
      );
    });

    it("leaves the lockfile alone when the author declines", async () => {
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

    it("reports an in-flight migration dropped by opting out as a deletion", async () => {
      const warn = vi.spyOn(consola, "warn");
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
      const warn = vi.spyOn(consola, "warn");
      const prompt = vi.spyOn(consola, "prompt");
      await published(lastNameInFlight);
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

    it("refuses to assume consent when there is no terminal to ask at", async () => {
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
    // Reconcile should not regenerate over top of a bad file
    it("does not overwrite a lockfile it cannot parse, even with --write-locks", async () => {
      await fs.writeFile(harness.lockfilePath, "{ not json");
      await expect(maker(optedIn, { writeLocks: true })).rejects.toThrowError(
        /is not valid JSON/u,
      );

      // Regenerating would replace the published baseline with whatever the source says today,
      // and take the evidence of the bad edit with it.
      expect(await fs.readFile(harness.lockfilePath, "utf-8")).toBe(
        "{ not json",
      );
    });

    it("reports a hand-added key as a difference", async () => {
      await published(optedIn);
      const lockfile = await readLockfile();
      // A key maker knows nothing about. The parser passes it through rather than dropping it, so
      // that it surfaces here instead of being silently overwritten by the next --write-locks.
      (
        lockfile.interfaces.Person.schema.properties
          .firstName as LockedProperty & { note?: string }
      ).note = "why";
      await fs.writeFile(
        harness.lockfilePath,
        JSON.stringify(lockfile, undefined, 2),
      );

      await expect(maker(optedIn)).rejects.toThrowError(
        /is out of date[\s\S]*\n {2}Person\n/u,
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
