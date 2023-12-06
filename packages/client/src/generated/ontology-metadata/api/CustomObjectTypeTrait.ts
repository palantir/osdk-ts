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

import type { CustomObjectTypeTraitDisplayName } from "./CustomObjectTypeTraitDisplayName.js";
import type { CustomObjectTypeTraitProperty } from "./CustomObjectTypeTraitProperty.js";
import type { CustomObjectTypeTraitPropertyRid } from "./CustomObjectTypeTraitPropertyRid.js";
import type { CustomObjectTypeTraitRid } from "./CustomObjectTypeTraitRid.js";

/**
 * A CustomObjectTypeTrait is a model that represents a template for an ObjectType(s). For example, there could
 * be an Alert CustomObjectTypeTrait and multiple alert ObjectType(s) can be derived from it.
 */
export interface CustomObjectTypeTrait {
  displayName: CustomObjectTypeTraitDisplayName;
  rid: CustomObjectTypeTraitRid;
  properties: Record<
    CustomObjectTypeTraitPropertyRid,
    CustomObjectTypeTraitProperty
  >;
  redacted: boolean | undefined;
}
