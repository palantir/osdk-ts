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

/** Scalar types supported by the variable input protocol. @public */
export type WorkshopVariableType = "string" | "number" | "boolean";

/** Local variable definitions keyed by external ID. @public */
export type WorkshopVariableSchema = Readonly<
  Record<string, { readonly type: WorkshopVariableType }>
>;

/** A scalar variable input. Numbers must be finite; null requests clearing the value. @public */
export type WorkshopVariableValue<
  TType extends WorkshopVariableType = WorkshopVariableType,
> =
  | {
      string: string;
      number: number;
      boolean: boolean;
    }[TType]
  | null;

/** Variable inputs keyed by non-empty external IDs. Omitted variables are unchanged. @public */
export type WorkshopVariableValues<
  TSchema extends WorkshopVariableSchema = WorkshopVariableSchema,
> = keyof TSchema extends never
  ? Readonly<Record<string, never>>
  : string extends keyof TSchema
    ? Readonly<Record<string, WorkshopVariableValue<TSchema[string]["type"]>>>
    : {
        readonly [TName in keyof TSchema]?: WorkshopVariableValue<
          TSchema[TName]["type"]
        >;
      };

interface SetVariablesMessage<
  TSchema extends WorkshopVariableSchema = WorkshopVariableSchema,
> extends Omit<WorkshopEmbedMessage, "type"> {
  type: "setVariables";
  values: WorkshopVariableValues<TSchema>;
}

export function createSetVariablesMessage<
  TSchema extends WorkshopVariableSchema,
>(
  sessionId: string,
  values: WorkshopVariableValues<TSchema>,
  schema: TSchema | undefined,
): SetVariablesMessage<TSchema> {
  if (!isVariableValues(values, schema)) {
    throw new TypeError(
      "Variable inputs must contain supported scalar values and match the declared variable schema when provided.",
    );
  }
  return {
    channel: WORKSHOP_EMBED_CHANNEL,
    version: WORKSHOP_EMBED_VERSION,
    sessionId,
    type: "setVariables",
    values,
  };
}

export function isSetVariablesMessage<TSchema extends WorkshopVariableSchema>(
  value: unknown,
  schema: TSchema | undefined,
): value is SetVariablesMessage<TSchema> {
  return (
    isRecord(value) &&
    value.channel === WORKSHOP_EMBED_CHANNEL &&
    value.version === WORKSHOP_EMBED_VERSION &&
    typeof value.sessionId === "string" &&
    value.sessionId.length > 0 &&
    value.type === "setVariables" &&
    isVariableValues(value.values, schema)
  );
}

export function snapshotVariableSchema<TSchema extends WorkshopVariableSchema>(
  schema: TSchema | undefined,
): TSchema | undefined {
  if (schema === undefined) return undefined;
  const entries = isRecord(schema) ? Object.entries(schema) : undefined;
  if (
    entries === undefined ||
    !entries.every(
      ([name, definition]) =>
        name.length > 0 &&
        isRecord(definition) &&
        (definition.type === "string" ||
          definition.type === "number" ||
          definition.type === "boolean"),
    )
  ) {
    throw new TypeError(
      "Variable schemas must map non-empty external IDs to string, number, or boolean type definitions.",
    );
  }
  // A caller changing the config must not change an established connection's types.
  return Object.fromEntries(
    entries.map(([name, definition]) => [name, { ...definition }]),
  ) as TSchema;
}

function isVariableValues<TSchema extends WorkshopVariableSchema>(
  value: unknown,
  schema: TSchema | undefined,
): value is WorkshopVariableValues<TSchema> {
  if (!isRecord(value)) return false;
  return Object.entries(value).every(([externalId, input]) => {
    if (externalId.length === 0 || input === undefined) return false;
    if (
      input != null &&
      typeof input !== "string" &&
      typeof input !== "number" &&
      typeof input !== "boolean"
    ) {
      return false;
    }
    if (typeof input === "number" && !Number.isFinite(input)) return false;
    if (schema === undefined) return true;
    return (
      Object.hasOwn(schema, externalId) &&
      (input == null || typeof input === schema[externalId]?.type)
    );
  });
}
