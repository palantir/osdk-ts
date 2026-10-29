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
  OntologyIrParameterValidation,
  ParameterFreeTextOrEmpty,
  ParameterRequiredConfiguration,
  ParameterValidation,
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

// Mirrors api-gateway's OmsActionParameterValidationConverter for text and
// list length only. oneOf, range and datetime bounds are DataValues, which
// need the gateway's DataValueMapper to convert.
export function convertActionParameterValidation(
  { allowedValues, required }:
    | ParameterValidation
    | OntologyIrParameterValidation,
): Ontologies.ActionParameterValidation | undefined {
  const convertedAllowedValues = allowedValues.type === "text"
    ? convertTextAllowedValues(allowedValues.text)
    : undefined;
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

function convertTextAllowedValues(
  text: ParameterFreeTextOrEmpty,
): Ontologies.ParameterAllowedValues | undefined {
  switch (text.type) {
    case "empty":
      return { type: "mustBeEmpty" };
    case "text": {
      const { minLength, maxLength, regex } = text.text;
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
