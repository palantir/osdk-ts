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

import type { errors } from "@osdk/gateway";
import type { BaseAPIError } from "./BaseError";

const errorInstanceId = "errorInstanceId";
const objectTypeRid = "ri.foundry.main.objectType.1";

export function ObjectTypeDoesNotExistError(
  objectType: string,
): errors.ObjectTypeNotFound {
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
): errors.LinkTypeNotFound {
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
): errors.OntologyNotFound {
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
): errors.ObjectNotFound {
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

export function QueryNotFoundError(queryApiName: string): errors.QueryNotFound {
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

export const ApplyActionFailedError: errors.ApplyActionFailed = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "ApplyActionFailed",
  errorInstanceId,
  parameters: {},
};

export const InvalidContentTypeError: errors.InvalidContentType = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "InvalidContentType",
  errorInstanceId,
  parameters: {},
};

export const AttachmentSizeExceededLimitError:
  errors.AttachmentSizeExceededLimit = {
    errorCode: "INVALID_ARGUMENT",
    errorName: "AttachmentSizeExceededLimit",
    errorInstanceId,
    parameters: {
      fileSizeBytes: "230000",
      fileLimitBytes: "200000",
    },
  };

export const AttachmentNotFoundError: errors.AttachmentNotFound = {
  errorCode: "NOT_FOUND",
  errorName: "AttachmentNotFound",
  errorInstanceId,
  parameters: {
    attachmentRid:
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80",
  },
};
