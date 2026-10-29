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

import { WORKSHOP_EMBED_CHANNEL, WORKSHOP_EMBED_VERSION } from "./protocol.js";
import type { WorkshopEmbedMessage } from "./protocol.js";

/** A scalar variable input. Numbers must be finite; null requests clearing the value. @public */
export type WorkshopVariableValue = string | number | boolean | null;

/** Variable inputs keyed by non-empty external IDs. Omitted variables are unchanged. @public */
export type WorkshopVariableValues = Readonly<
  Record<string, WorkshopVariableValue>
>;

interface SetVariablesMessage extends Omit<WorkshopEmbedMessage, "type"> {
  type: "setVariables";
  values: WorkshopVariableValues;
}

export function createSetVariablesMessage(
  sessionId: string,
  values: WorkshopVariableValues,
): SetVariablesMessage {
  if (!isVariableValues(values)) {
    throw new TypeError(
      "Variable inputs must map non-empty external IDs to strings, finite numbers, booleans, or null.",
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

export function isSetVariablesMessage(
  value: unknown,
): value is SetVariablesMessage {
  return (
    isRecord(value) &&
    value.channel === WORKSHOP_EMBED_CHANNEL &&
    value.version === WORKSHOP_EMBED_VERSION &&
    typeof value.sessionId === "string" &&
    value.sessionId.length > 0 &&
    value.type === "setVariables" &&
    isVariableValues(value.values)
  );
}

function isVariableValues(value: unknown): value is WorkshopVariableValues {
  return (
    isRecord(value) &&
    Object.entries(value).every(
      ([externalId, input]) =>
        externalId.length > 0 &&
        ((typeof input === "object" && input == null) ||
          typeof input === "string" ||
          typeof input === "boolean" ||
          (typeof input === "number" && Number.isFinite(input))),
    )
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return (
    value != null &&
    typeof value === "object" &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}
