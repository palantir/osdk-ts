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

import type {
  AllowedParameterValues,
  ConditionValue,
  DateRangeValue,
  OntologyIrAllowedParameterValues,
  OntologyIrConditionValue,
  OntologyIrDateRangeValue,
  OntologyIrParameterDateTimeRange,
  OntologyIrParameterRange,
  OntologyIrParameterValidation,
  OntologyIrParameterValueOneOf,
  OntologyIrStaticValue,
  ParameterAttachment,
  ParameterDateTimeRange,
  ParameterFreeText,
  ParameterLength,
  ParameterMarkdown,
  ParameterRange,
  ParameterRequiredConfiguration,
  ParameterValidation,
  ParameterValueOneOf,
  ParameterValueTypeWithVersionIdOrEmpty,
  StaticValue,
  ValueTypeBlockData,
} from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";

// Mirrors api-gateway's ActionTypeToAdapterConverter.isParameterRequired.
export function isActionParameterRequired(
  required: ParameterRequiredConfiguration,
): boolean {
  switch (required.type) {
    case "required":
      return true;
    case "notRequired":
      return false;
    case "listLengthValidation":
      return (required.listLengthValidation.minLength ?? 0) > 0;
  }
}

// Mirrors api-gateway's OmsActionParameterValidationConverter.
export function convertActionParameterValidation(
  { allowedValues, required }:
    | ParameterValidation
    | OntologyIrParameterValidation,
  valueTypes: Record<string, ValueTypeBlockData> = {},
): Ontologies.ActionParameterValidation | undefined {
  const convertedAllowedValues = convertAllowedValues(
    allowedValues,
    valueTypes,
  );
  const arraySize = required.type === "listLengthValidation"
    ? convertArraySize(required.listLengthValidation)
    : undefined;
  if (convertedAllowedValues == null && arraySize == null) {
    return undefined;
  }
  return {
    defaultValidation: { allowedValues: convertedAllowedValues, arraySize },
  };
}

function convertAllowedValues(
  allowedValues: AllowedParameterValues | OntologyIrAllowedParameterValues,
  valueTypes: Record<string, ValueTypeBlockData>,
): Ontologies.ParameterAllowedValues | undefined {
  switch (allowedValues.type) {
    case "attachment":
      return allowedValues.attachment.type === "attachment"
        ? convertAttachment(allowedValues.attachment.attachment)
        : mustBeEmptyIfEmpty(allowedValues.attachment);
    case "datetime":
      return allowedValues.datetime.type === "datetime"
        ? convertDatetime(allowedValues.datetime.datetime)
        : mustBeEmptyIfEmpty(allowedValues.datetime);
    case "markdown":
      return allowedValues.markdown.type === "markdown"
        ? convertMarkdown(allowedValues.markdown.markdown)
        : mustBeEmptyIfEmpty(allowedValues.markdown);
    case "oneOf":
      return allowedValues.oneOf.type === "oneOf"
        ? convertOneOf(allowedValues.oneOf.oneOf)
        : mustBeEmptyIfEmpty(allowedValues.oneOf);
    case "range":
      return allowedValues.range.type === "range"
        ? convertRange(allowedValues.range.range)
        : mustBeEmptyIfEmpty(allowedValues.range);
    case "text":
      return allowedValues.text.type === "text"
        ? convertText(allowedValues.text.text)
        : mustBeEmptyIfEmpty(allowedValues.text);
    case "valueType":
      return convertValueType(allowedValues.valueType, valueTypes);
    case "boolean":
      return mustBeEmptyIfEmpty<"boolean">(allowedValues.boolean);
    case "cbacMarking":
      return mustBeEmptyIfEmpty<"cbacMarking">(allowedValues.cbacMarking);
    case "geohash":
      return mustBeEmptyIfEmpty<"geohash">(allowedValues.geohash);
    case "geoshape":
      return mustBeEmptyIfEmpty<"geoshape">(allowedValues.geoshape);
    case "geotimeSeriesReference":
      return mustBeEmptyIfEmpty<"geotimeSeries">(
        allowedValues.geotimeSeriesReference,
      );
    case "interfaceObjectQuery":
      return mustBeEmptyIfEmpty<"interfaceObjectQuery">(
        allowedValues.interfaceObjectQuery,
      );
    case "interfacePropertyValue":
      return mustBeEmptyIfEmpty<"unrestricted">(
        allowedValues.interfacePropertyValue,
      );
    case "mandatoryMarking":
      return mustBeEmptyIfEmpty<"mandatoryMarking">(
        allowedValues.mandatoryMarking,
      );
    case "mediaReference":
      return mustBeEmptyIfEmpty<"mediaReference">(allowedValues.mediaReference);
    case "multipassGroup":
      return mustBeEmptyIfEmpty<"group">(allowedValues.multipassGroup);
    case "objectList":
      return mustBeEmptyIfEmpty<"objectList">(allowedValues.objectList);
    case "objectPropertyValue":
      return mustBeEmptyIfEmpty<"objectPropertyValue">(
        allowedValues.objectPropertyValue,
      );
    case "objectQuery":
      return mustBeEmptyIfEmpty<"objectQuery">(allowedValues.objectQuery);
    case "objectSetRid":
      return mustBeEmptyIfEmpty<"objectSetRid">(allowedValues.objectSetRid);
    case "objectTypeReference":
      return mustBeEmptyIfEmpty<"objectTypeReference">(
        allowedValues.objectTypeReference,
      );
    case "organizationMarking":
      return mustBeEmptyIfEmpty<"organizationMarking">(
        allowedValues.organizationMarking,
      );
    case "scenarioReference":
      return mustBeEmptyIfEmpty<"scenarioReference">(
        allowedValues.scenarioReference,
      );
    case "sidcIcon":
      return mustBeEmptyIfEmpty<"sidcIcon">(allowedValues.sidcIcon);
    case "struct":
      return mustBeEmptyIfEmpty<"delegateToAllowedStructFieldValues">(
        allowedValues.struct,
      );
    case "timeSeriesReference":
      return mustBeEmptyIfEmpty<"timeSeriesReference">(
        allowedValues.timeSeriesReference,
      );
    case "user":
      return mustBeEmptyIfEmpty<"user">(allowedValues.user);
    case "redacted":
      return undefined;
    default:
      allowedValues satisfies never;
      return undefined;
  }
}

