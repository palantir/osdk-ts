/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FoundryLiveDeployment } from "./FoundryLiveDeployment.js";
import type { LmsEmbeddingModel } from "./LmsEmbeddingModel.js";
export interface TextEmbeddingModel_lms {
  type: "lms";
  lms: LmsEmbeddingModel;
}

export interface TextEmbeddingModel_foundryLiveDeployment {
  type: "foundryLiveDeployment";
  foundryLiveDeployment: FoundryLiveDeployment;
}
export type TextEmbeddingModel =
  | TextEmbeddingModel_lms
  | TextEmbeddingModel_foundryLiveDeployment;
