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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { toDataValue } from "../util/toDataValue.js";
import { ActionValidationError } from "./ActionValidationError.js";
export async function applyAction(client, action, parameters, options = {}) {
  const clientWithHeaders = addUserAgentAndRequestContextHeaders(augmentRequestContext(client, () => ({
    finalMethodCall: "applyAction"
  })), action);
  if (Array.isArray(parameters)) {
    const response = await OntologiesV2.Actions.applyBatch(clientWithHeaders, await client.ontologyRid, action.apiName, {
      requests: parameters ? await remapBatchActionParams(parameters, client) : [],
      options: {
        returnEdits: options?.$returnEdits ? "ALL" : "NONE"
      }
    });
    const edits = response.edits;
    return options?.$returnEdits ? edits?.type === "edits" ? remapActionResponse(response) : edits : undefined;
  } else {
    const response = await OntologiesV2.Actions.apply(clientWithHeaders, await client.ontologyRid, action.apiName, {
      parameters: await remapActionParams(parameters, client),
      options: {
        mode: options?.$validateOnly ? "VALIDATE_ONLY" : "VALIDATE_AND_EXECUTE",
        returnEdits: options?.$returnEdits ? "ALL_V2_WITH_DELETIONS" : "NONE"
      }
    });
    if (options?.$validateOnly) {
      return response.validation;
    }
    if (response.validation?.result === "INVALID") {
      throw new ActionValidationError(response.validation);
    }
    const edits = response.edits;
    return options?.$returnEdits ? edits?.type === "edits" ? remapActionResponse(response) : edits : undefined;
  }
}
async function remapActionParams(params, client) {
  if (params == null) {
    return {};
  }
  const parameterMap = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValue(value, client);
  }
  return parameterMap;
}
async function remapBatchActionParams(params, client) {
  const remappedParams = await Promise.all(params.map(async param => {
    return {
      parameters: await remapActionParams(param, client)
    };
  }));
  return remappedParams;
}
export function remapActionResponse(response) {
  const editResponses = response?.edits;
  if (editResponses?.type === "edits") {
    const remappedActionResponse = {
      type: editResponses.type,
      deletedLinksCount: editResponses.deletedLinksCount,
      deletedObjectsCount: editResponses.deletedObjectsCount,
      addedLinks: [],
      deletedLinks: [],
      addedObjects: [],
      deletedObjects: [],
      modifiedObjects: [],
      editedObjectTypes: []
    };
    const editedObjectTypesSet = new Set();
    for (const edit of editResponses.edits) {
      if (edit.type === "addLink" || edit.type === "deleteLink") {
        const osdkEdit = {
          linkTypeApiNameAtoB: edit.linkTypeApiNameAtoB,
          linkTypeApiNameBtoA: edit.linkTypeApiNameBtoA,
          aSideObject: edit.aSideObject,
          bSideObject: edit.bSideObject
        };
        edit.type === "addLink" ? remappedActionResponse.addedLinks.push(osdkEdit) : remappedActionResponse.deletedLinks?.push(osdkEdit);
        editedObjectTypesSet.add(edit.aSideObject.objectType);
        editedObjectTypesSet.add(edit.bSideObject.objectType);
      } else if (edit.type === "addObject" || edit.type === "deleteObject" || edit.type === "modifyObject") {
        const osdkEdit = {
          objectType: edit.objectType,
          primaryKey: edit.primaryKey
        };
        if (edit.type === "addObject") {
          remappedActionResponse.addedObjects.push(osdkEdit);
        } else if (edit.type === "deleteObject") {
          remappedActionResponse.deletedObjects?.push(osdkEdit);
        } else if (edit.type === "modifyObject") {
          remappedActionResponse.modifiedObjects.push(osdkEdit);
        }
        editedObjectTypesSet.add(edit.objectType);
      } else {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(`Unexpected edit type: ${JSON.stringify(edit)}`);
        }
      }
    }
    remappedActionResponse.editedObjectTypes = [...editedObjectTypesSet];
    return remappedActionResponse;
  }
}
//# sourceMappingURL=applyAction.js.map