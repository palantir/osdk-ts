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
  ObjectMetadata,
  PropertyValueFormattingRule,
} from "@osdk/api";
import type { KnownType } from "@osdk/foundry.ontologies";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { formatBoolean } from "./formatBoolean.js";
import { formatDateTime } from "./formatDateTime.js";
import { formatNumber } from "./formatNumber.js";
import { getBrowserLocale } from "./propertyFormattingUtils.js";

export interface FormatPropertyOptions {
  locale?: string;
  timezoneId?: string;
}

type PropertyValue = 
  | string
  | Array<string>
  | number
  | Array<number>
  | boolean
  | Array<boolean>
  | undefined;

type DefinedPropertyValue = NonNullable<PropertyValue>

/**
 * Applies formatting rules to a property value and returns the formatted string value.
 *
 * @param propertyValue - The value of the property to format
 * @returns The formatted string value, or undefined if the property cannot be formatted
 *
 * @experimental This is a stub implementation that returns undefined.
 * The actual formatting logic will be implemented later.
 */
export function applyPropertyFormatter(
  propertyValue: PropertyValue,
  propertyDefinition: ObjectMetadata.Property | undefined,
  objectData: SimpleOsdkProperties,
  options: FormatPropertyOptions = {},
): string | undefined {
  if (propertyDefinition?.valueFormatting == null || propertyValue == null) {
    return undefined;
  }

  try {
    return formatPropertyValue(propertyValue, propertyDefinition.valueFormatting, objectData, options);
  }
  catch (error) {
    // There was a rule we was unable to parse, so we return undefined
    return undefined;
  }
}

function formatPropertyValue(
  value: DefinedPropertyValue,
  rule: PropertyValueFormattingRule,
  objectData: SimpleOsdkProperties,
  options: FormatPropertyOptions,
): string | undefined {
  switch (rule.type) {
    case "boolean":
      if (typeof value !== "boolean") {
        return undefined;
      }
      return formatBoolean(value, rule);

    case "number":
      if (typeof value !== "number") {
        return undefined;
      }
      return formatNumber(value, rule.numberType, objectData, options.locale ?? getBrowserLocale());

    case "date":
      if (!(value instanceof Date) && typeof value !== "string") {
        return undefined;
      }
      return formatDateTime(
        value,
        rule.format,
        undefined,
        objectData,
        options.timezoneId,
      );

    case "timestamp":
      if (!(value instanceof Date) && typeof value !== "string") {
        return undefined;
      }
      return formatDateTime(
        value,
        rule.format,
        rule.displayTimezone,
        objectData,
        options.timezoneId,
      );

    case "knownType":
      return formatKnownType(value, rule.knownType);

    default:
      return undefined;
  }
}

function formatKnownType(value: any, knownType: KnownType): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  switch (knownType) {
    case "userOrGroupRid":
    case "resourceRid":
    case "artifactGid":
      // These would typically be rendered as special components (user, resource etc)
      // For now, we'll just return the raw value
      return value;
    default:
      return undefined;
  }
}


