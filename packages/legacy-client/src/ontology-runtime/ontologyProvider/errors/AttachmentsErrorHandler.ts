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

import type { PalantirApiError } from "../../../Errors";
import type {
  AttachmentNotFound,
  AttachmentSizeExceededLimit,
  InvalidContentLength,
  InvalidContentType,
  PermissionDenied,
  Unauthorized,
  UnknownError,
} from "../Errors";

export class AttachmentsErrorHandler {
  handleAttachmentSizeExceededLimit(
    error: PalantirApiError,
    fileSizeBytes: string,
    fileLimitBytes: string,
  ): AttachmentSizeExceededLimit {
    throw new Error("not implemented");
  }

  handleInvalidContentLength(error: PalantirApiError): InvalidContentLength {
    throw new Error("not implemented");
  }

  handleInvalidContentType(error: PalantirApiError): InvalidContentType {
    throw new Error("not implemented");
  }

  handleAttachmentNotFound(
    error: PalantirApiError,
    attachmentRid: string,
  ): AttachmentNotFound {
    throw new Error("not implemented");
  }

  handleUnauthorized(error: PalantirApiError): Unauthorized {
    throw new Error("not implemented");
  }

  handlePermissionDenied(error: PalantirApiError): PermissionDenied {
    throw new Error("not implemented");
  }

  handleUnknownError(error: PalantirApiError): UnknownError {
    throw new Error("not implemented");
  }
}
