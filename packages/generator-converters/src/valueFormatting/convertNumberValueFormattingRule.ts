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
  DurationFormatStyle,
  NumberFormatOptions,
  PropertyNumberFormattingRule,
  PropertyNumberFormattingRuleType,
} from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { convertPropertyTypeReferenceOrStringConstant } from "./commonValueFormattingUtils.js";

export function convertNumberFormattingRule(
  wireFormatting: Ontologies.PropertyNumberFormattingRule,
): PropertyNumberFormattingRule | undefined {
  const numberType = convertNumberFormattingType(wireFormatting.numberType);
  if (!numberType) {
    return undefined;
  }
  return {
    type: "number",
    numberType,
  };
}

function convertNumberFormatOptions(
  wireOptions: Ontologies.NumberFormatOptions,
): NumberFormatOptions {
  return {
    useGrouping: wireOptions.useGrouping,
    convertNegativeToParenthesis: wireOptions.convertNegativeToParenthesis,
    minimumIntegerDigits: wireOptions.minimumIntegerDigits,
    minimumFractionDigits: wireOptions.minimumFractionDigits,
    maximumFractionDigits: wireOptions.maximumFractionDigits,
    minimumSignificantDigits: wireOptions.minimumSignificantDigits,
    maximumSignificantDigits: wireOptions.maximumSignificantDigits,
    notation: wireOptions.notation,
    roundingMode: wireOptions.roundingMode,
  };
}

function convertDurationFormatStyle(
  formatStyle: Ontologies.DurationFormatStyle,
): DurationFormatStyle {
  switch (formatStyle.type) {
    case "humanReadable":
      return {
        type: "humanReadable",
        showFullUnits: formatStyle.showFullUnits,
      };
    case "timecode":
      return {
        type: "timecode",
      };
    default:
      formatStyle satisfies never;
      throw new Error(
        `Unknown duration format style: ${(formatStyle as any).type}`,
      );
  }
}

function convertNumberFormattingType(
  wireNumberType: Ontologies.PropertyNumberFormattingRuleType,
): PropertyNumberFormattingRuleType | undefined {
  switch (wireNumberType.type) {
    case "standard":
      return {
        type: "standard",
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
      };

    case "fixedValues":
      return {
        type: "fixedValues",
        values: wireNumberType.values,
      };

    case "currency": {
      return {
        type: "currency",
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
        style: wireNumberType.style,
        currencyCode: convertPropertyTypeReferenceOrStringConstant(
          wireNumberType.currencyCode,
        ),
      };
    }

    case "standardUnit": {
      return {
        type: "standardUnit",
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
        unit: convertPropertyTypeReferenceOrStringConstant(wireNumberType.unit),
      };
    }

    case "customUnit": {
      return {
        type: "customUnit",
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
        unit: convertPropertyTypeReferenceOrStringConstant(wireNumberType.unit),
      };
    }

    case "affix": {
      return {
        type: "affix",
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
        affix: {
          prefix: wireNumberType.affix?.prefix != null
            ? convertPropertyTypeReferenceOrStringConstant(
              wireNumberType.affix.prefix,
            )
            : undefined,
          postfix: wireNumberType.affix?.postfix != null
            ? convertPropertyTypeReferenceOrStringConstant(
              wireNumberType.affix.postfix,
            )
            : undefined,
        },
      };
    }

    case "duration": {
      return {
        type: "duration",
        formatStyle: convertDurationFormatStyle(wireNumberType.formatStyle),
        precision: wireNumberType.precision,
        baseValue: wireNumberType.baseValue,
      };
    }

    case "scale": {
      return {
        type: "scale",
        scaleType: wireNumberType.scaleType,
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
      };
    }

    case "ratio": {
      return {
        type: "ratio",
        ratioType: wireNumberType.ratioType,
        baseFormatOptions: convertNumberFormatOptions(
          wireNumberType.baseFormatOptions,
        ),
      };
    }

    default:
      wireNumberType satisfies never;
      throw new Error(
        `Unknown number format type: ${(wireNumberType as any).type}`,
      );
  }
}
