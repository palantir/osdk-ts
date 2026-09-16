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

import { beforeEach, describe, expect, it } from "vitest";

import type { TypeClass } from "../../api/common/TypeClass.js";
import { defineInterface } from "../../api/defineInterface.js";
import {
  defineOntology,
  getOntologyDefinition,
} from "../../api/defineOntology.js";
import { defineSharedPropertyType } from "../../api/defineSpt.js";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";
import { defaultTypeClasses } from "../../api/propertyConversionUtils.js";
import {
  censusOfSource,
  generateOntologySchemaLockfile,
} from "../generateOntologySchemaLockfile.js";
import type {
  LockedInterfaceSchema,
  LockedProperty,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";

async function lockAddressStruct(
  displayName: string,
): Promise<OntologySchemaLockfile> {
  await defineOntology("com.palantir.", () => {}, undefined);
  defineInterface({
    apiName: "Person",
    properties: {
      address: {
        type: {
          type: "struct",
          structDefinition: {
            zip: { fieldType: "string", displayMetadata: { displayName } },
          },
        },
      },
    },
    schemaMigrations: { transitions: [] },
  });
  return generateOntologySchemaLockfile(getOntologyDefinition());
}

async function lockNameProperty(
  displayName: string,
): Promise<OntologySchemaLockfile> {
  await defineOntology("com.palantir.", () => {}, undefined);
  defineInterface({
    apiName: "Person",
    properties: {
      name: {
        type: "string",
        displayName,
        description: `The ${displayName} of the person`,
      },
    },
    schemaMigrations: { transitions: [] },
  });
  return generateOntologySchemaLockfile(getOntologyDefinition());
}

/** How the lockfile records `apiName` on the `Person` the test just defined. */
function lockedProperty(apiName: string): LockedProperty {
  return lockedSchema().properties[apiName];
}

function lockedSchema(): LockedInterfaceSchema {
  return generateOntologySchemaLockfile(getOntologyDefinition()).interfaces[
    "com.palantir.Person"
  ].schema;
}

beforeEach(async () => {
  await defineOntology("com.palantir.", () => {}, undefined);
});

describe("generateOntologySchemaLockfile", () => {
  it("records a struct type without its field display metadata", async () => {
    expect(await lockAddressStruct("ZIP")).toEqual(
      await lockAddressStruct("Postal code"),
    );
  });

  it("records a property without its own display metadata", async () => {
    expect(await lockNameProperty("Name")).toEqual(
      await lockNameProperty("Full name"),
    );
  });

  // Every optional attribute is left out when the source leaves it at its default, so that
  // spelling the default out later is not recorded as a change. The blocks below each pin the
  // one case where their attribute departs from this.
  it("records nothing but the type of a bare property, and that it is required", () => {
    defineInterface({
      apiName: "Person",
      properties: { name: { type: "string" } },
      schemaMigrations: { transitions: [] },
    });

    expect(Object.keys(lockedProperty("name"))).toEqual(["type", "required"]);
  });

  describe("arrayedness", () => {
    it("records an arrayed interface-defined property as an array type", () => {
      defineInterface({
        apiName: "Person",
        properties: { nicknames: { type: "string", array: true } },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("nicknames")).toEqual({
        type: { type: "array", subtype: "string" },
        required: true,
      });
    });

    it("records an arrayed shared property type as an array type", () => {
      const nicknames = defineSharedPropertyType({
        apiName: "nicknames",
        type: "string",
        array: true,
      });
      defineInterface({
        apiName: "Person",
        properties: {
          nicknames: { sharedPropertyType: nicknames, required: false },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("com.palantir.nicknames")).toEqual({
        type: { type: "array", subtype: "string" },
        required: false,
        typeClasses: defaultTypeClasses,
        declaredBy: "sharedPropertyType",
      });
    });

    it("records a property that is not arrayed as its bare type", () => {
      defineInterface({
        apiName: "Person",
        properties: { nickname: { type: "string", array: false } },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("nickname")).toEqual({
        type: "string",
        required: true,
      });
    });
  });

  describe("where a property is declared", () => {
    it("records that a shared property type backs the property", () => {
      const email = defineSharedPropertyType({
        apiName: "email",
        type: "string",
        typeClasses: [],
      });
      defineInterface({
        apiName: "Person",
        properties: { email: { sharedPropertyType: email, required: false } },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("com.palantir.email")).toEqual({
        type: "string",
        required: false,
        declaredBy: "sharedPropertyType",
      });
    });
  });

  describe("primary key constraints", () => {
    it.each(["MUST_BE_PK", "CANNOT_BE_PK"] as const)(
      "records a %s constraint",
      (primaryKeyConstraint) => {
        defineInterface({
          apiName: "Person",
          properties: { id: { type: "string", primaryKeyConstraint } },
          schemaMigrations: { transitions: [] },
        });

        expect(lockedProperty("id")).toEqual({
          type: "string",
          required: true,
          primaryKeyConstraint,
        });
      },
    );

    it("locks an omitted constraint and an explicit NO_RESTRICTION the same", async () => {
      defineInterface({
        apiName: "Person",
        properties: { id: { type: "string" } },
        schemaMigrations: { transitions: [] },
      });
      const omitted = lockedProperty("id");

      await defineOntology("com.palantir.", () => {}, undefined);
      defineInterface({
        apiName: "Person",
        properties: {
          id: { type: "string", primaryKeyConstraint: "NO_RESTRICTION" },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(omitted).toEqual(lockedProperty("id"));
      expect(Object.keys(omitted)).toEqual(["type", "required"]);
    });
  });

  describe("value types", () => {
    it("records what identifies the value type, without its display metadata", () => {
      defineInterface({
        apiName: "Person",
        properties: {
          ssn: {
            type: "string",
            valueType: {
              packageNamespace: "com.example",
              apiName: "Ssn",
              version: "1.2.0",
              displayMetadata: { displayName: "Social security number" },
            },
          },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("ssn").valueType).toEqual({
        packageNamespace: "com.example",
        apiName: "Ssn",
      });
    });

    it("locks the same whatever the version says", async () => {
      // A bump's direction is only readable from the constraints, which maker does not have
      // for imported value types, so we make no determination in these cases.
      function lockWithVersion(version: string): LockedProperty {
        defineInterface({
          apiName: "Person",
          properties: {
            ssn: {
              type: "string",
              valueType: {
                packageNamespace: "com.example",
                apiName: "Ssn",
                version,
                displayMetadata: {},
              },
            },
          },
          schemaMigrations: { transitions: [] },
        });
        return lockedProperty("ssn");
      }

      const first = lockWithVersion("1.2.0");
      await defineOntology("com.palantir.", () => {}, undefined);
      expect(first).toEqual(lockWithVersion("2.0.0"));
    });

    it("locks the same whatever the display metadata says", async () => {
      function lockWithDisplayName(displayName: string): LockedProperty {
        defineInterface({
          apiName: "Person",
          properties: {
            ssn: {
              type: "string",
              valueType: {
                packageNamespace: "com.example",
                apiName: "Ssn",
                version: "1.2.0",
                displayMetadata: { displayName },
              },
            },
          },
          schemaMigrations: { transitions: [] },
        });
        return lockedProperty("ssn");
      }

      const first = lockWithDisplayName("Social security number");
      await defineOntology("com.palantir.", () => {}, undefined);
      expect(first).toEqual(lockWithDisplayName("SSN"));
    });
  });

  describe("nullability", () => {
    it("records what a property forbids", () => {
      defineInterface({
        apiName: "Person",
        properties: {
          name: {
            type: "string",
            nullability: { noNulls: true, noEmptyCollections: false },
          },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("name")).toEqual({
        type: "string",
        required: true,
        nullability: { noNulls: true, noEmptyCollections: false },
      });
    });

    it("omits a nullability that forbids nothing", () => {
      defineInterface({
        apiName: "Person",
        properties: {
          name: {
            type: "string",
            nullability: { noNulls: false, noEmptyCollections: false },
          },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(Object.keys(lockedProperty("name"))).toEqual(["type", "required"]);
    });

    it("records the implicit non-nullability of a marking property", () => {
      defineInterface({
        apiName: "Person",
        properties: {
          clearance: {
            type: {
              type: "marking",
              markingType: "MANDATORY",
              markingInputGroupName: "clearance",
            },
          },
        },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("clearance").nullability).toEqual({
        noNulls: true,
        noEmptyCollections: true,
      });
    });
  });

  describe("type classes", () => {
    const SORTABLE: TypeClass = { kind: "render_hint", name: "SORTABLE" };
    const SELECTABLE: TypeClass = { kind: "render_hint", name: "SELECTABLE" };
    const GEO: TypeClass = { kind: "geo", name: "geojson" };

    it("records the type classes of an interface-defined property", () => {
      defineInterface({
        apiName: "Person",
        properties: { name: { type: "string", typeClasses: [SORTABLE] } },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("name")).toEqual({
        type: "string",
        required: true,
        typeClasses: [SORTABLE],
      });
    });

    it("records the type classes of a shared property type", () => {
      const name = defineSharedPropertyType({
        apiName: "name",
        type: "string",
        typeClasses: [SORTABLE],
      });
      defineInterface({
        apiName: "Person",
        properties: { name: { sharedPropertyType: name, required: false } },
        schemaMigrations: { transitions: [] },
      });

      expect(lockedProperty("com.palantir.name")).toEqual({
        type: "string",
        required: false,
        typeClasses: [SORTABLE],
        declaredBy: "sharedPropertyType",
      });
    });

    it("omits the key for a property that declares an empty list", () => {
      defineInterface({
        apiName: "Person",
        properties: { name: { type: "string", typeClasses: [] } },
        schemaMigrations: { transitions: [] },
      });

      expect(Object.keys(lockedProperty("name"))).toEqual(["type", "required"]);
    });

    it("sorts type classes, so reordering them in source is not a change", async () => {
      function lockOrder(typeClasses: TypeClass[]): LockedProperty {
        defineInterface({
          apiName: "Person",
          properties: { name: { type: "string", typeClasses } },
          schemaMigrations: { transitions: [] },
        });
        return lockedProperty("name");
      }

      const ascending = lockOrder([GEO, SELECTABLE, SORTABLE]);
      await defineOntology("com.palantir.", () => {}, undefined);
      const shuffled = lockOrder([SORTABLE, SELECTABLE, GEO]);

      expect(ascending).toEqual(shuffled);
      expect(ascending.typeClasses).toEqual([GEO, SELECTABLE, SORTABLE]);
    });
  });

  describe("extended interfaces", () => {
    function optedInInterface(apiName: string): InterfaceType {
      return defineInterface({
        apiName,
        schemaMigrations: { transitions: [] },
      });
    }

    it("records the api names of the interfaces extended", () => {
      const named = optedInInterface("Named");
      const located = optedInInterface("Located");
      defineInterface({
        apiName: "Person",
        extends: [named, located],
        schemaMigrations: { transitions: [] },
      });

      expect(lockedSchema().extendsInterfaces).toEqual([
        "com.palantir.Located",
        "com.palantir.Named",
      ]);
    });

    it("records only the direct parents, not the whole ancestry", () => {
      const grandparent = optedInInterface("Grandparent");
      const parent = defineInterface({
        apiName: "Parent",
        extends: grandparent,
        schemaMigrations: { transitions: [] },
      });
      defineInterface({
        apiName: "Person",
        extends: parent,
        schemaMigrations: { transitions: [] },
      });

      expect(lockedSchema().extendsInterfaces).toEqual(["com.palantir.Parent"]);
    });

    it("does not record the properties an extended interface contributes", () => {
      const named = defineInterface({
        apiName: "Named",
        properties: { name: { type: "string" } },
        schemaMigrations: { transitions: [] },
      });
      defineInterface({
        apiName: "Person",
        extends: named,
        properties: { age: { type: "integer" } },
        schemaMigrations: { transitions: [] },
      });

      expect(Object.keys(lockedSchema().properties)).toEqual(["age"]);
    });

    it("sorts the parents, so reordering them in source is not a change", async () => {
      function lockOrder(order: "ascending" | "descending"): string[] {
        const named = optedInInterface("Named");
        const located = optedInInterface("Located");
        defineInterface({
          apiName: "Person",
          extends: order === "ascending" ? [located, named] : [named, located],
          schemaMigrations: { transitions: [] },
        });
        return lockedSchema().extendsInterfaces!;
      }

      const ascending = lockOrder("ascending");
      await defineOntology("com.palantir.", () => {}, undefined);

      expect(ascending).toEqual(lockOrder("descending"));
      expect(ascending).toEqual(["com.palantir.Located", "com.palantir.Named"]);
    });

    it("records a parent named twice once", () => {
      const named = optedInInterface("Named");
      defineInterface({
        apiName: "Person",
        extends: [named, named],
        schemaMigrations: { transitions: [] },
      });

      expect(lockedSchema().extendsInterfaces).toEqual(["com.palantir.Named"]);
    });

    it("omits the key for an interface that extends nothing", () => {
      defineInterface({
        apiName: "Person",
        properties: { name: { type: "string" } },
        schemaMigrations: { transitions: [] },
      });

      expect(Object.keys(lockedSchema())).toEqual(["properties"]);
    });
  });
});

describe("censusOfSource", () => {
  it("counts an interface that never opted in", () => {
    defineInterface({ apiName: "Unenrolled" });
    defineInterface({
      apiName: "Enrolled",
      schemaMigrations: { transitions: [] },
    });

    const ontology = getOntologyDefinition();
    expect([...censusOfSource(ontology).interfaces.keys()].sort()).toEqual([
      "com.palantir.Enrolled",
      "com.palantir.Unenrolled",
    ]);
    expect(
      Object.keys(generateOntologySchemaLockfile(ontology).interfaces),
    ).toEqual(["com.palantir.Enrolled"]);
  });

  it("includes the schema of an interface that isn't opted in", () => {
    defineInterface({
      apiName: "Unenrolled",
      properties: { lastName: { type: "string", required: false } },
    });

    expect(
      censusOfSource(getOntologyDefinition()).interfaces.get(
        "com.palantir.Unenrolled",
      ),
    ).toEqual({
      properties: { lastName: { type: "string", required: false } },
    });
  });
});
