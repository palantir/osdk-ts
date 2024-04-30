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
  getInterfaceType,
  getObjectTypeV2,
  getOntologyFullMetadata,
  getOutgoingLinkTypeV2,
  listInterfaceTypes,
  listOutgoingLinkTypesV2,
} from "@osdk/gateway/requests";
import { http as rest, HttpResponse } from "msw";
import invariant from "tiny-invariant";
import {
  InvalidRequest,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
  OntologyNotFoundError,
} from "../errors";
import {
  defaultOntology,
  defaultOntologyForConjure,
  fullOntology,
} from "../stubs/ontologies";
import { authHandlerMiddleware } from "./commonHandlers";
import { handleOpenApiCall, OpenApiCallError } from "./util/handleOpenApiCall";

export function getOntology(ontologyApiName: string) {
  if (
    ontologyApiName !== fullOntology.ontology.apiName
    && ontologyApiName !== fullOntology.ontology.rid
  ) {
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
  primaryKeys: [];
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

export const ontologyMetadataEndpoint = [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    getOntologyFullMetadata,
    ["ontologyApiName"],
    async (req) => {
      const ontology = getOntology(req.params.ontologyApiName);
      return ontology;
    },
  ),

  handleOpenApiCall(
    getObjectTypeV2,
    ["ontologyApiName", "objectTypeApiName"],
    (req) => {
      const { objectType } = getObjectDef(
        req.params.ontologyApiName,
        req.params.objectTypeApiName,
      );

      return objectType;
    },
  ),

  handleOpenApiCall(getOutgoingLinkTypeV2, [
    "ontology",
    "objectType",
    "linkType",
  ], async ({ params }) => {
    const linkType = getLinkType(
      params.ontology,
      params.objectType,
      params.linkType,
    );

    return linkType;
  }),

  handleOpenApiCall(listOutgoingLinkTypesV2, [
    "ontology",
    "objectType",
  ], async ({ params }) => {
    const object = getObjectDef(params.ontology, params.objectType);

    return { data: object.linkTypes };
  }),

  handleOpenApiCall(
    listInterfaceTypes,
    ["ontologyApiName"],
    async (req) => {
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      return {
        data: Object.values(fullOntology.interfaceTypes),
      };
    },
  ),

  handleOpenApiCall(
    getInterfaceType,
    ["ontologyApiName", "interfaceType"],
    (req) => {
      // will throw if bad name
      getOntology(req.params.ontologyApiName as string);

      const interfaceType = req.params.interfaceType;
      if (typeof interfaceType !== "string") {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid parameter objectType"),
        );
      }

      if (
        fullOntology.interfaceTypes[req.params.interfaceType]
          === undefined
      ) {
        throw new OpenApiCallError(
          404,
          ObjectNotFoundError(
            req.params.interfaceType as string,
            "",
          ),
        );
      }

      return (
        fullOntology.interfaceTypes[req.params.interfaceType]
      );
    },
  ),

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
              [defaultOntology.rid]: defaultOntologyForConjure,
            },
          },
        );
      },
    ),
  ),

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
          "Currently dont support loading links via tests",
        );
        invariant(body.loadRedacted === false, "unsupported for tests");
        invariant(
          body.includeObjectTypesWithoutSearchableDatasources === true,
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
                  id: "we dont track this",
                  primaryKeys: [],
                  propertyTypes: {}, // dont care right now
                  implementsInterfaces: entry
                    .implementsInterfaces as string[],
                  implementsInterfaces2: [], // dont care right now
                  rid: entry.objectType.rid,
                  redacted: null,
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                  titlePropertyTypeRid: "we dont track this",
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
];
