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
// Resource identifier syntax, restricted to the object-set service.
const OBJECT_SET_RID_PATTERN =
  /^ri\.object-set\.(?:[a-z0-9][a-z0-9-]*)?\.[a-z][a-z0-9-]*\.[a-zA-Z0-9_.-]+$/u;

/** An object-set reference. The RID must be accessible to the receiving application. @public */
export interface WorkshopObjectSetValue {
  /** RID of the referenced object set. */
  readonly objectSetRid: string;
}

/** A single variable value. Numbers must be finite. @public */
export type WorkshopSingleVariableValue =
  | string
  | number
  | boolean
  | WorkshopObjectSetValue;

/** A single value or array. Arrays must be homogeneous; null clears the whole variable. @public */
export type WorkshopVariableValue =
  | WorkshopSingleVariableValue
  | readonly string[]
  | readonly number[]
  | readonly boolean[]
  | null;

/** A map from external IDs to supported variable values. @public */
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
      "Variable values must map non-empty, non-reserved external IDs that are unique ignoring case to strings, finite numbers, booleans, homogeneous arrays of those primitives, object-set references, or null.",
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
  return isVariableRecord(value, isVariableValue);
}

export function isVariableRecord(
  value: unknown,
  isValue: (input: unknown) => boolean,
): value is Record<string, unknown> {
  if (!isRecord(value)) return false;

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

function isVariableValue(value: unknown): value is WorkshopVariableValue {
  if (value == null) return value !== undefined;
  if (!Array.isArray(value)) {
    return isScalarValue(value) || isObjectSetValue(value);
  }

  const elementType = typeof value[0];
  // Iteration also checks sparse entries, which Array.prototype.every skips.
  for (const element of value) {
    if (typeof element !== elementType || !isScalarValue(element)) return false;
  }
  return true;
}

function isScalarValue(value: unknown): value is string | number | boolean {
  return (
    typeof value === "string" ||
    typeof value === "boolean" ||
    (typeof value === "number" && Number.isFinite(value))
  );
}

export function isObjectSetValue(
  value: unknown,
): value is WorkshopObjectSetValue {
  return (
    isRecord(value) &&
    typeof value.objectSetRid === "string" &&
    OBJECT_SET_RID_PATTERN.test(value.objectSetRid)
  );
}
