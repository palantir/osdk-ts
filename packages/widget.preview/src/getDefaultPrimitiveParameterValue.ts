/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ParameterValue } from "@osdk/widget.api";

import { getISODateFromDate } from "./getISODateFromDate.js";

export function getDefaultPrimitiveParameterValue(
  parameterType: ParameterValue.PrimitiveType,
): string | number | boolean {
  switch (parameterType) {
    case "boolean":
      return false;
    case "date":
      return getISODateFromDate(new Date());
    case "timestamp":
      return new Date().toISOString();
    case "number":
      return 0;
    case "string":
    case "scenario":
      return "";
  }
}
