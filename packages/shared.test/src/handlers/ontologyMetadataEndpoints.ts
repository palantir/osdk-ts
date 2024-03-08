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
        if (req.params.ontologyApiName !== fullOntology.ontology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

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
        if (req.params.ontologyApiName !== fullOntology.ontology.apiName) {
          return res(
            ctx.status(404),
            ctx.json(
              OntologyNotFoundError(req.params.ontologyApiName as string),
            ),
          );
        }

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
  /*
  {
  objectTypeVersions: {
    'ri.ontology.main.object-type.0a2d40a2-2095-4fde-b3aa-55619b0e0f0c': '0000000c-06e2-5809-9bb4-d7946e19eb3b'
  },
  linkTypeVersions: {},
  loadRedacted: false,
  includeObjectTypesWithoutSearchableDatasources: true
}
  */
  /*
 {
  objectTypes: {
    'ri.ontology.main.object-type.0a2d40a2-2095-4fde-b3aa-55619b0e0f0c': {
      displayMetadata: [Object],
      id: 'employee-1',
      primaryKeys: [Array],
      propertyTypes: [Object],
      rid: 'ri.ontology.main.object-type.0a2d40a2-2095-4fde-b3aa-55619b0e0f0c',
      titlePropertyTypeRid: 'ri.ontology.main.property.8d221da4-1e72-4298-b06a-cf22efac656f',
      traits: [Object],
      apiName: 'Employee',
      status: [Object],
      redacted: null,
      implementsInterfaces: [Array],
      implementsInterfaces2: [Array],
      typeGroups: []
    }
  },
  linkTypes: {},
  currentOntologyVersion: '0000000c-06e2-5809-9bb4-d7946e19eb3b'
}
  */
  /*
 {
  "objectTypes": {
    "ri.ontology.main.object-type.0a2d40a2-2095-4fde-b3aa-55619b0e0f0c": {
      "displayMetadata": {
        "description": "...",
        "displayName": "Employee",
        "groupDisplayName": null,
        "icon": {
          "type": "blueprint",
          "blueprint": {
            "color": "#00B3A4",
            "locator": "person"
          }
        },
        "pluralDisplayName": "Employees",
        "visibility": "PROMINENT"
      },
      "id": "employee-1",
      "primaryKeys": [
        "ri.ontology.main.property.075241cd-2b32-488f-baf6-32cbefadecc5"
      ],
      "propertyTypes": {
        "ri.ontology.main.property.684d1af1-8ae7-4451-a3c8-e2390a9f4e19": {
          "rid": "ri.ontology.main.property.684d1af1-8ae7-4451-a3c8-e2390a9f4e19",
          "id": "tenure_months",
          "apiName": "tenureMonths",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Tenure Months",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "integer",
            "integer": {}
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.696af752-db40-418b-b7f8-1b25e30ffa3e": {
          "rid": "ri.ontology.main.property.696af752-db40-418b-b7f8-1b25e30ffa3e",
          "id": "job_profile",
          "apiName": "jobProfile",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Job Profile",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.f2789f57-31fb-47eb-a5f5-3604938364c0": {
          "rid": "ri.ontology.main.property.f2789f57-31fb-47eb-a5f5-3604938364c0",
          "id": "language_2",
          "apiName": "language2",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Language 2",
            "visibility": "HIDDEN"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.7367db4d-0284-46b3-90ec-3fefc42fafef": {
          "rid": "ri.ontology.main.property.7367db4d-0284-46b3-90ec-3fefc42fafef",
          "id": "location_pref",
          "apiName": "locationPref",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Location Pref",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": {
            "ruleSetRid": "ri.ontology.main.rule-set.f8eedfff-193d-4b68-8a56-6b7bc3642838",
            "bindings": {
              "37a101d8-5b95-4095-bfcb-e66c6e106c14": {
                "type": "propertyTypeRid",
                "propertyTypeRid": "ri.ontology.main.property.7367db4d-0284-46b3-90ec-3fefc42fafef"
              }
            }
          },
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "KEYWORDS"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.53d76a52-f7b3-4eee-8eb8-6ca2d100efed": {
          "rid": "ri.ontology.main.property.53d76a52-f7b3-4eee-8eb8-6ca2d100efed",
          "id": "language_1",
          "apiName": "language1",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Language 1",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.075241cd-2b32-488f-baf6-32cbefadecc5": {
          "rid": "ri.ontology.main.property.075241cd-2b32-488f-baf6-32cbefadecc5",
          "id": "id",
          "apiName": "id",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Id",
            "visibility": "PROMINENT"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.d0a45a3b-7611-4890-b3eb-3ac4191f522f": {
          "rid": "ri.ontology.main.property.d0a45a3b-7611-4890-b3eb-3ac4191f522f",
          "id": "last_name",
          "apiName": "lastName",
          "sharedPropertyTypeApiName": null,
          "displayMetadata": {
            "description": "",
            "displayName": "Last Name",
            "visibility": "PROMINENT"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "hubble",
              "name": "editable"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": null,
          "valueType": null
        },
        "ri.ontology.main.property.cccc84ee-a457-4d88-88d7-bb42bd9e5a7d": {
          "rid": "ri.ontology.main.property.cccc84ee-a457-4d88-88d7-bb42bd9e5a7d",
          "id": "email",
          "apiName": "email",
          "sharedPropertyTypeApiName": "description",
          "displayMetadata": {
            "description": "description description",
            "displayName": "Description",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": null,
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": "ri.ontology.main.shared-property.3ad47761-fd8c-477c-bc96-5721a6ed46d7",
          "valueType": null
        },
        "ri.ontology.main.property.8d221da4-1e72-4298-b06a-cf22efac656f": {
          "rid": "ri.ontology.main.property.8d221da4-1e72-4298-b06a-cf22efac656f",
          "id": "first_name",
          "apiName": "firstName",
          "sharedPropertyTypeApiName": "name",
          "displayMetadata": {
            "description": "No api name",
            "displayName": "Name",
            "visibility": "NORMAL"
          },
          "indexedForSearch": true,
          "ruleSetBinding": {
            "ruleSetRid": "ri.ontology.main.rule-set.1b66bb3b-6f33-4306-a3c9-4ab2053f9119",
            "bindings": {
              "0059a990-0f5c-454f-9e9a-88b30a7a6e22": {
                "type": "propertyTypeRid",
                "propertyTypeRid": "ri.ontology.main.property.684d1af1-8ae7-4451-a3c8-e2390a9f4e19"
              }
            }
          },
          "baseFormatter": null,
          "type": {
            "type": "string",
            "string": {
              "analyzerOverride": null,
              "isLongText": false,
              "supportsExactMatching": true
            }
          },
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            }
          ],
          "status": {
            "type": "active",
            "active": {}
          },
          "inlineAction": null,
          "dataConstraints": null,
          "sharedPropertyTypeRid": "ri.ontology.main.shared-property.6618a6fc-5f14-4899-9540-615c9364c5d6",
          "valueType": null
        }
      },
      "rid": "ri.ontology.main.object-type.0a2d40a2-2095-4fde-b3aa-55619b0e0f0c",
      "titlePropertyTypeRid": "ri.ontology.main.property.8d221da4-1e72-4298-b06a-cf22efac656f",
      "traits": {
        "eventMetadata": null,
        "actionLogMetadata": null,
        "timeSeriesMetadata": null,
        "sensorTrait": null,
        "workflowObjectTypeTraits": {}
      },
      "apiName": "Employee",
      "status": {
        "type": "active",
        "active": {}
      },
      "redacted": null,
      "implementsInterfaces": [
        "ri.ontology.main.interface.46dd3d1d-acb9-4083-a45c-7f3d7039fd75"
      ],
      "implementsInterfaces2": [
        {
          "interfaceTypeRid": "ri.ontology.main.interface.46dd3d1d-acb9-4083-a45c-7f3d7039fd75",
          "interfaceTypeApiName": "FooInterface",
          "links": {}
        }
      ],
      "typeGroups": []
    }
  },
  "linkTypes": {},
  "currentOntologyVersion": "0000000c-06e3-c819-b05e-badc95236f01"
}*/
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
