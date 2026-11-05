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

const RESERVED_EXTERNAL_IDS = ["_open_rebase_dialog", "_kiosk_mode_session_id"];

/** A scalar variable value. Numbers must be finite; null represents a cleared value. @public */
export type WorkshopVariableValue = string | number | boolean | null;

/** A map from external IDs to supported scalar values. @public */
export type WorkshopVariableMap = {
  [externalId: string]: WorkshopVariableValue;
};

/** Variable updates keyed by non-empty external IDs. Omitted variables are unchanged. @public */
export type WorkshopVariableValues<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
> = {
  readonly [Name in keyof TVariables]?: TVariables[Name] | null;
};

interface SetVariablesMessage extends Omit<WorkshopEmbedMessage, "type"> {
  type: "setVariables";
  values: Readonly<WorkshopVariableMap>;
}

export function createSetVariablesMessage(
  sessionId: string,
  values: WorkshopVariableValues,
): SetVariablesMessage {
  if (!isVariableValues(values)) {
    throw new TypeError(
      "Variable values must map non-empty, non-reserved external IDs that are unique ignoring case to strings, finite numbers, booleans, or null.",
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

export function isVariableValues(
  value: unknown,
): value is Readonly<WorkshopVariableMap> {
  return isVariableRecord(value, (input) => {
    if (input == null) return input !== undefined;
    return (
      typeof input === "string" ||
      typeof input === "boolean" ||
      (typeof input === "number" && Number.isFinite(input))
    );
  });
}

export function isVariableRecord(
  value: unknown,
  isValue: (input: unknown) => boolean,
): value is Record<string, unknown> {
  if (!isPlainRecord(value)) return false;

  const seenExternalIds = new Set(RESERVED_EXTERNAL_IDS);

  return Object.entries(value).every(([externalId, input]) => {
    const normalizedId = externalId.toLowerCase();

    if (normalizedId.length === 0 || seenExternalIds.has(normalizedId)) {
      return false;
    }

    seenExternalIds.add(normalizedId);

    return isValue(input);
  });
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value)) return false;

  const prototype: unknown = Object.getPrototypeOf(value);
  return (
    prototype == null ||
    (isRecord(prototype) && Object.getPrototypeOf(prototype) == null)
  );
}
