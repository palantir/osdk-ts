/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import {
  getObjectTypeV2,
  getOntologyFullMetadata,
  getOutgoingLinkTypeV2,
  listOutgoingLinkTypesV2,
} from "@osdk/gateway/requests";
import type { DefaultBodyType, MockedRequest, RestHandler } from "msw";
import {
  LinkTypeNotFound,
  ObjectTypeDoesNotExistError,
  OntologyNotFoundError,
} from "../errors";
import { fullOntology } from "../stubs/ontologies";
import { handleOpenApiCall, OpenApiCallError } from "./util/handleOpenApiCall";

function getOntology(ontologyApiName: string) {
  if (ontologyApiName !== fullOntology.ontology.apiName) {
    throw new OpenApiCallError(404, OntologyNotFoundError(ontologyApiName));
  }
  return fullOntology;
}

function getObjectDef(ontologyApiName: string, objectTypeApiName: string) {
  const ontology = getOntology(ontologyApiName);
  const objectType = ontology.objectTypes[objectTypeApiName];
  if (objectType === undefined) {
    throw new OpenApiCallError(
      404,
      ObjectTypeDoesNotExistError(objectTypeApiName),
    );
  }
  return objectType;
}

function getLinkType(
  ontologyApiName: string,
  objectTypeApiName: string,
  linkTypeName: string,
) {
  const objectType = getObjectDef(ontologyApiName, objectTypeApiName);
  const linkType = objectType.linkTypes.find((a) => a.apiName === linkTypeName);
  if (linkType === undefined) {
    throw new OpenApiCallError(
      404,
      LinkTypeNotFound(objectTypeApiName, linkTypeName),
    );
  }
  return linkType;
}

export const ontologyMetadataEndpoint: RestHandler<
  MockedRequest<DefaultBodyType>
>[] = [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    getOntologyFullMetadata,
    ["ontologyApiName"],
    async (req, res, ctx) => {
      const ontology = getOntology(req.params.ontologyApiName);
      return res(ctx.json(ontology));
    },
  ),

  handleOpenApiCall(
    getObjectTypeV2,
    ["ontologyApiName", "objectTypeApiName"],
    (req, res, ctx) => {
      const object = getObjectDef(
        req.params.ontologyApiName,
        req.params.objectTypeApiName,
      );

      return res(ctx.json(object.objectType));
    },
  ),

  handleOpenApiCall(getOutgoingLinkTypeV2, [
    "ontology",
    "objectType",
    "linkType",
  ], async ({ params }, res, ctx) => {
    const linkType = getLinkType(
      params.ontology,
      params.objectType,
      params.linkType,
    );

    return res(ctx.json(linkType));
  }),

  handleOpenApiCall(listOutgoingLinkTypesV2, [
    "ontology",
    "objectType",
  ], async ({ params }, res, ctx) => {
    const object = getObjectDef(params.ontology, params.objectType);

    return res(ctx.json({ data: object.linkTypes }));
  }),
];
