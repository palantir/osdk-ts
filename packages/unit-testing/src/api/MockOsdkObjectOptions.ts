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

import type {
  CompileTimeMetadata,
  LinkedType,
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";

type LinkStubs<Q extends ObjectTypeDefinition> = {
  [LINK_NAME in LinkNames<Q>]?:
    CompileTimeMetadata<Q>["links"][LINK_NAME]["multiplicity"] extends true ?
        | Array<Osdk.Instance<LinkedType<Q, LINK_NAME>>>
        | ObjectSet<LinkedType<Q, LINK_NAME>>
      : Osdk.Instance<LinkedType<Q, LINK_NAME>> | Error;
};

/**
 * Options for customizing mock object creation.
 */
export interface MockOsdkObjectOptions<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  /** Objects linked to this object by API name */
  links?: LinkStubs<Q>;
  /** The API name of the title property (optional, required for $title) */
  titlePropertyApiName?: string;
  /** Override the generated $rid */
  $rid?: string;
}
