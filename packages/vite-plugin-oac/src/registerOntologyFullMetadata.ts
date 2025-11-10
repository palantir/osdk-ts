/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  BaseServerObject,
  FauxActionImpl,
  FauxDataStoreBatch,
  FauxFoundry,
} from "@osdk/faux";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { inspect } from "node:util";
import invariant from "tiny-invariant";

inspect.defaultOptions = {
  colors: true,
  depth: Infinity,
};

export function registerOntologyFullMetadata(
  ontology: ReturnType<FauxFoundry["getOntology"]>,
  ontologyFullMetadata: Ontologies.OntologyFullMetadata,
): void {
  // Register object types
  Object.values(ontologyFullMetadata.objectTypes).forEach((objectType) => {
    ontology.registerObjectType(objectType);
  });
  // Register action types with implementations
  Object.values(ontologyFullMetadata.actionTypes).forEach((actionType) => {
    const implementation = createActionImplementation(
      actionType,
      ontologyFullMetadata,
    );
    const actionTypeWithCamelCaseApiName = {
      ...actionType,
      apiName: camelcase(actionType.apiName),
    };
    ontology.registerActionType(actionTypeWithCamelCaseApiName, implementation);
  });
  Object.values(ontologyFullMetadata.sharedPropertyTypes).forEach(
    (actionType) => {
      ontology.registerSharedPropertyType(actionType);
    },
  );
  Object.values(ontologyFullMetadata.queryTypes).forEach((query) => {
    ontology.registerQueryType(query);
  });
  Object.values(ontologyFullMetadata.interfaceTypes).forEach((iface) => {
    ontology.registerInterfaceType(iface);
  });
}

// NOTE: The ontology full metadata is not sufficient for doing this properly.

/**
 * Creates a fake implementation for an action type based on its operations
 */
function createActionImplementation(
  actionType: Ontologies.ActionTypeV2,
  fullMetadata: Ontologies.OntologyFullMetadata,
): FauxActionImpl {
  return (
    batch,
    payload: {
      parameters: Record<string, any>;
    },
    _ctx: unknown,
  ) => {
    // Extract parameters from payload
    const params = payload.parameters;

    // Handle different operation types
    for (const operation of actionType.operations) {
      switch (operation.type) {
        case "createObject": {
          // Handle create object operation
          const objectType = getObjectTypeForOperation(
            operation,
            fullMetadata,
          );

          // we don't store the PK with the other properties
          const primaryKeyProp = objectType.objectType.primaryKey;
          const primaryKey = extractAndDelete(params, primaryKeyProp);

          // Create object data from parameters
          const objectData = paramsToDataValues(params, actionType);
          batch.addObject(
            objectType.objectType.apiName,
            primaryKey,
            objectData,
          );

          // TODO: this shouldn't send params but the actual object!
          handleObjectLinks(
            batch,
            fullMetadata,
            objectType.objectType.apiName,
            primaryKey,
            params,
          );
          break;
        }

        case "modifyObject": {
          // Handle modify object operation
          const { objectType } = getObjectTypeForOperation(
            operation,
            fullMetadata,
          );

          const primaryKey = extractAndDelete(
            params,
            "objectToModifyParameter",
          );

          const targetObject = batch.getObject(
            objectType.apiName,
            primaryKey,
          );
          invariant(
            targetObject,
            `Could not find object ${objectType.apiName} with PK ${primaryKey}`,
          );

          if (objectType.primaryKey in params) {
            // TODO Is this true? Or are you allowed to change the PK value?
            invariant(
              params[objectType.primaryKey] === primaryKey,
              `If the primary key is provided, it must match the 'objectToModifyParameter'`,
            );
            // delete the key since we don't store it directly on the object
            delete params[objectType.primaryKey];
          }

          const objectData = paramsToDataValues(params, actionType);
          batch.modifyObject(objectType.apiName, primaryKey, objectData);

          // TODO: this shouldn't send params but the actual object!
          handleObjectLinks(
            batch,
            fullMetadata,
            objectType.apiName,
            primaryKey,
            params,
          );

          break;
        }

        case "deleteObject": {
          const { objectType } = getObjectTypeForOperation(
            operation,
            fullMetadata,
          );
          const primaryKey = extractAndDelete(
            params,
            "objectToDeleteParameter",
          );

          // Handle delete object operation
          batch.deleteObject(objectType.apiName, primaryKey);
          break;
        }

        case "createLink": {
          // Handle create link operation
          const aSideObjectTypeApiName = operation.aSideObjectTypeApiName;
          const bSideObjectTypeApiName = operation.bSideObjectTypeApiName;
          const linkTypeApiNameAtoB = operation.linkTypeApiNameAtoB;

          // For simplicity, assume we have the primary keys in the parameters
          // In a real implementation, we would need to extract them from the parameters
          const aSidePrimaryKey = params.aSidePrimaryKey || params.primaryKey_;
          const bSidePrimaryKey = params.bSidePrimaryKey
            || params.linkedObjectPrimaryKey;

          if (aSidePrimaryKey && bSidePrimaryKey) {
            batch.addLink(
              aSideObjectTypeApiName,
              aSidePrimaryKey,
              linkTypeApiNameAtoB,
              bSideObjectTypeApiName,
              bSidePrimaryKey,
            );
          }
          break;
        }

        case "deleteLink": {
          // Handle delete link operation
          const aSideObjectTypeApiName = operation.aSideObjectTypeApiName;
          const bSideObjectTypeApiName = operation.bSideObjectTypeApiName;
          const linkTypeApiNameAtoB = operation.linkTypeApiNameAtoB;

          // For simplicity, assume we have the primary keys in the parameters
          // In a real implementation, we would need to extract them from the parameters
          const aSidePrimaryKey = params.aSidePrimaryKey || params.primaryKey_;
          const bSidePrimaryKey = params.bSidePrimaryKey
            || params.linkedObjectPrimaryKey;

          if (aSidePrimaryKey && bSidePrimaryKey) {
            batch.removeLink(
              aSideObjectTypeApiName,
              aSidePrimaryKey,
              linkTypeApiNameAtoB,
              bSideObjectTypeApiName,
              bSidePrimaryKey,
            );
          }
          break;
        }

        // Handle other operation types as needed
        case "createInterfaceObject":
        case "modifyInterfaceObject":
        case "deleteInterfaceObject":
          // These operations are not implemented for now
          throw new Error(
            `Operation type ${operation.type} not implemented yet`,
          );
          break;
        default:
          throw new Error(`Unknown operation type: ${(operation as any).type}`);
      }
    }
  };
}

