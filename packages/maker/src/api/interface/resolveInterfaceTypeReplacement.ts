/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { namespace } from "../defineOntology.js";
import { combineApiNamespaceIfMissing } from "../namespace/combineApiNamespaceIfMissing.js";
import type { OntologyValidationContext } from "../validateOntology.js";
import { interfacePropertyWireApiName } from "./InterfacePropertyType.js";
import type {
  InterfacePropertyTypeReplacement,
  InterfaceTypeReplacement,
} from "./InterfaceSchemaMigrations.js";
import type { InterfaceType } from "./InterfaceType.js";
import type {
  ResolvedInterfaceActionTypeConstraint,
  ResolvedInterfaceLinkTypeConstraint,
  ResolvedInterfaceMember,
  ResolvedInterfaceProperty,
} from "./ResolvedInterfaceMember.js";

interface ResolvedReplacementInterfaceType {
  /** The fully-qualified API name the replacement is published under. */
  apiName: string;
  /** The replacement's definition, local when defined in this ontology and imported otherwise. */
  definition: InterfaceType;
}

/**
 * Resolves the interface type a `replace` instruction's replacement refers to.
 */
function resolveReplacementInterfaceType(
  { ontology, importedTypes }: OntologyValidationContext,
  replacedInterfaceType: InterfaceType,
  replacement: InterfaceTypeReplacement,
): ResolvedReplacementInterfaceType {
  const { interfaceType } = replacement;
  const localTypes = ontology[OntologyEntityTypeEnum.INTERFACE_TYPE];
  const importedInterfaceTypes =
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE];

  const requestedApiName =
    typeof interfaceType === "string" ? interfaceType : interfaceType.apiName;
  const resolved =
    findInterfaceType(requestedApiName, localTypes, importedInterfaceTypes) ??
    (typeof interfaceType === "string"
      ? findInterfaceType(namespace + interfaceType, localTypes)
      : undefined);
  if (resolved === undefined) {
    throw new Error(
      `Interface ${replacedInterfaceType.apiName} is being replaced by ${requestedApiName}, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.`,
    );
  }
  return resolved;
}

function findInterfaceType(
  apiName: string,
  ...interfaceTypesByApiName: Array<Record<string, InterfaceType>>
): ResolvedReplacementInterfaceType | undefined {
  const interfaceTypes = interfaceTypesByApiName.find((types) =>
    Object.hasOwn(types, apiName),
  );
  if (interfaceTypes === undefined) {
    return undefined;
  }

  return { apiName, definition: interfaceTypes[apiName] };
}

export interface ResolvedInterfaceMemberMapping<
  M extends ResolvedInterfaceMember = ResolvedInterfaceMember,
> {
  /** The entity on the replaced interface type. */
  from: M;
  /** The entity on the replacement interface type. */
  to: M;
}

export interface ResolvedInterfacePropertyMapping extends ResolvedInterfaceMemberMapping<ResolvedInterfaceProperty> {
  /** Struct field API names on `from` to those on `to`. Fields are scoped to their property, so never namespaced. */
  structFieldMappings: Record<string, string>;
}

export interface ResolvedInterfaceActionTypeConstraintMapping extends ResolvedInterfaceMemberMapping<ResolvedInterfaceActionTypeConstraint> {
  /** Parameter API names on `from` to those on `to`. Parameters are scoped to their constraint, so never namespaced. */
  parameterMappings: Record<string, string>;
}

/** Mappings are in the order they were authored. */
export interface ResolvedInterfaceTypeReplacement {
  /** The replacement's fully-qualified API name. */
  interfaceTypeApiName: string;
  interfaceType: InterfaceType;
  propertyMappings: Array<ResolvedInterfacePropertyMapping>;
  linkTypeConstraintMappings: Array<
    ResolvedInterfaceMemberMapping<ResolvedInterfaceLinkTypeConstraint>
  >;
  actionTypeConstraintMappings: Array<ResolvedInterfaceActionTypeConstraintMapping>;
}

/**
 * Resolves a `replace` instruction's replacement interface type, and every entity it maps on both
 * sides, searching each side's extended interfaces. Properties match by authored key; link and
 * action type constraints by (namespaced) API name.
 *
 * `errorPrefix` starts the message thrown when a mapped entity does not exist.
 */
