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
  type CompileTimeMetadata,
  type ObjectMetadata,
  type ObjectTypeDefinition,
} from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import {
  ActionNotFoundError,
  LinkTypeNotFound,
  ObjectNotFoundError,
  ObjectTypeDoesNotExistError,
  QueryNotFoundError,
} from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";

interface TypeHelper_Property<Q extends ObjectMetadata.Property>
  extends OntologiesV2.PropertyV2
{
  dataType: OntologiesV2.ObjectPropertyType & { type: Q["type"] };
}

type TypeHelper_Properties<Q extends ObjectTypeDefinition> = {
  [K in keyof CompileTimeMetadata<Q>["properties"]]: TypeHelper_Property<
    CompileTimeMetadata<Q>["properties"][K]
  >;
};

interface TypeHelper_ObjectType<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeV2
{
  apiName: Q["apiName"];
  primaryKey: CompileTimeMetadata<Q>["primaryKeyApiName"];
  titleProperty: CompileTimeMetadata<Q>["titleProperty"];
  properties: TypeHelper_Properties<Q>;
}

interface TypeHelper_ObjectTypeFullMetadata<Q extends ObjectTypeDefinition>
  extends OntologiesV2.ObjectTypeFullMetadata
{
  objectType: TypeHelper_ObjectType<Q>;
}

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

  get apiName(): OntologiesV2.OntologyApiName {
    return this.#ontology.ontology.apiName;
  }

  getOntologyFullMetadata(): OntologiesV2.OntologyFullMetadata {
    return this.#ontology;
  }

  getAllInterfaceTypes(): OntologiesV2.InterfaceType[] {
    return Object.values(this.#ontology.interfaceTypes);
  }

  getAllObjectTypes(): OntologiesV2.ObjectTypeFullMetadata[] {
    return Object.values(this.#ontology.objectTypes);
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

  registerObjectType<Q extends ObjectTypeDefinition>(
    def: TypeHelper_ObjectTypeFullMetadata<Q>,
  ): void;
  registerObjectType(
    def: OntologiesV2.ObjectTypeFullMetadata,
  ): void;
  registerObjectType<Q extends ObjectTypeDefinition>(
    def:
      | TypeHelper_ObjectTypeFullMetadata<Q>
      | OntologiesV2.ObjectTypeFullMetadata,
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
