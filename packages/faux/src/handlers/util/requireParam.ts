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

import { InvalidRequest } from "../../errors.js";
import { OpenApiCallError } from "./handleOpenApiCall.js";

export function requireParam<P, K extends string>(
  params: P,
  name: K & keyof P,
): asserts params is
  & P
  & {
    [KK in K]: string;
  }
{
  if (typeof params[name] !== "string") {
    throw new OpenApiCallError(
      400,
      InvalidRequest(`Invalid parameter: ${name} must be a string`),
    );
  }
}

export function requireParams<P, K extends string>(
  params: P,
  names: Array<K & keyof P>,
): asserts params is
  & P
  & {
    [KK in K]: string;
  }
{
  for (const name of names) {
    requireParam(params, name);
  }
}
