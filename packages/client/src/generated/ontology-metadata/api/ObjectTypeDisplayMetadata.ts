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

import type { Icon } from "./Icon.js";
import type { Visibility } from "./Visibility.js";

/**
 * This includes metadata which can be used by front-ends when displaying the ObjectType.
 */
export interface ObjectTypeDisplayMetadata {
  description: string | undefined;
  displayName: string;
  groupDisplayName: string | undefined;
  icon: Icon;
  pluralDisplayName: string;
  visibility: Visibility;
}
