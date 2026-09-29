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

import type { OsdkMetadata } from "../OsdkMetadata.js";

/** @experimental */
export interface AgentContextItem {
  type: string;
  data: unknown;
}

/** @experimental */
export interface UnknownContextItem extends AgentContextItem {
  type: "$unknown";
  contextItemType: string;
}

/** @experimental */
export interface AgentTypeDefinition {
  arguments: object;
  argumentValues: object;
  events: object;
  state: unknown;
  contextItem: AgentContextItem;
}

/** @experimental */
export interface GenericAgentTypes extends AgentTypeDefinition {
  arguments: Record<string, unknown>;
  argumentValues: Record<string, unknown>;
  events: Record<string, unknown>;
}

/** @experimental */
export interface AgentDefinition {
  type: "agent";
  apiName: string;
  version: string;
  osdkMetadata?: OsdkMetadata;
  contextItemTypes?: readonly string[];
  __DefinitionMetadata?: AgentTypeDefinition;
}

/** @experimental */
export type AgentTypes<D extends AgentDefinition> =
  AgentTypeDefinition extends NonNullable<D["__DefinitionMetadata"]>
    ? GenericAgentTypes
    : NonNullable<D["__DefinitionMetadata"]>;

/** @experimental */
export type AgentEvent<Events extends object> = {
  [K in keyof Events & string]: { readonly [P in K]: Events[K] } & {
    readonly [P in Exclude<keyof Events, K>]?: never;
  };
}[keyof Events & string];

/** @experimental */
export interface AgentSessionOptions {
  $timeoutMs?: number;
}

/** @experimental */
export type AgentSessionStatus =
  | { type: "live" }
  | { type: "completed" }
  | { type: "failed" }
  | { type: "canceled" };

/** @experimental */
export interface AgentSessionState<
  T extends AgentTypeDefinition = GenericAgentTypes,
> {
  arguments: T["argumentValues"];
  status: AgentSessionStatus;
  agentState: { data: T["state"] };
  contextItems: Record<string, T["contextItem"] | UnknownContextItem>;
  contextItemOrder: string[];
}

/** @experimental */
export interface AgentSession<
  T extends AgentTypeDefinition = GenericAgentTypes,
> {
  readonly id: string;
  /** @experimental */
  sendEvent(
    event: AgentEvent<T["events"]>,
    options?: AgentSessionOptions,
  ): Promise<void>;
  /** @experimental */
  getState(options?: AgentSessionOptions): Promise<AgentSessionState<T>>;
}

/** @experimental */
export interface AgentClient<D extends AgentDefinition = AgentDefinition> {
  /** @experimental */
  createSession(
    ...args: {} extends AgentTypes<D>["arguments"]
      ? [args?: AgentTypes<D>["arguments"]]
      : [args: AgentTypes<D>["arguments"]]
  ): Promise<AgentSession<AgentTypes<D>>>;
  /** @experimental */
  getSession(id: string): Promise<AgentSession<AgentTypes<D>>>;
}
