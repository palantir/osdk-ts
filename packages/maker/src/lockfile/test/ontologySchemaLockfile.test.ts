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

import { describe, expect, it } from "vitest";

import { defineInterface } from "../../api/defineInterface.js";
import { defineSharedPropertyType } from "../../api/defineSpt.js";
import type { InterfaceSchemaTransition } from "../../api/interface/InterfaceSchemaMigrations.js";
import {
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
 * The migration lifecycle walked end to end, one release at a time, as the RFC's worked example
 * describes it. The per-rule cases live in `validateOntologySchemaLockfile.test.ts`; these pin the
 * behavior an author actually meets, through the whole generate/validate/write pipeline.
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

  describe("a second migration and a superseding checkpoint", () => {
    it("keeps the finalized property and records the new transition", async () => {
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

    it("finalizes the second migration without disturbing the first", async () => {
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
        /schema migration "requireLastName" changed its instructions from \[addRequiredProperty\("lastName"\)\] to \[addRequiredProperty\("nickname"\)\][\s\S]*instructions are immutable/u,
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
    // The source may refer to an SPT-backed property by its bare name while it is published under
    // a namespaced one. The lockfile records the published name, so renaming the source key is
    // correctly a no-op rather than an apparent breaking change.
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
