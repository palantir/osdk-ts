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

import type { AgentParam } from "../../agents/AgentParam.js";
import type { AgentResult } from "../../agents/AgentResult.js";

/** A long agent parameter, represented as a number. */
declare const agentParam_primitiveType_long: AgentParam.PrimitiveType<"long">;

/** A primitive (string) agent parameter. */
declare const agentParam_primitiveType_string: AgentParam.PrimitiveType<"string">;

/** A primitive (timestamp) agent parameter. */
declare const agentParam_primitiveType_timestamp: AgentParam.PrimitiveType<"timestamp">;

/** A long agent result, represented as a number. */
declare const agentResult_primitiveType_long: AgentResult.PrimitiveType<"long">;

/** A primitive (string) agent result. */
declare const agentResult_primitiveType_string: AgentResult.PrimitiveType<"string">;

/** A primitive (timestamp) agent result. */
declare const agentResult_primitiveType_timestamp: AgentResult.PrimitiveType<"timestamp">;
