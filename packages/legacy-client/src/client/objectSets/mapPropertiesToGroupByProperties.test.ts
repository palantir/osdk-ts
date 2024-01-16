/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { MockOntology } from "@osdk/shared.test";
import { describe, expect, it } from "vitest";
import { mapPropertiesToGroupByProperties } from ".";
import { GroupKeyType } from "./aggregations/groupBy/GroupKeyType";

describe(mapPropertiesToGroupByProperties, () => {
  it("maps properties correctly", () => {
    const aggregatableProperties = mapPropertiesToGroupByProperties(
      MockOntology,
      "Todo",
    );

    expect(aggregatableProperties.tags.exact(10)).toMatchObject({
      type: "Bucketing",
      kind: "ExactValueBucketing",
      keyDataType: GroupKeyType.STRING,
      propertyApiName: "tags",
      maxGroupCount: 10,
    });

    expect(aggregatableProperties.class.exact(10)).toMatchObject({
      type: "Bucketing",
      kind: "ExactValueBucketing",
      keyDataType: GroupKeyType.STRING,
      propertyApiName: "class",
      maxGroupCount: 10,
    });

    expect(aggregatableProperties.class_.exact(10)).toEqual({
      type: "Bucketing",
      kind: "ExactValueBucketing",
      keyDataType: GroupKeyType.STRING,
      propertyApiName: "class",
      maxGroupCount: 10,
    });
  });
});
