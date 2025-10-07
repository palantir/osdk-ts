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
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  convertToPluralDisplayName,
  uppercaseFirstLetter,
} from "./defineObject.js";
import { updateOntology } from "./defineOntology.js";
import type {
  IntermediaryObjectLinkReference,
  IntermediaryObjectLinkReferenceUserDefinition,
  LinkType,
  LinkTypeDefinition,
  LinkTypeMetadataUserDefinition,
  ManyToManyObjectLinkReference,
  ManyToManyObjectLinkReferenceUserDefinition,
  OneToManyObjectLinkReference,
  OneToManyObjectLinkReferenceUserDefinition,
} from "./links/LinkType.js";

const typeIdPattern = /([a-z][a-z0-9\\-]*)/;

export function defineLink(
  linkDefinition: LinkTypeDefinition,
): LinkType {
  if ("one" in linkDefinition) {
    const foreignKey = linkDefinition.toMany.object.properties
      ?.[linkDefinition.manyForeignKeyProperty];
    invariant(
      foreignKey !== undefined,
      `Foreign key ${linkDefinition.manyForeignKeyProperty} on link ${linkDefinition.apiName} does not exist on object ${linkDefinition.toMany.object.apiName}}`,
    );

    invariant(
      typeIdPattern.test(linkDefinition.apiName),
      `Top level link api names are expected to match the regex pattern ([a-z][a-z0-9\\-]*) ${linkDefinition.apiName} does not match`,
    );

    const typesMatch = foreignKey.type
      === linkDefinition.one.object.properties
        ?.[linkDefinition.one.object.primaryKeyPropertyApiName].type;
    invariant(
      typesMatch,
      `Link ${linkDefinition.apiName} has type mismatch between the one side's primary key and the foreign key on the many side`,
    );
  }
  if ("intermediaryObjectType" in linkDefinition) {
    invariant(
      "one" in linkDefinition.many.linkToIntermediary
        && linkDefinition.many.linkToIntermediary.one.object.apiName
          === linkDefinition.many.object.apiName
        && linkDefinition.many.linkToIntermediary.toMany.object.apiName
          === linkDefinition.intermediaryObjectType.apiName,
      `LinkTypeA ${linkDefinition.many.linkToIntermediary.apiName} must be a many to one link from intermediary object ${linkDefinition.intermediaryObjectType.apiName} to objectA ${linkDefinition.many.object.apiName}`,
    );
    invariant(
      "one" in linkDefinition.toMany.linkToIntermediary
        && linkDefinition.toMany.linkToIntermediary.one.object.apiName
          === linkDefinition.toMany.object.apiName
        && linkDefinition.toMany.linkToIntermediary.toMany.object.apiName
          === linkDefinition.intermediaryObjectType.apiName,
      `LinkTypeB ${linkDefinition.toMany.linkToIntermediary.apiName} must be a many to one link from intermediary object ${linkDefinition.intermediaryObjectType.apiName} to objectB ${linkDefinition.toMany.object.apiName}`,
    );
  }
  let fullLinkDefinition;
  if ("one" in linkDefinition) {
    fullLinkDefinition = {
      ...linkDefinition,
      one: convertUserOneToManyLinkDefinition(linkDefinition.one),
      toMany: convertUserOneToManyLinkDefinition(linkDefinition.toMany),
    };
  } else if ("intermediaryObjectType" in linkDefinition) {
    fullLinkDefinition = {
      ...linkDefinition,
      many: convertUserIntermediaryLinkDefinition(
        linkDefinition.many,
      ),
      toMany: convertUserIntermediaryLinkDefinition(
        linkDefinition.toMany,
      ),
    };
  } else {
    fullLinkDefinition = {
      ...linkDefinition,
      many: convertUserManyToManyLinkDefinition(linkDefinition.many),
      toMany: convertUserManyToManyLinkDefinition(linkDefinition.toMany),
    };
  }
  const linkType: LinkType = {
    cardinality: "one" in linkDefinition
      ? linkDefinition.cardinality
      : undefined,
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

function convertUserIntermediaryLinkDefinition(
  intermediary: IntermediaryObjectLinkReferenceUserDefinition,
): IntermediaryObjectLinkReference {
  return {
    ...intermediary,
    metadata: convertLinkTypeMetadata(intermediary.metadata),
  };
}

function convertLinkTypeMetadata(
  metadata: LinkTypeMetadataUserDefinition,
): LinkTypeMetadata {
  return {
    apiName: metadata.apiName,
    displayMetadata: {
      displayName: metadata.displayName
        ?? uppercaseFirstLetter(metadata.apiName),
      pluralDisplayName: metadata.pluralDisplayName
        ?? convertToPluralDisplayName(metadata.apiName),
      visibility: metadata.visibility ?? "NORMAL",
      groupDisplayName: metadata.groupDisplayName ?? "",
    },
    typeClasses: [],
  };
}
