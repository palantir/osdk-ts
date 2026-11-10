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

import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { ActionType } from "../action/ActionType.js";
import type { OntologyDefinition } from "../common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { defineCreateInterfaceLinkAction } from "../defineCreateInterfaceLinkAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import {
  getOntologyDefinition,
  initializeOntologyState,
} from "../defineOntology.js";

export const actionSnippetPackageName: string = "@example/sdk";
export const actionSnippetNamespace: string = "com.example.my-app.";

export const actionSnippetCases: ReadonlyArray<{
  apiName: string;
  exportName: string;
  hasParameters: boolean;
}> = [
  {
    apiName: `${actionSnippetNamespace}link-parent-children`,
    exportName: "linkParentChildren",
    hasParameters: true,
  },
  {
    apiName: `${actionSnippetNamespace}link-parent-child`,
    exportName: "linkParentChild",
    hasParameters: true,
  },
  {
    apiName: `${actionSnippetNamespace}link-parent-required-children`,
    exportName: "linkParentRequiredChildren",
    hasParameters: true,
  },
  {
    apiName: `${actionSnippetNamespace}refresh`,
    exportName: "refresh",
    hasParameters: false,
  },
  {
    apiName: `${actionSnippetNamespace}link_parent-children`,
    exportName: "link_parentChildren",
    hasParameters: false,
  },
  {
    apiName: `${actionSnippetNamespace}Link-other-CHILDren`,
    exportName: "LinkOtherCHILDren",
    hasParameters: false,
  },
  {
    apiName: "update_record-STATUS",
    exportName: "update_recordSTATUS",
    hasParameters: false,
  },
];

export function createActionSnippetOntology(): OntologyDefinition {
  initializeOntologyState(actionSnippetNamespace);
  const parent = defineInterface({
    apiName: "Parent",
    displayName: "Parent",
    properties: {},
  });
  const child = defineInterface({
    apiName: "Child",
    displayName: "Child",
    properties: {},
  });
  const children = defineInterfaceLinkConstraint({
    apiName: "children",
    from: parent,
    toMany: child,
    required: false,
  });
  const singleChild = defineInterfaceLinkConstraint({
    apiName: "child",
    from: parent,
    toOne: child,
    required: true,
  });
  const requiredChildren = defineInterfaceLinkConstraint({
    apiName: "requiredChildren",
    from: parent,
    toMany: child,
    required: true,
  });
  defineCreateInterfaceLinkAction({ interfaceLink: children });
  defineCreateInterfaceLinkAction({ interfaceLink: singleChild });
  defineCreateInterfaceLinkAction({ interfaceLink: requiredChildren });

  const ontology = getOntologyDefinition();
  for (const { apiName, hasParameters } of actionSnippetCases) {
    if (!hasParameters) {
      const action: ActionType = {
        __type: OntologyEntityTypeEnum.ACTION_TYPE,
        apiName,
        displayName: "Refresh",
        status: "active",
        rules: [],
        parameters: [],
      };
      ontology.ACTION_TYPE[apiName] = action;
    }
  }
  return ontology;
}

export function readActionSnippets(
  outputDir: string,
  apiName: string,
): { applyAction: string; batchApplyAction: string } {
  const snippets: unknown = JSON.parse(
    readFileSync(join(outputDir, apiName), "utf8"),
  );
  if (
    typeof snippets !== "object" ||
    snippets == null ||
    !("applyAction" in snippets) ||
    typeof snippets.applyAction !== "string" ||
    !("batchApplyAction" in snippets) ||
    typeof snippets.batchApplyAction !== "string"
  ) {
    throw new Error(`Missing action examples for ${apiName}`);
  }
  return {
    applyAction: snippets.applyAction,
    batchApplyAction: snippets.batchApplyAction,
  };
}
