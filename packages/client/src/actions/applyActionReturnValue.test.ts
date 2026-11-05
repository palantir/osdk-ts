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

import type {
  ActionDefinition,
  ActionEditResponse,
  ActionReturnTypeForOptions,
  ActionReturnValueResponse,
  ActionValidationResponse,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from "@osdk/api";
import type { ActionTypeV2, QueryDataType } from "@osdk/foundry.ontologies";
import type { SetupServer } from "@osdk/shared.test";
import { FauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import type { SyncApplyActionResponseWithReturnValue } from "./SyncApplyActionResponseWithReturnValue.js";

interface ReturnsValueSignatures<R> {
  applyAction<OP extends ApplyActionOptions>(
    args: Record<string, never>,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP, R>>;

  batchApplyAction<OP extends ApplyBatchActionOptions>(
    args: ReadonlyArray<Record<string, never>>,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

function actionDefinition<R>(
  apiName: string,
): ActionDefinition<ReturnsValueSignatures<R>> {
  return { type: "action", apiName };
}

const returnsName = actionDefinition<string>("returnsName");
const returnsMap = actionDefinition<Record<string, number>>("returnsMap");
const returnsStructWithMap = actionDefinition<{
  name: string;
  scores: Record<string, number>;
}>("returnsStructWithMap");
const returnsOptional = actionDefinition<number | undefined>("returnsOptional");
const returnsOmitted = actionDefinition<string>("returnsOmitted");
const returnsInvalid = actionDefinition<string>("returnsInvalid");

describe("action return values", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;

  function registerAction(
    apiName: string,
    returnType: QueryDataType | undefined,
    returnValue: SyncApplyActionResponseWithReturnValue["returnValue"],
  ) {
    const def: ActionTypeV2 & { returnType?: QueryDataType } = {
      apiName,
      parameters: {},
      rid: `ri.actions.main.action-type.${apiName}`,
      status: "ACTIVE",
      operations: [],
      ...(returnType != null ? { returnType } : {}),
    };
    fauxFoundry.getDefaultOntology().registerActionType(
      def,
      (_batch, payload): SyncApplyActionResponseWithReturnValue => ({
        validation: { parameters: {}, result: "VALID", submissionCriteria: [] },
        edits:
          payload.options?.returnEdits === "NONE"
            ? undefined
            : {
                type: "edits",
                edits: [
                  { type: "addObject", objectType: "Employee", primaryKey: 1 },
                ],
                addedObjectCount: 1,
                modifiedObjectsCount: 0,
                deletedObjectsCount: 0,
                addedLinksCount: 0,
                deletedLinksCount: 0,
              },
        ...(returnValue !== undefined ? { returnValue } : {}),
      }),
    );
  }

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    registerAction("returnsName", { type: "string" }, "Anna Smith-Doe");
    registerAction(
      "returnsMap",
      {
        type: "entrySet",
        keyType: { type: "string" },
        valueType: { type: "integer" },
      },
      [
        { key: "a", value: 1 },
        { key: "b", value: 2 },
      ],
    );
    registerAction(
      "returnsStructWithMap",
      {
        type: "struct",
        fields: [
          { name: "name", fieldType: { type: "string" }, required: true },
          {
            name: "scores",
            fieldType: {
              type: "entrySet",
              keyType: { type: "string" },
              valueType: { type: "integer" },
            },
            required: true,
          },
        ],
      },
      {
        name: "Anna Smith-Doe",
        scores: [
          { key: "a", value: 1 },
          { key: "b", value: 2 },
        ],
      },
    );
    registerAction(
      "returnsOptional",
      { type: "union", unionTypes: [{ type: "integer" }, { type: "null" }] },
      null,
    );
    registerAction("returnsOmitted", { type: "string" }, undefined);
    registerAction("returnsInvalid", { type: "string" }, null);

    return () => {
      apiServer.close();
    };
  });

  it("returns the return value without any options", async () => {
    const result = await client(returnsName).applyAction({});

    expectTypeOf(result).toEqualTypeOf<ActionReturnValueResponse<string>>();
    expect(result).toEqual({ returnValue: "Anna Smith-Doe" });
  });

  it("returns the return value alongside the edits", async () => {
    const result = await client(returnsName).applyAction(
      {},
      {
        $returnEdits: true,
      },
    );

    expectTypeOf(result).toEqualTypeOf<
      ActionEditResponse & ActionReturnValueResponse<string>
    >();
    expect(result).toMatchObject({
      type: "edits",
      addedObjects: [{ objectType: "Employee", primaryKey: 1 }],
      editedObjectTypes: ["Employee"],
      returnValue: "Anna Smith-Doe",
    });
  });

  it("does not return a value when only validating", async () => {
    const result = await client(returnsName).applyAction(
      {},
      {
        $validateOnly: true,
      },
    );

    expectTypeOf(result).toEqualTypeOf<ActionValidationResponse>();
    expect(result).not.toHaveProperty("returnValue");
  });

  it("remaps return values the same way as query results", async () => {
    const result = await client(returnsMap).applyAction({});
    expect(result).toEqual({ returnValue: { a: 1, b: 2 } });
  });

  it("remaps a map nested in a struct", async () => {
    const result = await client(returnsStructWithMap).applyAction({});
    expect(result).toEqual({
      returnValue: { name: "Anna Smith-Doe", scores: { a: 1, b: 2 } },
    });
  });

  it("returns undefined for an empty optional return value", async () => {
    const result = await client(returnsOptional).applyAction({});
    expect(result).toEqual({ returnValue: undefined });
  });

  it("returns undefined when the server omits the return value", async () => {
    const result = await client(returnsOmitted).applyAction({});
    expect(result).toEqual({ returnValue: undefined });
  });

  it("returns undefined instead of throwing when the value cannot be converted", async () => {
    const result = await client(returnsInvalid).applyAction({});
    expect(result).toEqual({ returnValue: undefined });
  });
});
