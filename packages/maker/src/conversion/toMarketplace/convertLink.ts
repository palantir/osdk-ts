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
import invariant from "tiny-invariant";
import { OntologyEntityTypeEnum } from "../../api/common/OntologyEntityTypeEnum.js";
import {
  cleanAndValidateLinkTypeId,
  ontologyDefinition,
} from "../../api/defineOntology.js";
import type { LinkType, UserLinkTypeStatus } from "../../api/links/LinkType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";
import type { ObjectTypeDefinition } from "../../api/object/ObjectTypeDefinition.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertCardinality } from "./convertCardinality.js";

export function convertLink(
  linkType: LinkType,
  ridGenerator: OntologyRidGenerator,
): LinkTypeBlockDataV2 {
  validateLink(linkType);
  let definition: LinkDefinition;
  let datasource: ManyToManyLinkTypeDatasource | undefined = undefined;
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
        manyToOneLinkMetadata: linkType.toMany.metadata,
        objectTypeRidManySide: toManyObjectRid,
        objectTypeRidOneSide: oneObjectRid,
        oneToManyLinkMetadata: linkType.one.metadata,
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

    datasource = {
      rid: ridGenerator.generateRid(`datasource.link.${linkType.apiName}`),
      datasource: {
        type: "dataset",
        dataset: {
          // TODO: Add proper branchId from link configuration
          branchId: "main",
          datasetRid: ridGenerator.generateRid(
            `link.dataset.${linkType.apiName}`,
          ),
          writebackDatasetRid: undefined,
          // TODO: Convert property mappings to use property RIDs as keys
          objectTypeAPrimaryKeyMapping: {
            [manyPkRidA]: manyObject.primaryKeyPropertyApiName,
          },
          objectTypeBPrimaryKeyMapping: {
            [manyPkRidB]: toManyObject.primaryKeyPropertyApiName,
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
      definition: definition,
      rid: ridGenerator.generateRidForLinkType(linkTypeId),
      id: cleanAndValidateLinkTypeId(linkType.apiName),
      status: convertLinkStatus(linkType.status, ridGenerator),
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
      // TODO: Add entityConfig based on storage configuration
      entityConfig: {
        objectDbTypeConfigs: {},
      },
      // TODO: Add targetStorageBackend based on link configuration
      targetStorageBackend: { type: "objectStorageV2", objectStorageV2: {} },
    },
  };
}
function validateLink(linkDefinition: LinkType) {
  if ("one" in linkDefinition) {
    const { apiName: oneObjectApiName, object: oneObject } = getObject(
      linkDefinition.one.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkDefinition.toMany.object,
    );
    const foreignKey = toManyObject.properties?.find(p =>
      p.apiName === linkDefinition.manyForeignKeyProperty
    );
    invariant(
      foreignKey !== undefined,
      `Foreign key ${linkDefinition.manyForeignKeyProperty} on link ${linkDefinition.apiName} does not exist on object ${toManyObjectApiName}`,
    );

    invariant(
      /([a-z][a-z0-9\\-]*)/.test(linkDefinition.apiName),
      `Top level link api names are expected to match the regex pattern ([a-z][a-z0-9\\-]*) ${linkDefinition.apiName} does not match`,
    );

    const typesMatch = foreignKey.type
      === oneObject.properties?.find(p =>
        p.apiName === oneObject.primaryKeyPropertyApiName
      )?.type;
    invariant(
      typesMatch,
      `Link ${linkDefinition.apiName} has type mismatch between the one side's primary key and the foreign key on the many side`,
    );
  }
  if ("intermediaryObjectType" in linkDefinition) {
    const {
      apiName: intermediaryObjectTypeApiName,
      object: intermediaryObjectType,
    } = getObject(linkDefinition.intermediaryObjectType);
    const { apiName: manyObjectApiName, object: manyObject } = getObject(
      linkDefinition.many.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkDefinition.toMany.object,
    );

    const {
      apiName: manyIntermediaryOneObjectApiName,
      object: manyIntermediaryOneObject,
    } = getObject((linkDefinition.many.linkToIntermediary as any).one.object);
    const {
      apiName: manyIntermediaryToManyObjectApiName,
      object: manyIntermediaryToManyObject,
    } = getObject(linkDefinition.many.linkToIntermediary.toMany.object);
    invariant(
      "one" in linkDefinition.many.linkToIntermediary
        && manyIntermediaryOneObjectApiName
          === manyObject.apiName
        && manyIntermediaryToManyObjectApiName
          === intermediaryObjectTypeApiName,
      `LinkTypeA ${linkDefinition.many.linkToIntermediary.apiName} must be a many to one link from intermediary object ${intermediaryObjectTypeApiName} to objectA ${manyObjectApiName}`,
    );

    const {
      apiName: toManyIntermediaryOneObjectApiName,
      object: toManyIntermediaryOneObject,
    } = getObject((linkDefinition.toMany.linkToIntermediary as any).one.object);
    const {
      apiName: toManyIntermediaryToManyObjectApiName,
      object: toManyIntermediaryToManyObject,
    } = getObject(linkDefinition.toMany.linkToIntermediary.toMany.object);
    invariant(
      "one" in linkDefinition.toMany.linkToIntermediary
        && toManyIntermediaryOneObjectApiName
          === toManyObjectApiName
        && toManyIntermediaryToManyObjectApiName
          === intermediaryObjectTypeApiName,
      `LinkTypeB ${linkDefinition.toMany.linkToIntermediary.apiName} must be a many to one link from intermediary object ${intermediaryObjectTypeApiName} to objectB ${toManyObjectApiName}`,
    );
  }
}

export function getObject(
  object: string | ObjectTypeDefinition,
): { apiName: string; object: ObjectType } {
  const objectApiName = typeof object === "string" ? object : object.apiName;
  const fullObject =
    ontologyDefinition[OntologyEntityTypeEnum.OBJECT_TYPE][objectApiName];
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
        replacedBy: status.replacedBy ? ridGenerator.generateRidForLinkType(status.replacedBy) : undefined,
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
