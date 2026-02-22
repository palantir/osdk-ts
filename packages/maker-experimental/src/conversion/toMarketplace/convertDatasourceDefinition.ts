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
  ObjectTypeDatasourceDefinition,
  PropertySecurityGroup,
  PropertySecurityGroups,
  PropertyTypeMappingInfo,
  RetentionPolicy,
  SecurityGroupGranularCondition,
  SecurityGroupGranularSecurityDefinition,
} from "@osdk/client.unstable";
import type {
  ObjectPropertyType,
  ObjectType,
  ObjectTypeDatasourceDefinition_dataset,
  ObjectTypeDatasourceDefinition_direct,
  SecurityConditionDefinition,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import {
  type OntologyRidGenerator,
  ReadableIdGenerator,
} from "../../util/generateRid.js";

export function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
  ridGenerator: OntologyRidGenerator,
): ObjectTypeDatasourceDefinition {
  const baseDatasource = objectType.datasources?.find(ds =>
    ["dataset", "stream", "restrictedView"].includes(ds.type)
  );

  // Helper to get column names from properties
  const getColumnNames = (props: ObjectPropertyType[]): Set<string> => {
    return new Set(props.map(p => p.apiName));
  };

  switch (baseDatasource?.type) {
    case "stream":
      const window = baseDatasource.retentionPeriod
        ? convertToJavaDurationFormat(baseDatasource.retentionPeriod)
        : undefined;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };

      // Use generateStreamLocator instead of generateRid
      const streamLocator = ridGenerator.generateStreamLocator(
        objectType.apiName,
        getColumnNames(properties),
      );

      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [
          ridGenerator.generatePropertyRid(
            prop.apiName,
            objectType.apiName,
          ),
          prop.apiName,
        ]),
      );

      return {
        type: "streamV2",
        streamV2: {
          streamLocator: {
            branchId: streamLocator.branchId,
            streamLocatorRid: streamLocator.streamLocatorRid,
          },
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };

    case "restrictedView":
      // Use generateRestrictedViewLocator instead of generateRid
      const restrictedViewLocator = ridGenerator.generateRestrictedViewLocator(
        objectType.apiName,
        getColumnNames(properties),
      );

      return {
        type: "restrictedViewV2",
        restrictedViewV2: {
          restrictedViewRid: restrictedViewLocator.rid,
          propertyMapping: buildPropertyMapping(
            properties,
            objectType.apiName,
            ridGenerator,
          ),
        },
      };

    case "derived":
      // Use generateLocator for dataset datasources
      const derivedDatasetLocator = ridGenerator.generateLocator(
        objectType.apiName,
        getColumnNames(properties),
      );

      return {
        type: "datasetV2",
        datasetV2: {
          branchId: derivedDatasetLocator.branchId,
          datasetRid: derivedDatasetLocator.rid,
          propertyMapping: buildPropertyMapping(
            properties,
            objectType.apiName,
            ridGenerator,
          ),
        },
      };

    case "dataset":
    default:
      // Use generateLocator for dataset datasources
      const datasetLocator = ridGenerator.generateLocator(
        objectType.apiName,
        getColumnNames(properties),
      );

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
            datasetRid: datasetLocator.rid,
            propertyMapping: buildPropertyMapping(
              properties,
              objectType.apiName,
              ridGenerator,
            ),
            branchId: datasetLocator.branchId,
            propertySecurityGroups: convertPropertySecurityGroups(
              baseDatasource,
              properties,
              objectType.primaryKeyPropertyApiName,
              objectType.apiName,
              ridGenerator,
            ),
          },
        };
      }
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: datasetLocator.rid,
          branchId: datasetLocator.branchId,
          propertyMapping: buildPropertyMapping(
            properties,
            objectType.apiName,
            ridGenerator,
          ),
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
  objectTypeApiName: string,
  ridGenerator: OntologyRidGenerator,
): PropertySecurityGroups {
  if (
    !ds
    || (!("objectSecurityPolicy" in ds) && !("propertySecurityGroups" in ds))
  ) {
    // Default security group - use property RIDs
    const propertyRids = properties.map(prop =>
      ridGenerator.generatePropertyRid(prop.apiName, objectTypeApiName)
    );

    return {
      groups: [
        {
          properties: propertyRids,
          rid: ridGenerator.generateRid("defaultObjectSecurityPolicy"),
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
                  markings: [],
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
  const usedPropertyApiNames = new Set<string>();

  // Collect and register group IDs (matching Java's collectSecurityGroupIds)
  const collectGroupIds = (granularPolicy?: SecurityConditionDefinition) => {
    if (!granularPolicy) return;

    const collectFromCondition = (condition: SecurityConditionDefinition) => {
      switch (condition.type) {
        case "group":
          // Register group ID with the ridGenerator
          const groupId = condition.name;
          ridGenerator.getGroupIds().put(
            ReadableIdGenerator.getForGroup(groupId),
            groupId,
          );
          break;
        case "and":
        case "or":
          if ("conditions" in condition) {
            condition.conditions.forEach(collectFromCondition);
          }
          break;
      }
    };

    collectFromCondition(granularPolicy);
  };

  // Collect group IDs from object security policy
  if (ds.objectSecurityPolicy?.granularPolicy) {
    collectGroupIds(ds.objectSecurityPolicy.granularPolicy);
  }

  // Validate and collect property security groups
  ds.propertySecurityGroups?.forEach(psg => {
    // Collect group IDs from property security groups
    if (psg.granularPolicy) {
      collectGroupIds(psg.granularPolicy);
    }

    psg.properties.forEach(propertyName => {
      invariant(
        validPropertyNames.has(propertyName),
        `Property "${propertyName}" in property security group ${psg.name} does not exist in the properties list`,
      );
      invariant(
        !usedPropertyApiNames.has(propertyName),
        `Property "${propertyName}" is used in multiple property security groups`,
      );
      invariant(
        propertyName !== primaryKeyPropertyApiName,
        `Property "${propertyName}" in property security group ${psg.name} cannot be the primary key`,
      );
      usedPropertyApiNames.add(propertyName);
    });
  });

  // Build property RID mapping
  const propertyApiNameToRid = new Map<string, string>();
  properties.forEach(prop => {
    propertyApiNameToRid.set(
      prop.apiName,
      ridGenerator.generatePropertyRid(prop.apiName, objectTypeApiName),
    );
  });

  const objectSecurityPolicyGroup: PropertySecurityGroup = {
    rid: ridGenerator.generatePropertySecurityGroupRid(
      ds.objectSecurityPolicy?.name || "defaultObjectSecurityPolicy",
    ),
    security: {
      type: "granular",
      granular: convertGranularPolicy(
        ds.objectSecurityPolicy?.granularPolicy,
        ds.objectSecurityPolicy?.additionalMandatoryMarkings,
        ridGenerator,
        objectTypeApiName,
      ),
    },
    type: {
      type: "primaryKey",
      primaryKey: {},
    },
    properties: properties
      .filter(prop => !usedPropertyApiNames.has(prop.apiName))
      .map(prop => propertyApiNameToRid.get(prop.apiName)!),
  };

  return {
    groups: [
      ...(ds.propertySecurityGroups?.map(psg => ({
        rid: ridGenerator.generatePropertySecurityGroupRid(psg.name),
        security: {
          type: "granular" as const,
          granular: convertGranularPolicy(
            psg.granularPolicy,
            psg.additionalMandatoryMarkings,
            ridGenerator,
            objectTypeApiName,
          ),
        },
        type: {
          type: "property" as const,
          property: {
            name: psg.name,
          },
        },
        properties: psg.properties.map(apiName =>
          propertyApiNameToRid.get(apiName)!
        ),
      })) ?? []),
      objectSecurityPolicyGroup,
    ],
  };
}

function convertGranularPolicy(
  granularPolicy?: SecurityConditionDefinition,
  additionalMandatoryMarkings?: Record<string, MarkingType>,
  ridGenerator?: OntologyRidGenerator,
  objectTypeApiName?: string,
): SecurityGroupGranularSecurityDefinition {
  return {
    viewPolicy: {
      granularPolicyCondition: granularPolicy
        ? convertSecurityCondition(
          granularPolicy,
          ridGenerator,
          objectTypeApiName,
        )
        : {
          type: "and",
          and: {
            conditions: [],
          },
        },
      additionalMandatory: {
        markings: Object.keys(additionalMandatoryMarkings ?? {}),
        assumedMarkings: [],
      },
    },
  };
}

function convertSecurityCondition(
  condition: SecurityConditionDefinition,
  ridGenerator?: OntologyRidGenerator,
  objectTypeApiName?: string,
): SecurityGroupGranularCondition {
  switch (condition.type) {
    case "and":
      if ("conditions" in condition) {
        return {
          type: "and",
          and: {
            conditions: condition.conditions.map(c =>
              convertSecurityCondition(c, ridGenerator, objectTypeApiName)
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
              convertSecurityCondition(c, ridGenerator, objectTypeApiName)
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
          property: ridGenerator && objectTypeApiName
            ? ridGenerator.generatePropertyRid(
              condition.property,
              objectTypeApiName,
            )
            : condition.property,
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
            property: ridGenerator && objectTypeApiName
              ? ridGenerator.generatePropertyRid(
                condition.property,
                objectTypeApiName,
              )
              : condition.property,
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

/**
 * Converts ISO 8601 duration to Java Duration format (hours/minutes/seconds only).
 * Java's Duration class doesn't support days/weeks/months/years natively,
 * so P90D becomes PT2160H, P1W becomes PT168H, etc.
 */
function convertToJavaDurationFormat(iso8601: string): string {
  const match = iso8601.match(
    /^P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,
  );
  if (!match) return iso8601;

  const weeks = parseInt(match[1] || "0", 10);
  const days = parseInt(match[2] || "0", 10);
  const hours = parseInt(match[3] || "0", 10);
  const minutes = parseInt(match[4] || "0", 10);
  const seconds = parseInt(match[5] || "0", 10);

  const totalHours = (weeks * 7 + days) * 24 + hours;

  const parts: string[] = [];
  if (totalHours > 0) parts.push(`${totalHours}H`);
  if (minutes > 0) parts.push(`${minutes}M`);
  if (seconds > 0) parts.push(`${seconds}S`);

  return parts.length > 0 ? `PT${parts.join("")}` : "PT0S";
}

function buildPropertyMapping(
  properties: ObjectPropertyType[],
  objectTypeApiName: string,
  ridGenerator: OntologyRidGenerator,
): Record<string, PropertyTypeMappingInfo> {
  // TODO: Convert property mappings to use RIDs as keys
  return Object.fromEntries(
    properties.map((prop) => {
      const propertyRid = ridGenerator.generatePropertyRid(
        prop.apiName,
        objectTypeApiName,
      );
      // editOnly
      if (prop.editOnly) {
        return [propertyRid, { type: "editOnly", editOnly: {} }];
      }
      // structs
      if (typeof prop.type === "object" && prop.type?.type === "struct") {
        const structMapping = {
          type: "struct",
          struct: {
            column: prop.apiName,
            mapping: Object.fromEntries(
              Object.keys(prop.type.structDefinition).map((fieldName) => [
                fieldName,
                { apiName: fieldName, mappings: {} },
              ]),
            ),
          },
        };
        return [propertyRid, structMapping];
      }
      // default: column mapping
      return [propertyRid, { type: "column", column: prop.apiName }];
    }),
  );
}
