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

import type { ActionTypeV2, QueryDataType } from "@osdk/foundry.ontologies";
import { describe, expect, it, vi } from "vitest";
import { wireActionTypeV2ToSdkActionMetadata } from "./wireActionTypeV2ToSdkActionMetadata.js";

function actionType(returnType?: QueryDataType): ActionTypeV2 {
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

  it("converts optional list items to nullable items", () => {
    const result = wireActionTypeV2ToSdkActionMetadata(
      actionType({
        type: "array",
        subType: {
          type: "union",
          unionTypes: [{ type: "string" }, { type: "null" }],
        },
      }),
    );
    expect(result.returnType).toEqual({
      type: "array",
      nullable: false,
      array: { type: "string", nullable: true },
    });
  });

  it.each<[string, QueryDataType]>([
    ["an attachment", { type: "attachment" }],
    [
      "a union that is not an optional value",
      { type: "union", unionTypes: [{ type: "string" }, { type: "integer" }] },
    ],
    [
      "a map with boolean keys",
      {
        type: "entrySet",
        keyType: { type: "boolean" },
        valueType: { type: "string" },
      },
    ],
  ])("drops and warns about %s return type", (_, returnType) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = wireActionTypeV2ToSdkActionMetadata(actionType(returnType));
    expect(result.returnType).toBeUndefined();
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });

  it("drops and warns about return types the OSDK cannot represent", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
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
    expect(result.apiName).toBe("returnsValue");
    expect(warn).toHaveBeenCalledOnce();
    expect(warn).toHaveBeenCalledWith(
      `Action "returnsValue" returns a type the OSDK does not support, so applyAction will not return its value.`,
      expect.any(Error),
    );
    warn.mockRestore();
  });

  it("does not warn when the return type converts", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    wireActionTypeV2ToSdkActionMetadata(actionType({ type: "string" }));
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
