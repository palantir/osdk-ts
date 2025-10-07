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
  DurationFormatStyle,
  NumberFormatOptions,
  PropertyNumberFormattingRuleType,
  PropertyTypeReferenceOrStringConstant,
  PropertyValueFormattingRule,
} from "@osdk/api";
import type * as Ontologies from "@osdk/foundry.ontologies";

/**
 * Converts a PropertyValueFormattingRule from the ontologies format to the SDK format
 */
export function wirePropertyFormattingToSdkFormatting(
  wireFormatting: Ontologies.PropertyValueFormattingRule,
  log?: { info: (msg: string) => void },
): PropertyValueFormattingRule | undefined {
  try {
    return convertPropertyFormattingInternal(wireFormatting);
  } catch (error) {
    log?.info(`Failed to convert property formatting rule: ${error}`);
    return undefined;
  }
}

function convertPropertyFormattingInternal(
  wireFormatting: Ontologies.PropertyValueFormattingRule,
): PropertyValueFormattingRule | undefined {
  switch (wireFormatting.type) {
    case "date":
      return {
        type: "date",
        format: convertDatetimeFormat(wireFormatting.format),
      };

    case "timestamp":
      return {
        type: "timestamp",
        format: convertDatetimeFormat(wireFormatting.format),
        displayTimezone: convertDatetimeTimezone(
          wireFormatting.displayTimezone,
        ),
      };

    case "boolean":
      return {
        type: "boolean",
        valueIfTrue: wireFormatting.valueIfTrue,
        valueIfFalse: wireFormatting.valueIfFalse,
      };

    case "knownType": {
      switch (wireFormatting.knownType) {
        case "artifactGid":
        case "resourceRid":
        case "userOrGroupRid":
          return {
            type: "knownType",
            knownType: wireFormatting.knownType,
          };
        default:
          wireFormatting.knownType satisfies never;
          return undefined;
      }
    }

    case "number":
      const numberType = convertNumberFormattingType(wireFormatting.numberType);
      if (!numberType) {
        return undefined;
      }
      return {
        type: "number",
        numberType,
      };

    default:
      wireFormatting satisfies never;
      throw new Error(
        `Unknown formatting type: ${(wireFormatting as any).type}`,
      );
  }
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

function convertPropertyTypeReferenceOrStringConstant(
  value: Ontologies.PropertyTypeReferenceOrStringConstant,
): PropertyTypeReferenceOrStringConstant {
  switch (value.type) {
    case "constant":
      return {
        type: "constant",
        value: value.value,
      };
    case "propertyType":
      return {
        type: "propertyType",
        propertyApiName: value.propertyApiName,
      };
    default:
      value satisfies never;
      throw new Error(
        `Unknown property reference type: ${(value as any).type}`,
      );
  }
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
