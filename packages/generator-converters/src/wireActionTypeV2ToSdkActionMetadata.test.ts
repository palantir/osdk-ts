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

import type { ActionParameterType } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { wireActionTypeV2ToSdkActionMetadata } from "./wireActionTypeV2ToSdkActionMetadata.js";

function actionWithParameter(dataType: ActionParameterType) {
  return wireActionTypeV2ToSdkActionMetadata({
    apiName: "testAction",
    rid: "ri.actions.main.action-type.test",
    status: "ACTIVE",
    operations: [],
    parameters: {
      param: {
        displayName: "Param",
        dataType,
        required: true,
        typeClasses: [],
      },
    },
  });
}

describe("wireActionTypeV2ToSdkActionMetadata", () => {
  it("converts decimal parameters", () => {
    expect(
      actionWithParameter({ type: "decimal", precision: 38, scale: 18 })
        .parameters.param,
    ).toMatchObject({ type: "decimal", multiplicity: false, nullable: false });
  });

  it("converts decimal list parameters", () => {
    expect(
      actionWithParameter({
        type: "array",
        subType: { type: "decimal", precision: 38, scale: 18 },
      }).parameters.param,
    ).toMatchObject({ type: "decimal", multiplicity: true });
  });
});