// `Other` names the union's only non-empty member, so a member added to the
// bindings fails to compile at the call site instead of converting to nothing.
function mustBeEmptyIfEmpty<Other extends string = never>(
  { type }: { type: "empty" | NoInfer<Other> },
): Ontologies.ParameterAllowedValues | undefined {
  return type === "empty" ? { type: "mustBeEmpty" } : undefined;
}

function convertAttachment(
  { maxSizeBytes }: ParameterAttachment,
): Ontologies.ParameterAllowedValues | undefined {
  return maxSizeBytes == null
    ? undefined
    : { type: "attachment", maxSizeBytes: String(maxSizeBytes) };
}

function convertDatetime(
  datetime: ParameterDateTimeRange | OntologyIrParameterDateTimeRange,
): Ontologies.ParameterAllowedValues | undefined {
  const bounds = convertBounds(datetime, convertDatetimeValue);
  return bounds && { type: "datetime", ...bounds };
}

function convertDatetimeValue(
  value: DateRangeValue | OntologyIrDateRangeValue,
): Ontologies.ParameterDatetimeValue | undefined {
  switch (value.type) {
    case "fixed": {
      const fixed = convertConstraintValue(value.fixed);
      return fixed && { type: "fixed", value: fixed };
    }
    case "now":
      return { type: "now" };
    case "relative": {
      const { duration, unit, tense } = value.relative;
      return { type: "relative", duration: String(duration), unit, tense };
    }
    default:
      value satisfies never;
      return undefined;
  }
}

function convertMarkdown(
  { minLength, maxLength }: ParameterMarkdown,
): Ontologies.ParameterAllowedValues | undefined {
  if (minLength == null && maxLength == null) {
    return undefined;
  }
  return {
    type: "markdown",
    gte: minLength ?? undefined,
    lte: maxLength ?? undefined,
  };
}

function convertOneOf(
  { labelledValues, otherValueAllowed }:
    | ParameterValueOneOf
    | OntologyIrParameterValueOneOf,
): Ontologies.ParameterAllowedValues | undefined {
  const options: Ontologies.ParameterAllowedValueOption[] = [];
  for (const { label, value } of labelledValues) {
    const converted = convertDataValue(value);
    if (converted === undefined) {
      return undefined;
    }
    options.push({ displayName: label, value: converted });
  }
  return {
    type: "oneOf",
    options,
    otherValuesAllowed: otherValueAllowed.allowed,
  };
}

function convertRange(
  range: ParameterRange | OntologyIrParameterRange,
): Ontologies.ParameterAllowedValues | undefined {
  const bounds = convertBounds(range, convertConstraintValue);
  return bounds && { type: "range", ...bounds };
}

function convertText(
  { minLength, maxLength, regex }: ParameterFreeText,
): Ontologies.ParameterAllowedValues | undefined {
  if (minLength == null && maxLength == null && regex == null) {
    return undefined;
  }
  return {
    type: "text",
    gte: minLength ?? undefined,
    lte: maxLength ?? undefined,
    regex: regex?.regex,
    configuredFailureMessage: regex?.failureMessage,
  };
}

