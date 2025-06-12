/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ResolvedInputShape as _api_ResolvedInputShape,
  ResolvedOutputShape as _api_ResolvedOutputShape,
} from "../__components.js";

/**
 * To help report cases where we try to package input shapes that are also output shapes, we use an object
 * that pairs together a resolvedInputShape's blockId and a resolvedOutputShape's blockId with their common
 * ShapeMergeKey.
 */
export interface InputOutputShapePair {
  inputShapes: Array<_api_ResolvedInputShape>;
  outputShapes: Array<_api_ResolvedOutputShape>;
}
