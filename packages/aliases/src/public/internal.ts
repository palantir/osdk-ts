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

// Internal compatibility entry point for the synchronous @osdk/functions Aliases
// API. Direct imports from application code are unsupported.
export { customForNode as custom } from "../customForNode.js";
export type { Custom } from "../customForNode.js";
export * from "../dataset.js";
export * from "../mediaset.js";
export * from "../model.js";
export * from "../source.js";
export * from "../stream.js";
