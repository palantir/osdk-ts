/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  ActionTypeV2,
  ApplyActionRequestV2,
  SyncApplyActionResponseV2,
} from "@osdk/foundry.ontologies";
import type { FauxDataStore } from "../../FauxFoundry/FauxDataStore.js";
import { validateAction } from "../../FauxFoundry/validateAction.js";
import { officeObjectType } from "../objectTypeV2.js";

export function moveOfficeImpl(
  ds: FauxDataStore,
  payload: ApplyActionRequestV2,
  def: ActionTypeV2,
): SyncApplyActionResponseV2 {
  // how should we check validation?
  const validation = validateAction(payload, def);
  if (validation.result === "INVALID") {
    return { validation };
  }

  // future: actually change the store
  return {
    validation,
    edits: payload.options?.mode === "VALIDATE_AND_EXECUTE"
        && (
          payload.options.returnEdits === "ALL"
          || payload.options.returnEdits === "ALL_V2_WITH_DELETIONS"
        )
      ? {
        type: "edits",
        edits: [
          {
            type: "modifyObject",
            primaryKey: payload.parameters.officeId,
            objectType: officeObjectType.apiName,
          },
        ],
        addedLinksCount: 0,
        addedObjectCount: 0,
        deletedLinksCount: 0,
        deletedObjectsCount: 0,
        modifiedObjectsCount: 1,
      }
      : undefined,
  };
}
