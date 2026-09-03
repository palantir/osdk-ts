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

export const EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS: number = 1000;
export const EXPONENTIAL_BACKOFF_JITTER_FACTOR: number = 0.3;
export const EXPONENTIAL_BACKOFF_MAX_DELAY_MS: number = 60000;
export const EXPONENTIAL_BACKOFF_MULTIPLIER: number = 2;
export const WEBSOCKET_HEARTBEAT_INTERVAL_MS: number = 45 * 1000;
export const WEBSOCKET_IDLE_DISCONNECT_DELAY_MS: number = 15 * 1000;

/** @internal */
export function constructWebsocketUrl(
  baseUrl: string,
  ontologyRid: string,
): URL {
  return constructOntologySubscriptionsWebsocketUrl({
    baseUrl,
    endpoint: "streamSubscriptions",
    ontologyRid,
  });
}

/** @internal */
export function constructLinkSubscriptionWebsocketUrl(
  baseUrl: string,
  ontologyRid: string,
): URL {
  return constructOntologySubscriptionsWebsocketUrl({
    baseUrl,
    endpoint: "linkTypeSubscriptions",
    ontologyRid,
  });
}

interface ConstructOntologySubscriptionsWebsocketUrlArgs {
  readonly baseUrl: string;
  readonly endpoint: "linkTypeSubscriptions" | "streamSubscriptions";
  readonly ontologyRid: string;
}

function constructOntologySubscriptionsWebsocketUrl({
  baseUrl,
  endpoint,
  ontologyRid,
}: ConstructOntologySubscriptionsWebsocketUrlArgs): URL {
  const base = new URL(baseUrl);
  const url = new URL(
    `api/v2/ontologySubscriptions/ontologies/${ontologyRid}/${endpoint}`,
    base,
  );
  url.protocol = url.protocol.replace("https", "wss");
  return url;
}

let uuidCounter = 0;

export function nextUuid(): string {
  return `00000000-0000-0000-0000-${(uuidCounter++)
    .toString()
    .padStart(12, "0")}`;
}
