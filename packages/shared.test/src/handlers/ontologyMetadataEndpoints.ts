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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import { http as rest, HttpResponse } from "msw";
import invariant from "tiny-invariant";
import { InvalidRequest, OntologyNotFoundError } from "../errors.js";
import {
  defaultOntologyForConjure,
  fullOntology,
} from "../stubs/ontologies.js";
import { defaultOntologyMetadata } from "../stubs/ontologies/defaultOntologyMetadata.js";
import { fauxFoundry } from "../stubs/ontologies/legacyFullOntology.js";
import { authHandlerMiddleware } from "./commonHandlers.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./util/handleOpenApiCall.js";

export function getOntologyOld(
  ontologyApiName: string,
): OntologyFullMetadata {
  if (
    ontologyApiName !== fullOntology.ontology.apiName
    && ontologyApiName !== fullOntology.ontology.rid
  ) {
    throw new OpenApiCallError(404, OntologyNotFoundError(ontologyApiName));
  }
  return fullOntology;
}

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
    (req) => {
      // will throw if bad name
      getOntologyOld(req.params.ontologyApiName as string);

      const interfaceType = req.params.interfaceType;
      if (typeof interfaceType !== "string") {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid parameter objectType"),
        );
      }

      return fauxFoundry
        .getOntology(req.params.ontologyApiName)
        .getInterfaceType(interfaceType);
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

  // FIXME: does this need to live?
  rest.post(
    `https://stack.palantir.com/ontology-metadata/api/ontology/ontology/loadEntities`,
    authHandlerMiddleware<
      {
        objectTypeVersions: Record<
          /*object type rid*/ string,
          /*ontology version*/ string
        >;
        linkTypeVersions: Record<string, string>;
        loadRedacted: boolean;
        includeObjectTypesWithoutSearchableDatasources: boolean;
      }
    >(
      async (
        { request },
      ) => {
        const body = await request.json();
        invariant(
          Object.entries(body.linkTypeVersions).length === 0,
          "Currently don't support loading links via tests",
        );
        invariant(!body.loadRedacted, "unsupported for tests");
        invariant(
          body.includeObjectTypesWithoutSearchableDatasources,
          "unsupported for tests",
        );

        return HttpResponse.json<
          {
            objectTypes: Record</* rid */ string, ConjureObjectTypeInfo>;
            linkTypes: Record<string, unknown>;
            currentOntologyVersion: string;
          }
        >({
          linkTypes: {},
          currentOntologyVersion:
            defaultOntologyForConjure.currentOntologyVersion,
          objectTypes: Object.fromEntries(
            Object.entries(body.objectTypeVersions).map<
              [string, ConjureObjectTypeInfo]
            >(
              ([objectTypeRid, ontologyVersion]) => {
                if (
                  defaultOntologyForConjure.currentOntologyVersion
                    !== ontologyVersion
                ) {
                  throw new OpenApiCallError(
                    404,
                    OntologyNotFoundError(ontologyVersion),
                  );
                }
                const entry = Object.values(fullOntology.objectTypes).find(
                  a => a.objectType.rid === objectTypeRid,
                );

                if (!entry) {
                  throw new OpenApiCallError(
                    404,
                    OntologyNotFoundError(ontologyVersion),
                  );
                }

                const ret: ConjureObjectTypeInfo = {
                  apiName: entry.objectType.apiName,
                  displayMetadata: {
                    "description": "...",
                    "displayName": entry.objectType.displayName!,
                    "groupDisplayName": null,
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "color": "#00B3A4",
                        "locator": "person",
                      },
                    },
                    "pluralDisplayName": "Employees",
                    "visibility": "PROMINENT",
                  },
                  id: "we don't track this",
                  primaryKeys: [entry.objectType.primaryKey],
                  propertyTypes: Object.fromEntries(
                    Object.entries(entry.objectType.properties)
                      .map(([k, v]) => [k, {
                        ...v,
                        rid: k,
                      }]),
                  ), // don't care right now
                  implementsInterfaces: entry
                    .implementsInterfaces as string[],
                  implementsInterfaces2: [], // don't care right now
                  rid: entry.objectType.rid,
                  redacted: null,
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                  titlePropertyTypeRid: "we don't track this",
                  "traits": {
                    "eventMetadata": null,
                    "actionLogMetadata": null,
                    "timeSeriesMetadata": null,
                    "sensorTrait": null,
                    "workflowObjectTypeTraits": {},
                  },
                  typeGroups: [],
                };

                return [objectTypeRid, ret];
              },
            ),
          ),
        });
      },
    ),
  ),

  // FIXME: does this need to live?
  rest.post(
    `https://stack.palantir.com/ontology-metadata/api/ontology/ontology/bulkLoadEntities`,
    authHandlerMiddleware<
      {
        datasourceTypes: never[];
        objectTypes: {
          identifier: {
            type: "objectTypeRid";
            objectTypeRid: string;
          };
          versionReference: {
            type: "ontologyVersion";
            ontologyVersion: string;
          };
        }[];
        linkTypes: never[];
        sharedPropertyTypes: never[];
        interfaceTypes: never[];
        typeGroups: never[];
        loadRedacted: false;
        includeObjectTypeCount: undefined;
        includeObjectTypesWithoutSearchableDatasources: true;
        includeEntityMetadata: undefined;
      }
    >(
      async (
        { request },
      ) => {
        const body = await request.json();
        invariant(
          Object.entries(body.linkTypes).length === 0,
          "Currently don't support loading links via tests",
        );
        invariant(!body.loadRedacted, "unsupported for tests");
        invariant(
          body.includeObjectTypesWithoutSearchableDatasources,
          "unsupported for tests",
        );

        return HttpResponse.json<
          {
            objectTypes: Array<{ objectType: ConjureObjectTypeInfo }>;
            linkTypes: Record<string, unknown>;
            currentOntologyVersion: string;
          }
        >({
          linkTypes: {},
          currentOntologyVersion:
            defaultOntologyForConjure.currentOntologyVersion,
          objectTypes: body.objectTypes.map<
            { objectType: ConjureObjectTypeInfo }
          >(
            ({ identifier, versionReference }) => {
              if (
                defaultOntologyForConjure.currentOntologyVersion
                  !== versionReference.ontologyVersion
              ) {
                throw new OpenApiCallError(
                  404,
                  OntologyNotFoundError(versionReference.ontologyVersion),
                );
              }
              const entry = Object.values(fullOntology.objectTypes).find(
                a => a.objectType.rid === identifier.objectTypeRid,
              );

              if (!entry) {
                throw new OpenApiCallError(
                  404,
                  OntologyNotFoundError(versionReference.ontologyVersion),
                );
              }

              const ret: ConjureObjectTypeInfo = {
                apiName: entry.objectType.apiName,
                displayMetadata: {
                  "description": "...",
                  "displayName": entry.objectType.displayName!,
                  "groupDisplayName": null,
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "color": "#00B3A4",
                      "locator": "person",
                    },
                  },
                  "pluralDisplayName": "Employees",
                  "visibility": "PROMINENT",
                },
                id: "we don't track this",
                primaryKeys: [entry.objectType.primaryKey],
                propertyTypes: Object.fromEntries(
                  Object.entries(entry.objectType.properties)
                    .map(([k, v]) => [k, {
                      ...v,
                      rid: k,
                    }]),
                ), // don't care right now
                implementsInterfaces: entry
                  .implementsInterfaces as string[],
                implementsInterfaces2: [], // don't care right now
                rid: entry.objectType.rid,
                redacted: null,
                "status": {
                  "type": "active",
                  "active": {},
                },
                titlePropertyTypeRid: "we don't track this",
                "traits": {
                  "eventMetadata": null,
                  "actionLogMetadata": null,
                  "timeSeriesMetadata": null,
                  "sensorTrait": null,
                  "workflowObjectTypeTraits": {},
                },
                typeGroups: [],
              };

              return { objectType: ret };
            },
          ),
        });
      },
    ),
  ),
];
