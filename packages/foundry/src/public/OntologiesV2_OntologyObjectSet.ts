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
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";
import type * as $C from "../generated/components.js";

const _getObjectSetV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectSetRid: $C.ObjectSetRid,
  ) => Promise<$C.ObjectSet>
> = [0, "/v2/ontologies/{0}/objectSets/{1}"];

/**
 * Gets the definition of the `ObjectSet` with the given RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: []
 * URL: /v2/ontologies/{ontology}/objectSets/{objectSetRid}
 */
export function getObjectSetV2(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier, objectSetRid: $C.ObjectSetRid]
): Promise<$C.ObjectSet> {
  return $omniFetch($ctx, _getObjectSetV2, ...args);
}

const _loadObjectSetV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    $body: $C.LoadObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.LoadObjectSetResponseV2>
> = [1, "/v2/ontologies/{0}/objectSets/loadObjects", 3];

/**
 * Load the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * For Object Storage V1 backed objects, this endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned. There is no limit on Object Storage V2 backed objects.
 *
 * Note that null value properties will not be returned.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectSets/loadObjects
 */
export function loadObjectSetV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    $body: $C.LoadObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.LoadObjectSetResponseV2> {
  return $omniFetch($ctx, _loadObjectSetV2, ...args);
}

const _aggregateObjectSetV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    $body: $C.AggregateObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      preview?: $C.PreviewMode;
    },
  ) => Promise<$C.AggregateObjectsResponseV2>
> = [1, "/v2/ontologies/{0}/objectSets/aggregate", 3];

/**
 * Aggregates the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectSets/aggregate
 */
export function aggregateObjectSetV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    $body: $C.AggregateObjectSetRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
      preview?: $C.PreviewMode;
    },
  ]
): Promise<$C.AggregateObjectsResponseV2> {
  return $omniFetch($ctx, _aggregateObjectSetV2, ...args);
}
