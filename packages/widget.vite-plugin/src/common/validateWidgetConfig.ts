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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api";

const ID_PATTERN = /^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$/;
const ID_MAX_LENGTH = 100;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MAX_LENGTH = 250;

/**
 * Validates the requirements that can't be expressed via TypeScript type-checking
 * for a widget config (e.g. that widget IDs and parameter IDs are camelCase.)
 */
export function validateWidgetConfig(
  config: WidgetConfig<ParameterConfig>,
): void {
  validateWidgetId(config.id);
  validateWidgetName(config.name);
  validateWidgetDescription(config.description);
  validateWidgetParameters(config.parameters);
}

function validateWidgetId(id: string): void {
  if (id.length > ID_MAX_LENGTH) {
    throw new Error(
      `Widget id length can be at most ${ID_MAX_LENGTH} characters`,
    );
  }
  if (!ID_PATTERN.test(id)) {
    throw new Error(
      `Widget id "${id}" does not match allowed pattern (must be camelCase)`,
    );
  }
}

function validateWidgetName(name: string): void {
  if (name.length > NAME_MAX_LENGTH) {
    throw new Error(
      `Widget name length can be at most ${NAME_MAX_LENGTH} characters`,
    );
  }
}

function validateWidgetDescription(description?: string): void {
  if (description != null && description.length > DESCRIPTION_MAX_LENGTH) {
    throw new Error(
      `Widget description length can be at most ${DESCRIPTION_MAX_LENGTH} characters`,
    );
  }
}

function validateWidgetParameters(parameters: ParameterConfig): void {
  for (const [parameterId, parameterConfig] of Object.entries(parameters)) {
    if (parameterId.length > ID_MAX_LENGTH) {
      throw new Error(
        `Parameter id length can be at most ${ID_MAX_LENGTH} characters`,
      );
    }
    if (!ID_PATTERN.test(parameterId)) {
      throw new Error(
        `Parameter id "${parameterId}" does not match allowed pattern (must be camelCase)`,
      );
    }
    if (parameterConfig.type === "objectSet") {
      if (
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        parameterConfig.objectType != null
        && parameterConfig.allowedType != null
      ) {
        throw new Error(
          `Parameter id "${parameterId}" cannot have both objectType and allowedType defined, use only allowedType.`,
        );
      }
       
      const typeSource = parameterConfig.allowedType
        ?? parameterConfig.objectType;

      if (typeof typeSource?.internalDoNotUseMetadata?.rid !== "string") {
        throw new Error(
          `ObjectSet parameter "${parameterId}" must have a valid rid in its metadata, make sure your OSDK was generated with a generator version >=2.6.2. Provided type: '${
            JSON.stringify(
              typeSource,
            )
          }'`,
        );
      }
    }
  }
}
