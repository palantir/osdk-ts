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

import type { FauxActionImpl } from "@osdk/faux";

import type { RenameOffice } from "../actionTypes.js";
import { officeObjectType } from "../objectTypeV2.js";

export const renameOfficeImpl: FauxActionImpl<typeof RenameOffice> = (
  batch,
  payload,
) => {
  const officeId = payload.parameters.officeId as string;
  const newName = payload.parameters.newName as string;
  const previousName = batch.getObject(officeObjectType.apiName, officeId)
    .name as string | undefined;

  batch.modifyObject(officeObjectType.apiName, officeId, { name: newName });

  const returnEdits =
    payload.options?.returnEdits === "ALL" ||
    payload.options?.returnEdits === "ALL_V2_WITH_DELETIONS";

  // Returns the full response because FauxDataStore only builds responses
  // without return values.
  return {
    validation: { result: "VALID", submissionCriteria: [], parameters: {} },
    edits: returnEdits ? { type: "edits", ...batch.objectEdits } : undefined,
    returnValue: {
      office: officeId,
      newName,
      previousName: previousName ?? null,
    },
  };
};
