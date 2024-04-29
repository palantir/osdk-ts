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

import type { ObjectVersionV1 } from "./ObjectVersionV1.js";
export interface ObjectVersion_v1 {
  type: "v1";
  v1: ObjectVersionV1;
}
/**
 * Version of the returned object.
 * It is guaranteed that the object has not changed as long as the returned value is the same.
 */
export type ObjectVersion = ObjectVersion_v1;
