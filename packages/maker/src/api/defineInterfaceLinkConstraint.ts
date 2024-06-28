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
type ApiNameOrMeta = string | Meta;

type Many = { type: InterfaceType; many: ApiNameOrMeta; one?: never };
type One = { type: InterfaceType; one: ApiNameOrMeta; many?: never };

export function defineInterfaceLinkConstraint(
  { from, to }: {
    from: Many;
    to: One;
  } | {
    from: One;
    to: One | Many;
  },
) {
  invariant(
    (from.one == null && from.many) || (from.one && from.many == null),
    "from should have either one or many, not both",
  );

  invariant(
    (to.one == null && to.many) || (to.one && to.many == null),
    "to should have either one or many, not both",
  );

  invariant(!(from.many && to.many), "many to many is not supported");

  const fromLinkMeta = getLinkMeta(from.one ?? from.many);
  const toLinkMeta = getLinkMeta(to.one ?? to.many);

  invariant(
    from.type.links.find(a => a.metadata.apiName === fromLinkMeta.apiName)
      == null,
    `Link with apiName ${fromLinkMeta.apiName} already exists on ${from.type.apiName}`,
  );
  invariant(
    to.type.links.find(a => a.metadata.apiName === toLinkMeta.apiName) == null,
    `Link with apiName ${toLinkMeta.apiName} already exists on ${to.type.apiName}`,
  );

  from.type.links.push({
    cardinality: from.many ? "MANY" : "SINGLE",
    linkedEntityTypeId: getLinkedType(to.type),
    metadata: fromLinkMeta,
    required: true, // TODO: expose this?
  });

  to.type.links.push({
    cardinality: to.one ? "SINGLE" : "MANY",
    linkedEntityTypeId: getLinkedType(from.type),
    metadata: toLinkMeta,
    required: true, // TODO: expose this?
  });
}

function getLinkedType(t: InterfaceType) {
  return {
    type: "interfaceType" as const,
    interfaceType: t.apiName,
  };
}

function getLinkMeta(meta: ApiNameOrMeta) {
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
