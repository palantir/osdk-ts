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

import type {
  ApplyActionRequestV2,
  BatchApplyActionRequestV2,
  BatchApplyActionResponseV2,
  SyncApplyActionResponseV2,
} from "@osdk/internal.foundry.core";
import stableStringify from "json-stable-stringify";
import { employeeObjectType, officeObjectType } from "./objectTypes.js";

export const actionRequestCreateOffice: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    address: "123 Main Street",
    capacity: 100,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL",
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

export const actionRequestMoveOffice: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    newAddress: "123 Main Street",
    newCapacity: 100,
  },
  options: {},
};

const actionRequestMoveOfficeBig: ApplyActionRequestV2 = {
  parameters: {
    officeId: "SEA",
    newAddress: "456 Main Street",
    newCapacity: 1000,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL",
  },
};

const actionRequestMoveOfficeGetResults: ApplyActionRequestV2 = {
  parameters: {
    officeId: "NYC",
    newAddress: "123 Main Street",
    newCapacity: 100,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL",
  },
};

const actionRequestMoveOffice2: ApplyActionRequestV2 = {
  parameters: {
    officeId: "SEA",
  },
  options: {},
};

const actionRequestMoveOffice3: ApplyActionRequestV2 = {
  parameters: {
    officeId: "LAX",
  },
  options: {},
};

const actionRequestMoveOfficeValidateOnly: ApplyActionRequestV2 = {
  parameters: {
    officeId: "SEA",
    newAddress: "456 Pike Place",
    newCapacity: 40,
  },
  options: {
    mode: "VALIDATE_ONLY",
  },
};

const actionRequestMoveOfficeInvalid: ApplyActionRequestV2 = {
  parameters: {
    officeId: "SEA",
    newAddress: "456 Pike Place",
    newCapacity: 40,
  },
  options: {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: "ALL",
  },
};

const actionRequestMoveOfficeValidateOnlyWithoutEdits: ApplyActionRequestV2 = {
  parameters: {
    officeId: "SEA",
    newAddress: "456 Pike Place",
    newCapacity: 40,
  },
  options: {
    mode: "VALIDATE_ONLY",
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
    returnEdits: "ALL",
  },
};

const actionRequestWithObjectSet: ApplyActionRequestV2 = {
  parameters: {
    employees: { type: "base", objectType: employeeObjectType.apiName },
  },
  options: {},
};

export const actionRequestWithAttachment: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: { attachment: "attachment.rid" },
};

export const actionRequestWithAttachmentUpload: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    attachment:
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
  },
};

export const actionRequestWithStruct: ApplyActionRequestV2 = {
  options: { mode: "VALIDATE_AND_EXECUTE", returnEdits: "NONE" },
  parameters: {
    name: "testMan",
    address: { city: "NYC", state: "NY", zipcode: 12345 },
  },
};

export const actionRequestMoveOfficeBatch: BatchApplyActionRequestV2 = {
  requests: [{
    parameters: {
      officeId: "SEA",
      newAddress: "456 Good Place",
      newCapacity: 40,
    },
  }, {
    parameters: {
      officeId: "NYC",
      newAddress: "123 Main Street",
      newCapacity: 80,
    },
  }],
  options: {},
};

export const actionRequestMoveOfficeBatchWithEdits: BatchApplyActionRequestV2 =
  {
    requests: [{
      parameters: {
        officeId: "SEA",
        newAddress: "456 Good Place",
        newCapacity: 40,
      },
    }, {
      parameters: {
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 80,
      },
    }],
    options: { returnEdits: "ALL" },
  };

export const actionRequestMoveOfficeBatchInvalid: BatchApplyActionRequestV2 = {
  requests: [{
    parameters: {
      officeId: "SEA",
      newAddress: "456 Pike Place",
      newCapacity: 40,
    },
  }, {
    parameters: {
      officeId: "NYC",
      newAddress: "123 Main Street",
      newCapacity: 80,
    },
  }],
  options: { returnEdits: "ALL" },
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

const actionResponseMoveOfficeBig: SyncApplyActionResponseV2 = {
  validation: {
    result: "VALID",
    submissionCriteria: [],
    parameters: {},
  },
  edits: {
    type: "largeScaleEdits",
    editedObjectTypes: ["airplane"],
  },
};

const actionResponseGetResults: SyncApplyActionResponseV2 = {
  validation: {
    result: "VALID",
    submissionCriteria: [],
    parameters: {},
  },
  edits: {
    type: "edits",
    edits: [{
      type: "modifyObject",
      primaryKey: "NYC",
      objectType: officeObjectType.apiName,
    }],
    addedObjectCount: 2,
    addedLinksCount: 0,
    modifiedObjectsCount: 0,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
  },
};

const actionResponseInvalid: SyncApplyActionResponseV2 = {
  validation: {
    result: "INVALID",
    submissionCriteria: [],
    parameters: {},
  },
};

const actionResponseMoveOfficeBatch: BatchApplyActionResponseV2 = {
  edits: {
    type: "edits",
    edits: [{
      type: "modifyObject",
      primaryKey: "SEA",
      objectType: officeObjectType.apiName,
    }, {
      type: "modifyObject",
      primaryKey: "NYC",
      objectType: officeObjectType.apiName,
    }],
    addedObjectCount: 0,
    addedLinksCount: 0,
    modifiedObjectsCount: 2,
    deletedLinksCount: 0,
    deletedObjectsCount: 0,
  },
};

export const actionResponseMap: {
  [actionApiName: string]: {
    [actionBody: string]: any;
  };
} = {
  promoteEmployee: {},
  createOffice: {
    [stableStringify(actionRequestCreateOffice)]: actionResponseCreateOffice,
    [stableStringify(actionRequestCreateOfficeNoReturnEdits)]: actionResponse,
  },
  moveOffice: {
    [stableStringify(actionRequestMoveOffice)]: actionResponse,
    [stableStringify(actionRequestMoveOfficeBig)]: actionResponseMoveOfficeBig,
    [stableStringify(actionRequestMoveOfficeGetResults)]:
      actionResponseGetResults,
    [stableStringify(actionRequestMoveOfficeValidateOnly)]:
      actionResponseInvalid,
    [stableStringify(actionRequestMoveOfficeValidateOnlyWithoutEdits)]:
      actionResponseInvalid,
    [stableStringify(actionRequestMoveOfficeInvalid)]: actionResponseInvalid,
    [stableStringify(actionRequestMoveOffice2)]: undefined,
    [stableStringify(actionRequestMoveOffice3)]: undefined,
    [stableStringify(actionRequestMoveOfficeBatch)]: {},
    [stableStringify(actionRequestMoveOfficeBatchWithEdits)]:
      actionResponseMoveOfficeBatch,
    [stableStringify(actionRequestMoveOfficeBatchInvalid)]: undefined,
  },
  createOfficeAndEmployee: {
    [stableStringify(actionRequestCreateOfficeAndEmployee)]:
      actionResponseCreateOfficeAndEmployee,
  },
  actionTakesObjectSet: {
    [stableStringify(actionRequestWithObjectSet)]: actionResponse,
  },
  actionTakesAttachment: {
    [stableStringify(actionRequestWithAttachment)]: actionResponse,
    [stableStringify(actionRequestWithAttachmentUpload)]: actionResponse,
  },

  createStructPerson: {
    [stableStringify(actionRequestWithStruct)]: actionResponse,
  },
};
