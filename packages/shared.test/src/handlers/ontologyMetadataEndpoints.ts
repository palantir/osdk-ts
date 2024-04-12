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
import type {
  InterfaceType,
  ListInterfaceTypesResponse,
} from "@osdk/gateway/types";
import { rest } from "msw";
import type {
  DefaultBodyType,
  MockedRequest,
  PathParams,
  ResponseComposition,
  RestHandler,
  RestRequest,
} from "msw";
import invariant from "tiny-invariant";
import type { BaseAPIError } from "../BaseError";
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

  rest.get(
    `https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/interfaceTypes`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          never,
          PathParams<"ontologyApiName">
        >,
        res: ResponseComposition<
          ListInterfaceTypesResponse | BaseAPIError
        >,
        ctx,
      ) => {
        // will throw if bad name
        getOntology(req.params.ontologyApiName as string);

        return res(ctx.json({
          data: Object.values(fullOntology.interfaceTypes),
        }));
      },
    ),
  ),

  rest.get(
    `https://stack.palantir.com/api/v2/ontologies/:ontologyApiName/interfaceTypes/:interfaceType`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          never,
          { ontologyApiName: string; interfaceType: string }
        >,
        res: ResponseComposition<
          InterfaceType | BaseAPIError
        >,
        ctx,
      ) => {
        // will throw if bad name
        getOntology(req.params.ontologyApiName as string);

        const interfaceType = req.params.interfaceType;
        if (typeof interfaceType !== "string") {
          return res(
            ctx.status(400),
            ctx.json(InvalidRequest("Invalid parameter objectType")),
          );
        }

        if (
          fullOntology.interfaceTypes[req.params.interfaceType]
            === undefined
        ) {
          return res(
            ctx.status(404),
            ctx.json(
              ObjectNotFoundError(
                req.params.interfaceType as string,
                "",
              ),
            ),
          );
        }

        return res(
          ctx.json(
            fullOntology.interfaceTypes[req.params.interfaceType],
          ),
        );
      },
    ),
  ),
  rest.post(
    `https://stack.palantir.com/ontology-metadata/api/ontology/ontology/ontologies/load/all`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          never,
          never
        >,
        res: ResponseComposition<
          { ontologies: Record<string, unknown> }
        >,
        ctx,
      ) => {
        return res(
          ctx.json({
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
          }),
        );
      },
    ),
  ),

  rest.post(
    `https://stack.palantir.com/ontology-metadata/api/ontology/ontology/loadEntities`,
    authHandlerMiddleware(
      async (
        req: RestRequest<
          {
            objectTypeVersions: Record<
              /*object type rid*/ string,
              /*ontology version*/ string
            >;
            linkTypeVersions: Record<string, string>;
            loadRedacted: boolean;
            includeObjectTypesWithoutSearchableDatasources: boolean;
          },
          never
        >,
        res: ResponseComposition<
          {
            objectTypes: Record</* rid */ string, ConjureObjectTypeInfo>;
            linkTypes: Record<string, unknown>;
            currentOntologyVersion: string;
          }
        >,
        ctx,
      ) => {
        invariant(
          Object.entries(req.body.linkTypeVersions).length === 0,
          "Currently dont support loading links via tests",
        );
        invariant(req.body.loadRedacted === false, "unsupported for tests");
        invariant(
          req.body.includeObjectTypesWithoutSearchableDatasources === true,
          "unsupported for tests",
        );

        try {
          // getOnto
          // fullOntology.

          return res(
            ctx.json({
              linkTypes: {},
              currentOntologyVersion:
                defaultOntologyForConjure.currentOntologyVersion,
              objectTypes: Object.fromEntries(
                Object.entries(req.body.objectTypeVersions).map<
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
            }),
          );
        } catch (e) {
          if (e instanceof OpenApiCallError) {
            return res(ctx.status(e.status), ctx.json(e.json) as any); // this doesnt perfectly match the conjure error but its good enough
          }
          throw e;
          //
        }
      },
    ),
  ),
];
