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

/** URL parameter that enables the Workshop-side listener. @public */
export const WORKSHOP_EMBED_QUERY_PARAM = "workshopEmbed";

/** Value required for the Workshop embed opt-in. @public */
export const WORKSHOP_EMBED_QUERY_VALUE = "1";

/** Identifies messages belonging to the Workshop embedding protocol. @public */
export const WORKSHOP_EMBED_CHANNEL = "workshop-module-embed";

/** Wire protocol version, independent of the npm package version. @public */
export const WORKSHOP_EMBED_VERSION = 1;

/** Handshake and lifecycle messages. connect transfers one port outside this object. @public */
export interface WorkshopEmbedMessage {
  channel: typeof WORKSHOP_EMBED_CHANNEL;
  version: typeof WORKSHOP_EMBED_VERSION;
  sessionId: string;
  type: "probe" | "available" | "connect" | "connected" | "disconnect";
}

/** Validates an untrusted handshake or lifecycle message at runtime. @public */
export function isWorkshopEmbedMessage(
  value: unknown,
): value is WorkshopEmbedMessage {
  return (
    value != null &&
    typeof value === "object" &&
    "channel" in value &&
    value.channel === WORKSHOP_EMBED_CHANNEL &&
    "version" in value &&
    value.version === WORKSHOP_EMBED_VERSION &&
    "sessionId" in value &&
    typeof value.sessionId === "string" &&
    value.sessionId.length > 0 &&
    "type" in value &&
    (value.type === "probe" ||
      value.type === "available" ||
      value.type === "connect" ||
      value.type === "connected" ||
      value.type === "disconnect")
  );
}

export function createMessage(
  type: WorkshopEmbedMessage["type"],
  sessionId: string,
): WorkshopEmbedMessage {
  return {
    channel: WORKSHOP_EMBED_CHANNEL,
    version: WORKSHOP_EMBED_VERSION,
    sessionId,
    type,
  };
}
