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

import type { Vector } from "./Vector.js";
export interface KnnQuery_vector {
  type: "vector";
  vector: Vector;
}

export interface KnnQuery_text {
  type: "text";
  text: string;
}
/**
 * Supported ways to query using knn. Can either use a vector directly, or use text which will get embedding using
 * the model specified in the Ontology.
 */
export type KnnQuery = KnnQuery_vector | KnnQuery_text;
