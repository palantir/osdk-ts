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

import { defineInterface } from "../../api/defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../../api/defineInterfaceActionTypeConstraint.js";
import { defineInterfaceLinkConstraint } from "../../api/defineInterfaceLinkConstraint.js";
import {
  defineOntology,
  getImportedTypes,
  getOntologyDefinition,
} from "../../api/defineOntology.js";
import { defineSharedPropertyType } from "../../api/defineSpt.js";
import type { InterfaceSchemaGracePeriod } from "../../api/interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";
import { generateOntologySchemaLockfile } from "../generateOntologySchemaLockfile.js";
import type {
  LockedActionTypeConstraint,
  LockedActionTypeConstraintReplacement,
  LockedInstruction,
  LockedInterfaceSchema,
  LockedInterfaceTypeReplacement,
  LockedParameterConstraint,
  LockedProperty,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import {
  LOCKFILE_HEADER_KEY,
  serializeLockfile,
} from "../OntologySchemaLockfile.js";
import {
  parseLockfile,
  upgradeLockfile,
} from "../parseOntologySchemaLockfile.js";

// Each list must name every key of its type, so adding a locked field fails to compile here until
// the fixture below is taught to exercise it.
const EVERY_PROPERTY_FIELD = {
  type: true,
  required: true,
  declaredBy: true,
  primaryKeyConstraint: true,
  nullability: true,
  valueType: true,
  typeClasses: true,
} satisfies Record<keyof LockedProperty, true>;
const EVERY_SCHEMA_FIELD = {
  properties: true,
  extendsInterfaces: true,
  actionTypeConstraints: true,
} satisfies Record<keyof LockedInterfaceSchema, true>;
const EVERY_ACTION_TYPE_CONSTRAINT_FIELD = {
  requireImplementation: true,
  parameters: true,
} satisfies Record<keyof LockedActionTypeConstraint, true>;
const EVERY_PARAMETER_CONSTRAINT_FIELD = {
  requireImplementation: true,
  isRequiredParameterOnConcreteAction: true,
} satisfies Record<keyof LockedParameterConstraint, true>;
const EVERY_INSTRUCTION_TYPE = {
  addRequiredProperty: true,
  addRequiredActionTypeConstraint: true,
  replace: true,
} satisfies Record<LockedInstruction["type"], true>;
const EVERY_REPLACEMENT_FIELD = {
  interfaceType: true,
  propertyMappings: true,
  linkTypeConstraintMappings: true,
  actionTypeConstraintMappings: true,
} satisfies Record<keyof LockedInterfaceTypeReplacement, true>;
const EVERY_ACTION_TYPE_CONSTRAINT_REPLACEMENT_FIELD = {
  actionTypeConstraint: true,
  parameterMappings: true,
} satisfies Record<keyof LockedActionTypeConstraintReplacement, true>;
const EVERY_GRACE_PERIOD_TYPE = {
  afterInstall: true,
  deadline: true,
} satisfies Record<InterfaceSchemaGracePeriod["type"], true>;

function defineActionTypeConstraint(
  interfaceType: InterfaceType,
  apiName: string,
  parameters: string[],
  { isRequiredParameterOnConcreteAction = false } = {},
): void {
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName,
    displayName: apiName,
    description: apiName,
    requireImplementation: false,
    parameters: parameters.map((parameter) => ({
      apiName: parameter,
      displayName: parameter,
      type: { type: "string", string: {} },
      requireImplementation: false,
      isRequiredParameterOnConcreteAction,
    })),
  });
}

/**
 * Locks an ontology that, across its interfaces, records every optional field the lockfile has.
 * A replace must be its interface's only transition, hence `Contact` alongside `Person`.
 */
