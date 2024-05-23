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

import type { ConjureContext } from "conjure-lite";
import invariant from "tiny-invariant";
import type { DirectedLinkTypeRid } from "../generated/object-set-service/api/DirectedLinkTypeRid.js";
import type { LinkTypeMetadata } from "../generated/ontology-metadata/api/LinkTypeMetadata.js";
import type { LoadAllOntologiesResponse } from "../generated/ontology-metadata/api/LoadAllOntologiesResponse.js";
import type { ObjectType } from "../generated/ontology-metadata/api/ObjectType.js";
import {
  getLinkTypesForObjectTypes,
  loadAllOntologies,
  loadOntologyEntities,
} from "../generated/ontology-metadata/api/OntologyMetadataService.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createSimpleAsyncCache, createSimpleCache } from "../object/Cache.js";
import { makeConjureContext } from "../ontology/makeConjureContext.js";

export type ObjectPropertyMapping = {
  apiName: string;
  id: string;
  propertyIdToApiNameMapping: Record<string, string>;
  propertyApiNameToIdMapping: Record<string, string>;
};

let cachedAllOntologies: LoadAllOntologiesResponse | undefined;
async function getOntologyVersionForRid(
  ctx: ConjureContext,
  ontologyRid: string,
) {
  cachedAllOntologies ??= await loadAllOntologies(ctx, {});
  invariant(
    cachedAllOntologies.ontologies[ontologyRid],
    "ontology should be loaded",
  );

  return cachedAllOntologies.ontologies[ontologyRid].currentOntologyVersion;
}

const strongMemoSync = <K, V>(fn: (entry: K) => V) =>
  createSimpleCache<K, V>(new Map(), fn).get;

const weakMemoSync = <K extends object, V>(fn: (entry: K) => V) =>
  createSimpleCache<K, V>(new WeakMap() as any, fn).get; // FIXME

const strongMemoAsync = <K, V>(fn: (entry: K) => Promise<V>) =>
  createSimpleAsyncCache<K, V>("strong", fn).get;

const weakMemoAsync = <K, V>(fn: (entry: K) => Promise<V>) =>
  createSimpleAsyncCache<K, V>("weak", fn).get;

export class MetadataClient {
  #client: MinimalClient;
  #ctx: ConjureContext;
  #logger: any;

