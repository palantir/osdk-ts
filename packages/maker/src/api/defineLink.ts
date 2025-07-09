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

import type { LinkTypeMetadata } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import {
  convertToDisplayName,
  convertToPluralDisplayName,
} from "./defineObject.js";
import { updateOntology } from "./defineOntology.js";
import type {
  LinkType,
  LinkTypeDefinition,
  LinkTypeMetadataUserDefinition,
  ManyToManyObjectLinkReference,
  ManyToManyObjectLinkReferenceUserDefinition,
  OneToManyObjectLinkReference,
  OneToManyObjectLinkReferenceUserDefinition,
} from "./types.js";
import { OntologyEntityTypeEnum } from "./types.js";

const typeIdPattern = /([a-z][a-z0-9\\-]*)/;

export function defineLink(
  linkDefinition: LinkTypeDefinition,
): LinkType {
  if ("one" in linkDefinition) {
    const foreignKey = linkDefinition.toMany.object.properties?.find(prop =>
      prop.apiName === linkDefinition.manyForeignKeyProperty
    );
    invariant(
      foreignKey !== undefined,
      `Foreign key ${linkDefinition.manyForeignKeyProperty} on link ${linkDefinition.apiName} does not exist on object ${linkDefinition.toMany.object.apiName}}`,
    );

    invariant(
      typeIdPattern.test(linkDefinition.apiName),
      `Top level link api names are expected to match the regex pattern ([a-z][a-z0-9\\-]*) ${linkDefinition.apiName} does not match`,
    );

    const typesMatch =
      foreignKey.type === linkDefinition.one.object.properties?.find(prop =>
        prop.apiName === linkDefinition.one.object.primaryKeyPropertyApiName
      )?.type;
    invariant(
      typesMatch,
      `Link ${linkDefinition.apiName} has type mismatch between the one side's primary key and the foreign key on the many side`,
    );
  }
  const fullLinkDefinition = "one" in linkDefinition
    ? {
      ...linkDefinition,
      one: convertUserOneToManyLinkDefinition(linkDefinition.one),
      toMany: convertUserOneToManyLinkDefinition(linkDefinition.toMany),
    }
    : {
      ...linkDefinition,
      many: convertUserManyToManyLinkDefinition(linkDefinition.many),
      toMany: convertUserManyToManyLinkDefinition(linkDefinition.toMany),
    };
  const linkType: LinkType = {
    cardinality: "one" in linkDefinition ? "OneToMany" : undefined,
    ...fullLinkDefinition,
    __type: OntologyEntityTypeEnum.LINK_TYPE,
  };
  updateOntology(linkType);
  return linkType;
}

function convertUserOneToManyLinkDefinition(
  oneToMany: OneToManyObjectLinkReferenceUserDefinition,
): OneToManyObjectLinkReference {
  return {
    ...oneToMany,
    metadata: convertLinkTypeMetadata(oneToMany.metadata),
  };
}

function convertUserManyToManyLinkDefinition(
  manyToMany: ManyToManyObjectLinkReferenceUserDefinition,
): ManyToManyObjectLinkReference {
  return {
    ...manyToMany,
    metadata: convertLinkTypeMetadata(manyToMany.metadata),
  };
}

function convertLinkTypeMetadata(
  metadata: LinkTypeMetadataUserDefinition,
): LinkTypeMetadata {
  return {
    apiName: metadata.apiName,
    displayMetadata: {
      displayName: metadata.displayName
        ?? convertToDisplayName(metadata.apiName),
      pluralDisplayName: metadata.pluralDisplayName
        ?? convertToPluralDisplayName(metadata.apiName),
      visibility: metadata.visibility ?? "NORMAL",
      groupDisplayName: metadata.groupDisplayName ?? "",
    },
    typeClasses: [],
  };
}