function lockEveryField(): OntologySchemaLockfile {
  const named = defineInterface({
    apiName: "Named",
    properties: { name: { type: "string" } },
    schemaMigrations: { transitions: [] },
  });
  const email = defineSharedPropertyType({
    apiName: "email",
    type: "string",
    typeClasses: [{ kind: "render_hint", name: "SORTABLE" }],
  });
  const person = defineInterface({
    apiName: "Person",
    extends: [named],
    properties: {
      email: { sharedPropertyType: email, required: false },
      id: { type: "string", primaryKeyConstraint: "MUST_BE_PK" },
      lastName: { type: "string", required: false },
      ssn: {
        type: "string",
        nullability: { noNulls: true, noEmptyCollections: false },
        valueType: {
          packageNamespace: "com.example",
          apiName: "Ssn",
          version: "1.2.0",
          displayMetadata: {},
        },
      },
    },
    schemaMigrations: {
      transitions: [
        {
          id: "requireLastName",
          title: "Require last name",
          gracePeriod: { type: "afterInstall", days: 30 },
          instructions: [{ type: "addRequiredProperty", property: "lastName" }],
        },
        {
          id: "requireSendEmail",
          title: "Require send email",
          gracePeriod: { type: "deadline", deadline: "2027-01-31T00:00:00Z" },
          instructions: [
            {
              type: "addRequiredActionTypeConstraint",
              actionTypeConstraint: "sendEmail",
            },
          ],
        },
      ],
    },
  });
  defineActionTypeConstraint(person, "sendEmail", ["subject"], {
    isRequiredParameterOnConcreteAction: true,
  });

  const contactV2 = defineInterface({
    apiName: "ContactV2",
    properties: { fullName: { type: "string" } },
  });
  defineInterfaceLinkConstraint({
    apiName: "supervisor",
    from: contactV2,
    toOne: contactV2,
  });
  defineActionTypeConstraint(contactV2, "notify", ["title"]);
  const contact = defineInterface({
    apiName: "Contact",
    properties: { name: { type: "string" } },
    schemaMigrations: {
      transitions: [
        {
          id: "replaceWithContactV2",
          title: "Replace with ContactV2",
          gracePeriod: { type: "afterInstall", days: 30 },
          instructions: [
            {
              type: "replace",
              replacement: {
                interfaceType: contactV2,
                propertyMappings: { name: "fullName" },
                linkTypeConstraintMappings: { manager: "supervisor" },
                actionTypeConstraintMappings: {
                  sendMessage: {
                    actionTypeConstraint: "notify",
                    parameterMappings: { subject: "title" },
                  },
                },
              },
            },
          ],
        },
      ],
    },
  });
  defineInterfaceLinkConstraint({
    apiName: "manager",
    from: contact,
    toOne: contact,
  });
  defineActionTypeConstraint(contact, "sendMessage", ["subject"]);

  return generateOntologySchemaLockfile({
    ontology: getOntologyDefinition(),
    importedTypes: getImportedTypes(),
  });
}

/** The sorted union of every key on `objects`. */
function keysSeen(objects: readonly object[]): string[] {
  return [...new Set(objects.flatMap((object) => Object.keys(object)))].sort();
}

function keysOf(every: object): string[] {
  return Object.keys(every).sort();
}

beforeEach(async () => {
  await defineOntology("com.palantir.", () => {}, undefined);
});

