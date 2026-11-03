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

import type { QueryDataType } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { ActionTypeV2WithReturnType } from "./ActionTypeV2WithReturnType.js";
import { wireActionTypeV2ToSdkActionMetadata } from "./wireActionTypeV2ToSdkActionMetadata.js";

function actionType(returnType?: QueryDataType): ActionTypeV2WithReturnType {
  return {
    apiName: "returnsValue",
    parameters: {},
    rid: "ri.actions.main.action-type.1",
    status: "ACTIVE",
    operations: [],
    ...(returnType != null ? { returnType } : {}),
  };
}

describe(wireActionTypeV2ToSdkActionMetadata, () => {
  it("omits returnType when the action does not return a value", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(actionType());
    expect(result).not.toHaveProperty("returnType");
  });

  it("converts a primitive return type", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(
      actionType({ type: "string" }),
    );
    expect(result.returnType).toEqual({ type: "string", nullable: false });
  });

  it("converts an optional return type to a nullable definition", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(
      actionType({
        type: "union",
        unionTypes: [{ type: "integer" }, { type: "null" }],
      }),
    );
    expect(result.returnType).toEqual({ type: "integer", nullable: true });
  });

  it("converts a struct return type", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(
      actionType({
        type: "struct",
        fields: [
          { name: "name", fieldType: { type: "string" } },
          {
            name: "ids",
            fieldType: { type: "set", subType: { type: "long" } },
          },
        ],
      }),
    );
    expect(result.returnType).toEqual({
      type: "struct",
      nullable: false,
      struct: {
        name: { type: "string", nullable: false },
        ids: {
          type: "set",
          nullable: false,
          set: { type: "long", nullable: false },
        },
      },
    });
  });

  it("drops return types the OSDK cannot represent", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(
      actionType({
        type: "array",
        subType: {
          type: "unsupported",
          unsupportedType: "Attachment",
          params: {},
        },
      }),
    );
    expect(result.returnType).toBeUndefined();
  });
});
