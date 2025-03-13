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

import type {
  CompileTimeMetadata,
  ObjectMetadata,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { LoadObjectSetResponseV2 } from "@osdk/foundry.ontologies";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import type { HttpResponseResolver, PathParams, RequestHandler } from "msw";
import type { BaseAPIError } from "./BaseError.js";
import {
  ActionNotFoundError,
  InvalidRequest,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
  OntologyNotFoundError,
  QueryNotFoundError,
} from "./errors.js";
import { filterObjectsProperties } from "./filterObjects.js";
import { pageThroughResponse } from "./handlers/endpointUtils.js";
import type { ExtractBody } from "./handlers/util/handleOpenApiCall.js";
import {
  handleOpenApiCall,
  OpenApiCallError,
} from "./handlers/util/handleOpenApiCall.js";
import { aggregationRequestHandlers } from "./stubs/aggregationRequests.js";
import { loadObjectSetRequestHandlers } from "./stubs/objectSetRequest.js";
import { defaultOntology } from "./stubs/ontologies.js";

type SubType<
  T extends
    | "objectTypes"
    | "actionTypes"
    | "queryTypes"
    | "interfaceTypes"
    | "sharedPropertyTypes",
> = OntologiesV2.OntologyFullMetadata[T] extends Record<any, infer Z> ? Z
  : never;

interface ZZ<Q extends ObjectTypeDefinition> extends ObjectTypeDefinition {
  objectType: ZZ_ObjectType<Q>;
}

interface ZZ_Prop<Q extends ObjectMetadata.Property>
  extends OntologiesV2.PropertyV2
{
  dataType: OntologiesV2.ObjectPropertyType & { type: Q["type"] };
}

type ZZ_Props<Q extends ObjectTypeDefinition> = {
  [K in keyof CompileTimeMetadata<Q>["properties"]]: ZZ_Prop<
    CompileTimeMetadata<Q>["properties"][K]
  >;
};

interface ZZ_ObjectType<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeV2
{
  apiName: Q["apiName"];
  primaryKey: CompileTimeMetadata<Q>["primaryKeyApiName"];
  titleProperty: CompileTimeMetadata<Q>["titleProperty"];
  properties: ZZ_Props<Q>;
}

interface ZZ_ObjectTypeFull<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeFullMetadata
{
  objectType: ZZ_ObjectType<Q>;
}

type Z<Q extends ObjectTypeDefinition> =
  & OntologiesV2.ObjectTypeFullMetadata
  & {};

export class FauxOntology {
  #ontology: OntologiesV2.OntologyFullMetadata;

  constructor(ontology: OntologiesV2.OntologyV2) {
    this.#ontology = {
      actionTypes: {},
      interfaceTypes: {},
      objectTypes: {},
      ontology,
      queryTypes: {},
      sharedPropertyTypes: {},
    };
  }

  getOntologyFullMetadata(): OntologiesV2.OntologyFullMetadata {
    return this.#ontology;
  }

  getAllInterfaceTypes(): OntologiesV2.InterfaceType[] {
    return Object.values(this.#ontology.interfaceTypes);
  }

  getInterfaceType(interfaceType: string): OntologiesV2.InterfaceType {
    const ret = this.#ontology.interfaceTypes[interfaceType];

    if (ret === undefined) {
      throw new OpenApiCallError(
        404,
        ObjectNotFoundError(interfaceType, ""),
      );
    }

    return (
      this.#ontology.interfaceTypes[interfaceType]
    );
  }

  public getObjectTypeFullMetadata(
    objectTypeApiName: string,
  ): OntologiesV2.ObjectTypeFullMetadata {
    const objectType = this.#ontology.objectTypes[objectTypeApiName];
    if (objectType === undefined) {
      throw new OpenApiCallError(
        404,
        ObjectTypeDoesNotExistError(objectTypeApiName),
      );
    }
    return objectType;
  }

  public getActionDef(
    actionTypeApiName: string,
  ): OntologiesV2.ActionTypeV2 {
    const actionType = this.#ontology.actionTypes[actionTypeApiName];
    if (actionType === undefined) {
      throw new OpenApiCallError(
        404,
        ActionNotFoundError(),
      );
    }
    return actionType;
  }

  public getQueryDef(
    queryTypeApiName: string,
  ): OntologiesV2.QueryTypeV2 {
    const queryType = this.#ontology.queryTypes[queryTypeApiName];
    if (queryType === undefined) {
      throw new OpenApiCallError(
        404,
        QueryNotFoundError(queryTypeApiName),
      );
    }
    return queryType;
  }

  public getLinkTypeSideV2(
    objectTypeApiName: string,
    linkTypeName: string,
  ): OntologiesV2.LinkTypeSideV2 {
    const objectType = this.getObjectTypeFullMetadata(objectTypeApiName);
    const linkType = objectType.linkTypes.find((a) =>
      a.apiName === linkTypeName
    );
    if (linkType === undefined) {
      throw new OpenApiCallError(
        404,
        LinkTypeNotFound(objectTypeApiName, linkTypeName),
      );
    }
    return linkType;
  }

  registerObjectType(
    def: OntologiesV2.ObjectTypeFullMetadata,
  ): void;
  registerObjectType<Q extends ObjectTypeDefinition>(
    def: ZZ_ObjectTypeFull<Q>,
  ): void;
  registerObjectType<Q extends ObjectTypeDefinition>(
    def: ZZ_ObjectTypeFull<Q> | OntologiesV2.ObjectTypeFullMetadata,
  ): void {
    if (def.objectType.apiName in this.#ontology.objectTypes) {
      throw new Error(
        `ObjectType ${def.objectType.apiName} already registered`,
      );
    }
    this.#ontology.objectTypes[def.objectType.apiName] = def;
  }

  registerActionType(def: OntologiesV2.ActionTypeV2): void {
    if (def.apiName in this.#ontology.actionTypes) {
      throw new Error(
        `ActionType ${def.apiName} already registered`,
      );
    }
    this.#ontology.actionTypes[def.apiName] = def;
  }

  registerQueryType(def: OntologiesV2.QueryTypeV2): void {
    if (def.apiName in this.#ontology.queryTypes) {
      throw new Error(
        `QueryType ${def.apiName} already registered`,
      );
    }
    this.#ontology.queryTypes[def.apiName] = def;
  }

  registerInterfaceType(def: OntologiesV2.InterfaceType): void {
    if (def.apiName in this.#ontology.interfaceTypes) {
      throw new Error(
        `InterfaceType ${def.apiName} already registered`,
      );
    }
    this.#ontology.interfaceTypes[def.apiName] = def;
  }

  registerSharedPropertyType(def: OntologiesV2.SharedPropertyType): void {
    if (def.apiName in this.#ontology.sharedPropertyTypes) {
      throw new Error(
        `SharedPropertyType ${def.apiName} already registered`,
      );
    }
    this.#ontology.sharedPropertyTypes[def.apiName] = def;
  }
}

export class FauxFoundry {
  #ontologiesByRid = new Map<string, FauxOntology>();
  #ontologiesByApiName = new Map<string, FauxOntology>();

  constructor() {
  }

  registerOntology(ontology: FauxOntology): void {
    this.#ontologiesByApiName.set(
      ontology.getOntologyFullMetadata().ontology.apiName,
      ontology,
    );

    this.#ontologiesByRid.set(
      ontology.getOntologyFullMetadata().ontology.rid,
      ontology,
    );
  }

  getOntology(ontologyApiName: string): FauxOntology {
    const ontology = this.#ontologiesByApiName.get(ontologyApiName)
      ?? this.#ontologiesByRid.get(ontologyApiName);
    if (!ontology) {
      throw new OpenApiCallError(404, OntologyNotFoundError(ontologyApiName));
    }
    return ontology;
  }

  #handle_OntologiesV2_OntologyObjectSets_load = async (
    req: Parameters<
      HttpResponseResolver<
        PathParams<string>,
        ExtractBody<typeof OntologiesV2.OntologyObjectSets.load>,
        LoadObjectSetResponseV2 | BaseAPIError
      >
    >[0],
  ) => {
    const parsedBody = await req.request.json();
    const selected = parsedBody.select;
    const response: LoadObjectSetResponseV2 | undefined = pageThroughResponse(
      loadObjectSetRequestHandlers,
      parsedBody,
      true,
    );

    if (
      (req.params.ontologyApiName === defaultOntology.apiName
        || req.params.ontologyApiName === defaultOntology.rid)
      && response
    ) {
      return filterObjectsProperties(response, [...selected], true);
    }

    throw new OpenApiCallError(
      400,
      InvalidRequest(
        `Invalid request body: ${JSON.stringify(parsedBody)}`,
      ),
    );
  };
}

