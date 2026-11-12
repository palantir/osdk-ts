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

import {
  isRecord,
  WORKSHOP_EMBED_CHANNEL,
  WORKSHOP_EMBED_VERSION,
} from "./protocol.js";
import type { WorkshopEmbedMessage } from "./protocol.js";
import { isVariableRecord, isVariableValues } from "./variables.js";
import type { WorkshopVariableValues } from "./variables.js";

/** The declared type of a supported module-interface variable. @public */
export interface WorkshopVariableSchema {
  /** Value type declared by Workshop. */
  readonly type: "string" | "number" | "boolean";
  /** Whether the variable contains an array of the declared type. */
  readonly isList: boolean;
}

/** Supported module-interface variable definitions, keyed by external ID. @public */
export type WorkshopModuleSchema = Readonly<
  Record<string, WorkshopVariableSchema>
>;

interface ModuleSchemaMessage extends Omit<WorkshopEmbedMessage, "type"> {
  type: "moduleSchema";
  variables: WorkshopModuleSchema;
}

export function createModuleSchemaMessage(
  sessionId: string,
  variables: WorkshopModuleSchema,
): ModuleSchemaMessage {
  if (!isModuleSchema(variables)) {
    throw new TypeError("Invalid Workshop module schema.");
  }
  return {
    channel: WORKSHOP_EMBED_CHANNEL,
    version: WORKSHOP_EMBED_VERSION,
    sessionId,
    type: "moduleSchema",
    variables,
  };
}

export function isModuleSchemaMessage(
  value: unknown,
): value is ModuleSchemaMessage {
  return (
    isRecord(value) &&
    value.channel === WORKSHOP_EMBED_CHANNEL &&
    value.version === WORKSHOP_EMBED_VERSION &&
    typeof value.sessionId === "string" &&
    value.sessionId.length > 0 &&
    value.type === "moduleSchema" &&
    isModuleSchema(value.variables)
  );
}

function isModuleSchema(value: unknown): value is WorkshopModuleSchema {
  return isVariableRecord(
    value,
    (schema) =>
      isRecord(schema) &&
      typeof schema.isList === "boolean" &&
      (schema.type === "string" ||
        schema.type === "number" ||
        schema.type === "boolean"),
  );
}

/**
 * Validates a partial update against a module's declared variable types.
 * Throws a TypeError for an invalid schema, unknown external ID, or incompatible value.
 * Null clears a declared variable; omitted variables remain unchanged. Values are not coerced.
 */
export function validateVariableValues(
  schema: WorkshopModuleSchema,
  values: unknown,
): asserts values is WorkshopVariableValues {
  if (!isModuleSchema(schema)) {
    throw new TypeError("Invalid Workshop module schema.");
  }
  if (!isVariableValues(values)) {
    throw new TypeError("Invalid Workshop variable values.");
  }
  for (const [externalId, value] of Object.entries(values)) {
    if (!Object.hasOwn(schema, externalId)) {
      throw new TypeError(`Unknown Workshop variable: ${externalId}.`);
    }
    if (value == null) continue;
    const definition = schema[externalId];
    const isList = Array.isArray(value);
    const elements = isList ? value : [value];
    if (
      isList !== definition.isList ||
      !elements.every((element) => typeof element === definition.type)
    ) {
      const expected = `${definition.type}${definition.isList ? "[]" : ""}`;
      const received = isList ? "array" : typeof value;
      throw new TypeError(
        `Workshop variable "${externalId}" expects ${expected}; received ${received}.`,
      );
    }
  }
}
