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

import type { DataNullability } from "../DataNullability.js";

/**
 * Constraints that apply to any data in this property. The constraints will be enforced by the storage
 * backends. PropertyType type specific constraints can't be modified directly, since they are currently
 * loaded from value types.
 */
export interface DataConstraintsModification {
  nullability: DataNullability | undefined;
}
