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

export { generateText } from "./generateText.js";
export type {
  GenerateTextOptions,
  GenerateTextResult,
  PrepareStepOptions,
  PrepareStepResult,
  StopCondition,
} from "./generateText.js";

export { streamText } from "./streamText.js";
export type {
  StreamTextOptions,
  StreamTextResult,
  TextStreamChunk,
} from "./streamText.js";

export { LmsChatTransport, lmsChatTransport } from "./lmsChatTransport.js";
export type { LmsChatTransportOptions } from "./lmsChatTransport.js";

export { foundryModel } from "./model.js";
export type {
  FoundryModelOptions,
  LanguageModel,
  ModelIdentifier,
} from "./model.js";

export type {
  ChatTransport,
  ChatTransportReconnectArgs,
  ChatTransportSendMessagesArgs,
  ChatTransportTrigger,
  UIMessage,
  UIMessageChunk,
  UIMessagePart,
  UIMessageRole,
} from "./uiMessage.js";

export type {
  AssistantModelMessage,
  ContentPart,
  FilePart,
  FinishReason,
  GeneratedFile,
  ImagePart,
  LanguageModelUsage,
  ModelMessage,
  ProviderMetadata,
  ProviderOptions,
  ReasoningOutput,
  ReasoningPart,
  RequestMetadata,
  ResponseMetadata,
  Role,
  Source,
  StepResult,
  SystemModelMessage,
  TextPart,
  Tool,
  ToolCall,
  ToolCallPart,
  ToolChoice,
  ToolExecutionContext,
  ToolModelMessage,
  ToolResult,
  ToolResultOutput,
  ToolResultPart,
  ToolSet,
  UserModelMessage,
  Warning,
} from "./types.js";
