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

import invariant from "tiny-invariant";
import type { InterfaceType } from "./types.js";

type Meta = { apiName: string; displayName?: string; description?: string };
type ApiNameOrInterfaceType = string | InterfaceType;


type Many = {
  apiName: string;
  from: InterfaceType;
  toMany: ApiNameOrInterfaceType;
  toOne?: never;
  displayName?: string;
  description?: string;
};
type One = {
  apiName: string;
  from: InterfaceType;
  toOne: ApiNameOrInterfaceType;
  toMany?: never;
  displayName?: string;
  description?: string;
};

export function defineInterfaceLinkConstraint(
  linkDef: One | Many,
) {

  const fromLinkMeta = getLinkMeta(linkDef);

  invariant(
    linkDef.from.links.find(a => a.metadata.apiName === fromLinkMeta.apiName) == null,
    `Link with apiName ${fromLinkMeta.apiName} already exists on ${linkDef.apiName}`,
  );

  linkDef.from.links.push({
    cardinality: linkDef.toMany ? "MANY" : "SINGLE",
    linkedEntityTypeId: getLinkedType(linkDef.toMany ?? linkDef.toOne),
    metadata: fromLinkMeta,
    required: true, // TODO: expose this?
  });
}

function getLinkedType(t: string | InterfaceType) {
  return {
    type: "interfaceType" as const,
    interfaceType: typeof t === "string" ? t : t.apiName,
  };
}

function getLinkMeta(meta: One | Many) {
  return typeof meta === "string"
    ? withDefaults({ apiName: meta })
    : withDefaults(meta);
}

function withDefaults(
  { apiName, description, displayName }: Meta,
): Required<Meta> {
  return {
    apiName,
    displayName: displayName ?? apiName,
    description: description ?? displayName ?? apiName,
  };
}
