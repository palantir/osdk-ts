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
  ApplyActionFailed,
  AttachmentNotFound,
  AttachmentSizeExceededLimit,
  InvalidContentType,
  LinkTypeNotFound,
  ObjectNotFound,
  ObjectTypeNotFound,
  OntologyNotFound,
  QueryEncounteredUserFacingError,
  QueryNotFound,
} from "@osdk/internal.foundry.ontologies";
import type { BaseAPIError } from "./BaseError.js";

const errorInstanceId = "errorInstanceId";
const objectTypeRid = "ri.foundry.main.objectType.1";

export function ObjectTypeDoesNotExistError(
  objectType: string,
): ObjectTypeNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "ObjectTypeNotFound",
    errorInstanceId,
    parameters: {
      objectType,
      objectTypeRid,
    },
  };
}

export function LinkTypeNotFound(
  objectType: string,
  linkType: string,
): LinkTypeNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "LinkTypeNotFound",
    errorInstanceId,
    parameters: {
      objectType,
      linkType,
    },
  };
}

export function OntologyNotFoundError(
  ontology: string,
): OntologyNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "OntologyNotFound",
    errorInstanceId,
    parameters: {
      ontologyRid: ontology,
      apiName: ontology,
    },
  };
}

export function ObjectNotFoundError(
  objectType: string,
  primaryKey: string,
): ObjectNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "ObjectNotFound",
    errorInstanceId,
    parameters: {
      objectType,
      primaryKey: {
        employeeId: primaryKey,
      },
    },
  };
}

export function QueryNotFoundError(queryApiName: string): QueryNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "QueryNotFound",
    errorInstanceId,
    parameters: {
      query: queryApiName,
    },
  };
}

export function InvalidRequest(errorName: string): BaseAPIError {
  return {
    errorCode: "INVALID_REQUEST",
    errorName,
    errorInstanceId,
    parameters: {},
  };
}

export const ApplyActionFailedError: ApplyActionFailed = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "ApplyActionFailed",
  errorInstanceId,
  parameters: {},
};

export const ExecuteQueryFailedError: QueryEncounteredUserFacingError = {
  errorCode: "CONFLICT",
  errorName: "QueryEncounteredUserFacingError",
  errorInstanceId,
  parameters: {
    functionRid:
      "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
    functionVersion: "0.11.0",
    message: "test failed",
  },
};

export const InvalidContentTypeError: InvalidContentType = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "InvalidContentType",
  errorInstanceId,
  parameters: {},
};

export const AttachmentSizeExceededLimitError: AttachmentSizeExceededLimit = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "AttachmentSizeExceededLimit",
  errorInstanceId,
  parameters: {
    fileSizeBytes: "230000",
    fileLimitBytes: "200000",
  },
};

export const AttachmentNotFoundError: AttachmentNotFound = {
  errorCode: "NOT_FOUND",
  errorName: "AttachmentNotFound",
  errorInstanceId,
  parameters: {
    attachmentRid:
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80",
  },
};
