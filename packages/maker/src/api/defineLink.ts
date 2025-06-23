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



import invariant from "tiny-invariant";
import {
  convertToDisplayName,
  convertToPluralDisplayName,
} from "./defineObject.js";
import { updateOntology } from "./defineOntology.js";
import type {
  LinkType,
  LinkTypeDefinition,
  OneToManyObjectLinkReference,
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
      many: convertUserOneToManyLinkDefinition(linkDefinition.many),
      toMany: convertUserOneToManyLinkDefinition(linkDefinition.toMany),
    };
  const linkType: LinkType = {
    ...fullLinkDefinition,
    __type: OntologyEntityTypeEnum.LINK_TYPE,
  };
  updateOntology(linkType);
  return linkType;
}

function convertUserOneToManyLinkDefinition(
  oneToMany: OneToManyObjectLinkReference,
): OneToManyObjectLinkReference {
  const displayMetadata = "displayMetadata" in oneToMany.metadata
    ? oneToMany.metadata.displayMetadata
    : undefined;
  return {
    ...oneToMany,
    metadata: {
      displayMetadata: displayMetadata ?? {
        displayName: convertToDisplayName(oneToMany.object.apiName),
        pluralDisplayName: convertToPluralDisplayName(oneToMany.object.apiName),
        visibility: "NORMAL",
        groupDisplayName: "",
        ...oneToMany.metadata,
      },
      typeClasses: [],
      apiName: oneToMany.metadata.apiName,
    },
  };
}

function convertUserManyToManyLinkDefinition(
  manyToMany: OneToManyObjectLinkReference,
): OneToManyObjectLinkReference {
  const displayMetadata = "displayMetadata" in manyToMany.metadata
    ? manyToMany.metadata.displayMetadata
    : undefined;
  return {
    ...manyToMany,
    metadata: {
      displayMetadata: displayMetadata ?? {
        displayName: convertToDisplayName(manyToMany.object.apiName),
        pluralDisplayName: convertToPluralDisplayName(
          manyToMany.object.apiName,
        ),
        visibility: "NORMAL",
        groupDisplayName: "",
        ...manyToMany.metadata,
      },
      typeClasses: [],
      apiName: manyToMany.metadata.apiName,
    },
  };
}
