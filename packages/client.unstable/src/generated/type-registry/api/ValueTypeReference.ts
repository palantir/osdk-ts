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

import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";

/**
 * Reference representing a specific version of a Value Type. When versionId is omitted, we assume it is referencing the latest version available at the time.
 */
export interface ValueTypeReference {
  rid: ValueTypeRid;
  versionId: ValueTypeVersionId | undefined;
}
