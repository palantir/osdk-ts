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

export class PalantirApiError extends Error implements PalantirApiError {
  public message: string;
  public errorName?: string;
  public errorCode?: string;
  public statusCode?: number;
  public errorInstanceId?: string;
  public parameters?: any;

  constructor(
    message: string,
    errorName?: string,
    errorCode?: string,
    statusCode?: number,
    errorInstanceId?: string,
    parameters?: any,
  ) {
    super(message);
    this.message = message;
    this.errorName = errorName;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorInstanceId = errorInstanceId;
    this.parameters = parameters;
  }
}
