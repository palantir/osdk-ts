/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  BaseTemplateContext,
  PartialTemplateContext,
} from "../types/context.js";
import type { ValidationError, ValidationResult } from "../types/index.js";

export class ContextValidator {
  private readonly requiredFields: Array<keyof BaseTemplateContext> = [
    "packageName",
    "objectType",
    "titleProperty",
    "property",
    "operation",
    "propertyValueV2",
    "primaryKeyPropertyV2",
    "sourceObjectType",
    "linkedObjectType",
    "linkedPrimaryKeyPropertyV2",
    "linkedOneSidePropertyV2",
    "linkedManySidePropertyV2",
    "linkApiName",
    "linkedPrimaryKeyProperty",
    "rawLinkedPrimaryKeyProperty",
    "structPropertyApiName",
    "structSubPropertyApiName",
    "structSubPropertyValue",
    "isLinkManySided",
    "durationText",
    "interfaceApiName",
    "interfaceApiNameCamelCase",
    "objectTypeApiName",
    "objectTypeApiNameCamelCase",
    "propertyValueIncrementedV2",
    "distanceUnit",
    "arrayElementValue",
    "timeUnit",
    "linkName",
    "actionApiName",
    "attachmentProperty",
    "attachmentParameter",
    "funcApiName",
    "functionInputValuesV2",
    "hasMediaParameter",
    "hasAttachmentUpload",
    "hasAttachmentProperty",
    "hasParameters",
    "actionParameterSampleValuesV2",
    "last",
    "needsImports",
    "arg",
    "unit",
    "objectOrInterfaceApiName",
    "propertyNames",
    "isUnary",
    "isExtractPart",
    "vectorDimensionSize",
  ];

  private readonly typeMap: Partial<
    Record<
      keyof BaseTemplateContext,
      "string" | "boolean" | "number" | "object"
    >
  > = {
    packageName: "string",
    objectType: "string",
    titleProperty: "string",
    property: "string",
    operation: "string",
    propertyValueV2: "string", // Can be string or number
    primaryKeyPropertyV2: "object",
    sourceObjectType: "string",
    linkedObjectType: "string",
    linkedPrimaryKeyPropertyV2: "object",
    linkedOneSidePropertyV2: "object",
    linkedManySidePropertyV2: "object",
    linkApiName: "string",
    linkedPrimaryKeyProperty: "string",
    rawLinkedPrimaryKeyProperty: "object",
    structPropertyApiName: "string",
    structSubPropertyApiName: "string",
    structSubPropertyValue: "string",
    isLinkManySided: "boolean",
    durationText: "boolean",
    interfaceApiName: "string",
    interfaceApiNameCamelCase: "string",
    objectTypeApiName: "string",
    objectTypeApiNameCamelCase: "string",
    propertyValueIncrementedV2: "number",
    distanceUnit: "string",
    arrayElementValue: "string",
    timeUnit: "string",
    linkName: "string",
    actionApiName: "string",
    attachmentProperty: "string",
    attachmentParameter: "string",
    funcApiName: "string",
    functionInputValuesV2: "string",
    hasMediaParameter: "boolean",
    hasAttachmentUpload: "boolean",
    hasAttachmentProperty: "boolean",
    hasParameters: "boolean",
    actionParameterSampleValuesV2: "string", // Can be string or array
    last: "boolean",
    needsImports: "boolean",
    arg: "string",
    unit: "string",
    objectOrInterfaceApiName: "string",
    propertyNames: "object",
    isUnary: "boolean",
    isExtractPart: "boolean",
    vectorDimensionSize: "number",
  };

  validateContext(context: unknown): BaseTemplateContext {
    const validation = this.validate(context, false);
    if (!validation.valid) {
      const errorMessages = validation.errors.map(e => e.message).join(", ");
      throw new Error(`Context validation failed: ${errorMessages}`);
    }
    return context as BaseTemplateContext;
  }

  validatePartialContext(partial: unknown): PartialTemplateContext {
    const validation = this.validate(partial, true);
    if (!validation.valid) {
      const errorMessages = validation.errors.map(e => e.message).join(", ");
      throw new Error(`Partial context validation failed: ${errorMessages}`);
    }
    return partial as PartialTemplateContext;
  }

  validate(context: unknown, allowPartial: boolean = false): ValidationResult {
    const errors: ValidationError[] = [];

    if (!context || typeof context !== "object") {
      errors.push({
        type: "type-mismatch",
        message: "Context must be an object",
        expected: "object",
        actual: typeof context,
      });
      return { valid: false, errors };
    }

    const contextObj = context as Record<string, unknown>;

    // Check for required fields if not partial
    if (!allowPartial) {
      for (const field of this.requiredFields) {
        if (!(field in contextObj)) {
          errors.push({
            type: "missing-variable",
            message: `Missing required field: ${field}`,
            variable: field,
          });
        }
      }
    }

    // Type check provided values
    for (const [key, value] of Object.entries(contextObj)) {
      if (key in this.typeMap) {
        const expectedType = this.typeMap[key as keyof BaseTemplateContext];
        const actualType = typeof value;

        if (actualType !== expectedType) {
          errors.push({
            type: "type-mismatch",
            message: `Type mismatch for field "${key}"`,
            variable: key,
            expected: expectedType,
            actual: actualType,
          });
        }
      }
    }

    return { valid: errors.length === 0, errors };
  }

  mergeContexts(
    base: BaseTemplateContext,
    ...overrides: PartialTemplateContext[]
  ): BaseTemplateContext {
    let result = { ...base };

    for (const override of overrides) {
      for (const [key, value] of Object.entries(override)) {
        if (value !== undefined) {
          result = { ...result, [key]: value };
        }
      }
    }

    return this.validateContext(result);
  }
}
