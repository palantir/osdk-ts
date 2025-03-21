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

import { bulkLoadOntologyEntities, getLinkTypesForObjectTypes, loadAllOntologies } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { createSimpleAsyncCache, createSimpleCache } from "../object/SimpleCache.js";
import { makeConjureContext } from "../ontology/makeConjureContext.js";
let cachedAllOntologies;
async function getOntologyVersionForRid(ctx, ontologyRid) {
  cachedAllOntologies ??= await loadAllOntologies(ctx, {});
  !cachedAllOntologies.ontologies[ontologyRid] ? process.env.NODE_ENV !== "production" ? invariant(false, "ontology should be loaded") : invariant(false) : void 0;
  return cachedAllOntologies.ontologies[ontologyRid].currentOntologyVersion;
}
const strongMemoSync = fn => createSimpleCache(new Map(), fn).get;
const weakMemoSync = fn => createSimpleCache(new WeakMap(), fn).get; // FIXME

const strongMemoAsync = fn => createSimpleAsyncCache("strong", fn).get;
const weakMemoAsync = fn => createSimpleAsyncCache("weak", fn).get;
export class MetadataClient {
  #client;
  #ctx;
  #logger;
  constructor(client) {
    this.#client = client;
    this.#ctx = makeConjureContext(client, "ontology-metadata/api");
    this.#client.ontologyProvider.getObjectDefinition;
    this.#logger = this.#client.logger?.child({
      mcc: true
    });
  }
  forObjectByRid = strongMemoAsync(async rid => {
    return Promise.resolve({
      getPropertyMapping: this.#objectPropertyMapping.bind(this, rid),
      getLinkMapping: this.#objectLinkMapping.bind(this, rid),
      getRid: () => rid,
      getApiName: async () => (await this.#getConjureObjectType(rid)).apiName
    });
  });
  forObjectByApiName = strongMemoAsync(async objectApiName => {
    const objectDef = await this.#client.ontologyProvider.getObjectDefinition(objectApiName);
    return this.forObjectByRid(objectDef.rid);
  });
  #objectPropertyMapping = strongMemoAsync(async objectTypeRid => {
    const conjureObjectType = await this.#getConjureObjectType(objectTypeRid);
    return createObjectPropertyMapping(conjureObjectType);
  });
  #objectLinkMapping = strongMemoAsync(async objectTypeRid => {
    const linkTypes = await getLinkTypesForObjectTypes(this.#ctx, {
      includeObjectTypesWithoutSearchableDatasources: true,
      loadRedacted: false,
      objectTypeBranches: {},
      objectTypeVersions: {
        [objectTypeRid]: await this.ontologyVersion("")
      }
    });
    !linkTypes.linkTypes[objectTypeRid] ? process.env.NODE_ENV !== "production" ? invariant(false, "link type should be loaded") : invariant(false) : void 0;

    // apiName to content
    const ret = {};
    for (const l of linkTypes.linkTypes[objectTypeRid]) {
      const helper = ({
        apiName
      }, linkSide, otherObjectType) => {
        if (apiName) {
          ret[apiName] = {
            apiName,
            directedLinkTypeRid: {
              linkTypeRid: l.rid,
              linkSide
            },
            otherObjectType
          };
        }
      };
      if (l.definition.type === "oneToMany") {
        const {
          oneToMany: {
            objectTypeRidManySide,
            manyToOneLinkMetadata,
            objectTypeRidOneSide,
            oneToManyLinkMetadata
          }
        } = l.definition;
        if (objectTypeRidManySide === objectTypeRid) {
          helper(manyToOneLinkMetadata, "TARGET", objectTypeRidOneSide);
        }
        if (objectTypeRidOneSide === objectTypeRid) {
          helper(oneToManyLinkMetadata, "SOURCE", objectTypeRidManySide);
        }
      } else if (l.definition.type === "manyToMany") {
        const {
          manyToMany: {
            objectTypeRidA,
            objectTypeAToBLinkMetadata,
            objectTypeRidB,
            objectTypeBToALinkMetadata
          }
        } = l.definition;
        if (objectTypeRidA === objectTypeRid) {
          helper(objectTypeAToBLinkMetadata, "SOURCE", objectTypeRidB);
        }
        if (objectTypeRidB === objectTypeRid) {
          helper(objectTypeBToALinkMetadata, "TARGET", objectTypeRidA);
        }
      }
    }
    return ret;
  });
  #getConjureObjectType = strongMemoAsync(async objectTypeRid => {
    this.#logger?.debug(`getConjureObjectType(${objectTypeRid})`);
    const body = {
      datasourceTypes: [],
      objectTypes: [{
        identifier: {
          type: "objectTypeRid",
          objectTypeRid: objectTypeRid
        },
        versionReference: {
          type: "ontologyVersion",
          ontologyVersion: await this.ontologyVersion("")
        }
      }],
      linkTypes: [],
      sharedPropertyTypes: [],
      interfaceTypes: [],
      typeGroups: [],
      loadRedacted: false,
      includeObjectTypeCount: undefined,
      includeObjectTypesWithoutSearchableDatasources: true,
      includeEntityMetadata: undefined,
      actionTypes: [],
      includeTypeGroupEntitiesCount: undefined,
      entityMetadata: undefined
    };
    const entities = await bulkLoadOntologyEntities(this.#ctx, undefined, body);
    !entities.objectTypes[0]?.objectType ? process.env.NODE_ENV !== "production" ? invariant(false, "object type should be loaded") : invariant(false) : void 0;
    return entities.objectTypes[0].objectType;
  });
  ontologyVersion = strongMemoAsync(async () => getOntologyVersionForRid(this.#ctx, await this.#client.ontologyRid));
}
export const metadataCacheClient = weakMemoAsync(client => Promise.resolve(new MetadataClient(client)));
function createObjectPropertyMapping(conjureOT) {
  !(conjureOT.primaryKeys.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, `only one primary key supported, got ${conjureOT.primaryKeys.length}`) : invariant(false) : void 0;
  const pkRid = conjureOT.primaryKeys[0];
  const pkProperty = Object.values(conjureOT.propertyTypes).find(a => a.rid === pkRid);
  if (!pkProperty) {
    throw new Error(`Could not find PK property by rid: ${pkRid}`);
  }
  const propertyIdToApiNameMapping = Object.fromEntries(Object.values(conjureOT.propertyTypes).map(property => {
    return [property.id, property.apiName];
  }));
  const propertyApiNameToIdMapping = Object.fromEntries(Object.values(conjureOT.propertyTypes).map(property => {
    return [property.apiName, property.id];
  }));
  return {
    apiName: conjureOT.apiName,
    id: conjureOT.id,
    propertyIdToApiNameMapping,
    propertyApiNameToIdMapping,
    pk: {
      rid: pkRid,
      apiName: pkProperty.apiName,
      type: pkProperty.type
    }
  };
}
//# sourceMappingURL=ConjureSupport.js.map