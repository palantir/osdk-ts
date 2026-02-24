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

import type { FauxOntology } from "@osdk/faux";
import type {
  ApplyActionRequestV2,
  SyncApplyActionResponseV2,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { createLazyDoNothingActionImpl } from "../createLazyDoNothingActionImpl.js";
import { moveOfficeImpl } from "./actions/moveOffice.js";
import {
  ActionCreatesInterface,
  ActionTakesAnotherInterface,
  ActionTakesAttachment,
  ActionTakesGeoshape,
  ActionTakesInterface,
  ActionTakesMedia,
  ActionTakesObjectSet,
  ActionTakesStruct,
  CreateOffice,
  CreateOfficeAndEmployee,
  MoveOffice,
  PromoteEmployee,
  PromoteEmployeeObject,
} from "./actionTypes.js";
import { employeeObjectType, officeObjectType } from "./objectTypes.js";

export const actionRequestCreateOffice: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    address: "123 Main Street",
    capacity: 100,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL_V2_WITH_DELETIONS",
  },
};

export const actionRequestCreateOfficeNoReturnEdits: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    address: "123 Main Street",
    capacity: 100,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "NONE",
  },
};

const actionRequestCreateOfficeAndEmployee: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    employeeId: 50032,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL_V2_WITH_DELETIONS",
  },
};

const actionRequestWithObjectSet: ApplyActionRequestV2 = {
  parameters: {
    employees: { type: "base", objectType: employeeObjectType.apiName },
  },
  options: {},
};

export const actionRequestWithAttachmentUpload: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    attachment:
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
  },
};

export const actionRequestMediaUpload: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    media_reference: {
      mimeType: "application/json",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaItemRid: "media-item-rid",
          mediaSetRid: "media-set-rid",
          mediaSetViewRid: "media-set-view-rid",
        },
      },
    },
  },
};

export const actionRequestWithInterface: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    deletedInterface: { objectTypeApiName: "Employee", primaryKeyValue: 50030 },
  },
};

export const actionRequestWithObjectTypeReference: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    createdInterface: "Employee",
  },
};

export const actionRequestWithStruct: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    name: "testMan",
    address: { city: "NYC", state: "NY", zipcode: 12345 },
  },
};

export const actionRequestWithGeoshape: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    geohashParam: "40.917859676842255,-79.4382042508868",
    geoshapeParam: {
      coordinates: [
        [
          [
            -97.86567863752134,
            38.418052586871624,
          ],
          [
            -97.86567863752134,
            35.410223767370525,
          ],
          [
            -91.98573135442845,
            35.410223767370525,
          ],
          [
            -91.98573135442845,
            38.418052586871624,
          ],
          [
            -97.86567863752134,
            38.418052586871624,
          ],
        ],
      ],
      type: "Polygon",
    },
  },
};

const actionResponseCreateOfficeAndEmployee: SyncApplyActionResponseV2 = {
  validation: {
    submissionCriteria: [],
    parameters: {},
    result: "VALID",
  },
  edits: {
    type: "edits",
    edits: [
      {
        type: "addObject",
        primaryKey: "NYC",
        objectType: officeObjectType.apiName,
      },
      {
        type: "addObject",
        primaryKey: "50032",
        objectType: employeeObjectType.apiName,
      },
    ],
    addedObjectCount: 2,
    addedLinksCount: 0,
    modifiedObjectsCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
  },
};

const actionResponseCreateOffice: SyncApplyActionResponseV2 = {
  validation: {
    result: "VALID",
    submissionCriteria: [],
    parameters: {},
  },
  edits: {
    type: "edits",
    edits: [{
      type: "addObject",
      primaryKey: "NYC",
      objectType: officeObjectType.apiName,
    }],
    addedObjectCount: 1,
    addedLinksCount: 0,
    modifiedObjectsCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
  },
};

const actionResponse: SyncApplyActionResponseV2 = {
  validation: {
    result: "VALID",
    submissionCriteria: [],
    parameters: {},
  },
};

export function registerLazyActions(fauxOntology: FauxOntology): void {
  // These first actions don't didn't have implementations in the legacy ontology
  fauxOntology.registerActionType(PromoteEmployee);
  fauxOntology.registerActionType(ActionTakesAnotherInterface);
  fauxOntology.registerActionType(PromoteEmployeeObject);

  // junk implementations!

  fauxOntology.registerActionType(
    CreateOffice,
    createLazyDoNothingActionImpl([
      [actionRequestCreateOffice, actionResponseCreateOffice],
      [actionRequestCreateOfficeNoReturnEdits, actionResponse],
    ]),
  );

  fauxOntology.registerActionType(MoveOffice, moveOfficeImpl);

  fauxOntology.registerActionType(
    CreateOfficeAndEmployee,
    createLazyDoNothingActionImpl([
      [
        actionRequestCreateOfficeAndEmployee,
        actionResponseCreateOfficeAndEmployee,
      ],
    ]),
  );

  fauxOntology.registerActionType(
    ActionTakesGeoshape,
    createLazyDoNothingActionImpl([[
      actionRequestWithGeoshape,
      actionResponse,
    ]]),
  );

  fauxOntology.registerActionType(
    ActionTakesObjectSet,
    createLazyDoNothingActionImpl([
      [actionRequestWithObjectSet, actionResponse],
    ]),
  );

  fauxOntology.registerActionType(
    ActionTakesAttachment,
    (_batch, payload, { attachments }) => {
      const attachment = attachments.getAttachmentMetadataByRid(
        payload.parameters.attachment as string,
      );
      invariant(attachment, "expected attachment to be real");
    },
  );

  fauxOntology.registerActionType(
    ActionTakesMedia,
    createLazyDoNothingActionImpl([
      [actionRequestMediaUpload, actionResponse],
    ]),
  );

  fauxOntology.registerActionType(
    ActionTakesInterface,
    createLazyDoNothingActionImpl([
      [actionRequestWithInterface, actionResponse],
    ]),
  );

  fauxOntology.registerActionType(
    ActionTakesStruct,
    createLazyDoNothingActionImpl([
      [actionRequestWithStruct, actionResponse],
    ]),
  );

  fauxOntology.registerActionType(
    ActionCreatesInterface,
    createLazyDoNothingActionImpl([
      [actionRequestWithObjectTypeReference, actionResponse],
    ]),
  );
}
