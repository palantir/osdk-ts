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
  OntologyIrManyToManyLinkTypeDatasource,
} from "@osdk/client.unstable";
import { cleanAndValidateLinkTypeId } from "../../api/defineOntology.js";
import type { LinkType } from "../../api/links/LinkType.js";
import { convertCardinality } from "./convertCardinality.js";

export function convertLink(
  linkType: LinkType,
): OntologyIrLinkTypeBlockDataV2 {
  let definition: OntologyIrLinkDefinition;
  let datasource: OntologyIrManyToManyLinkTypeDatasource | undefined =
    undefined;
  if ("one" in linkType) {
    definition = {
      type: "oneToMany",
      oneToMany: {
        cardinalityHint: convertCardinality(linkType.cardinality),
        manyToOneLinkMetadata: linkType.toMany.metadata,
        objectTypeRidManySide: linkType.toMany.object.apiName,
        objectTypeRidOneSide: linkType.one.object.apiName,
        oneToManyLinkMetadata: linkType.one.metadata,
        oneSidePrimaryKeyToManySidePropertyMapping: [{
          from: {
            apiName: linkType.one.object.primaryKeyPropertyApiName,
            object: linkType.one.object.apiName,
          },
          to: {
            apiName: linkType.manyForeignKeyProperty,
            object: linkType.toMany.object.apiName,
          },
        }],
      },
    };
  } else if ("intermediaryObjectType" in linkType) {
    definition = {
      type: "intermediary",
      intermediary: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: linkType.many.object.apiName,
        objectTypeRidB: linkType.toMany.object.apiName,
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
    definition = {
      type: "manyToMany",
      manyToMany: {
        objectTypeAToBLinkMetadata: linkType.many.metadata,
        objectTypeBToALinkMetadata: linkType.toMany.metadata,
        objectTypeRidA: linkType.many.object.apiName,
        objectTypeRidB: linkType.toMany.object.apiName,
        peeringMetadata: undefined,
        objectTypeAPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.many.object.primaryKeyPropertyApiName,
            object: linkType.many.object.apiName,
          },
          to: {
            apiName: linkType.many.object.primaryKeyPropertyApiName,
            object: linkType.many.object.apiName,
          },
        }],
        objectTypeBPrimaryKeyPropertyMapping: [{
          from: {
            apiName: linkType.toMany.object.primaryKeyPropertyApiName,
            object: linkType.toMany.object.apiName,
          },
          to: {
            apiName: linkType.toMany.object.primaryKeyPropertyApiName,
            object: linkType.toMany.object.apiName,
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
              apiName: linkType.many.object.primaryKeyPropertyApiName,
              object: linkType.many.object.apiName,
            },
            column: linkType.many.object.primaryKeyPropertyApiName,
          }],
          objectTypeBPrimaryKeyMapping: [{
            property: {
              apiName: linkType.toMany.object.primaryKeyPropertyApiName,
              object: linkType.toMany.object.apiName,
            },
            column: linkType.toMany.object.primaryKeyPropertyApiName,
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
      status: linkType.status ?? { type: "active", active: {} },
      redacted: linkType.redacted ?? false,
    },
    datasources: datasource !== undefined ? [datasource] : [],
    entityMetadata: {
      arePatchesEnabled: linkType.editsEnabled ?? false,
    },
  };
}
