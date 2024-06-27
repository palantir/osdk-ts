/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export type {
  StreamMessage,
  SubscriptionClosed,
} from "./generated/object-set-watcher/objectsetwatcher/api/index.js";
export type {
  Message,
  Message_objectSetChanged,
} from "./generated/object-set-watcher/objectsetwatcher/api/Message.js";
export type { FoundryObject } from "./generated/object-set-watcher/objectsetwatcher/api/object/FoundryObject.js";
export type { ObjectSetSubscribeRequest } from "./generated/object-set-watcher/objectsetwatcher/api/ObjectSetSubscribeRequest.js";
export type { ObjectSetSubscribeRequests } from "./generated/object-set-watcher/objectsetwatcher/api/ObjectSetSubscribeRequests.js";
export type { ObjectSetSubscribeResponses } from "./generated/object-set-watcher/objectsetwatcher/api/ObjectSetSubscribeResponses.js";
export type {
  ObjectUpdate_object,
} from "./generated/object-set-watcher/objectsetwatcher/api/ObjectUpdate.js";
export type { RefreshObjectSet } from "./generated/object-set-watcher/objectsetwatcher/api/RefreshObjectSet.js";
export type { StreamMessage_objectSetChanged } from "./generated/object-set-watcher/objectsetwatcher/api/StreamMessage.js";
export type { StreamMessage_subscribeResponses } from "./generated/object-set-watcher/objectsetwatcher/api/StreamMessage.js";

export { batchEnableWatcher } from "./generated/object-set-watcher/objectsetwatcher/api/ObjectSetWatchService.js";
