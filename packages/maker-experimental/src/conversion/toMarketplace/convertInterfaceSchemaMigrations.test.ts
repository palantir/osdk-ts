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

import type { InterfaceTypeBlockDataV2 } from "@osdk/client.unstable";
import type { InterfaceSchemaTransition } from "@osdk/maker";
import {
  defineInterface,
  defineOntology,
  defineSharedPropertyType,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";

const DEADLINE = "2026-01-31T12:34:56Z";

async function convertInterfaces(
  body: () => void,
): Promise<InterfaceTypeBlockDataV2> {
  const result = await defineOntologyV2("com.palantir.", body);
  const blocks = Object.values(result.ontologyIr.ontology.interfaceTypes);
  invariant(
    blocks.length === 1,
    `expected one interface, got ${blocks.length}`,
  );
  return blocks[0];
}

function transition(
  overrides: Partial<InterfaceSchemaTransition> = {},
): InterfaceSchemaTransition {
  return {
    id: "t1",
    title: "Some transition",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: [{ type: "addRequiredProperty", property: "optional" }],
    ...overrides,
  };
}

describe("interface type schema migrations", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("emits an empty migration list when not opted in", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({ apiName: "Foo" });
    });

    expect(block.schemaMigrations).toEqual([]);
    expect(block.interfaceType).not.toHaveProperty("schemaMigrationsEnabled");
  });

  it("sets schemaMigrationsEnabled when opted in with no transitions", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });
    });

    expect(block.interfaceType.schemaMigrationsEnabled).toBe(true);
    expect(block.schemaMigrations).toEqual([]);
  });

  it("translates an afterInstall transition to daysAfterActivation", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              id: "add-owner",
              title: "Require owner",
              description: "some description",
              gracePeriod: { type: "afterInstall", days: 30 },
            }),
          ],
        },
      });
    });

    expect(block.interfaceType.schemaMigrationsEnabled).toBe(true);
    expect(block.schemaMigrations).toEqual([
      {
        id: "add-owner",
        title: "Require owner",
        description: "some description",
        gracePeriod: { type: "daysAfterActivation", daysAfterActivation: 30 },
        migrations: [
          {
            type: "addRequiredProperty",
            addRequiredProperty: { propertyTypeRid: expect.any(String) },
          },
        ],
      },
    ]);
  });

  it("translates a deadline transition", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              gracePeriod: { type: "deadline", deadline: DEADLINE },
            }),
          ],
        },
      });
    });

    expect(block.schemaMigrations[0].gracePeriod).toEqual({
      type: "deadline",
      deadline: DEADLINE,
    });
  });

  it("strips zero milliseconds from a deadline", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              gracePeriod: {
                type: "deadline",
                deadline: "2026-01-31T12:34:56.000Z",
              },
            }),
          ],
        },
      });
    });

    expect(block.schemaMigrations[0].gracePeriod).toEqual({
      type: "deadline",
      deadline: "2026-01-31T12:34:56Z",
    });
  });

  it("targets an interface-defined property by its published rid", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: { transitions: [transition()] },
      });
    });

    const [migration] = block.schemaMigrations[0].migrations;
    invariant(migration.type === "addRequiredProperty");
    const { propertyTypeRid } = migration.addRequiredProperty;

    expect(block.interfaceType.propertiesV3[propertyTypeRid]).toMatchObject({
      type: "interfaceDefinedPropertyType",
      interfaceDefinedPropertyType: { apiName: "optional" },
    });
  });

  it("targets an SPT-backed property by its published rid", async () => {
    const block = await convertInterfaces(() => {
      const spt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });
      defineInterface({
        apiName: "Foo",
        properties: { ownerSpt: { sharedPropertyType: spt, required: false } },
        schemaMigrations: {
          transitions: [
            transition({
              instructions: [
                { type: "addRequiredProperty", property: "ownerSpt" },
              ],
            }),
          ],
        },
      });
    });

    const [migration] = block.schemaMigrations[0].migrations;
    invariant(migration.type === "addRequiredProperty");
    const { propertyTypeRid } = migration.addRequiredProperty;

    expect(block.interfaceType.propertiesV3[propertyTypeRid]).toMatchObject({
      type: "sharedPropertyBasedPropertyType",
      sharedPropertyBasedPropertyType: {
        sharedPropertyType: { apiName: "com.palantir.ownerSpt" },
      },
    });
  });
});
