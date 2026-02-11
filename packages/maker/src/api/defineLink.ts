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
import { cloneDefinition } from "./cloneDefinition.js";
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

export function defineLink(
  linkDefinitionInput: LinkTypeDefinition,
): LinkType {
  const linkDefinition = cloneDefinition(linkDefinitionInput);
  // NOTE: we would normally do validation here, but because of circular dependencies
  // we have to wait to validate until everything has been defined. The code for validation
  // was moved to convertLink.ts.

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
    apiName: linkDefinition.apiName,
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
