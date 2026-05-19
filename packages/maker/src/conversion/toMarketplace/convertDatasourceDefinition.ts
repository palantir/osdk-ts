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
  MarkingType,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrPropertySecurityGroup,
  OntologyIrPropertySecurityGroups,
  OntologyIrSecurityGroupGranularCondition,
  OntologyIrSecurityGroupGranularSecurityDefinition,
  PropertyTypeMappingInfo,
  RetentionPolicy,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";
import type {
  ObjectTypeDatasourceDefinition_dataset,
  ObjectTypeDatasourceDefinition_direct,
} from "../../api/object/ObjectTypeDatasourceDefinition.js";
import type { SecurityConditionDefinition } from "../../api/object/SecurityCondition.js";

export function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
): OntologyIrObjectTypeDatasourceDefinition {
  const baseDatasource = objectType.datasources?.find(ds =>
    ["dataset", "stream", "restrictedView", "direct"].includes(ds.type)
  );
  switch (baseDatasource?.type) {
    case "stream":
      const window = baseDatasource.retentionPeriod;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };
      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [prop.apiName, resolveStreamPropertyColumn(prop)]),
      );
      return {
        type: "streamV2",
        streamV2: {
          streamLocator: objectType.apiName,
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };
    case "restrictedView":
      return {
        type: "restrictedViewV2",
        restrictedViewV2: {
          restrictedViewRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
    case "derived":
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
    case "direct":
      return {
        type: "direct",
        direct: {
          directSourceRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
          propertySecurityGroups: convertPropertySecurityGroups(
            baseDatasource,
            properties,
            objectType.primaryKeyPropertyApiName,
          ),
        },
      };
    case "dataset":
    default:
      if (
        objectType.properties?.some(prop =>
          typeof prop.type === "object" && prop.type.type === "marking"
        )
        || baseDatasource?.objectSecurityPolicy
        || baseDatasource?.propertySecurityGroups
      ) {
        return {
          type: "datasetV3",
          datasetV3: {
            datasetRid: objectType.apiName,
            propertyMapping: buildPropertyMapping(properties),
            branchId: "master",
            propertySecurityGroups: convertPropertySecurityGroups(
              baseDatasource,
              properties,
              objectType.primaryKeyPropertyApiName,
            ),
          },
        };
      }
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
  }
}

function convertPropertySecurityGroups(
  ds:
    | ObjectTypeDatasourceDefinition_dataset
    | ObjectTypeDatasourceDefinition_direct
    | undefined,
  properties: ObjectPropertyType[],
  primaryKeyPropertyApiName: string,
): OntologyIrPropertySecurityGroups {
  if (
    !ds
    || (!("objectSecurityPolicy" in ds) && !("propertySecurityGroups" in ds))
  ) {
    return {
      groups: [
        {
          properties: properties.map(prop => prop.apiName),
          rid: "defaultObjectSecurityPolicy",
          security: {
            type: "granular",
            granular: {
              viewPolicy: {
                granularPolicyCondition: {
                  type: "and",
                  and: {
                    conditions: [],
                  },
                },
                additionalMandatory: {
                  markings: {},
                  assumedMarkingsV2: {},
                  assumedMarkings: [],
                },
              },
            },
          },
          type: {
            type: "primaryKey",
            primaryKey: {},
          },
        },
      ],
    };
  }

  const validPropertyNames = new Set(properties.map(prop => prop.apiName));
  const usedProperties = new Set();

  ds.propertySecurityGroups?.forEach(psg => {
    psg.properties.forEach(propertyName => {
      invariant(
        validPropertyNames.has(propertyName),
        `Property "${propertyName}" in property security group ${psg.name} does not exist in the properties list`,
      );
      invariant(
        !usedProperties.has(propertyName),
        `Property "${propertyName}" is used in multiple property security groups`,
      );
      invariant(
        propertyName !== primaryKeyPropertyApiName,
        `Property "${propertyName}" in property security group ${psg.name} cannot be the primary key`,
      );
      usedProperties.add(propertyName);
    });
  });

  const objectSecurityPolicyGroup: OntologyIrPropertySecurityGroup = {
    rid: ds.objectSecurityPolicy?.name || "defaultObjectSecurityPolicy",
    security: {
      type: "granular",
      granular: convertGranularPolicy(
        ds.objectSecurityPolicy?.granularPolicy,
        ds.objectSecurityPolicy?.appliedMarkings,
        ds.objectSecurityPolicy?.assumedMarkings,
      ),
    },
    type: {
      type: "primaryKey",
      primaryKey: {},
    },
    properties: properties
      .filter(prop => !usedProperties.has(prop.apiName))
      .map(prop => prop.apiName),
  };

  return {
    groups: [
      objectSecurityPolicyGroup,
      ...(ds.propertySecurityGroups?.map(psg => ({
        rid: psg.name,
        security: {
          type: "granular" as const,
          granular: convertGranularPolicy(
            psg.granularPolicy,
            psg.appliedMarkings,
            psg.assumedMarkings,
          ),
        },
        type: {
          type: "property" as const,
          property: {
            name: psg.name,
          },
        },
        properties: psg.properties ?? [],
      })) ?? []),
    ],
  };
}

function convertGranularPolicy(
  granularPolicy?: SecurityConditionDefinition,
  appliedMarkings?: Record<string, MarkingType>,
  assumedMarkings?: Record<string, MarkingType>,
): OntologyIrSecurityGroupGranularSecurityDefinition {
  return {
    viewPolicy: {
      granularPolicyCondition: granularPolicy
        ? convertSecurityCondition(granularPolicy)
        : {
          type: "and",
          and: {
            conditions: [],
          },
        },
      additionalMandatory: {
        markings: appliedMarkings ?? {},
        assumedMarkings: [],
        assumedMarkingsV2: assumedMarkings ?? {},
      },
    },
  };
}

function convertSecurityCondition(
  condition: SecurityConditionDefinition,
): OntologyIrSecurityGroupGranularCondition {
  switch (condition.type) {
    case "and":
      if ("conditions" in condition) {
        return {
          type: "and",
          and: {
            conditions: condition.conditions.map(c =>
              convertSecurityCondition(c)
            ),
          },
        };
      } else {
        return condition;
      }
    case "or":
      if ("conditions" in condition) {
        return {
          type: "or",
          or: {
            conditions: condition.conditions.map(c =>
              convertSecurityCondition(c)
            ),
          },
        };
      } else {
        return condition;
      }
    case "markingProperty":
      return {
        type: "markings",
        markings: {
          property: condition.property,
        },
      };
    case "groupProperty":
      return {
        type: "comparison",
        comparison: {
          operator: "INTERSECTS",
          left: {
            type: "userProperty",
            userProperty: {
              type: "groupIds",
              groupIds: {},
            },
          },
          right: {
            type: "property",
            property: condition.property,
          },
        },
      };
    case "group":
      return {
        type: "comparison",
        comparison: {
          operator: "INTERSECTS",
          left: {
            type: "userProperty",
            userProperty: {
              type: "groupIds",
              groupIds: {},
            },
          },
          right: {
            type: "constant",
            constant: {
              type: "strings",
              strings: [
                condition.name,
              ],
            },
          },
        },
      };

    default:
      return condition;
  }
}

function buildPropertyMapping(
  properties: ObjectPropertyType[],
): Record<string, PropertyTypeMappingInfo> {
  return Object.fromEntries(
    properties.map((prop) => {
      if (prop.editOnly || isEditOnlyDatasource(prop.datasource)) {
        return [prop.apiName, { type: "editOnly", editOnly: {} }];
      }

      if (typeof prop.type === "object" && prop.type?.type === "struct") {
        const structMapping = {
          type: "struct",
          struct: {
            column: resolveSinglePropertyColumn(prop),
            mapping: Object.fromEntries(
              Object.keys(prop.type.structDefinition).map((fieldName) => [
                fieldName,
                { apiName: fieldName, mappings: {} },
              ]),
            ),
          },
        };
        return [prop.apiName, structMapping];
      }

      return [prop.apiName, {
        type: "column",
        column: resolveSinglePropertyColumn(prop),
      }];
    }),
  );
}

function resolvePropertyColumns(property: ObjectPropertyType): string[] {
  const datasource = property.datasource;
  if (!datasource) {
    return [property.apiName];
  }

  switch (datasource.type) {
    case "primaryKey":
      return datasource.columns.flatMap(column =>
        column.type === "redacted" ? [] : [column.column]
      );
    case "dataset":
    case "restrictedView":
    case "stream":
    case "table":
      return "column" in datasource && datasource.column !== undefined
        ? [datasource.column]
        : [];
    case "unsupported":
    case "redacted":
      return [];
  }
  return [];
}

function resolveSinglePropertyColumn(property: ObjectPropertyType): string {
  const columns = resolvePropertyColumns(property);
  if (columns.length === 0) {
    if (!property.datasource || isEditOnlyDatasource(property.datasource)) {
      return property.apiName;
    }
    throw new Error(
      `Property ${property.apiName} does not map to a datasource column`,
    );
  }
  if (columns.length > 1) {
    throw new Error(
      `Property ${property.apiName} maps to multiple datasource columns, but OAC block data supports a single column mapping`,
    );
  }
  return columns[0];
}

function resolveStreamPropertyColumn(property: ObjectPropertyType): string {
  if (property.editOnly || isEditOnlyDatasource(property.datasource)) {
    throw new Error(
      `Property ${property.apiName} is edit-only, but stream datasource block data requires a column mapping`,
    );
  }
  return resolveSinglePropertyColumn(property);
}

function isEditOnlyDatasource(
  datasource: ObjectPropertyType["datasource"],
): boolean {
  return datasource != null
    && datasource.type !== "primaryKey"
    && datasource.type !== "unsupported"
    && datasource.type !== "redacted"
    && !("column" in datasource);
}
