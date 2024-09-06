/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// These are migrated from @osdk/foundry.internal to avoid coupling the apis

export type ActionResults =
  | ({ type: "edits" } & ObjectEdits)
  | ({ type: "largeScaleEdits"; editedObjectTypes: Array<string> });
interface ObjectEdits {
  addedObjects: Array<ObjectEdit>;
  modifiedObjects: Array<ObjectEdit>;
  addedLinks: Array<ObjectEdit>;
  addedObjectCount: number;
  modifiedObjectsCount: number;
  deletedObjectsCount: number;
  addedLinksCount: number;
  deletedLinksCount: number;
}
type ObjectEdit =
  | ({ type: "addObject" } & ObjectReference)
  | ({ type: "modifyObject" } & ObjectReference)
  | ({
    type: "addLink";
    linkTypeApiNameAtoB: string;
    linkTypeApiNameBtoA: string;
    aSideObject: ObjectReference;
    bSideObject: ObjectReference;
  });
interface ObjectReference {
  primaryKey: string | number;
  objectType: string;
}
export interface ValidateActionResponseV2 {
  result: "VALID" | "INVALID";
  submissionCriteria: Array<{
    configuredFailureMessage?: string;
    result: "VALID" | "INVALID";
  }>;
  parameters: Record<string, {
    result: "VALID" | "INVALID";
    evaluatedConstraints: Array<ParameterEvaluatedConstraint>;
    required: boolean;
  }>;
}
type ParameterEvaluatedConstraint =
  | { type: "arraySize"; lt?: any; lte?: any; gt?: any; gte?: any }
  | { type: "groupMember" }
  | { type: "objectPropertyValue" }
  | { type: "objectQueryResult" }
  | {
    type: "oneOf";
    options: Array<{
      displayName?: string;
      value?: any;
    }>;
    otherValuesAllowed: boolean;
  }
  | { type: "range"; lt?: any; lte?: any; gt?: any; gte?: any }
  | { type: "stringLength"; lt?: any; lte?: any; gt?: any; gte?: any }
  | {
    type: "stringRegexMatch";
    regex: string;
    configuredFailureMessage?: string;
  }
  | { type: "unevaluable" };
