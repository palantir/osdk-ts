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
  PermissionDenied,
  Unauthorized,
  UnknownError,
} from "../ApiErrors";
import type { PalantirApiError } from "../Errors";

export abstract class DefaultErrorHandler {
  handlePermissionDenied(error: PalantirApiError): PermissionDenied {
    return {
      errorName: "PermissionDenied",
      errorType: "PERMISSION_DENIED",
      name: error.name,
      message: error.message,
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
    };
  }

  handleUnauthorized(error: PalantirApiError): Unauthorized {
    return {
      name: error.name,
      message: error.message,
      errorType: "UNAUTHORIZED",
      errorName: "Unauthorized",
      errorInstanceId: error.errorInstanceId,
      statusCode: error.statusCode,
    };
  }

  handleUnknownError(error: PalantirApiError): UnknownError {
    return {
      name: error.name,
      message: error.message,
      errorName: "UnknownError",
      errorType: "UNKNOWN",
      originalError: "originalError" in error ? error.originalError : error,
    };
  }
}
