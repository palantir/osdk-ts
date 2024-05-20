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
  AttachmentNotFound,
  AttachmentSizeExceededLimit,
  InvalidContentLength,
  InvalidContentType,
} from "../ApiErrors.js";
import type { PalantirApiError } from "../Errors.js";
import { DefaultErrorHandler } from "./DefaultErrorHandler.js";

export class AttachmentsErrorHandler extends DefaultErrorHandler {
  handleAttachmentSizeExceededLimit(
    error: PalantirApiError,
    fileSizeBytes: string,
    fileLimitBytes: string,
  ): AttachmentSizeExceededLimit {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "AttachmentSizeExceededLimit",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      fileSizeBytes,
      fileLimitBytes,
    };
  }

  handleInvalidContentLength(error: PalantirApiError): InvalidContentLength {
    return {
      name: error.errorName!,
      message: error.message,
      errorName: "InvalidContentLength",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
    };
  }

  handleInvalidContentType(error: PalantirApiError): InvalidContentType {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "InvalidContentType",
      errorType: "INVALID_ARGUMENT",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
    };
  }

  handleAttachmentNotFound(
    error: PalantirApiError,
    attachmentRid: string,
  ): AttachmentNotFound {
    return {
      name: error.errorName,
      message: error.message,
      errorName: "AttachmentNotFound",
      errorType: "NOT_FOUND",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
      attachmentRid,
    };
  }
}
