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
  ActionTypeFullMetadata,
  ActionTypeV2,
} from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { wireActionTypeV2ToSdkActionMetadata } from "./wireActionTypeV2ToSdkActionMetadata.js";

const action: ActionTypeV2 = {
  apiName: "ManageInterfaceLinks",
  rid: "ri.ontology.main.action-type.manage-interface-links",
  status: "ACTIVE",
  parameters: {},
  operations: [],
};

const createRule: ActionTypeFullMetadata["fullLogicRules"][number] = {
  type: "createInterfaceLink",
  interfaceTypeApiName: "SourceInterface",
  interfaceLinkTypeApiName: "createdLink",
  sourceObject: "sourceToCreate",
  targetObject: "targetToCreate",
};

const deleteRule: ActionTypeFullMetadata["fullLogicRules"][number] = {
  type: "deleteInterfaceLink",
  interfaceTypeApiName: "OtherInterface",
  interfaceLinkTypeApiName: "deletedLink",
  sourceObject: "sourceToDelete",
  targetObject: "targetToDelete",
};

const unrelatedRule: ActionTypeFullMetadata["fullLogicRules"][number] = {
  type: "createObject",
  objectTypeApiName: "UnrelatedObject",
  propertyArguments: {},
  structPropertyArguments: {},
};

describe(wireActionTypeV2ToSdkActionMetadata, () => {
  it("projects a create interface link rule", () => {
    const metadata = wireActionTypeV2ToSdkActionMetadata(
      action,
      undefined,
      [createRule],
    );

    expect(metadata.interfaceLinkEffects).toEqual([{
      type: "createInterfaceLink",
      interfaceTypeApiName: "SourceInterface",
      interfaceLinkTypeApiName: "createdLink",
      sourceObject: "sourceToCreate",
      targetObject: "targetToCreate",
    }]);
    expect(metadata.modifiedEntities).toEqual({});
  });

  it("projects a delete interface link rule", () => {
    const metadata = wireActionTypeV2ToSdkActionMetadata(
      action,
      undefined,
      [deleteRule],
    );

    expect(metadata.interfaceLinkEffects).toEqual([{
      type: "deleteInterfaceLink",
      interfaceTypeApiName: "OtherInterface",
      interfaceLinkTypeApiName: "deletedLink",
      sourceObject: "sourceToDelete",
      targetObject: "targetToDelete",
    }]);
    expect(metadata.modifiedEntities).toEqual({});
  });

  it("preserves link rule order and ignores other rules without changing modified entities", () => {
    const actionWithObjectEdit: ActionTypeV2 = {
      ...action,
      operations: [{
        type: "createObject",
        objectTypeApiName: "EditedObject",
      }],
    };
    const metadata = wireActionTypeV2ToSdkActionMetadata(
      actionWithObjectEdit,
      undefined,
      [deleteRule, unrelatedRule, createRule, deleteRule],
    );

    expect(metadata.interfaceLinkEffects).toEqual([
      {
        type: "deleteInterfaceLink",
        interfaceTypeApiName: "OtherInterface",
        interfaceLinkTypeApiName: "deletedLink",
        sourceObject: "sourceToDelete",
        targetObject: "targetToDelete",
      },
      {
        type: "createInterfaceLink",
        interfaceTypeApiName: "SourceInterface",
        interfaceLinkTypeApiName: "createdLink",
        sourceObject: "sourceToCreate",
        targetObject: "targetToCreate",
      },
      {
        type: "deleteInterfaceLink",
        interfaceTypeApiName: "OtherInterface",
        interfaceLinkTypeApiName: "deletedLink",
        sourceObject: "sourceToDelete",
        targetObject: "targetToDelete",
      },
    ]);
    expect(metadata.modifiedEntities).toEqual({
      EditedObject: { created: true, modified: false },
    });
  });

  it("omits the effects field without applicable full logic rules", () => {
    const withoutFullMetadata = wireActionTypeV2ToSdkActionMetadata(
      action,
      "OriginalActionName",
    );
    const withoutRules = wireActionTypeV2ToSdkActionMetadata(
      action,
      undefined,
      [],
    );
    const withoutLinkRules = wireActionTypeV2ToSdkActionMetadata(
      action,
      undefined,
      [unrelatedRule],
    );

    expect(withoutFullMetadata.unsanitizedApiName).toBe("OriginalActionName");
    expect(withoutFullMetadata).not.toHaveProperty("interfaceLinkEffects");
    expect(withoutRules).not.toHaveProperty("interfaceLinkEffects");
    expect(withoutLinkRules).not.toHaveProperty("interfaceLinkEffects");
  });
});