describe("parseLockfile", () => {
  function parse(lockfile: unknown) {
    return parseLockfile(JSON.stringify(lockfile), "lock.json");
  }

  it("reads back exactly what the generator wrote", () => {
    const generated = lockEveryField();
    expect(
      parseLockfile(serializeLockfile(generated), "lock.json"),
    ).toStrictEqual(generated);
  });

  it("exercises every locked field in the round-trip fixture", () => {
    const locked = Object.values(lockEveryField().interfaces);
    const schemas = locked.map(({ schema }) => schema);
    const transitions = locked.flatMap(({ transitions }) => transitions);
    const instructions = transitions.flatMap(
      ({ instructions }) => instructions,
    );
    const replacements = instructions.flatMap((instruction) =>
      instruction.type === "replace" ? [instruction.replacement] : [],
    );

    expect(
      keysSeen(schemas.flatMap(({ properties }) => Object.values(properties))),
    ).toEqual(keysOf(EVERY_PROPERTY_FIELD));
    expect(keysSeen(schemas)).toEqual(keysOf(EVERY_SCHEMA_FIELD));
    const actionTypeConstraints = schemas.flatMap(({ actionTypeConstraints }) =>
      Object.values(actionTypeConstraints ?? {}),
    );
    expect(keysSeen(actionTypeConstraints)).toEqual(
      keysOf(EVERY_ACTION_TYPE_CONSTRAINT_FIELD),
    );
    expect(
      keysSeen(
        actionTypeConstraints.flatMap(({ parameters }) =>
          Object.values(parameters ?? {}),
        ),
      ),
    ).toEqual(keysOf(EVERY_PARAMETER_CONSTRAINT_FIELD));
    expect([...new Set(instructions.map(({ type }) => type))].sort()).toEqual(
      keysOf(EVERY_INSTRUCTION_TYPE),
    );
    expect(keysSeen(replacements)).toEqual(keysOf(EVERY_REPLACEMENT_FIELD));
    expect(
      keysSeen(
        replacements.flatMap(({ actionTypeConstraintMappings }) =>
          Object.values(actionTypeConstraintMappings ?? {}),
        ),
      ),
    ).toEqual(keysOf(EVERY_ACTION_TYPE_CONSTRAINT_REPLACEMENT_FIELD));
    expect(
      [
        ...new Set(transitions.map(({ gracePeriod }) => gracePeriod.type)),
      ].sort(),
    ).toEqual(keysOf(EVERY_GRACE_PERIOD_TYPE));
  });

  it("accepts a lockfile that locks no interfaces", () => {
    // What the generator writes once the last interface opts back out of schema migrations.
    const none = { version: 1, interfaces: {} };
    expect(parse(none)).toStrictEqual(none);
  });

  it("drops the header comment `serializeLockfile` writes", () => {
    const none: OntologySchemaLockfile = { version: 1, interfaces: {} };
    const onDisk = serializeLockfile(none);
    expect(onDisk).toContain(`"${LOCKFILE_HEADER_KEY}"`);
    expect(parseLockfile(onDisk, "lock.json")).toStrictEqual(none);
  });

  it("drops a header an author has rewritten, rather than preserving it", () => {
    expect(
      parse({
        [LOCKFILE_HEADER_KEY]: "I modified it",
        version: 1,
        interfaces: {},
      }),
    ).toStrictEqual({ version: 1, interfaces: {} });
  });

  it("rejects invalid JSON", () => {
    expect(() => parseLockfile("{ not json", "lock.json")).toThrowError(
      /lock\.json is not valid JSON/u,
    );
  });

  it.each([
    ["a non-integer version", { version: 1.5, interfaces: {} }],
    ["no version at all", { interfaces: {} }],
    ["a non-object", "just a string"],
    ["null", null],
  ])("rejects %s", (_name, lockfile) => {
    expect(() => parse(lockfile)).toThrowError(
      /lock\.json is not an ontology schema lockfile: expected an integer "version" key/u,
    );
  });

  it("rejects a lockfile from a future version of maker", () => {
    expect(() => parse({ version: 99, interfaces: {} })).toThrowError(
      /lock\.json has version 99, but this version of maker only understands version 1/u,
    );
  });

  const property = { type: "string", required: false };
  const transition = {
    id: "requireLastName",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: [{ type: "addRequiredProperty", property: "lastName" }],
  };

  /** A lockfile locking only `Person`, whose schema and sole transition take `overrides`. */
  function withPerson({
    schema = {},
    lastName = {},
    transition: transitionOverrides = {},
  }: {
    schema?: Record<string, unknown>;
    lastName?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  }) {
    return {
      version: 1,
      interfaces: {
        Person: {
          schema: {
            properties: { lastName: { ...property, ...lastName } },
            ...schema,
          },
          transitions: [{ ...transition, ...transitionOverrides }],
        },
      },
    };
  }

  function withReplacement(mappings: Record<string, unknown>) {
    return withPerson({
      transition: {
        instructions: [
          {
            type: "replace",
            replacement: {
              interfaceType: "com.palantir.PersonV2",
              ...mappings,
            },
          },
        ],
      },
    });
  }

  function withDeadline(deadline: string) {
    return withPerson({
      transition: { gracePeriod: { type: "deadline", deadline } },
    });
  }

  it.each([
    ["2026-01-31T00:00:00Z"],
    ["2026-01-31T00:00:00.000Z"],
    // `toISOString` renders years past 9999 with a sign and six digits
    ["+010000-01-01T00:00:00.000Z"],
  ])("accepts a deadline of %s", (deadline) => {
    const lockfile = withDeadline(deadline);
    expect(parse(lockfile)).toStrictEqual(lockfile);
  });

  // Only the checks we wrote ourselves; zod's built-in type and presence checks are its own to test.
  it.each([
    [
      "a deadline with non-canonical fractional seconds",
      withDeadline("2026-01-31T00:00:00.1Z"),
      /gracePeriod\.deadline: Expected an ISO-8601 UTC datetime/u,
    ],
    [
      "a date-only deadline",
      withDeadline("2026-01-31"),
      /gracePeriod\.deadline: Expected an ISO-8601 UTC datetime/u,
    ],
    [
      "a deadline offset from UTC",
      withDeadline("2026-01-31T00:00:00+01:00"),
      /gracePeriod\.deadline: Expected an ISO-8601 UTC datetime/u,
    ],
    [
      "a deadline that is not a datetime",
      withDeadline("next Tuesday"),
      /gracePeriod\.deadline: Expected an ISO-8601 UTC datetime/u,
    ],
    [
      "a grace period of an unrecognized kind",
      withPerson({ transition: { gracePeriod: { type: "someFutureKind" } } }),
      /transitions\[0\]\.gracePeriod\.type: .*Restore the grace period the last published release declared/u,
    ],
    [
      "an instruction of an unrecognized type",
      withPerson({
        transition: {
          instructions: [{ type: "renameProperty", property: "lastName" }],
        },
      }),
      /instructions\[0\]\.type: .*Restore the instruction the last published release declared/u,
    ],
    [
      "a property with no type",
      withPerson({ lastName: { type: undefined } }),
      /properties\.lastName\.type: Expected a recorded property type/u,
    ],
    [
      "a property with a null type",
      withPerson({ lastName: { type: null } }),
      /properties\.lastName\.type: Expected a recorded property type/u,
    ],
    [
      "a nullability that forbids nothing",
      withPerson({
        lastName: {
          nullability: { noNulls: false, noEmptyCollections: false },
        },
      }),
      /properties\.lastName\.nullability: Expected a nullability that forbids something/u,
    ],
    [
      "an empty actionTypeConstraints",
      withPerson({ schema: { actionTypeConstraints: {} } }),
      /schema\.actionTypeConstraints: Expected at least one action type constraint/u,
    ],
    [
      "an empty parameters",
      withPerson({
        schema: {
          actionTypeConstraints: {
            "com.palantir.sendEmail": {
              requireImplementation: false,
              parameters: {},
            },
          },
        },
      }),
      /sendEmail\.parameters: Expected at least one parameter constraint/u,
    ],
    [
      "an empty propertyMappings",
      withReplacement({ propertyMappings: {} }),
      /propertyMappings: Expected at least one property mapping, or no value at all/u,
    ],
    [
      "an empty linkTypeConstraintMappings",
      withReplacement({ linkTypeConstraintMappings: {} }),
      /linkTypeConstraintMappings: Expected at least one link type constraint mapping, or no value at all/u,
    ],
    [
      "an empty actionTypeConstraintMappings",
      withReplacement({ actionTypeConstraintMappings: {} }),
      /actionTypeConstraintMappings: Expected at least one action type constraint mapping, or no value at all/u,
    ],
    [
      "an empty parameterMappings",
      withReplacement({
        actionTypeConstraintMappings: {
          "com.palantir.sendEmail": {
            actionTypeConstraint: "com.palantir.notify",
            parameterMappings: {},
          },
        },
      }),
      /parameterMappings: Expected at least one parameter mapping, or no value at all/u,
    ],
  ])("rejects %s", (_name, lockfile, message) => {
    expect(() => parse(lockfile)).toThrowError(message);
  });

  it("renders a located, actionable message", () => {
    expect(() =>
      parse(
        withPerson({ transition: { gracePeriod: { type: "someFutureKind" } } }),
      ),
    ).toThrowError(
      "lock.json is not a valid ontology schema lockfile:\n" +
        "  interfaces.Person.transitions[0].gracePeriod.type: Invalid discriminator value. " +
        "Expected 'afterInstall' | 'deadline'. Restore the grace period the last published " +
        "release declared.",
    );
  });

  it("reports every problem at once, rather than one build at a time", () => {
    const badMerge = withPerson({
      lastName: { required: undefined },
      transition: { id: "", instructions: [] },
    });

    const message = (() => {
      try {
        parse(badMerge);
        return "";
      } catch (e) {
        return (e as Error).message;
      }
    })();

    expect(message).toContain("properties.lastName.required");
    expect(message).toContain("transitions[0].id");
    expect(message).toContain("transitions[0].instructions");
  });

  /**
   * Reconcile decides a lockfile is out of date by comparing it against a freshly generated one, so
   * dropping an unrecognized key here would make a hand-edit compare equal and pass silently.
   */
  it("preserves keys it does not recognize, at every level", () => {
    const handEdited = {
      version: 1,
      handAdded: true,
      interfaces: {
        Person: {
          handAdded: true,
          schema: {
            handAdded: true,
            properties: {
              lastName: { ...property, handAdded: true },
            },
          },
          transitions: [
            {
              ...transition,
              handAdded: true,
              gracePeriod: { type: "afterInstall", days: 30, handAdded: true },
              instructions: [
                {
                  type: "addRequiredProperty",
                  property: "lastName",
                  handAdded: true,
                },
              ],
            },
          ],
        },
      },
    };

    expect(parse(handEdited)).toStrictEqual(handEdited);
  });
});