  constructor(client: MinimalClient) {
    this.#client = client;
    this.#ctx = makeConjureContext(client, "/ontology-metadata/api");
    this.#client.ontologyProvider.getObjectDefinition;

    this.#logger = this.#client.logger?.child({
      mcc: true,
    });
  }

  forObjectByRid = strongMemoAsync(async (rid: string) => {
    return Promise.resolve({
      getPropertyMapping: this.#objectPropertyMapping.bind(this, rid),
      getLinkMapping: this.#objectLinkMapping.bind(this, rid),
      getRid: () => rid,
      getApiName: async () => (await this.#getConjureObjectType(rid)).apiName,
    });
  });

  forObjectByApiName = strongMemoAsync(
    async (objectApiName: string) => {
      return this.forObjectByRid(
        (await this.#client.ontologyProvider.getObjectDefinition(objectApiName))
          .rid,
      );
    },
  );

  #objectPropertyMapping = strongMemoAsync(async (objectTypeRid: string) => {
    const conjureObjectType = await this.#getConjureObjectType(objectTypeRid);
    return createObjectPropertyMapping(conjureObjectType);
  });

  #objectLinkMapping = strongMemoAsync(async (objectTypeRid: string) => {
    const linkTypes = await getLinkTypesForObjectTypes(this.#ctx, {
      includeObjectTypesWithoutSearchableDatasources: true,
      loadRedacted: false,
      objectTypeBranches: {},
      objectTypeVersions: {
        [objectTypeRid]: await this.ontologyVersion(""),
      },
    });
    invariant(
      linkTypes.linkTypes[objectTypeRid],
      "link type should be loaded",
    );

    // apiName to content
    const ret: Record<string, {
      apiName: string;
      directedLinkTypeRid: DirectedLinkTypeRid;
      otherObjectType: string; // rid
    }> = {};
    for (const l of linkTypes.linkTypes[objectTypeRid]) {
      const helper = (
        { apiName }: LinkTypeMetadata,
        linkSide: "SOURCE" | "TARGET",
        otherObjectType: string,
      ) => {
        if (apiName) {
          ret[apiName] = {
            apiName,
            directedLinkTypeRid: {
              linkTypeRid: l.rid,
              linkSide,
            },
            otherObjectType,
          };
        }
      };
      if (l.definition.type === "oneToMany") {
        const {
          oneToMany: {
            objectTypeRidManySide,
            manyToOneLinkMetadata,
            objectTypeRidOneSide,
            oneToManyLinkMetadata,
          },
        } = l.definition;
        if (objectTypeRidManySide === objectTypeRid) {
          helper(
            manyToOneLinkMetadata,
            "TARGET",
            objectTypeRidOneSide,
          );
        }
        if (objectTypeRidOneSide === objectTypeRid) {
          helper(
            oneToManyLinkMetadata,
            "SOURCE",
            objectTypeRidManySide,
          );
        }
      } else if (l.definition.type === "manyToMany") {
        const {
          manyToMany: {
            objectTypeRidA,
            objectTypeAToBLinkMetadata,
            objectTypeRidB,
            objectTypeBToALinkMetadata,
          },
        } = l.definition;
        if (objectTypeRidA === objectTypeRid) {
          helper(
            objectTypeAToBLinkMetadata,
            "SOURCE",
            objectTypeRidB,
          );
        }

        if (objectTypeRidB === objectTypeRid) {
          helper(
            objectTypeBToALinkMetadata,
            "TARGET",
            objectTypeRidA,
          );
        }
      }
    }

    return ret;
  });

  #getConjureObjectType = strongMemoAsync(async (objectTypeRid: string) => {
    this.#logger?.debug(`getConjureObjectType(${objectTypeRid})`);
    const body = {
      objectTypeVersions: {
        [objectTypeRid]: await this.ontologyVersion(""),
      },
      linkTypeVersions: {},
      loadRedacted: false,
      includeObjectTypesWithoutSearchableDatasources: true,
    };
    const entities = await loadOntologyEntities(this.#ctx, body);
    invariant(
      entities.objectTypes[objectTypeRid],
      "object type should be loaded",
    );
    return entities.objectTypes[objectTypeRid];
  });

  ontologyVersion = strongMemoAsync((_: string) =>
    getOntologyVersionForRid(this.#ctx, this.#client.ontologyRid)
  );
}

export const metadataCacheClient = weakMemoAsync(
  (client: MinimalClient) => Promise.resolve(new MetadataClient(client)),
);

function createObjectPropertyMapping(conjureOT: ObjectType) {
  invariant(
    conjureOT.primaryKeys.length === 1,
    "only one primary key supported",
  );
  const pkRid = conjureOT.primaryKeys[0];

  const pkProperty = Object.values(conjureOT.propertyTypes).find(a =>
    a.rid === pkRid
  );
  if (!pkProperty) {
    throw new Error("Could not find PK property");
  }

  const propertyIdToApiNameMapping: Record<string, string> = Object
    .fromEntries(
      Object.values(conjureOT.propertyTypes).map(
        property => {
          return [property.id, property.apiName!];
        },
      ),
    );

  const propertyApiNameToIdMapping: Record<string, string> = Object
    .fromEntries(
      Object.values(conjureOT.propertyTypes).map(
        property => {
          return [property.apiName!, property.id];
        },
      ),
    );

  return {
    apiName: conjureOT.apiName!,
    id: conjureOT.id,
    propertyIdToApiNameMapping,
    propertyApiNameToIdMapping,
    pk: {
      rid: pkRid,
      apiName: pkProperty.apiName!,
      type: pkProperty.type,
    },
  };
}
