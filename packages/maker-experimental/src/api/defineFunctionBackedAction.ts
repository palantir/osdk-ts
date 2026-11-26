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

import type { OntologyIrLogicRuleValue } from "@osdk/client.unstable";
import type { IDiscoveredFunction } from "@osdk/generator-converters.ontologyir";
import type {
  ActionLevelValidationDefinition,
  ActionParameter,
  ActionParameterConfiguration,
  ActionSection,
  ActionStatus,
  ActionType,
  ActionTypeIsolationSettings,
  BlueprintIcon,
  DefaultFormat,
  EntityPermission,
  MakerValidationIssueCollector,
  MappingValue,
  StructFieldValidationConfiguration,
  SubmissionMetadata,
  TableConfiguration,
} from "@osdk/maker";
import {
  convertMappingValue,
  convertValidationRule,
  createValidationIssueCollector,
  defineAction,
  validateParameterOrdering,
} from "@osdk/maker";

import {
  createFunctionBackedActionParameter,
  isFunctionBackedActionInput,
} from "../conversion/toMarketplace/convertActionHelpers.js";
import { getFunctionsIr } from "./defineOntologyV2.js";

export type FunctionBackedActionParameterConfiguration = Omit<
  ActionParameterConfiguration,
  "customParameterType"
>;

export type FunctionBackedActionTypeUserDefinition = {
  functionApiName: string;
  apiName?: string;
  displayName?: string;
  description?: string;
  status?: ActionStatus;
  isolationSettings?: ActionTypeIsolationSettings;
  parameterConfiguration?: Record<
    string,
    FunctionBackedActionParameterConfiguration
  >;
  nonParameterMappings?: Record<string, MappingValue>;
  actionLevelValidation?: ActionLevelValidationDefinition;
  sections?: Array<ActionSection>;
  parameterOrdering?: Array<string>;
  tableConfiguration?: TableConfiguration;
  defaultFormat?: DefaultFormat;
  enableLayoutSwitch?: boolean;
  submissionMetadata?: SubmissionMetadata;
  permission?: EntityPermission;
  icon?: { locator: BlueprintIcon; color: string };
};

interface FunctionInputValueRules {
  parameters: Array<ActionParameter>;
  functionInputValues: Record<string, OntologyIrLogicRuleValue>;
}

export function defineFunctionBackedAction(
  def: FunctionBackedActionTypeUserDefinition,
): ActionType {
  const apiName = def.apiName ?? `${def.functionApiName.toLowerCase()}-action`;
  const discoveredFunction = getFunctionsIr()?.discoveredFunctions.find(
    (f) => f.locator.typescript?.functionName === def.functionApiName,
  );
  const inputs =
    discoveredFunction == null
      ? undefined
      : getFunctionInputValueRules(def, apiName, discoveredFunction);

  return defineAction({
    apiName,
    displayName: def.displayName ?? `Function action ${def.functionApiName}`,
    description: def.description,
    ...(def.isolationSettings !== undefined && {
      isolationSettings: def.isolationSettings,
    }),
    ...(def.permission !== undefined && { permission: def.permission }),
    rules: [
      {
        type: "functionRule",
        functionRule: {
          functionInputValues: inputs?.functionInputValues ?? {},
          // delegate this to conversion step
          functionRid: def.functionApiName,
          functionVersion: "0.1.0",
        },
      },
    ],
    status: def.status ?? "active",
    validation:
      inputs != null && def.actionLevelValidation != null
        ? convertValidationRule(def.actionLevelValidation, inputs.parameters)
        : [
            {
              condition: {
                type: "true",
                true: {},
              },
              displayMetadata: {
                failureMessage: "Validation failed",
                typeClasses: [],
              },
            },
          ],
    ...(inputs != null && {
      parameters: inputs.parameters,
      parameterOrdering:
        def.parameterOrdering ?? inputs.parameters.map((p) => p.id),
      entities: {
        affectedObjectTypes: Object.keys(
          discoveredFunction?.ontologyProvenance?.editedObjects ?? {},
        ),
        affectedLinkTypes: [],
        affectedInterfaceTypes: Object.keys(
          discoveredFunction?.ontologyProvenance?.editedInterfaces ?? {},
        ),
        typeGroups: [],
      },
      ...(def.sections && {
        sections: Object.fromEntries(
          def.sections.map((section) => [section.id, section]),
        ),
      }),
      ...(def.tableConfiguration && {
        displayAndFormat: { table: def.tableConfiguration },
      }),
    }),
    ...(def.defaultFormat && { defaultFormat: def.defaultFormat }),
    ...(def.enableLayoutSwitch && {
      enableLayoutSwitch: def.enableLayoutSwitch,
    }),
    ...(def.submissionMetadata && {
      submissionMetadata: def.submissionMetadata,
    }),
    ...(def.icon && { icon: def.icon }),
  });
}

