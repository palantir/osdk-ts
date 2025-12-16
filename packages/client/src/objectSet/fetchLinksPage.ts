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

import type {
  FetchLinksPageResult,
  LinkTypeApiNamesFor,
  ObjectIdentifiers,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { MinimalClient } from "../MinimalClientContext.js";

/** @internal */
export const fetchLinksPage = async <
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPES extends LinkTypeApiNamesFor<Q>,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: OntologiesV2.ObjectSet,
  links: LINK_TYPES[],
): Promise<FetchLinksPageResult<Q, LINK_TYPES>> => {
  if (objectType.type === "interface") {
    throw new Error("Interface object sets are not supported yet.");
  }

  void client.ontologyProvider.getObjectDefinition(objectType.apiName).catch(
    () => {},
  );

  const result = await OntologiesV2.OntologyObjectSets.loadLinks(
    client,
    await client.ontologyRid,
    {
      objectSet,
      links,
    },
    { branch: client.branch, preview: true },
  );

  return remapLinksPage(result);
};

/** @internal */
export const remapLinksPage = <
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPES extends LinkTypeApiNamesFor<Q>,
>(
  wireLinksPage: OntologiesV2.LoadObjectSetLinksResponseV2,
): FetchLinksPageResult<Q, LINK_TYPES> => {
  return {
    ...wireLinksPage,
    data: wireLinksPage.data.flatMap(({ sourceObject, linkedObjects }) =>
      linkedObjects.map(({ targetObject, linkType }) => ({
        source: remapObjectLocator(sourceObject!),
        target: remapObjectLocator(targetObject!),
        linkType: linkType! as LINK_TYPES,
      }))
    ),
  };
};

/** @internal */
export const remapObjectLocator = <Q extends ObjectOrInterfaceDefinition>(
  wireObjectLocator: OntologiesV2.OntologyObjectV2,
): ObjectIdentifiers<Q> => ({
  $apiName: wireObjectLocator.__apiName,
  $primaryKey: wireObjectLocator.__primaryKey,
});
