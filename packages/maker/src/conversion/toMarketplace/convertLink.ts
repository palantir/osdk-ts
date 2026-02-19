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
  OntologyIrLinkDefinition,
  OntologyIrLinkTypeBlockDataV2,
  OntologyIrLinkTypeStatus,
  OntologyIrManyToManyLinkTypeDatasource,
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
import { convertCardinality } from "./convertCardinality.js";

export function convertLink(
  linkType: LinkType,
): OntologyIrLinkTypeBlockDataV2 {
  validateLink(linkType);
  let definition: OntologyIrLinkDefinition;
  let datasource: OntologyIrManyToManyLinkTypeDatasource | undefined =
    undefined;
  if ("one" in linkType) {
    const { apiName: oneObjectApiName, object: oneObject } = getObject(
      linkType.one.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkType.toMany.object,
    );
    definition = {
      type: "oneToMany",
      oneToMany: {
        cardinalityHint: convertCardinality(linkType.cardinality),
        manyToOneLinkMetadata: linkType.toMany.metadata,
        objectTypeRidManySide: toManyObjectApiName,
        objectTypeRidOneSide: oneObjectApiName,
        oneToManyLinkMetadata: linkType.one.metadata,
        oneSidePrimaryKeyToManySidePropertyMapping: [{
          from: {
            apiName: oneObject.primaryKeyPropertyApiName,
            object: oneObjectApiName,
          },
          to: {
            apiName: linkType.manyForeignKeyProperty,
            object: toManyObjectApiName,
          },
        }],
      },
    };
  } else if ("intermediaryObjectType" in linkType) {
    const { apiName: manyObjectApiName, object: manyObject } = getObject(
      linkType.many.object,
    );
    const { apiName: toManyObjectApiName, object: toManyObject } = getObject(
      linkType.toMany.object,
    );
    definition = {
      type: "intermediary",
      intermediary: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: manyObjectApiName,
        objectTypeRidB: toManyObjectApiName,
        intermediaryObjectTypeRid: linkType.intermediaryObjectType.apiName,
        aToIntermediaryLinkTypeRid: cleanAndValidateLinkTypeId(
          linkType.many.linkToIntermediary.apiName,
        ),
        intermediaryToBLinkTypeRid: cleanAndValidateLinkTypeId(
          linkType.toMany.linkToIntermediary.apiName,
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
    definition = {
      type: "manyToMany",
      manyToMany: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: manyObjectApiName,
        objectTypeRidB: toManyObjectApiName,
        peeringMetadata: undefined,
        objectTypeAPrimaryKeyPropertyMapping: [{
          from: {
            apiName: manyObject.primaryKeyPropertyApiName,
            object: manyObjectApiName,
          },
          to: {
            apiName: manyObject.primaryKeyPropertyApiName,
            object: manyObjectApiName,
          },
        }],
        objectTypeBPrimaryKeyPropertyMapping: [{
          from: {
            apiName: toManyObject.primaryKeyPropertyApiName,
            object: toManyObjectApiName,
          },
          to: {
            apiName: toManyObject.primaryKeyPropertyApiName,
            object: toManyObjectApiName,
          },
        }],
      },
    };

    datasource = {
      datasourceName: linkType.apiName,
      datasource: {
        type: "dataset",
        dataset: {
          datasetRid: "link-".concat(linkType.apiName),
          writebackDatasetRid: undefined,
          objectTypeAPrimaryKeyMapping: [{
            property: {
              apiName: manyObject.primaryKeyPropertyApiName,
              object: manyObjectApiName,
            },
            column: manyObject.primaryKeyPropertyApiName,
          }],
          objectTypeBPrimaryKeyMapping: [{
            property: {
              apiName: toManyObject.primaryKeyPropertyApiName,
              object: toManyObjectApiName,
            },
            column: toManyObject.primaryKeyPropertyApiName,
          }],
        },
      },
      editsConfiguration: {
        onlyAllowPrivilegedEdits: false,
      },
      redacted: linkType.redacted,
    };
  }

  return {
    linkType: {
      definition: definition,
      id: cleanAndValidateLinkTypeId(linkType.apiName),
      status: convertLinkStatus(linkType.status),
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
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
): OntologyIrLinkTypeStatus {
  if (
    typeof status === "object" && "type" in status
    && status.type === "deprecated"
  ) {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deadline,
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
