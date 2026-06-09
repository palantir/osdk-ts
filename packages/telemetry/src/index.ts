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
  AttributeValue,
  LogContext,
  LogEntry,
  LogSeverity,
} from "./attributes.js";
export type { CreateLoggingClientOptions } from "./createLoggingClient.js";
export { createLoggingClient } from "./createLoggingClient.js";
export type { SerializedError } from "./errorSerializer.js";
export { serializeError } from "./errorSerializer.js";
export type { BeforeSendHook } from "./flushController.js";
export type { Logger } from "./logger.js";
export type { BuildResourceParams, OtlpResource } from "./resource.js";
export {
  buildResource,
  DEFAULT_PRODUCING_RESOURCE_VERSION,
  DEFAULT_PRODUCING_SERVICE,
  PRODUCING_RESOURCE_IDENTIFIER,
  PRODUCING_RESOURCE_VERSION,
  PRODUCING_SERVICE,
  resourceFromAttributes,
  TRACE_OWNING_RESOURCE_IDENTIFIER,
} from "./resource.js";
export type { LogWriteRequest, Transport } from "./transport.js";
