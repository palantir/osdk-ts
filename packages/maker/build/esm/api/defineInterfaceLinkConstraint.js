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
import { namespace } from "./defineOntology.js";
export function defineInterfaceLinkConstraint(linkDef) {
  const fromLinkMeta = getLinkMeta(linkDef);
  !(linkDef.from.links.find(a => a.metadata.apiName === fromLinkMeta.apiName) == null) ? process.env.NODE_ENV !== "production" ? invariant(false, `Link with apiName ${fromLinkMeta.apiName} already exists on ${linkDef.apiName}`) : invariant(false) : void 0;
  linkDef.from.links.push({
    cardinality: linkDef.toMany ? "MANY" : "SINGLE",
    linkedEntityTypeId: getLinkedType(linkDef.toMany ?? linkDef.toOne),
    metadata: fromLinkMeta,
    required: linkDef.required ?? true
  });
}
function getLinkedType(t) {
  return {
    type: "interfaceType",
    interfaceType: typeof t === "string" ? t : t.apiName
  };
}
function getLinkMeta(meta) {
  return typeof meta === "string" ? withDefaults({
    apiName: namespace + meta
  }) : withDefaults(meta);
}
function withDefaults({
  apiName,
  description,
  displayName
}) {
  return {
    apiName: namespace + apiName,
    displayName: displayName ?? apiName,
    description: description ?? displayName ?? apiName
  };
}
//# sourceMappingURL=defineInterfaceLinkConstraint.js.map