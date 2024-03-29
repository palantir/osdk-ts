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

import type { ObjectTypeDefinition } from "@osdk/api";
import {
  getObjectTypeV2,
  listInterfaceTypes,
  listOutgoingLinkTypesV2,
} from "@osdk/gateway/requests";
import type {
  LinkTypeSideV2,
  ListOutgoingLinkTypesResponseV2,
  ObjectTypeFullMetadata,
} from "@osdk/gateway/types";
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "@osdk/generator-converters";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ConjureContext } from "conjure-lite";
import invariant from "tiny-invariant";
import type { LoadAllOntologiesResponse } from "../generated/ontology-metadata/api/LoadAllOntologiesResponse.js";
import type { OntologyLoadEntitiesRequest } from "../generated/ontology-metadata/api/OntologyLoadEntitiesRequest.js";
import { loadAllOntologies } from "../generated/ontology-metadata/api/OntologyMetadataService/loadAllOntologies.js";
import { loadOntologyEntities } from "../generated/ontology-metadata/api/OntologyMetadataService/loadOntologyEntities.js";
import type { MinimalClient } from "../MinimalClientContext.js";

async function loadAllOutgoingLinkTypes(
  client: MinimalClient,
  objtype: string,
) {
  const linkTypes: LinkTypeSideV2[] = [];
  let pageToken: string | undefined;
  do {
    const result: ListOutgoingLinkTypesResponseV2 =
      await listOutgoingLinkTypesV2(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        objtype,
        { pageToken },
      );

    pageToken = result.nextPageToken;
    linkTypes.push(...result.data);
  } while (pageToken != null);

  return linkTypes;
}

function makeConjureContext(
  client: MinimalClient,
  servicePath: string,
): ConjureContext {
  const baseUrl = client.stack.startsWith("https://")
    ? client.stack
    : `https://${client.stack}`;

  return {
    baseUrl,
    servicePath,
    fetchFn: client.fetch,
    tokenProvider: async () => await client.tokenProvider(),
  };
}

export async function loadFullObjectMetadata(
  client: MinimalClient,
  objtype: string,
): Promise<ObjectTypeDefinition<any, any>> {
  const { ontologyApiName } = client.ontology.metadata;

  const conjureCtx = makeConjureContext(client, "/ontology-metadata/api");

  const [objectType, linkTypes, interfaceTypes, metadata] = await Promise.all([
    getObjectTypeV2(
      createOpenApiRequest(client.stack, client.fetch),
      ontologyApiName,
      objtype,
    ),

    loadAllOutgoingLinkTypes(client, objtype),
    listInterfaceTypes(
      createOpenApiRequest(client.stack, client.fetch),
      ontologyApiName,
      { pageSize: 200, preview: true },
    ),
    await loadAllOntologies(conjureCtx, {}),
  ]);

  const sharedPropertyTypeMapping = await loadSptMap(
    conjureCtx,
    metadata,
    client.ontology.metadata.ontologyRid,
    objectType.rid,
  );

  const full: ObjectTypeFullMetadata = {
    implementsInterfaces: interfaceTypes.data.map(i => i.apiName),
    linkTypes,
    objectType,
    sharedPropertyTypeMapping,
  };

  // TODO: reuse the loaded interface data!
  return wireObjectTypeFullMetadataToSdkObjectTypeDefinition(full, true);
}

async function loadSptMap(
  ctx: ConjureContext,
  ontologyMetadata: LoadAllOntologiesResponse,
  ontologyRid: string,
  objectRid: string,
) {
  const ontologyVersion =
    ontologyMetadata.ontologies[ontologyRid].currentOntologyVersion;

  const body: OntologyLoadEntitiesRequest = {
    objectTypeVersions: {
      [objectRid]: ontologyVersion,
    },
    linkTypeVersions: {},
    loadRedacted: false,
    includeObjectTypesWithoutSearchableDatasources: true,
  };
  const entities = await loadOntologyEntities(ctx, body);
  const objectType = entities.objectTypes[objectRid];
  invariant(objectType, "object type should be loaded");

  const sptMap: Record<string, string> = {};
  for (const property of Object.values(objectType.propertyTypes)) {
    if (property.sharedPropertyTypeApiName && property.apiName) {
      sptMap[property.sharedPropertyTypeApiName] = property.apiName;
    }
  }

  return sptMap;
}
