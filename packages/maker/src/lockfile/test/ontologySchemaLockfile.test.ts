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

import { consola } from "consola";
import { describe, expect, it, vi } from "vitest";

import { defineInterface } from "../../api/defineInterface.js";
import { defineSharedPropertyType } from "../../api/defineSpt.js";
import type { InterfaceSchemaTransition } from "../../api/interface/InterfaceSchemaMigrations.js";
import {
  bothInFlight,
  emailFinalized,
  emailInFlight,
  lastNameDeleted,
  lastNameFinalized,
  lastNameInFlight,
  OPTIONAL_STRING,
  optedIn,
  person,
  REQUIRED_STRING,
  requireEmail,
  requireLastName,
  useLockfileHarness,
} from "./lockfileHarness.js";

/**
 * An end-to-end lifecycle test of interface schema migrations, as exercised through maker's CLI.
 */
describe("interface schema migration scenarios", () => {
  const { maker, published, readLockfile } = useLockfileHarness();

  describe("removing a migration", () => {
    it("reads an unchanged schema as a deletion", async () => {
      await published(lastNameInFlight);
      await maker(lastNameDeleted, { writeLocks: true });
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.transitions).toStrictEqual([]);
      expect(
        lockfile.interfaces.Person.schema.properties.lastName,
      ).toStrictEqual({ type: "string", required: false });
    });

    it("reads a now-required property as a finalization", async () => {
      await published(lastNameInFlight);
      await maker(lastNameFinalized, { writeLocks: true });
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.transitions).toStrictEqual([]);
      expect(
        lockfile.interfaces.Person.schema.properties.lastName,
      ).toStrictEqual({ type: "string", required: true });
    });

    it("reads a removed property as neither, and says how to fix it", async () => {
      await published(lastNameInFlight);
      await expect(
        maker(person({ firstName: REQUIRED_STRING }, { transitions: [] }), {
          writeLocks: true,
        }),
      ).rejects.toThrowError(
        /schema migration "requireLastName" is no longer declared, but the resulting schema is neither a finalization nor a deletion of it\. Instead, "lastName" was removed from the interface\./u,
      );
    });

    it("reads a retyped property as neither", async () => {
      await published(lastNameInFlight);
      await expect(
        maker(
          person(
            {
              firstName: REQUIRED_STRING,
              lastName: { type: "integer", required: false },
            },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /neither a finalization nor a deletion[\s\S]*"lastName" changed type from "string" to "integer"/u,
      );
    });
  });

  describe("a later migration", () => {
    it("starts after the earlier one was finalized, keeping its property required", async () => {
      await published(lastNameFinalized);
      await maker(emailInFlight, { writeLocks: true });
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: false },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
      });
      expect(
        lockfile.interfaces.Person.transitions.map(({ id }) => id),
      ).toStrictEqual(["requireEmail"]);
    });

    it("starts in the same release that finalizes the earlier one", async () => {
      const warn = vi.spyOn(consola, "warn");
      await published(lastNameInFlight);
      await maker(emailInFlight, { writeLocks: true });

      // Only the departing transition is a checkpoint; opening a new one is not something the
      // author has to confirm.
      expect(warn).toHaveBeenCalledWith(
        "Detected interface schema migration finalizations/deletions:\nPerson:" +
          "\n  FINALIZE requireLastName",
      );
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: false },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
      });
      expect(
        lockfile.interfaces.Person.transitions.map(({ id }) => id),
      ).toStrictEqual(["requireEmail"]);
    });

    it("finalizes it without disturbing what an earlier migration made required", async () => {
      await published(emailInFlight);
      await maker(emailFinalized, { writeLocks: true });
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties.email).toStrictEqual({
        type: "string",
        required: true,
      });
      expect(lockfile.interfaces.Person.transitions).toStrictEqual([]);
    });
  });

  describe("two migrations in flight at once", () => {
    it("finalizes one and leaves the other in flight", async () => {
      await published(bothInFlight);
      await maker(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: REQUIRED_STRING,
            email: OPTIONAL_STRING,
          },
          { transitions: [requireEmail] },
        ),
        { writeLocks: true },
      );
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: false },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
      });
      expect(
        lockfile.interfaces.Person.transitions.map(({ id }) => id),
      ).toStrictEqual(["requireEmail"]);
    });

    it("finalizes the later migration while the earlier one is still in flight", async () => {
      await published(bothInFlight);
      await maker(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: OPTIONAL_STRING,
            email: REQUIRED_STRING,
          },
          { transitions: [requireLastName] },
        ),
        { writeLocks: true },
      );
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: true },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: false },
      });
      expect(
        lockfile.interfaces.Person.transitions.map(({ id }) => id),
      ).toStrictEqual(["requireLastName"]);
    });

    it("deletes one and leaves the other in flight", async () => {
      await published(bothInFlight);
      await maker(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: OPTIONAL_STRING,
            email: OPTIONAL_STRING,
          },
          { transitions: [requireEmail] },
        ),
        { writeLocks: true },
      );
      const lockfile = await readLockfile();
      expect(
        lockfile.interfaces.Person.schema.properties.lastName,
      ).toStrictEqual({ type: "string", required: false });
      expect(
        lockfile.interfaces.Person.transitions.map(({ id }) => id),
      ).toStrictEqual(["requireEmail"]);
    });

    it("finalizes one and deletes the other in a single release", async () => {
      const warn = vi.spyOn(consola, "warn");
      await published(bothInFlight);
      await maker(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: REQUIRED_STRING,
            email: OPTIONAL_STRING,
          },
          { transitions: [] },
        ),
        { writeLocks: true },
      );
      expect(warn).toHaveBeenCalledWith(
        "Detected interface schema migration finalizations/deletions:\nPerson:" +
          "\n  DELETE requireEmail\n  FINALIZE requireLastName",
      );
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: false },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
      });
      expect(lockfile.interfaces.Person.transitions).toStrictEqual([]);
    });

    // Each transition is classified by the properties it targets, not by whether the whole schema
    // matches: here neither one alone accounts for the release's full diff.
    it("finalizes both in a single release", async () => {
      await published(bothInFlight);
      await maker(
        person(
          {
            firstName: REQUIRED_STRING,
            lastName: REQUIRED_STRING,
            email: REQUIRED_STRING,
          },
          { transitions: [] },
        ),
        { writeLocks: true },
      );
      const lockfile = await readLockfile();
      expect(lockfile.interfaces.Person.schema.properties).toStrictEqual({
        email: { type: "string", required: true },
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
      });
      expect(lockfile.interfaces.Person.transitions).toStrictEqual([]);
    });

    it("blames only the migration that reads as neither, not the one still in flight", async () => {
      await published(bothInFlight);
      const thrown = await maker(
        person(
          { firstName: REQUIRED_STRING, email: OPTIONAL_STRING },
          { transitions: [requireEmail] },
        ),
        { writeLocks: true },
      ).then(
        () => undefined,
        (error: Error) => error,
      );

      expect(thrown?.message).toMatch(
        /schema migration "requireLastName" is no longer declared[\s\S]*"lastName" was removed from the interface\./u,
      );
      expect(thrown?.message).not.toContain("requireEmail");
    });
  });

  describe("undeclared breaking changes", () => {
    it("rejects a new required property", async () => {
      await published(optedIn);
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, lastName: REQUIRED_STRING },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /property "lastName" was added as required[\s\S]*addRequiredProperty", property: "lastName"/u,
      );
    });

    it("rejects an existing property becoming required", async () => {
      await published(
        person(
          { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
          { transitions: [] },
        ),
      );
      await expect(
        maker(lastNameFinalized, { writeLocks: true }),
      ).rejects.toThrowError(
        /property "lastName" became required without a schema migration/u,
      );
    });

    it("rejects removing a property", async () => {
      await published(lastNameFinalized);
      await expect(
        maker(person({ firstName: REQUIRED_STRING }, { transitions: [] }), {
          writeLocks: true,
        }),
      ).rejects.toThrowError(
        /property "lastName" was removed[\s\S]*no currently-supported interface schema migration can phase it in/u,
      );
    });

    function personExtendingNamed(extending: boolean): () => void {
      return () => {
        // Opted in even while unrelated to Person: a parent has to be opted in to be extended
        // by one (see validateSchemaMigrationsFamilyOptIn).
        const named = defineInterface({
          apiName: "Named",
          properties: { name: REQUIRED_STRING },
          schemaMigrations: { transitions: [] },
        });
        defineInterface({
          apiName: "Person",
          properties: { firstName: REQUIRED_STRING },
          schemaMigrations: { transitions: [] },
          ...(extending && { extends: named }),
        });
      };
    }

    it("rejects extending a new interface", async () => {
      await published(personExtendingNamed(false));
      await expect(
        maker(personExtendingNamed(true), { writeLocks: true }),
      ).rejects.toThrowError(
        /now extends "Named"[\s\S]*no currently-supported interface schema migration can phase that in/u,
      );
    });

    it("warns about no longer extending an interface, rather than rejecting it", async () => {
      const warn = vi.spyOn(consola, "warn");
      await published(personExtendingNamed(true));
      await maker(personExtendingNamed(false), { writeLocks: true });

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('Interface Person no longer extends "Named"'),
      );
      expect(
        (await readLockfile()).interfaces.Person.schema,
      ).not.toHaveProperty("extendsInterfaces");
    });

    it("rejects changing a property's type", async () => {
      await published(lastNameFinalized);
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, lastName: { type: "integer" } },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /property "lastName" changed type from "string" to "integer"/u,
      );
    });

    it("rejects making a property arrayed", async () => {
      await published(lastNameFinalized);
      await expect(
        maker(
          person(
            {
              firstName: REQUIRED_STRING,
              lastName: { type: "string", array: true },
            },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /property "lastName" changed type from "string" to "string"\[\]/u,
      );
    });

    it("rejects dropping the arrayedness of a property", async () => {
      await published(
        person(
          {
            firstName: REQUIRED_STRING,
            nicknames: { type: "string", array: true },
          },
          { transitions: [] },
        ),
      );
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, nicknames: { type: "string" } },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /property "nicknames" changed type from "string"\[\] to "string"/u,
      );
    });

    it("accepts an arrayed property that did not change", async () => {
      const arrayed = person(
        {
          firstName: REQUIRED_STRING,
          nicknames: { type: "string", array: true },
        },
        { transitions: [] },
      );
      await published(arrayed);
      await expect(
        maker(arrayed, { writeLocks: true }),
      ).resolves.toBeUndefined();
    });

    it("accepts relaxing a required property to optional", async () => {
      await published(lastNameFinalized);
      await expect(
        maker(lastNameDeleted, { writeLocks: true }),
      ).resolves.toBeUndefined();
    });

    it("accepts adding an optional property", async () => {
      await published(optedIn);
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, nickname: OPTIONAL_STRING },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).resolves.toBeUndefined();
    });

    it("reports every break at once rather than only the first", async () => {
      await published(emailFinalized);
      await expect(
        maker(
          person(
            { firstName: REQUIRED_STRING, lastName: { type: "integer" } },
            { transitions: [] },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /property "email" was removed[\s\S]*property "lastName" changed type/u,
      );
    });
  });

  describe("mutating an in-flight migration", () => {
    it("rejects changed instructions", async () => {
      await published(lastNameInFlight);
      await expect(
        maker(
          person(
            {
              firstName: REQUIRED_STRING,
              lastName: OPTIONAL_STRING,
              nickname: OPTIONAL_STRING,
            },
            {
              transitions: [
                {
                  ...requireLastName,
                  instructions: [
                    {
                      type: "addRequiredProperty",
                      property: "nickname",
                    },
                  ],
                },
              ],
            },
          ),
          { writeLocks: true },
        ),
      ).rejects.toThrowError(
        /schema migration "requireLastName" changed its instructions from \[addRequiredProperty\("lastName"\)\] to \[addRequiredProperty\("nickname"\)\][\s\S]*instructions may not be changed/u,
      );
    });

    it("accepts an extended grace period", async () => {
      await published(lastNameInFlight);
      await maker(withGracePeriod({ type: "afterInstall", days: 60 }), {
        writeLocks: true,
      });
      expect(
        (await readLockfile()).interfaces.Person.transitions[0].gracePeriod,
      ).toStrictEqual({ type: "afterInstall", days: 60 });
    });

    function withGracePeriod(
      gracePeriod: InterfaceSchemaTransition["gracePeriod"],
    ): () => void {
      return person(
        { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
        { transitions: [{ ...requireLastName, gracePeriod }] },
      );
    }
  });

  describe("shared property types", () => {
    it("keys the schema and instructions by the published api name", async () => {
      await expect(
        maker(
          () => {
            const emailAddress = defineSharedPropertyType({
              apiName: "emailAddress",
              type: "string",
            });
            defineInterface({
              apiName: "Person",
              properties: {
                emailAddress: {
                  sharedPropertyType: emailAddress,
                  required: false,
                },
              },
              schemaMigrations: {
                transitions: [
                  {
                    ...requireEmail,
                    instructions: [
                      {
                        type: "addRequiredProperty",
                        property: "emailAddress",
                      },
                    ],
                  },
                ],
              },
            });
          },
          { writeLocks: true, namespace: "com.example." },
        ),
      ).resolves.toBeUndefined();

      const lockfile = await readLockfile();
      const locked = lockfile.interfaces["com.example.Person"];
      expect(Object.keys(locked.schema.properties)).toStrictEqual([
        "com.example.emailAddress",
      ]);
      expect(locked.transitions[0].instructions).toStrictEqual([
        {
          type: "addRequiredProperty",
          property: "com.example.emailAddress",
        },
      ]);
    });
  });
});
