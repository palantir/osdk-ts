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

export { connectToWorkshopModule } from "./connectToWorkshopModule.js";
export type { ConnectToWorkshopModuleOptions } from "./connectToWorkshopModule.js";
export type {
  WorkshopModuleConnection,
  WorkshopModuleConnectHandler,
} from "./connection.js";
export { listenForWorkshopModuleEmbedMessages } from "./listenForWorkshopModuleEmbedMessages.js";
export type { ListenForWorkshopModuleEmbedMessagesOptions } from "./listenForWorkshopModuleEmbedMessages.js";
export {
  isWorkshopEmbedMessage,
  WORKSHOP_EMBED_CHANNEL,
  WORKSHOP_EMBED_MESSAGE_TYPES,
  WORKSHOP_EMBED_QUERY_PARAM,
  WORKSHOP_EMBED_QUERY_VALUE,
  WORKSHOP_EMBED_VERSION,
} from "./protocol.js";
export type { WorkshopEmbedMessage } from "./protocol.js";