function extractAndDelete<K extends string, O extends Record<K, any>>(
  obj: O,
  key: K,
) {
  const value = obj[key];
  delete obj[key];
  return value;
}

function getObjectTypeForOperation(
  operation:
    | Ontologies.CreateObjectRule
    | Ontologies.ModifyObjectRule
    | Ontologies.DeleteObjectRule,
  fullMetadata: Ontologies.OntologyFullMetadata,
) {
  const objectTypeApiName = operation.objectTypeApiName;
  const objectType = fullMetadata.objectTypes[objectTypeApiName];
  invariant(objectType);
  return objectType;
}

function paramsToDataValues(
  params: Record<string, any>,
  actionType: Ontologies.ActionTypeV2,
) {
  const objectData: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    objectData[key] = toDataValue(value, actionType.parameters[key]);
  }
  return objectData;
}

function camelcase(apiName: string): string {
  return apiName
    .toLowerCase()
    .replace(/[-_]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ""));
}

function toDataValue(value: any, param: Ontologies.ActionParameterV2): unknown {
  if (param.dataType.type === "geohash" && typeof value === "string") {
    return latLonStringToGeoJSON(value);
  }
  return value;
}

function latLonStringToGeoJSON(latLonStr: string) {
  // Split the string by comma and parse as floats
  const [lat, lon] = latLonStr.split(",").map(Number);

  // Basic validation
  if (
    isNaN(lat)
    || isNaN(lon)
    || lat < -90
    || lat > 90
    || lon < -180
    || lon > 180
  ) {
    throw new Error("Invalid latitude or longitude");
  }

  // Return GeoJSON Point
  return {
    type: "Point",
    coordinates: [lon, lat], // GeoJSON uses [longitude, latitude]
  };
}

/**
 * Handles linking objects based on parameter values and existing objects
 */
function handleObjectLinks(
  batch: FauxDataStoreBatch,
  fullMetadata: Ontologies.OntologyFullMetadata,
  objectTypeApiName: string,
  primaryKey: string | number | boolean,
  params: Record<string, unknown>,
): void {
  // HACK HACK HACK
  fullMetadata.objectTypes[objectTypeApiName].linkTypes.forEach(link => {
    const cardinality = link.cardinality;

    if (cardinality === "ONE") {
      // This means its a one to many and we are on the one side of the link
      for (const foreignObject of batch.getObjects(link.objectTypeApiName)) {
        if (anyValueMatches(params, foreignObject.__primaryKey)) {
          batch.addLink(
            objectTypeApiName,
            primaryKey,
            link.apiName,
            link.objectTypeApiName,
            foreignObject.__primaryKey,
          );
        }
      }
    } else {
      // This means its a one to many and we are on the many side of the link
      for (const foreignObject of batch.getObjects(link.objectTypeApiName)) {
        if (anyValueMatches(foreignObject, primaryKey)) {
          batch.addLink(
            objectTypeApiName,
            primaryKey,
            link.apiName,
            link.objectTypeApiName,
            foreignObject.__primaryKey,
          );
        }
      }
    }
  });
}

function anyValueMatches(
  obj: BaseServerObject | Record<string, unknown>,
  primaryKey: string | number | boolean,
) {
  return Object.values(obj).some(val => val === primaryKey);
}
