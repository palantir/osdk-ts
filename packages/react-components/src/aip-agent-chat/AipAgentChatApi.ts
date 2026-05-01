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

import type { UIMessage } from "@osdk/aip-core";
import type { PlatformClient } from "@osdk/client";
import type * as React from "react";

/**
 * Props for {@link AipAgentChat}, an OSDK-aware chat surface that wires
 * `useChat` from `@osdk/react/experimental/aip` against a Foundry LMS
 * model. Consumers do not need to import `useChat` or `foundryModel`
 * themselves — passing the platform client and a model API name is
 * enough to render a working chat.
 *
 * Default rendering is feature-complete with no overrides supplied;
 * render slots and `on*` listeners are layered on top of the built-in
 * behavior.
 */
export interface AipAgentChatProps {
  /**
   * Foundry platform client returned by `createPlatformClient` from
   * `@osdk/client`. Used internally to construct the LMS-backed model
   * for `useChat`.
   */
  client: PlatformClient;

  /**
   * Active LMS model API name (for example `"gpt-4o"`). Resolved
   * internally via `foundryModel({ client, model })`.
   *
   * Controlled mode: when provided, the consumer holds the model state.
   * Updates from the picker fire {@link AipAgentChatProps.onModelChange};
   * the consumer is expected to update this prop in response.
   *
   * Uncontrolled mode: omit and pass {@link AipAgentChatProps.defaultModel}
   * instead.
   *
   * At least one of `model` or `defaultModel` is required.
   */
  model?: string;

  /**
   * Initial LMS model API name for uncontrolled mode. The component
   * manages model state internally, switching when the user picks a
   * different option from the picker. Ignored when
   * {@link AipAgentChatProps.model} is also provided (controlled mode
   * wins).
   *
   * At least one of `model` or `defaultModel` is required.
   */
  defaultModel?: string;

  /**
   * When provided, the chat renders a model picker in the composer
   * footer populated with these API names.
   *
   * If omitted, no picker is rendered.
   */
  availableModels?: ReadonlyArray<string>;

  /**
   * Fires when the user selects a different model API name from the
   * picker.
   *
   * - **Controlled mode** (`model` is set): the consumer is expected to
   *   update {@link AipAgentChatProps.model} in response.
   * - **Uncontrolled mode** (only `defaultModel` is set): a
   *   non-controlling listener; the picker still mutates internal state
   *   regardless. Use this for analytics or to persist the user's
   *   choice.
   *
   * Has no effect unless {@link AipAgentChatProps.availableModels} is
   * provided.
   *
   * @param model The model API name the user just selected.
   */
  onModelChange?: (model: string) => void;

  /**
   * System prompt prepended to every request.
   */
  system?: string;

  /**
   * Seed messages — used as the initial conversation snapshot. Forwarded
   * to `useChat`'s `messages` option.
   */
  initialMessages?: ReadonlyArray<UIMessage>;

  /**
   * Additional CSS class name applied to the root chat container.
   */
  className?: string;

  /**
   * Placeholder text for the message composer input.
   *
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Whether the message list automatically scrolls to the most recent
   * message as the conversation grows.
   *
   * @default true
   */
  enableAutoScroll?: boolean;

  /**
   * Listener fired when the underlying chat hook surfaces an error
   * (for example a failed send or a dropped stream). Forwarded to
   * `useChat`'s `onError`.
   *
   * @param error The error reported by the chat backend.
   */
  onError?: (error: Error) => void;

  /**
   * Listener fired once after a stream completes successfully. Forwarded
   * to `useChat`'s `onFinish`.
   *
   * @param event The completed assistant message and the resulting
   *   messages array.
   */
  onFinish?: (event: {
    message: UIMessage;
    messages: ReadonlyArray<UIMessage>;
  }) => void;

  /**
   * Render override for the empty state shown when no messages exist
   * yet. If omitted, a default welcome panel is rendered.
   *
   * @returns A React node rendered in place of the default empty state.
   */
  renderEmptyState?: () => React.ReactNode;

  /**
   * Render override for an individual message bubble. If omitted, the
   * default user/assistant bubble layout is used.
   *
   * @param message The {@link UIMessage} to render.
   * @returns A React node rendered in place of the default message
   *   bubble.
   */
  renderMessage?: (message: UIMessage) => React.ReactNode;
}
