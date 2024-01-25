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

import { namespaces } from "@osdk/gateway";
import type {
  ActionParameterType,
  ActionTypeV2,
  Ontology,
  OntologyFullMetadata,
  QueryDataType,
  QueryTypeV2,
} from "@osdk/gateway/types";
import type { WireOntologyDefinition } from "@osdk/generator";
import { UserTokenAuth } from "@osdk/legacy-client";
import { getApiRequestFunction } from "../net/FetchClient.js";
import { Result } from "./Result.js";

export class OntologyMetadataResolver {
  #authToken: string;
  constructor(authToken: string, private stackName: string) {
    this.#authToken = authToken;
  }

  private getRequestFunction<T>() {
    return getApiRequestFunction<T>(
      new UserTokenAuth({ userToken: this.#authToken }),
      this.stackName,
      `foundry-typescript-osdk-generator/${process.env.npm_package_version!}`,
      "/api",
    );
  }

  private filterMetadata(
    ontologyFullMetadata: OntologyFullMetadata,
    expectedEntities: {
      linkTypes: Map<string, Set<string>>;
      objectTypes: Set<string>;
      queryTypes: Set<string>;
      actionTypes: Set<string>;
    },
  ): OntologyFullMetadata {
    const filteredObjectTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.objectTypes).filter((
        [objectTypeApiName],
      ) => expectedEntities.objectTypes.has(objectTypeApiName.toLowerCase())),
    );

    Object.values(filteredObjectTypes).forEach(objectType => {
      const linkTypesToKeep = expectedEntities.linkTypes.get(
        objectType.objectType.apiName.toLowerCase(),
      );
      if (!linkTypesToKeep) {
        objectType.linkTypes = [];
        return;
      }

      objectType.linkTypes = objectType.linkTypes.filter(linkType =>
        linkTypesToKeep.has(linkType.apiName.toLowerCase())
      );
    });

    const filteredActionTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.actionTypes).filter(
        ([actionApiName]) => {
          if (
            expectedEntities.actionTypes.has(
              this.camelize(actionApiName).toLowerCase(),
            )
          ) {
            return true;
          }
          return false;
        },
      ),
    );

    const filteredQueryTypes = Object.fromEntries(
      Object.entries(ontologyFullMetadata.queryTypes).filter(([queryApiName]) =>
        expectedEntities.queryTypes.has(queryApiName.toLowerCase())
      ),
    );

    return {
      ontology: ontologyFullMetadata.ontology,
      objectTypes: filteredObjectTypes,
      actionTypes: filteredActionTypes,
      queryTypes: filteredQueryTypes,
      interfaceTypes: {},
      sharedPropertyTypes: {},
    };
  }

  public async getWireOntologyDefinition(
    ontologyRid: string,
    entities: {
      actionTypesApiNamesToLoad?: string[];
      objectTypesApiNamesToLoad?: string[];
      queryTypesApiNamesToLoad?: string[];
      linkTypesApiNamesToLoad?: string[];
    },
  ): Promise<Result<WireOntologyDefinition, string[]>> {
    let ontology: Ontology;
    try {
      ontology = await namespaces.getOntology(
        this.getRequestFunction(),
        ontologyRid,
      );
    } catch (e) {
      return Result.err([
        `Unable to load the specified Ontology with network error: ${
          JSON.stringify(e)
        }`,
      ]);
    }

    const ontologyFullMetadata = await namespaces.getOntologyFullMetadata(
      this.getRequestFunction(),
      ontology.apiName,
    );

    const linkTypes = new Map<string, Set<string>>();
    const objectTypes = new Set(
      entities.objectTypesApiNamesToLoad?.map(object => object.toLowerCase()),
    );
    const queryTypes = new Set(
      entities.queryTypesApiNamesToLoad?.map(query => query.toLowerCase()),
    );
    const actionTypes = new Set(
      entities.actionTypesApiNamesToLoad?.map(action =>
        this.camelize(action).toLowerCase()
      ),
    );

    for (const linkType of entities.linkTypesApiNamesToLoad ?? []) {
      const [objectTypeApiName, linkTypeApiName] = linkType.toLowerCase().split(
        ".",
      );
      if (!linkTypes.has(objectTypeApiName)) {
        linkTypes.set(objectTypeApiName, new Set());
      }
      linkTypes.get(objectTypeApiName)?.add(linkTypeApiName);
    }

    const filteredFullMetadata = this.filterMetadata(ontologyFullMetadata, {
      objectTypes,
      linkTypes,
      actionTypes,
      queryTypes,
    });

    const validData: Result<{}, string[]> = this.validateLoadedOntologyMetadata(
      filteredFullMetadata,
      {
        objectTypes,
        linkTypes,
        actionTypes,
        queryTypes,
      },
    );

    if (validData.isErr()) {
      return Result.err(validData.error) as Result<
        WireOntologyDefinition,
        string[]
      >;
    }
    return Result.ok(filteredFullMetadata) as Result<
      WireOntologyDefinition,
      string[]
    >;
  }

  private validateLoadedOntologyMetadata(
    filteredFullMetadata: OntologyFullMetadata,
    expectedEntities: {
      linkTypes: Map<string, Set<string>>;
      objectTypes: Set<string>;
      queryTypes: Set<string>;
      actionTypes: Set<string>;
    },
  ): Result<{}, string[]> {
    const errors: string[] = [];
    const loadedObjectTypes = Object.fromEntries(
      Object.values(filteredFullMetadata.objectTypes).map(object => [
        object.objectType.apiName.toLowerCase(),
        object,
      ]),
    );

    const loadedLinkTypes = Object.fromEntries(
      Object.values(filteredFullMetadata.objectTypes).map(object => [
        object.objectType.apiName.toLowerCase(),
        Object.fromEntries(
          object.linkTypes.map(link => [link.apiName.toLowerCase(), link]),
        ),
      ]),
    );

    const missingObjectTypes: string[] = [];
    for (const object of expectedEntities.objectTypes) {
      // Expected an object that wasn't loaded
      if (!loadedObjectTypes[object]) {
        missingObjectTypes.push(object);
        continue;
      }

      // Expected a link that wasn't received
      for (const expectedLink of expectedEntities.linkTypes.get(object) ?? []) {
        if (!loadedLinkTypes[object][expectedLink]) {
          errors.push(
            `Unable to find link type ${expectedLink} for Object Type ${object}`,
          );
        }
      }

      for (const [, link] of Object.entries(loadedLinkTypes[object])) {
        // Loaded a link where target was not loaded
        if (
          !expectedEntities.objectTypes.has(
            link.objectTypeApiName.toLowerCase(),
          )
        ) {
          errors.push(
            `Unable to load link type ${link.apiName} for ${
              loadedObjectTypes[object].objectType.apiName
            }, because the target object type ${link.objectTypeApiName} is not loaded. Please specify the target Object type with --objectTypes ${link.objectTypeApiName}`,
          );
        }
      }
    }

    if (missingObjectTypes.length > 0) {
      errors.push(
        `Unable to find the following Object Types: ${missingObjectTypes.join()}`,
      );
    }

    const loadedQueryTypes = Object.fromEntries(
      Object.entries(filteredFullMetadata.queryTypes).map((
        [queryApiName, query],
      ) => [
        queryApiName.toLowerCase(),
        query,
      ]),
    );

    // Validate expected queries were loaded
    const missingQueryTypes: string[] = [];
    for (const queryApiName of expectedEntities.queryTypes) {
      if (!loadedQueryTypes[queryApiName]) {
        missingQueryTypes.push(queryApiName);
      }
    }

    // Validate parameters and output for Queries
    for (const query of Object.values(loadedQueryTypes)) {
      const result = this.validateQueryParametersAndOutput(
        query,
        expectedEntities.objectTypes,
      );
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }

    if (missingQueryTypes.length > 0) {
      errors.push(
        `Unable to find the following Query Types: ${missingQueryTypes.join()}`,
      );
    }

    const loadedActionTypes = Object.fromEntries(
      Object.entries(filteredFullMetadata.actionTypes).map((
        [actionApiName, action],
      ) => [
        this.camelize(actionApiName).toLowerCase(),
        action,
      ]),
    );

    const missingActionTypes: string[] = [];
    for (const actionApiName of expectedEntities.actionTypes) {
      if (!loadedActionTypes[actionApiName]) {
        missingActionTypes.push(actionApiName);
      }
    }

    // Validate parameters for Actions
    for (const action of Object.values(loadedActionTypes)) {
      const result = this.validateActionParameters(
        action,
        expectedEntities.objectTypes,
      );
      if (result.isErr()) {
        for (const errorString of result.error) {
          errors.push(errorString);
        }
      }
    }

    if (missingActionTypes.length > 0) {
      errors.push(
        `Unable to find the following Action Types: ${missingActionTypes.join()}`,
      );
    }

    if (errors.length > 0) {
      return Result.err(errors);
    }
    return Result.ok({});
  }

  private validateQueryParametersAndOutput(
    query: QueryTypeV2,
    loadedObjectApiNames: Set<string>,
  ): Result<{}, string[]> {
    const parameterValidation: Array<Result<{}, string[]>> = Object.entries(
      query.parameters,
    ).map(
      ([paramName, paramData]) =>
        this.visitSupportedQueryTypes(
          query.apiName,
          paramName,
          paramData.dataType,
          loadedObjectApiNames,
        ),
    );

    parameterValidation.push(
      this.visitSupportedQueryTypes(
        query.apiName,
        "output",
        query.output,
        loadedObjectApiNames,
      ),
    );

    const results = Result.coalesce<{}, string>(parameterValidation);

    return results;
  }

  private validateActionParameters(
    actionType: ActionTypeV2,
    loadedObjectApiNames: Set<string>,
  ): Result<{}, string[]> {
    const camelizedApiName = this.camelize(actionType.apiName);

    const parameterValidation: Array<Result<{}, string[]>> = Object.entries(
      actionType.parameters,
    ).map(
      ([_paramName, paramData]) =>
        this.isSupportedActionTypeParameter(
          camelizedApiName,
          paramData.dataType,
          loadedObjectApiNames,
        ),
    );

    return Result.coalesce<{}, string>(parameterValidation);
  }

  private visitSupportedQueryTypes(
    queryApiName: string,
    propertyName: string,
    baseType: QueryDataType,
    loadedObjectApiNames: Set<string>,
  ): Result<{}, string[]> {
    switch (baseType.type) {
      case "array":
      case "set":
        return this.visitSupportedQueryTypes(
          queryApiName,
          propertyName,
          baseType.subType,
          loadedObjectApiNames,
        );
      case "objectSet":
      case "object":
        if (
          loadedObjectApiNames.has(baseType.objectTypeApiName?.toLowerCase()!)
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unloaded object type as a parameter: ${baseType
            .objectTypeApiName!} in parameter ${propertyName}. `
          + `Make sure to specify it as an argument with --ontologyObjects ${baseType
            .objectTypeApiName!}.}`,
        ]);
      case "struct":
        const results = baseType.fields?.map(field => {
          return this.visitSupportedQueryTypes(
            queryApiName,
            propertyName,
            field.fieldType,
            loadedObjectApiNames,
          );
        });

        if (!results) {
          return Result.ok({});
        }

        return Result.coalesce(results);
      case "union":
        if (
          baseType.unionTypes.find(unionTypes => unionTypes.type === "null")
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${
            JSON.stringify(
              baseType,
            )
          } in parameter ${propertyName}`,
        ]);
      case "string":
      case "boolean":
      case "attachment":
      case "date":
      case "double":
      case "float":
      case "integer":
      case "long":
      case "threeDimensionalAggregation":
      case "timestamp":
      case "twoDimensionalAggregation":
      case "null":
        return Result.ok({});
      case "unsupported":
      default:
        return Result.err([
          `Unable to load query ${queryApiName} because it takes an unsupported parameter type: ${
            JSON.stringify(
              baseType,
            )
          } in parameter ${propertyName}`,
        ]);
    }
  }

  private isSupportedActionTypeParameter(
    actionApiName: string,
    actonTypeParameter: ActionParameterType,
    loadedObjectApiNames: Set<string>,
  ): Result<{}, string[]> {
    switch (actonTypeParameter.type) {
      case "array":
        return this.isSupportedActionTypeParameter(
          actionApiName,
          actonTypeParameter.subType,
          loadedObjectApiNames,
        );
      case "object":
        if (
          loadedObjectApiNames.has(
            actonTypeParameter.objectTypeApiName?.toLowerCase()!,
          )
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unloaded object type as a parameter: ${actonTypeParameter
            .objectTypeApiName!} `
          + `make sure to specify it as an argument with --ontologyObjects ${actonTypeParameter
            .objectTypeApiName!})`,
        ]);
      case "objectSet":
        if (
          loadedObjectApiNames.has(
            actonTypeParameter.objectTypeApiName?.toLowerCase()!,
          )
        ) {
          return Result.ok({});
        }
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an ObjectSet of unloaded object type as a parameter: ${actonTypeParameter
            .objectTypeApiName!} `
          + `make sure to specify it as an argument with --ontologyObjects ${actonTypeParameter
            .objectTypeApiName!})`,
        ]);
      case "string":
      case "boolean":
      case "attachment":
      case "date":
      case "double":
      case "integer":
      case "long":
      case "timestamp":
        return Result.ok({});
      default:
        return Result.err([
          `Unable to load action ${actionApiName} because it takes an unsupported parameter: ${
            JSON.stringify(
              actonTypeParameter,
            )
          } `
          + `specify only the actions you want to load with the --actions argument.`,
        ]);
    }
  }

  private camelize(name: string) {
    return name.replace(/-./g, segment => segment[1]!.toUpperCase());
  }
}
