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
  DatetimeFormat,
  DatetimeTimezone,
  PropertyDateFormattingRule,
  PropertyTimestampFormattingRule,
} from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { convertPropertyTypeReferenceOrStringConstant } from "./commonValueFormattingUtils.js";

export function convertDateFormattingRule(
  wireFormatting: Ontologies.PropertyDateFormattingRule,
): PropertyDateFormattingRule {
  return {
    type: "date",
    format: convertDatetimeFormat(wireFormatting.format),
  };
}

export function convertTimestampFormattingRule(
  wireFormatting: Ontologies.PropertyTimestampFormattingRule,
): PropertyTimestampFormattingRule {
  return {
    type: "timestamp",
    format: convertDatetimeFormat(wireFormatting.format),
    displayTimezone: convertDatetimeTimezone(
      wireFormatting.displayTimezone,
    ),
  };
}

function convertDatetimeFormat(
  wireFormat: Ontologies.DatetimeFormat,
): DatetimeFormat {
  switch (wireFormat.type) {
    case "stringFormat":
      return {
        type: "stringFormat",
        pattern: wireFormat.pattern,
      };
    case "localizedFormat":
      return {
        type: "localizedFormat",
        format: wireFormat.format,
      };
    default:
      wireFormat satisfies never;
      throw new Error(
        `Unknown datetime format type: ${(wireFormat as any).type}`,
      );
  }
}

function convertDatetimeTimezone(
  wireTimezone: Ontologies.DatetimeTimezone,
): DatetimeTimezone {
  switch (wireTimezone.type) {
    case "static":
      return {
        type: "static",
        zoneId: convertPropertyTypeReferenceOrStringConstant(
          wireTimezone.zoneId,
        ),
      };
    case "user":
      return { type: "user" };
    default:
      wireTimezone satisfies never;
      throw new Error(`Unknown timezone type: ${(wireTimezone as any).type}`);
  }
}
