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
  LinkDefinition,
  LinkTypeBlockDataV2,
  LinkTypeStatus,
  ManyToManyLinkTypeDatasource,
} from "@osdk/client.unstable";
import type {
  LinkType,
  ObjectType,
  ObjectTypeDefinition,
  UserLinkTypeStatus,
} from "@osdk/maker";
import {
  cleanAndValidateLinkTypeId,
  getImportedTypes,
  getOntologyDefinition,
  OntologyEntityTypeEnum,
  validateLink,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertCardinality } from "./convertCardinality.js";

export function convertLink(
  linkType: LinkType,
  ridGenerator: OntologyRidGenerator,
): LinkTypeBlockDataV2 {
  validateLink(linkType);
  let definition: LinkDefinition;
  let datasource: ManyToManyLinkTypeDatasource | undefined;
  if ("one" in linkType) {
    const { apiName: oneObjectApiName, object: oneObject } = getObject(
      linkType.one.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkType.toMany.object,
    );
    const oneObjectRid = ridGenerator.generateRidForObjectType(
      oneObjectApiName,
    );
    const toManyObjectRid = ridGenerator.generateRidForObjectType(
      toManyObjectApiName,
    );
    const onePkRid = ridGenerator.generatePropertyRid(
      oneObject.primaryKeyPropertyApiName,
      oneObjectApiName,
    );
    const manyFkRid = ridGenerator.generatePropertyRid(
      linkType.manyForeignKeyProperty,
      toManyObjectApiName,
    );

    definition = {
      type: "oneToMany",
      oneToMany: {
        cardinalityHint: convertCardinality(linkType.cardinality),
        // IR convention (counterintuitive): `oneToManyLinkMetadata` carries
        // the apiName as it appears ON the MANY-side object; `manyToOneLink-
        // Metadata` carries the apiName as it appears ON the ONE-side
        // object. Confirmed against
        // generator-converters.ontologyir/OntologyIrToFullMetadataConvert.test.ts:577-680
        // (test inputs) and lines 3140-3328 (assertions). Don't swap these
        // back; the field names lie about which side they live on.
        oneToManyLinkMetadata: linkType.toMany.metadata,
        manyToOneLinkMetadata: linkType.one.metadata,
        objectTypeRidManySide: toManyObjectRid,
        objectTypeRidOneSide: oneObjectRid,
        // TODO: Convert property mappings to use RIDs as keys and values
        oneSidePrimaryKeyToManySidePropertyMapping: {
          [onePkRid]: manyFkRid,
        },
      },
    };
  } else if ("intermediaryObjectType" in linkType) {
    const { apiName: manyObjectApiName, object: manyObject } = getObject(
      linkType.many.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkType.toMany.object,
    );
    const { apiName: intermediaryObjectApiName } = getObject(
      linkType.intermediaryObjectType,
    );
    definition = {
      type: "intermediary",
      intermediary: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: ridGenerator.generateRidForObjectType(
          manyObjectApiName,
        ),
        objectTypeRidB: ridGenerator.generateRidForObjectType(
          toManyObjectApiName,
        ),
        intermediaryObjectTypeRid: ridGenerator.generateRidForObjectType(
          intermediaryObjectApiName,
        ),
        aToIntermediaryLinkTypeRid: ridGenerator.generateRidForLinkType(
          cleanAndValidateLinkTypeId(linkType.many.linkToIntermediary.apiName),
        ),
        intermediaryToBLinkTypeRid: ridGenerator.generateRidForLinkType(
          cleanAndValidateLinkTypeId(
            linkType.toMany.linkToIntermediary.apiName,
          ),
        ),
      },
    };
  } else {
    const { apiName: manyObjectApiName, object: manyObject } = getObject(
      linkType.many.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkType.toMany.object,
    );
    const manyObjectRidA = ridGenerator.generateRidForObjectType(
      manyObjectApiName,
    );
    const manyObjectRidB = ridGenerator.generateRidForObjectType(
      toManyObjectApiName,
    );
    const manyPkRidA = ridGenerator.generatePropertyRid(
      manyObject.primaryKeyPropertyApiName,
      manyObjectApiName,
    );
    const manyPkRidB = ridGenerator.generatePropertyRid(
      toManyObject.primaryKeyPropertyApiName,
      toManyObjectApiName,
    );

    const columnA = manyObject.primaryKeyPropertyApiName;
    const columnB = toManyObject.primaryKeyPropertyApiName;
    const hasCollision = columnA === columnB;
    const resolvedColumnA = hasCollision ? `${columnA}_from` : columnA;
    const resolvedColumnB = hasCollision ? `${columnB}_to` : columnB;

    definition = {
      type: "manyToMany",
      manyToMany: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: manyObjectRidA,
        objectTypeRidB: manyObjectRidB,
        peeringMetadata: undefined,
        // TODO: Convert property mappings to use RIDs as keys and values
        objectTypeAPrimaryKeyPropertyMapping: {
          [manyPkRidA]: manyPkRidA,
        },
        objectTypeBPrimaryKeyPropertyMapping: {
          [manyPkRidB]: manyPkRidB,
        },
      },
    };
    const datasetLocator = ridGenerator.generateDatasetLocator(
      `link.${linkType.apiName}`,
      new Set([resolvedColumnA, resolvedColumnB]),
    );
    datasource = {
      rid: ridGenerator.generateDatasourceRid(linkType.apiName),
      datasource: {
        type: "dataset",
        dataset: {
          // TODO: Add proper branchId from link configuration
          branchId: datasetLocator.branchId,
          datasetRid: datasetLocator.rid,
          writebackDatasetRid: undefined,
          // TODO: Convert property mappings to use property RIDs as keys
          objectTypeAPrimaryKeyMapping: {
            [manyPkRidA]: resolvedColumnA,
          },
          objectTypeBPrimaryKeyMapping: {
            [manyPkRidB]: resolvedColumnB,
          },
        },
      },
      editsConfiguration: {
        onlyAllowPrivilegedEdits: false,
      },
      redacted: linkType.redacted,
    };
  }

  const linkTypeId = cleanAndValidateLinkTypeId(linkType.apiName);

  return {
    linkType: {
      definition,
      rid: ridGenerator.generateRidForLinkType(linkTypeId),
      id: cleanAndValidateLinkTypeId(linkType.apiName),
      status: convertLinkStatus(linkType.status, ridGenerator),
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
      entityConfig: {
        objectDbTypeConfigs: {
          highbury: {
            objectDbConfigs: {
              "ri.highbury.main.cluster.1": { configValue: "{}" },
            },
          },
        },
      },
      targetStorageBackend: { type: "objectStorageV2", objectStorageV2: {} },
    },
  };
}
export function getObject(
  object: string | ObjectTypeDefinition | ObjectType,
): { apiName: string; object: ObjectType } {
  const objectApiName = typeof object === "string" ? object : object.apiName;
  const fullObject =
    getOntologyDefinition()[OntologyEntityTypeEnum.OBJECT_TYPE][objectApiName]
      ?? getImportedTypes()[OntologyEntityTypeEnum.OBJECT_TYPE][objectApiName];
  invariant(
    fullObject !== undefined,
    `Object ${objectApiName} is not defined`,
  );
  return { apiName: objectApiName, object: fullObject };
}

export function convertLinkStatus(
  status: UserLinkTypeStatus | undefined,
  ridGenerator: OntologyRidGenerator,
): LinkTypeStatus {
  if (
    typeof status === "object" && "type" in status
    && status.type === "deprecated"
  ) {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deadline,
        replacedBy: status.replacedBy
          ? ridGenerator.generateRidForLinkType(
            cleanAndValidateLinkTypeId(status.replacedBy),
          )
          : undefined,
      },
    };
  }
  switch (status) {
    case "experimental":
      return { type: "experimental", experimental: {} };
    case "example":
      return { type: "example", example: {} };
    case "active":
    default:
      return { type: "active", active: {} };
  }
}