export function resolveInterfaceTypeReplacement(
  validationContext: OntologyValidationContext,
  replacedInterfaceType: InterfaceType,
  replacement: InterfaceTypeReplacement,
  errorPrefix?: string,
): ResolvedInterfaceTypeReplacement {
  const { apiName, definition } = resolveReplacementInterfaceType(
    validationContext,
    replacedInterfaceType,
    replacement,
  );
  const prefix =
    errorPrefix ??
    `Interface ${replacedInterfaceType.apiName} declares a replacement by ${apiName}`;

  function resolveMapping<M>(
    field: string,
    noun: string,
    find: (interfaceType: InterfaceType, authored: string) => M | undefined,
    authoredFrom: string,
    authoredTo: string,
  ): { from: M; to: M } {
    const from = findInHierarchy(replacedInterfaceType, (it) =>
      find(it, authoredFrom),
    );
    invariant(
      from !== undefined,
      `${prefix}, whose ${field} maps from ${noun} "${authoredFrom}", but ${replacedInterfaceType.apiName} has no such ${noun}.`,
    );
    const to = findInHierarchy(definition, (it) => find(it, authoredTo));
    invariant(
      to !== undefined,
      `${prefix}, whose ${field} maps to ${noun} "${authoredTo}", but ${definition.apiName} has no such ${noun}.`,
    );
    return { from, to };
  }

  return {
    interfaceTypeApiName: apiName,
    interfaceType: definition,
    propertyMappings: Object.entries(replacement.propertyMappings).map(
      ([from, to]) => {
        const { property, structFieldMappings } = asPropertyReplacement(to);
        return {
          ...resolveMapping(
            "propertyMappings",
            "property",
            findProperty,
            from,
            property,
          ),
          structFieldMappings: structFieldMappings ?? {},
        };
      },
    ),
    linkTypeConstraintMappings: Object.entries(
      replacement.linkTypeConstraintMappings ?? {},
    ).map(([from, to]) =>
      resolveMapping(
        "linkTypeConstraintMappings",
        "link type constraint",
        findLinkTypeConstraint,
        from,
        to,
      ),
    ),
    actionTypeConstraintMappings: Object.entries(
      replacement.actionTypeConstraintMappings ?? {},
    ).map(([from, { actionTypeConstraint, parameterMappings }]) => ({
      ...resolveMapping(
        "actionTypeConstraintMappings",
        "action type constraint",
        findActionTypeConstraint,
        from,
        actionTypeConstraint,
      ),
      parameterMappings: parameterMappings ?? {},
    })),
  };
}

/** A `propertyMappings` value in its long form. */
export function asPropertyReplacement(
  mapping: string | InterfacePropertyTypeReplacement,
): InterfacePropertyTypeReplacement {
  return typeof mapping === "string" ? { property: mapping } : mapping;
}

/** Searches `interfaceType`, then everything it extends, depth-first. */
function findInHierarchy<M>(
  interfaceType: InterfaceType,
  find: (interfaceType: InterfaceType) => M | undefined,
): M | undefined {
  const found = find(interfaceType);
  if (found !== undefined) {
    return found;
  }
  for (const parent of interfaceType.extendsInterfaces) {
    const inherited = findInHierarchy(parent, find);
    if (inherited !== undefined) {
      return inherited;
    }
  }
  return undefined;
}

function findProperty(
  interfaceType: InterfaceType,
  authoredKey: string,
): ResolvedInterfaceProperty | undefined {
  if (!Object.hasOwn(interfaceType.propertiesV3, authoredKey)) {
    return undefined;
  }
  const property = interfaceType.propertiesV3[authoredKey];
  return {
    apiName: interfacePropertyWireApiName(property, authoredKey),
    interfaceTypeApiName: interfaceType.apiName,
    authoredKey,
    property,
  };
}

function findLinkTypeConstraint(
  interfaceType: InterfaceType,
  authored: string,
): ResolvedInterfaceLinkTypeConstraint | undefined {
  const apiName = combineApiNamespaceIfMissing(namespace, authored);
  const linkTypeConstraint = interfaceType.links.find(
    (link) => link.metadata.apiName === apiName,
  );
  return linkTypeConstraint === undefined
    ? undefined
    : {
        apiName,
        interfaceTypeApiName: interfaceType.apiName,
        linkTypeConstraint,
      };
}

function findActionTypeConstraint(
  interfaceType: InterfaceType,
  authored: string,
): ResolvedInterfaceActionTypeConstraint | undefined {
  const apiName = combineApiNamespaceIfMissing(namespace, authored);
  const actionTypeConstraint = interfaceType.actionTypeConstraints.find(
    (constraint) => constraint.metadata.apiName === apiName,
  );
  return actionTypeConstraint === undefined
    ? undefined
    : {
        apiName,
        interfaceTypeApiName: interfaceType.apiName,
        actionTypeConstraint,
      };
}
