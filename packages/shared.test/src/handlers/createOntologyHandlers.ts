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

/* eslint-disable @typescript-eslint/require-await */

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import { http as rest, HttpResponse } from "msw";
import { defaultOntologyForConjure } from "../stubs/defaultOntologyForConjure.js";
import { defaultOntologyMetadata } from "../stubs/ontologies/defaultOntologyMetadata.js";
import { authHandlerMiddleware } from "./authHandlerMiddleware.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { handleOpenApiCall } from "./util/handleOpenApiCall.js";

export const createOntologyHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.getFullMetadata,
    ["ontologyApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getOntologyFullMetadata();
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.get,
    ["ontologyApiName", "objectTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getObjectTypeFullMetadataOrThrow(req.params.objectTypeApiName)
        .objectType;
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.getFullMetadata,
    ["ontologyApiName", "objectTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getObjectTypeFullMetadataOrThrow(req.params.objectTypeApiName);
    },
    baseUrl,
  ),

  /**
   * List ActionTypes
   */
  handleOpenApiCall(
    OntologiesV2.ActionTypesV2.list,
    ["ontologyApiName"],
    async ({ params }) => {
      return {
        data: fauxFoundry
          .getOntology(params.ontologyApiName)
          .getAllActionTypes(),
      };
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.ActionTypesV2.get,
    ["ontologyApiName", "actionTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getActionDef(req.params.actionTypeApiName);
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.QueryTypes.get,
    ["ontologyApiName", "queryTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getQueryDef(req.params.queryTypeApiName);
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.getOutgoingLinkType,
    [
      "ontology",
      "objectType",
      "linkType",
    ],
    async ({ params }) => {
      return fauxFoundry
        .getOntology(params.ontology)
        .getLinkTypeSideV2(params.objectType, params.linkType);
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.listOutgoingLinkTypes,
    [
      "ontology",
      "objectType",
    ],
    async ({ params }) => {
      return {
        data: fauxFoundry
          .getOntology(params.ontology)
          .getObjectTypeFullMetadataOrThrow(params.objectType).linkTypes,
      };
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.OntologyInterfaces.list,
    ["ontologyApiName"],
    async (req) => {
      return {
        data: fauxFoundry
          .getOntology(req.params.ontologyApiName)
          .getAllInterfaceTypes(),
      };
    },
    baseUrl,
  ),

  handleOpenApiCall(
    OntologiesV2.OntologyInterfaces.get,
    ["ontologyApiName", "interfaceType"],
    ({ params }) => {
      return fauxFoundry
        .getOntology(params.ontologyApiName)
        .getInterfaceType(params.interfaceType);
    },
    baseUrl,
  ),

  /**
   * List ontologies
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.list,
    [],
    async () => {
      return {
        data: fauxFoundry
          .getEveryOntology()
          .map(x => x.getOntologyFullMetadata().ontology),
      };
    },
    baseUrl,
  ),

  /**
   * Get specified Ontology
   */
  handleOpenApiCall(
    OntologiesV2.OntologiesV2.get,
    ["ontologyRid"],
    async req => {
      return fauxFoundry
        .getOntology(req.params.ontologyRid)
        .getOntologyFullMetadata()
        .ontology;
    },
    baseUrl,
  ),

  /**
   * List objectTypes V2
   */
  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.list,
    ["ontologyApiName"],
    async req => {
      return {
        data: fauxFoundry
          .getOntology(req.params.ontologyApiName)
          .getAllObjectTypes()
          .map(x => x.objectType),
      };
    },
    baseUrl,
  ),

  /**
   * List Queries
   */
  handleOpenApiCall(
    OntologiesV2.QueryTypes.list,
    ["ontologyApiName"],
    async (req) => {
      return {
        data: fauxFoundry.getOntology(req.params.ontologyApiName)
          .getAllQueryTypes(),
      };
    },
    baseUrl,
  ),
];

export const conjureEndpoint: Array<RequestHandler> = [
  rest.post(
    `https://stack.palantir.com/ontology-metadata/api/ontology/ontology/ontologies/load/all`,
    authHandlerMiddleware(
      async () => {
        return HttpResponse.json(
          {
            ontologies: {
              "ri.ontology.main.ontology.f34bca54-eb0f-41ad-84f0-d562d9f2763a":
                {
                  apiName: "ontology-migration-source",
                  displayName: "Ontology Migration Test Source",
                  description: "",
                  currentOntologyVersion:
                    "0000000c-040d-f49d-b7e8-79fa53caacf5",
                  defaultBranchRid:
                    "ri.ontology.main.branch.122438ac-a6b7-46e9-825f-6c911ffff857",
                },
              [defaultOntologyMetadata.rid]: defaultOntologyForConjure,
            },
          },
        );
      },
    ),
  ),
];
