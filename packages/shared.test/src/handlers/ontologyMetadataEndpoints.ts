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
import { defaultOntologyForConjure } from "../stubs/ontologies.js";
import { defaultOntologyMetadata } from "../stubs/ontologies/defaultOntologyMetadata.js";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import { authHandlerMiddleware } from "./commonHandlers.js";
import { handleOpenApiCall } from "./util/handleOpenApiCall.js";

type ConjureObjectTypeInfo = {
  displayMetadata: {
    "description": string;
    "displayName": string;
    "groupDisplayName": null;
    "icon": {
      "type": "blueprint";
      "blueprint": {
        "color": "#00B3A4";
        "locator": "person";
      };
    };
    "pluralDisplayName": string;
    "visibility": "PROMINENT";
  };
  id: string;
  primaryKeys: string[];
  propertyTypes: Record<string, unknown>;
  rid: string;
  titlePropertyTypeRid: string;
  traits: {
    eventMetadata: null;
    actionLogMetadata: null;
    timeSeriesMetadata: null;
    sensorTrait: null;
    workflowObjectTypeTraits: {};
  };
  apiName: string;
  status: {
    "type": "active";
    "active": {};
  };
  redacted: null;
  implementsInterfaces: string[]; // rids
  implementsInterfaces2: {
    interfaceTypeRid: string;
    interfaceTypeApiName: string;
    links: {};
  }[];
  typeGroups: [];
};

const getOntologyEndpoints = (base: string | undefined) => [
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
    base,
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
    base,
  ),

  handleOpenApiCall(
    OntologiesV2.ObjectTypesV2.getFullMetadata,
    ["ontologyApiName", "objectTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getObjectTypeFullMetadataOrThrow(req.params.objectTypeApiName);
    },
    base,
  ),

  handleOpenApiCall(
    OntologiesV2.ActionTypesV2.get,
    ["ontologyApiName", "actionTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getActionDef(req.params.actionTypeApiName);
    },
    base,
  ),

  handleOpenApiCall(
    OntologiesV2.QueryTypes.get,
    ["ontologyApiName", "queryTypeApiName"],
    async (req) => {
      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getQueryDef(req.params.queryTypeApiName);
    },
    base,
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
    base,
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
    base,
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
    base,
  ),

  handleOpenApiCall(
    OntologiesV2.OntologyInterfaces.get,
    ["ontologyApiName", "interfaceType"],
    ({ params }) => {
      return fauxFoundry
        .getOntology(params.ontologyApiName)
        .getInterfaceType(params.interfaceType);
    },
    base,
  ),
];

export const ontologyMetadataEndpoint: Array<RequestHandler> = [
  ...getOntologyEndpoints(undefined),
  ...getOntologyEndpoints(
    "https://stack.palantirCustom.com/foo/first/someStuff/",
  ),

  // FIXME: does this need to live?
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
