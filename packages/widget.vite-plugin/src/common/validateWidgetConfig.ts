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

const ID_PATTERN = /^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$/u;
const ID_MAX_LENGTH = 100;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MAX_LENGTH = 250;
const PARAMETERS_MAX_COUNT = 50;
const EVENTS_MAX_COUNT = 50;

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
  validateWidgetEvents(config.events, config.parameters);
  validateReadOnlyParameters(config);
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
  if (Object.keys(parameters).length > PARAMETERS_MAX_COUNT) {
    throw new Error(
      `Widget can have at most ${PARAMETERS_MAX_COUNT} parameters`,
    );
  }
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
    if (parameterConfig.displayName.length > NAME_MAX_LENGTH) {
      throw new Error(
        `Parameter "${parameterId}" display name length can be at most ${NAME_MAX_LENGTH} characters`,
      );
    }
    if (parameterConfig.type === "objectSet") {
      if (
        typeof parameterConfig.allowedType.internalDoNotUseMetadata?.rid !==
        "string"
      ) {
        throw new Error(
          `ObjectSet parameter "${parameterId}" must have a valid rid in its metadata, make sure your OSDK was generated with a generator version >=2.6.2. Provided type: '${JSON.stringify(
            parameterConfig.allowedType,
          )}'`,
        );
      }
    }
  }
}

function validateWidgetEvents(
  events: WidgetConfig<ParameterConfig>["events"],
  parameters: ParameterConfig,
): void {
  if (Object.keys(events).length > EVENTS_MAX_COUNT) {
    throw new Error(`Widget can have at most ${EVENTS_MAX_COUNT} events`);
  }
  const parameterIds = new Set(Object.keys(parameters));
  for (const [eventId, event] of Object.entries(events)) {
    if (eventId.length > ID_MAX_LENGTH) {
      throw new Error(
        `Event id length can be at most ${ID_MAX_LENGTH} characters`,
      );
    }
    if (!ID_PATTERN.test(eventId)) {
      throw new Error(
        `Event id "${eventId}" does not match allowed pattern (must be camelCase)`,
      );
    }
    if (event.displayName.length > NAME_MAX_LENGTH) {
      throw new Error(
        `Event "${eventId}" display name length can be at most ${NAME_MAX_LENGTH} characters`,
      );
    }
    const seen = new Set<string>();
    for (const parameterId of event.parameterUpdateIds) {
      if (seen.has(parameterId)) {
        throw new Error(
          `Event "${eventId}" lists parameter "${parameterId}" more than once`,
        );
      }
      seen.add(parameterId);
      if (!parameterIds.has(parameterId)) {
        throw new Error(
          `Event "${eventId}" updates unknown parameter "${parameterId}"`,
        );
      }
    }
  }
}

function validateReadOnlyParameters(config: WidgetConfig<ParameterConfig>) {
  for (const [eventId, event] of Object.entries(config.events)) {
    for (const parameterId of event.parameterUpdateIds) {
      if (config.parameters[parameterId]?.type === "mapTileLayer") {
        throw new Error(
          `Event "${eventId}" cannot update read-only map tile layer parameter "${parameterId}"`,
        );
      }
    }
  }
}
