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

import type { LanguageModel, UIMessage } from "@osdk/aip-core";
import type * as React from "react";

/**
 * Props for {@link AipAgentChat}, an OSDK-aware chat surface that drives the
 * `useChat` hook from `@osdk/react/experimental/aip` against an AIP language
 * model.
 *
 * Default rendering is feature-complete with no overrides supplied; render
 * slots and `on*` listeners are layered on top of the built-in behavior.
 */
export interface AipAgentChatProps {
  /**
   * The AIP language model to chat with. Construct via `foundryModel()` from
   * `@osdk/aip-core`. Drives the underlying `useChat` hook.
   */
  model: LanguageModel;

  /**
   * When provided, the chat renders an in-header model picker populated
   * with these options. Selecting a different option fires
   * {@link AipAgentChatProps.onModelChange}; the consumer is expected to
   * update {@link AipAgentChatProps.model} in response.
   *
   * If omitted, no picker is rendered.
   */
  availableModels?: ReadonlyArray<LanguageModel>;

  /**
   * Fires when the user selects a different model from the in-header
   * picker. Has no effect unless {@link AipAgentChatProps.availableModels}
   * is provided. Consumers are expected to update
   * {@link AipAgentChatProps.model} in response.
   *
   * @param model The model the user just selected.
   */
  onModelChange?: (model: LanguageModel) => void;

  /**
   * System prompt prepended to every request.
   */
  system?: string;

  /**
   * Seed messages — used as the initial conversation snapshot. Forwarded to
   * `useChat`'s `messages` option.
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
   * Whether the message list automatically scrolls to the most recent message
   * as the conversation grows.
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
   * Listener fired once after a stream completes successfully. Forwarded to
   * `useChat`'s `onFinish`.
   *
   * @param event The completed assistant message and the resulting messages array.
   */
  onFinish?: (event: {
    message: UIMessage;
    messages: ReadonlyArray<UIMessage>;
  }) => void;

  /**
   * Render override for the empty state shown when no messages exist yet.
   * If omitted, a default welcome panel is rendered.
   *
   * @returns A React node rendered in place of the default empty state.
   */
  renderEmptyState?: () => React.ReactNode;

  /**
   * Render override for an individual message bubble. If omitted, the
   * default user/assistant bubble layout is used.
   *
   * @param message The {@link UIMessage} to render.
   * @returns A React node rendered in place of the default message bubble.
   */
  renderMessage?: (message: UIMessage) => React.ReactNode;
}