function getFunctionInputValueRules(
  def: FunctionBackedActionTypeUserDefinition,
  apiName: string,
  discoveredFunction: IDiscoveredFunction,
): FunctionInputValueRules {
  const collector: MakerValidationIssueCollector =
    createValidationIssueCollector();
  const actionInputs = discoveredFunction.inputs.filter((input) =>
    isFunctionBackedActionInput(input.dataType),
  );
  const inputNames = new Set(actionInputs.map((input) => input.name));
  const configuredInputs = Object.keys(def.parameterConfiguration ?? {});
  const mappedInputs = Object.keys(def.nonParameterMappings ?? {});
  for (const name of [...configuredInputs, ...mappedInputs]) {
    collector.check(
      inputNames.has(name),
      `Action type ${apiName} configures ${name}, which is not an input of function ${def.functionApiName}`,
    );
  }
  for (const name of configuredInputs) {
    collector.check(
      !mappedInputs.includes(name),
      `Action type ${apiName} cannot both configure and map function input ${name}`,
    );
  }
  collector.throwIfAnyIssues();

  const parameters: Array<ActionParameter> = [];
  const functionInputValues: Record<string, OntologyIrLogicRuleValue> = {};
  for (const input of actionInputs) {
    const mapping = def.nonParameterMappings?.[input.name];
    if (mapping != null) {
      functionInputValues[input.name] = convertMappingValue(mapping);
      continue;
    }
    functionInputValues[input.name] = {
      type: "parameterId",
      parameterId: input.name,
    };
    parameters.push(
      applyParameterConfiguration(
        createFunctionBackedActionParameter(
          input,
          discoveredFunction.customTypes,
        ),
        def.parameterConfiguration?.[input.name],
      ),
    );
  }

  if (def.parameterOrdering) {
    validateParameterOrdering(
      def.parameterOrdering,
      new Set(parameters.map((p) => p.id)),
      apiName,
    );
  }
  return { parameters, functionInputValues };
}

function applyParameterConfiguration(
  parameter: ActionParameter,
  configuration: FunctionBackedActionParameterConfiguration | undefined,
): ActionParameter {
  if (configuration == null) {
    return parameter;
  }
  const {
    displayName,
    description,
    defaultValue,
    renderHint,
    structFieldValidations,
    ...validation
  } = configuration;
  return {
    ...parameter,
    displayName: displayName ?? parameter.displayName,
    ...(description !== undefined && { description }),
    ...(defaultValue !== undefined && { defaultValue }),
    ...(renderHint !== undefined && { renderHint }),
    validation: {
      ...parameter.validation,
      ...validation,
      ...(structFieldValidations !== undefined && {
        structFieldValidations: mergeStructFieldValidations(
          parameter.validation.structFieldValidations,
          structFieldValidations,
        ),
      }),
    },
  };
}

function mergeStructFieldValidations(
  generated: Record<string, StructFieldValidationConfiguration> | undefined,
  configured: Record<string, StructFieldValidationConfiguration>,
): Record<string, StructFieldValidationConfiguration> {
  const merged = { ...generated };
  for (const [fieldApiName, configuration] of Object.entries(configured)) {
    merged[fieldApiName] = { ...generated?.[fieldApiName], ...configuration };
  }
  return merged;
}
