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

// TODO: Add osdk metrics
// This component uses platformClient, maybe we want to add userAgent header to the platformClient instead
export { AipAgentChat } from "../../aip-agent-chat/AipAgentChat.js";

export type { AipAgentChatProps } from "../../aip-agent-chat/AipAgentChatApi.js";

export { BaseAipAgentChat } from "../../aip-agent-chat/BaseAipAgentChat.js";
export type {
  BaseAipAgentChatProps,
  BaseAipAgentChatSendContext,
  BaseAipAgentChatStatus,
} from "../../aip-agent-chat/BaseAipAgentChat.js";

// Re-exported from @osdk/aip-core so consumers can write a fully-typed
// `renderMessage` / `onFinish` / `initialMessages` without reaching into
// the AIP SDK directly.
export type { UIMessage, UIMessageRole } from "@osdk/aip-core";
export { getUIMessageText } from "@osdk/aip-core";
