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

import type { FauxFoundry } from "@osdk/faux";
import type * as Ontologies from "@osdk/foundry.ontologies";
import type { FauxActionImpl } from "./FauxFoundryTypes.js";

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
    const implementation = createActionImplementation(actionType);
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

/**
 * Creates a fake implementation for an action type based on its operations
 */
function createActionImplementation(
  actionType: Ontologies.ActionTypeV2,
): FauxActionImpl {
  return (
    batch: {
      addObject: (
        objectType: string,
        primaryKey: string | number | boolean,
        object: Record<string, unknown>,
      ) => void;
      modifyObject: (
        objectType: string,
        primaryKey: string | number | boolean,
        update: Record<string, unknown>,
      ) => void;
      deleteObject: (
        objectType: string,
        primaryKey: string | number | boolean,
      ) => void;
      addLink: (
        leftObjectType: string,
        leftPrimaryKey: string | number | boolean,
        leftLinkName: string,
        rightObjectType: string,
        rightPrimaryKey: string | number | boolean,
      ) => void;
      removeLink: (
        leftObjectType: string,
        leftPrimaryKey: string | number | boolean,
        leftLinkName: string,
        rightObjectType: string,
        rightPrimaryKey: string | number | boolean,
      ) => void;
    },
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
          const objectTypeApiName = operation.objectTypeApiName;
          const primaryKey = params.primaryKey_;

          // Create object data from parameters, excluding the primary key
          const objectData: Record<string, unknown> = {};
          for (const [key, value] of Object.entries(params)) {
            if (key !== "primaryKey_") {
              const param = actionType.parameters[key];
              objectData[key] = toDataValue(value, param);
            }
          }

          batch.addObject(objectTypeApiName, primaryKey, objectData);
          break;
        }
        case "modifyObject": {
          // Handle modify object operation
          let objectTypeApiName: string;
          let primaryKey: string | number | boolean;

          if (typeof operation.objectTypeApiName === "string") {
            objectTypeApiName = operation.objectTypeApiName;
            primaryKey = params.primaryKey_;
          } else {
            // If objectTypeApiName is a parameter reference
            const objectToModify = params[operation.objectTypeApiName];
            if (objectToModify) {
              objectTypeApiName = objectToModify.objectTypeApiName
                || objectToModify;
              primaryKey = objectToModify.primaryKeyValue || params.primaryKey_;
            } else {
              // Default to the parameter name if not found
              objectTypeApiName = operation.objectTypeApiName;
              primaryKey = params.primaryKey_;
            }
          }

          // Create object data from parameters, excluding the primary key and objectToModifyParameter
          const objectData: Record<string, unknown> = {};
          for (const [key, value] of Object.entries(params)) {
            if (key !== "primaryKey_" && key !== "objectToModifyParameter") {
              const param = actionType.parameters[key];
              objectData[key] = toDataValue(value, param);
            }
          }

          batch.modifyObject(objectTypeApiName, primaryKey, objectData);
          break;
        }
        case "deleteObject": {
          // Handle delete object operation
          let objectTypeApiName: string;
          let primaryKey: string | number | boolean;

          if (typeof operation.objectTypeApiName === "string") {
            objectTypeApiName = operation.objectTypeApiName;
            primaryKey = params.primaryKey_;
          } else {
            // If objectTypeApiName is a parameter reference
            const objectToDelete = params[operation.objectTypeApiName];
            if (objectToDelete) {
              objectTypeApiName = objectToDelete.objectTypeApiName
                || objectToDelete;
              primaryKey = objectToDelete.primaryKeyValue || params.primaryKey_;
            } else {
              // Default to the parameter name if not found
              objectTypeApiName = operation.objectTypeApiName;
              primaryKey = params.primaryKey_;
            }
          }

          batch.deleteObject(objectTypeApiName, primaryKey);
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

function camelcase(apiName: string): string {
  return apiName
    .toLowerCase()
    .replace(/[-_]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ""));
}

function toDataValue(value: any, param: Ontologies.ActionParameterV2): unknown {
  if (param.dataType.type === "geoshape" && typeof value === "string") {
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
