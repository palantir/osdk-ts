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

import type {
  AggregateObjectSetRequestV2,
  AggregateObjectsResponseV2,
  ArtifactRepositoryRid,
  CreateTemporaryObjectSetRequestV2,
  CreateTemporaryObjectSetResponseV2,
  LoadObjectSetRequestV2,
  LoadObjectSetResponseV2,
  ObjectSet,
  ObjectSetRid,
  OntologyIdentifier,
  SdkPackageName,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _createTemporaryObjectSetV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $body: CreateTemporaryObjectSetRequestV2,
  ) => Promise<CreateTemporaryObjectSetResponseV2>
> = [1, "/v2/ontologies/{0}/objectSets/createTemporary", 1];

/**
 * Creates a temporary `ObjectSet` from the given definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read api:ontologies-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read, api:ontologies-write]
 * URL: /v2/ontologies/{ontology}/objectSets/createTemporary
 */
export function createTemporaryObjectSetV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    $body: CreateTemporaryObjectSetRequestV2,
  ]
): Promise<CreateTemporaryObjectSetResponseV2> {
  return $foundryPlatformFetch($ctx, _createTemporaryObjectSetV2, ...args);
}

const _getObjectSetV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectSetRid: ObjectSetRid,
  ) => Promise<ObjectSet>
> = [0, "/v2/ontologies/{0}/objectSets/{1}"];

/**
 * Gets the definition of the `ObjectSet` with the given RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: []
 * URL: /v2/ontologies/{ontology}/objectSets/{objectSetRid}
 */
export function getObjectSetV2(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: OntologyIdentifier, objectSetRid: ObjectSetRid]
): Promise<ObjectSet> {
  return $foundryPlatformFetch($ctx, _getObjectSetV2, ...args);
}

const _loadObjectSetV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $body: LoadObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<LoadObjectSetResponseV2>
> = [1, "/v2/ontologies/{0}/objectSets/loadObjects", 3];

/**
 * Load the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * For Object Storage V1 backed objects, this endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned. There is no limit on Object Storage V2 backed objects.
 *
 * Note that null value properties will not be returned.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectSets/loadObjects
 */
export function loadObjectSetV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    $body: LoadObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<LoadObjectSetResponseV2> {
  return $foundryPlatformFetch($ctx, _loadObjectSetV2, ...args);
}

const _aggregateObjectSetV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $body: AggregateObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objectSets/aggregate", 3];

/**
 * Aggregates the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectSets/aggregate
 */
export function aggregateObjectSetV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    $body: AggregateObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AggregateObjectsResponseV2> {
  return $foundryPlatformFetch($ctx, _aggregateObjectSetV2, ...args);
}