export const objectSetHandlers: Array<RequestHandler> = [
  /**
   * Load ObjectSet Objects
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
    handleLoadObjectSet,
  ),

  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.load,
    ["ontologyApiName"],
    handleLoadObjectSet,
    "https://stack.palantirCustom.com/foo/first/someStuff/",
  ),

  /**
   * Aggregate Objects in ObjectSet
   */
  handleOpenApiCall(
    OntologiesV2.OntologyObjectSets.aggregate,
    ["ontologyApiName"],
    async ({ request }) => {
      const parsedBody = await request.json();
      const aggResp = aggregationRequestHandlers[stableStringify(parsedBody)];
      if (aggResp) {
        return aggResp;
      }
      throw new OpenApiCallError(
        400,
        InvalidRequest(
          `Invalid aggregation request: ${JSON.stringify(parsedBody)}`,
        ),
      );
    },
  ),
];

async function handleLoadObjectSet(
  req: Parameters<
    HttpResponseResolver<
      PathParams<string>,
      ExtractBody<typeof OntologiesV2.OntologyObjectSets.load>,
      LoadObjectSetResponseV2 | BaseAPIError
    >
  >[0],
) {
  const parsedBody = await req.request.json();
  const selected = parsedBody.select;
  const response: LoadObjectSetResponseV2 | undefined = pageThroughResponse(
    loadObjectSetRequestHandlers,
    parsedBody,
    true,
  );

  if (
    (req.params.ontologyApiName === defaultOntology.apiName
      || req.params.ontologyApiName === defaultOntology.rid)
    && response
  ) {
    return filterObjectsProperties(response, [...selected], true);
  }

  throw new OpenApiCallError(
    400,
    InvalidRequest(
      `Invalid request body: ${JSON.stringify(parsedBody)}`,
    ),
  );
}
