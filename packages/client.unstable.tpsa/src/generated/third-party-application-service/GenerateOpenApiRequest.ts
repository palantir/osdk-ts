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

import type { DataScopeV2 } from "./DataScopeV2.js";
import type { ServerUrl } from "./ServerUrl.js";

/**
 * A request to generate an OpenAPI specification against a particular set of ontology entities.
 */
export interface GenerateOpenApiRequest {
  serverUrl: ServerUrl | undefined;
  dataScope: DataScopeV2;
}
