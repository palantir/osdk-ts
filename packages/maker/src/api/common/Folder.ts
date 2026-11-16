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

import type { OntologyEntityTypeEnum } from "./OntologyEntityTypeEnum.js";

/** An installation folder with resolved resource references. */
export interface Folder {
  /** Stable identity. Keep this unchanged when renaming or moving the folder. */
  readonly id: string;
  /** Path relative to the installation root. Ancestor folders are created automatically. */
  readonly folder: string;
  readonly resources: readonly {
    readonly __type: Exclude<
      OntologyEntityTypeEnum,
      OntologyEntityTypeEnum.VALUE_TYPE
    >;
    readonly apiName: string;
  }[];
}
