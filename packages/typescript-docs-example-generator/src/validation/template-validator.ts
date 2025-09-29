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

import { TemplateAnalyzer } from "../analyzer/template-analyzer.js";
import { ContextValidator } from "../context/validator.js";
import type { BaseTemplateContext } from "../types/context.js";
import type {
  ParsedTemplate,
  ProcessingError,
  Result,
  ValidationError,
  ValidationResult,
} from "../types/index.js";

export class TemplateValidator {
  private readonly analyzer: TemplateAnalyzer;
  private readonly contextValidator: ContextValidator;

  constructor() {
    this.analyzer = new TemplateAnalyzer();
    this.contextValidator = new ContextValidator();
  }

  /**
   * Validates a template with a given context
   */
  validateTemplate(
    template: ParsedTemplate,
    context: BaseTemplateContext,
  ): ValidationResult {
    const errors: ValidationError[] = [];

    // Validate context structure
    const contextValidation = this.contextValidator.validate(context);
    if (!contextValidation.valid) {
      errors.push(...contextValidation.errors);
    }

    // Check all required variables are present
    for (const variable of template.variables) {
      if (variable.required && !(variable.name in context)) {
        errors.push({
          type: "missing-variable",
          message:
            `Required variable "${variable.name}" is missing from context`,
          template: template.id,
          variable: variable.name,
        });
      }
    }

    // Type check provided values
    for (const variable of template.variables) {
      if (variable.name in context) {
        const value = context[variable.name as keyof BaseTemplateContext];
        if (!this.isValidType(value, variable.type)) {
          errors.push({
            type: "type-mismatch",
            message: `Variable "${variable.name}" has incorrect type`,
            template: template.id,
            variable: variable.name,
            expected: variable.type,
            actual: typeof value,
          });
        }
      }
    }

    // Validate block variables
    for (const block of template.blocks) {
      const varName = block.name.substring(1); // Remove # or ^ prefix
      if (varName in context) {
        const value = context[varName as keyof BaseTemplateContext];
        if (typeof value !== "boolean") {
          errors.push({
            type: "type-mismatch",
            message: `Block variable "${varName}" must be boolean`,
            template: template.id,
            variable: varName,
            expected: "boolean",
            actual: typeof value,
          });
        }
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * Analyzes and validates a raw template string
   */
  analyzeAndValidate(
    templateId: string,
    templateContent: string,
    context?: Partial<BaseTemplateContext>,
  ): Result<
    { template: ParsedTemplate; validation?: ValidationResult },
    ProcessingError
  > {
    // Analyze the template
    const analysisResult = this.analyzer.analyze(templateContent);
    if (!analysisResult.success) {
      return analysisResult;
    }

    const analysis = analysisResult.value;
    const parsedTemplate: ParsedTemplate = {
      id: templateId,
      rawContent: templateContent,
      variables: analysis.variables,
      blocks: analysis.blocks,
    };

    // If context provided, validate it
    if (context) {
      const fullContext = this.contextValidator.mergeContexts(
        this.getDefaultContext(),
        context,
      );
      const validation = this.validateTemplate(parsedTemplate, fullContext);

      return {
        success: true,
        value: { template: parsedTemplate, validation },
      };
    }

    return {
      success: true,
      value: { template: parsedTemplate },
    };
  }

  /**
   * Batch validates multiple templates
   */
  batchValidate(
    templates: Array<
      { id: string; content: string; context?: Partial<BaseTemplateContext> }
    >,
  ): Result<Map<string, ValidationResult>, ProcessingError> {
    const results = new Map<string, ValidationResult>();
    const defaultContext = this.getDefaultContext();

    for (const { id, content, context } of templates) {
      const analysisResult = this.analyzer.analyze(content);
      if (!analysisResult.success) {
        results.set(id, {
          valid: false,
          errors: [{
            type: "invalid-block",
            message:
              `Failed to analyze template: ${analysisResult.error.message}`,
            template: id,
          }],
        });
        continue;
      }

      const parsedTemplate: ParsedTemplate = {
        id,
        rawContent: content,
        variables: analysisResult.value.variables,
        blocks: analysisResult.value.blocks,
      };

      const fullContext = context
        ? this.contextValidator.mergeContexts(defaultContext, context)
        : defaultContext;

      const validation = this.validateTemplate(parsedTemplate, fullContext);
      results.set(id, validation);
    }

    return { success: true, value: results };
  }

  /**
   * Gets validation suggestions for fixing errors
   */
  getSuggestions(errors: ValidationError[]): string[] {
    return errors.map(error => {
      switch (error.type) {
        case "missing-variable":
          return `Add "${error.variable}" to your context object with type ${
            this.getExpectedType(error.variable || "unknown")
          }`;

        case "type-mismatch":
          return `Change "${error.variable || "unknown"}" from ${
            error.actual || "unknown"
          } to ${error.expected || "unknown"}`;

        case "invalid-block":
          return `Check the syntax of your template blocks`;

        default:
          return error.message;
      }
    });
  }

  private isValidType(value: unknown, expectedType: string): boolean {
    switch (expectedType) {
      case "string":
        return typeof value === "string";
      case "boolean":
        return typeof value === "boolean";
      case "number":
        return typeof value === "number";
      case "object":
        return typeof value === "object" && value != null;
      default:
        return true;
    }
  }

  private getExpectedType(variableName: string): string {
    // Use naming conventions to suggest type
    if (variableName.startsWith("has") || variableName.startsWith("is")) {
      return "boolean";
    }
    if (variableName.includes("Count") || variableName.includes("Size")) {
      return "number";
    }
    if (variableName.endsWith("s") || variableName.includes("List")) {
      return "array";
    }
    return "string";
  }

  private getDefaultContext(): BaseTemplateContext {
    // Import from baseContext when needed
    // For now, return a minimal context
    return {
      packageName: "",
      objectType: "",
      titleProperty: "",
      property: "",
      otherProperty: "",
      operation: "",
      propertyValueV2: "",
      primaryKeyPropertyV2: { apiName: "", type: "" },
      primaryKeyPropertyValueV2: "",
      sourceObjectType: "",
      linkedObjectType: "",
      linkedPrimaryKeyPropertyV2: { apiName: "", type: "" },
      linkedOneSidePropertyV2: { apiName: "", type: "" },
      linkedManySidePropertyV2: { apiName: "", type: "" },
      linkApiName: "",
      linkedPrimaryKeyProperty: "",
      rawLinkedPrimaryKeyProperty: { apiName: "", type: "" },
      structPropertyApiName: "",
      structSubPropertyApiName: "",
      structSubPropertyValue: "",
      isLinkManySided: false,
      durationText: false,
      interfaceApiName: "",
      interfaceApiNameCamelCase: "",
      objectTypeApiName: "",
      objectTypeApiNameCamelCase: "",
      propertyValueIncrementedV2: 0,
      distanceUnit: "",
      arrayElementValue: "",
      timeUnit: "",
      actionApiName: "",
      attachmentProperty: "",
      attachmentParameter: "",
      funcApiName: "",
      functionInputValuesV2: "",
      hasMediaParameter: false,
      hasAttachmentUpload: false,
      hasAttachmentProperty: false,
      hasParameters: false,
      actionParameterSampleValuesV2: "",
      last: false,
      needsImports: false,
      arg: "",
      unit: "",
      objectOrInterfaceApiName: "",
      propertyNames: [],
      isUnary: false,
      isExtractPart: false,
      vectorProperty: "",
      vectorDimensionSize: 0,
    };
  }
}
