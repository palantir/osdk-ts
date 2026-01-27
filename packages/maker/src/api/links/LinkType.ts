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
  LinkTypeDisplayMetadata,
  LinkTypeId,
  LinkTypeMetadata,
  Visibility,
} from "@osdk/client.unstable";
import type { OptionalFields } from "../../util/OptionalFields.js";
import type { RequiredFields } from "../../util/RequiredFields.js";
import type { OntologyEntityBase } from "../common/OntologyEntityBase.js";
import type { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";

export type LinkType =
  | (OntologyEntityBase & OneToManyLinkTypeDefinition & {
    __type: OntologyEntityTypeEnum.LINK_TYPE;
  })
  | (OntologyEntityBase & ManyToManyLinkTypeDefinition & {
    __type: OntologyEntityTypeEnum.LINK_TYPE;
  })
  | (OntologyEntityBase & IntermediaryLinkTypeDefinition & {
    __type: OntologyEntityTypeEnum.LINK_TYPE;
  });

export type LinkTypeDefinition =
  | Omit<
    OntologyEntityBase & OneToManyLinkTypeUserDefinition & {
      __type: OntologyEntityTypeEnum.LINK_TYPE;
    },
    "__type"
  >
  | Omit<
    OntologyEntityBase & ManyToManyLinkTypeUserDefinition & {
      __type: OntologyEntityTypeEnum.LINK_TYPE;
    },
    "__type"
  >
  | Omit<
    OntologyEntityBase & IntermediaryLinkTypeUserDefinition & {
      __type: OntologyEntityTypeEnum.LINK_TYPE;
    },
    "__type"
  >;

export type ObjectTypePropertyApiName = string;

export interface OneToManyLinkTypeDefinition {
  apiName: string;
  one: OneToManyObjectLinkReference;
  toMany: OneToManyObjectLinkReference;
  manyForeignKeyProperty: ObjectTypePropertyApiName;
  cardinality: "OneToMany" | "OneToOne" | undefined;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
  redacted?: boolean;
}

export interface OneToManyObjectLinkReference {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadata;
}

export interface OneToManyLinkTypeUserDefinition {
  apiName: string;
  one: OneToManyObjectLinkReferenceUserDefinition;
  toMany: OneToManyObjectLinkReferenceUserDefinition;
  manyForeignKeyProperty: ObjectTypePropertyApiName;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
  cardinality?: "OneToMany" | "OneToOne" | undefined;
}

export interface OneToManyObjectLinkReferenceUserDefinition {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadataUserDefinition;
}

export interface ManyToManyLinkTypeDefinition {
  apiName: string;
  many: ManyToManyObjectLinkReference;
  toMany: ManyToManyObjectLinkReference;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
  redacted?: boolean;
}

export interface ManyToManyObjectLinkReference {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadata;
}

export interface ManyToManyLinkTypeUserDefinition {
  apiName: string;
  many: ManyToManyObjectLinkReferenceUserDefinition;
  toMany: ManyToManyObjectLinkReferenceUserDefinition;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
}

export interface ManyToManyObjectLinkReferenceUserDefinition {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadataUserDefinition;
}

export interface IntermediaryLinkTypeDefinition {
  apiName: string;
  many: IntermediaryObjectLinkReference;
  toMany: IntermediaryObjectLinkReference;
  intermediaryObjectType: ObjectTypeDefinition;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
  redacted?: boolean;
}

export interface IntermediaryObjectLinkReference {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadata;
  linkToIntermediary: LinkType;
}

export interface IntermediaryLinkTypeUserDefinition {
  apiName: string;
  many: IntermediaryObjectLinkReferenceUserDefinition;
  toMany: IntermediaryObjectLinkReferenceUserDefinition;
  intermediaryObjectType: ObjectTypeDefinition | string;
  editsEnabled?: boolean;
  status?: UserLinkTypeStatus;
}

export interface IntermediaryObjectLinkReferenceUserDefinition {
  object: ObjectTypeDefinition | string;
  metadata: LinkTypeMetadataUserDefinition;
  linkToIntermediary: LinkType;
}

export interface LinkTypeMetadataUserDefinition {
  apiName: string;
  displayName?: string;
  pluralDisplayName?: string;
  visibility?: Visibility;
  groupDisplayName?: string;
}

export type LinkSideMetadata = OptionalFields<
  RequiredFields<
    Omit<LinkTypeMetadata, "displayMetadata"> & LinkTypeDisplayMetadata,
    "apiName"
  >,
  "visibility" | "typeClasses"
>;

export type UserLinkTypeStatus =
  | "active"
  | "experimental"
  | "example"
  | {
    type: "deprecated";
    message: string;
    deadline: string;
    replacedBy?: LinkTypeId;
  };
