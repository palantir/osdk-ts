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

import type { BaseAPIError } from "./baseApiError";

export interface PalantirApiError extends Error {
  errorType: string;
  errorName: string;
  errorInstanceId: string;
  statusCode: number;
  parameters: any;
}

export class PalantirApiError extends Error implements PalantirApiError {
  public errorName: string;
  public errorType: string;
  public statusCode: number;
  public errorInstanceId: string;
  public parameters: any;

  constructor(baseError: BaseAPIError, statusCode: number) {
    super(baseError.errorName);
    this.errorName = baseError.errorName;
    this.errorType = baseError.errorCode;
    this.statusCode = statusCode;
    this.errorInstanceId = baseError.errorInstanceId;
    this.parameters = baseError.parameters;
  }
}

export class UnknownError extends Error {
  constructor(message: string, public originalError?: any) {
    super(message);
  }
}
