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

import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { ObjectIdentifiers } from "../OsdkBase.js";

export type LinkTypeApiNamesFor<Q extends ObjectOrInterfaceDefinition> =
  Extract<keyof CompileTimeMetadata<Q>["links"], string>;

type LinkedObjectType<
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
> = NonNullable<
  CompileTimeMetadata<Q>["links"][LINK_TYPE_API_NAME]["__OsdkLinkTargetType"]
>;

export type MinimalDirectedObjectLinkInstance<
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
> = {
  source: ObjectIdentifiers<Q>;
  target: ObjectIdentifiers<LinkedObjectType<Q, LINK_TYPE_API_NAME>>;
  linkType: LINK_TYPE_API_NAME;
};

export type FetchLinksPageResult<
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPE extends LinkTypeApiNamesFor<Q>,
> = {
  data: Array<MinimalDirectedObjectLinkInstance<Q, LINK_TYPE>>;
  nextPageToken?: string;
};