function convertValueType(
  valueType: ParameterValueTypeWithVersionIdOrEmpty,
  valueTypes: Record<string, ValueTypeBlockData>,
): Ontologies.ParameterAllowedValues | undefined {
  switch (valueType.type) {
    case "valueType": {
      const { valueTypeRid, valueTypeVersionId } =
        valueType.valueType.valueType;
      const apiName = valueTypes[valueTypeRid]?.metadata.apiName;
      return apiName == null ? undefined : {
        type: "valueType",
        apiName,
        rid: valueTypeRid,
        versionId: valueTypeVersionId,
      };
    }
    case "missingParameterValueType":
      return undefined;
    default:
      valueType satisfies never;
      return undefined;
  }
}

// A configured bound that cannot be converted (e.g. an object property value)
// cannot be emitted partially, so the whole constraint is dropped.
function convertBounds<B extends { inclusive: boolean; value: unknown }, T>(
  { minimum, maximum }: {
    minimum?: B | null | undefined;
    maximum?: B | null | undefined;
  },
  convertValue: (value: B["value"]) => T | undefined,
): { gt?: T; gte?: T; lt?: T; lte?: T } | undefined {
  const min = minimum == null ? undefined : convertValue(minimum.value);
  const max = maximum == null ? undefined : convertValue(maximum.value);
  if (
    (minimum != null && min == null)
    || (maximum != null && max == null)
    || (min == null && max == null)
  ) {
    return undefined;
  }
  return {
    gte: minimum?.inclusive ? min : undefined,
    gt: minimum?.inclusive ? undefined : min,
    lte: maximum?.inclusive ? max : undefined,
    lt: maximum?.inclusive ? undefined : max,
  };
}

function convertConstraintValue(
  value: ConditionValue | OntologyIrConditionValue,
): Ontologies.ParameterConstraintValue | undefined {
  switch (value.type) {
    case "parameterId":
      return { type: "parameterValue", parameterId: value.parameterId };
    case "parameterLength":
      return convertParameterLength(value.parameterLength);
    case "staticValue": {
      const converted = convertDataValue(value.staticValue);
      return converted === undefined
        ? undefined
        : { type: "static", value: converted };
    }
    case "interfaceParameterPropertyValue":
    case "interfaceParameterPropertyValueV2":
    case "objectParameterPropertyValue":
    case "userProperty":
      return undefined;
    default:
      value satisfies never;
      return undefined;
  }
}

function convertParameterLength(
  parameterLength: ParameterLength,
): Ontologies.ParameterConstraintValue | undefined {
  switch (parameterLength.type) {
    case "parameterId":
      return {
        type: "parameterLength",
        parameterId: parameterLength.parameterId,
      };
    default:
      parameterLength.type satisfies never;
      return undefined;
  }
}

// Mirrors api-gateway's DataValueMapper.
function convertDataValue(value: StaticValue | OntologyIrStaticValue): unknown {
  switch (value.type) {
    case "boolean":
      return value.boolean;
    case "booleanList":
      return value.booleanList.booleans;
    case "integer":
      return value.integer;
    case "integerList":
      return value.integerList.integers;
    case "long":
      return value.long;
    case "longList":
      return value.longList.longs;
    case "double":
      return value.double;
    case "doubleList":
      return value.doubleList.doubles;
    case "string":
      return value.string;
    case "stringList":
      return value.stringList.strings;
    case "decimal":
      return value.decimal.decimalValue;
    case "decimalList":
      return value.decimalList.decimals;
    case "date":
      return value.date.dateValue;
    case "dateList":
      return value.dateList.dates;
    case "geohash":
      return value.geohash.geohash;
    case "geohashList":
      return value.geohashList.geohashes;
    case "timeSeriesReference":
      return value.timeSeriesReference.timeSeriesReference;
    case "timestamp":
      return value.timestamp;
    case "timestampList":
      return value.timestampList.timestamps;
    case "objectLocator":
      return value.objectLocator;
    case "objectLocatorList":
      return value.objectLocatorList.objectLocatorList;
    case "objectType":
      return value.objectType.objectTypeId;
    case "marking":
      return value.marking.marking;
    case "markingList":
      return value.markingList.markings;
    case "geotimeSeriesReference":
      return value.geotimeSeriesReference;
    case "geotimeSeriesReferenceList":
      return value.geotimeSeriesReferenceList.geotimeSeriesReferences;
    case "struct":
      return value.struct.structFields;
    case "structList":
      return value.structList.structs.map(({ structFields }) => structFields);
    case "scenarioReference":
      return value.scenarioReference.scenarioRid;
    case "attachment":
    case "attachmentList":
    case "geoshape":
    case "geoshapeList":
    case "mediaReference":
    case "mediaReferenceList":
    case "null":
      return undefined;
    default:
      value satisfies never;
      return undefined;
  }
}

function convertArraySize(
  { minLength, maxLength }: Extract<
    ParameterRequiredConfiguration,
    { type: "listLengthValidation" }
  >["listLengthValidation"],
): Ontologies.ParameterArraySize | undefined {
  if (minLength == null && maxLength == null) {
    return undefined;
  }
  return { gte: minLength ?? undefined, lte: maxLength ?? undefined };
}
