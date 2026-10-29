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

import { isRecord } from "./isRecord.js";

/** URL parameter that enables the Workshop-side listener. @public */
export const WORKSHOP_EMBED_QUERY_PARAM = "workshopEmbed";

/** Value required for the Workshop embed opt-in. @public */
export const WORKSHOP_EMBED_QUERY_VALUE = "1";

/** Identifies messages belonging to the Workshop embedding protocol. @public */
export const WORKSHOP_EMBED_CHANNEL = "workshop-module-embed";

/** Wire protocol version, independent of the npm package version. @public */
export const WORKSHOP_EMBED_VERSION = 1;

/** Supported handshake and lifecycle message types. @public */
export const WORKSHOP_EMBED_MESSAGE_TYPES = [
  "probe",
  "available",
  "connect",
  "connected",
  "disconnect",
] as const;
Object.freeze(WORKSHOP_EMBED_MESSAGE_TYPES);

/** A supported handshake or lifecycle message type. @public */
export type WorkshopEmbedMessageType =
  (typeof WORKSHOP_EMBED_MESSAGE_TYPES)[number];

/** Handshake and lifecycle messages. connect transfers one port outside this object. @public */
export interface WorkshopEmbedMessage {
  channel: typeof WORKSHOP_EMBED_CHANNEL;
  version: typeof WORKSHOP_EMBED_VERSION;
  sessionId: string;
  type: WorkshopEmbedMessageType;
}

/** Validates an untrusted handshake or lifecycle message at runtime. @public */
export function isWorkshopEmbedMessage(
  value: unknown,
): value is WorkshopEmbedMessage {
  return (
    isRecord(value) &&
    value.channel === WORKSHOP_EMBED_CHANNEL &&
    value.version === WORKSHOP_EMBED_VERSION &&
    typeof value.sessionId === "string" &&
    value.sessionId.length > 0 &&
    WORKSHOP_EMBED_MESSAGE_TYPES.some((type) => type === value.type)
  );
}

export function createMessage(
  type: WorkshopEmbedMessageType,
  sessionId: string,
): WorkshopEmbedMessage {
  return {
    channel: WORKSHOP_EMBED_CHANNEL,
    version: WORKSHOP_EMBED_VERSION,
    sessionId,
    type,
  };
}