describe("upgradeLockfile", () => {
  const v1 = { version: 1, interfaces: {} };

  it("leaves a lockfile already at the target version alone", () => {
    expect(upgradeLockfile(v1, 1, {}, "lock.json")).toBe(v1);
  });

  it("applies each upgrader in ascending order", () => {
    const applied: number[] = [];
    const upgraders = {
      1: (lockfile: { version: number }) => {
        applied.push(1);
        return { ...lockfile, version: 2, addedInV2: true };
      },
      2: (lockfile: { version: number }) => {
        applied.push(2);
        return { ...lockfile, version: 3, addedInV3: true };
      },
    };

    expect(upgradeLockfile(v1, 3, upgraders, "lock.json")).toStrictEqual({
      version: 3,
      interfaces: {},
      addedInV2: true,
      addedInV3: true,
    });
    expect(applied).toStrictEqual([1, 2]);
  });

  it("stops at the target version rather than running every upgrader it has", () => {
    const upgraders = {
      1: (lockfile: { version: number }) => ({ ...lockfile, version: 2 }),
      2: () => {
        throw new Error("should not run");
      },
    };

    expect(upgradeLockfile(v1, 2, upgraders, "lock.json")).toStrictEqual({
      version: 2,
      interfaces: {},
    });
  });

  it("explains itself when no upgrader covers the gap", () => {
    expect(() => upgradeLockfile(v1, 2, {}, "lock.json")).toThrowError(
      /lock\.json has version 1, which this version of maker cannot upgrade to version 2/u,
    );
  });
});
