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
  GetCurrentUserPermissionDenied,
  UserDeleted,
  UserIsActive,
  UserNotFound,
} from "@osdk/foundry.admin";
import type { InvalidPageToken } from "@osdk/foundry.core";
import type {
  ActionNotFound,
  ApplyActionFailed,
  AttachmentNotFound,
  AttachmentSizeExceededLimit,
  InvalidContentType,
  LinkTypeNotFound as OGLinkTypeNotFound,
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
    errorDescription:
      "The requested object type is not found, or the client token does not have access to it.",
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
): OGLinkTypeNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "LinkTypeNotFound",
    errorDescription:
      "The link type is not found, or the user does not have access to it.",
    errorInstanceId,
    parameters: {
      objectType,
      linkType,
      linkTypeId: undefined,
    },
  };
}

export function OntologyNotFoundError(
  ontology: string,
): OntologyNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "OntologyNotFound",
    errorDescription:
      "The requested Ontology is not found, or the client token does not have access to it.",
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
    errorDescription:
      "The requested object is not found, or the client token does not have access to it.",
    errorInstanceId,
    parameters: {
      objectType,
      primaryKey,
    },
  };
}

export function QueryNotFoundError(queryApiName: string): QueryNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "QueryNotFound",
    errorDescription:
      "The query is not found, or the user does not have access to it.",
    errorInstanceId,
    parameters: {
      query: queryApiName,
    },
  };
}

export function ActionNotFoundError(): ActionNotFound {
  return {
    errorCode: "NOT_FOUND",
    errorName: "ActionNotFound",
    errorDescription:
      "The action is not found, or the user does not have access to it.",
    errorInstanceId,
    parameters: {
      actionRid: "",
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

export function InvalidArgument(errorName: string): BaseAPIError {
  return {
    errorCode: "INVALID_ARGUMENT",
    errorName,
    errorInstanceId,
    parameters: {},
  };
}

export const ApplyActionFailedError: ApplyActionFailed = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "ApplyActionFailed",
  errorDescription: "",
  errorInstanceId,
  parameters: {},
};

export const ExecuteQueryFailedError: QueryEncounteredUserFacingError = {
  errorCode: "CONFLICT",
  errorName: "QueryEncounteredUserFacingError",
  errorDescription:
    "The authored Query failed to execute because of a user induced error. The message argument is meant to be displayed to the user.",
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
  errorDescription:
    "The Content-Type cannot be inferred from the request content and filename. Please check your request content and filename to ensure they are compatible.",
  errorInstanceId,
  parameters: {},
};

export const AttachmentSizeExceededLimitError: AttachmentSizeExceededLimit = {
  errorCode: "INVALID_ARGUMENT",
  errorName: "AttachmentSizeExceededLimit",
  errorDescription:
    "The file is too large to be uploaded as an attachment. The maximum attachment size is 200MB.",
  errorInstanceId,
  parameters: {
    fileSizeBytes: "230000",
    fileLimitBytes: "200000",
  },
};

export const AttachmentNotFoundError: AttachmentNotFound = {
  errorCode: "NOT_FOUND",
  errorName: "AttachmentNotFound",
  errorDescription:
    "The requested attachment is not found, or the client token does not have access to it. Attachments that are not attached to any objects are deleted after two weeks. Attachments that have not been attached to an object can only be viewed by the user who uploaded them. Attachments that have been attached to an object can be viewed by users who can view the object.",
  errorInstanceId,
  parameters: {
    attachmentRid:
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80",
  },
};

export const CurrentUserPermissionDeniedError: GetCurrentUserPermissionDenied =
  {
    errorCode: "PERMISSION_DENIED",
    errorName: "GetCurrentUserPermissionDenied",
    errorInstanceId,
    parameters: {},
    errorDescription: "Could not getCurrent the User.",
  };

export const GetUserNotFoundError = (userId: string): UserNotFound => ({
  errorCode: "NOT_FOUND",
  errorName: "UserNotFound",
  errorInstanceId,
  parameters: {
    userId: userId,
  },
  errorDescription: "The given User could not be found.",
});

export const GetUserDeletedStatusError = (
  userId: string,
): UserDeleted => ({
  errorCode: "INVALID_ARGUMENT",
  errorName: "UserDeleted",
  errorInstanceId,
  parameters: {
    principalId: userId,
  },
  errorDescription: "The user is deleted.",
});

export const GetUserActiveStatusError = (
  userId: string,
): UserIsActive => ({
  errorCode: "INVALID_ARGUMENT",
  errorName: "UserIsActive",
  errorInstanceId,
  parameters: {
    principalId: userId,
  },
  errorDescription: "The user is an active user.",
});

export const GetInvalidPageTokenError = (
  pageToken: string,
): InvalidPageToken => ({
  errorCode: "INVALID_ARGUMENT",
  errorName: "InvalidPageToken",
  errorDescription: "The provided page token is invalid.",
  errorInstanceId: errorInstanceId,
  parameters: {
    pageToken,
  },
});
