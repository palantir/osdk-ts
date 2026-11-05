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

/** @beta */
export interface AgentSession {
  readonly id: string;

  /**
   * Gets the state of the session. Polls internally until the session state has caught up to the latest
   * known event.
   *
   * @throws {AgentGetStateTimeoutError} if the session state does not catch up within the specified timeout.
   *
   * @beta
   */
  experimental_getState(
    $options?: AgentGetStateOptions,
  ): Promise<AgentSessionState>;

  /**
   * Sends an event to a session. Blocks until the event has been accepted, up to the specified timeout.
   *
   * @throws {AgentSendEventTimeoutError} if the session does not become ready to accept events within the specified timeout.
   *
   * @beta
   */
  experimental_sendEvent(
    event: Record<string, unknown>,
    $options?: AgentSendEventOptions,
  ): Promise<void>;
}

/** @beta */
export interface AgentGetStateOptions {
  /**
   * The duration in milliseconds to wait for the session to catch up.
   *
   * Defaults to 30 seconds.
   */
  $timeoutMs?: number;
  /**
   * The delay in milliseconds between reads when the session has not caught up.
   *
   * Defaults to 1 second.
   */
  $pollIntervalMs?: number;
}

/** @beta */
export type AgentSessionStatus =
  | { type: "live" }
  | { type: "completed" }
  | { type: "failed" }
  | { type: "canceled" };

/** @beta */
export interface AgentContextItem {
  type: string;
  data: unknown;
}

/** @beta */
export interface UnknownAgentContextItem extends AgentContextItem {
  type: "$unknown";
  contextItemType: string;
}

/** @beta */
export interface AgentSessionState {
  arguments: Record<string, unknown>;
  status: AgentSessionStatus;
  agentState: { data: unknown };
  contextItems: Record<string, AgentContextItem | UnknownAgentContextItem>;
  contextItemOrder: string[];
}

/** @beta */
export interface AgentSendEventOptions {
  /**
   * The duration in milliseconds to wait for the event to be accepted.
   *
   * Defaults to 30 seconds.
   */
  $timeoutMs?: number;

  /**
   * The delay in milliseconds between attempts when the session is not ready to accept events.
   *
   * Defaults to 1 second.
   */
  $pollIntervalMs?: number;
}
