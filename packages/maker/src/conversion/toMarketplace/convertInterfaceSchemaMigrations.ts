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

import type {
  GracePeriod as WireGracePeriod,
  OntologyIrInterfaceTypeReplacement,
  OntologyIrInterfaceTypeSchemaMigrationBlockData,
  OntologyIrInterfaceTypeSchemaMigrationInstruction,
  OntologyIrInterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";

import { namespace } from "../../api/defineOntology.js";
import {
  type InterfacePropertyType,
  interfacePropertyWireApiName,
} from "../../api/interface/InterfacePropertyType.js";
import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
  InterfaceTypeReplacement,
} from "../../api/interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../../api/interface/InterfaceType.js";
import { resolveReplacementInterfaceType } from "../../api/interface/resolveInterfaceTypeReplacement.js";
import { combineApiNamespaceIfMissing } from "../../api/namespace/combineApiNamespaceIfMissing.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
): OntologyIrInterfaceTypeSchemaMigrationBlockData | undefined {
  const { schemaMigrations } = interfaceType;
  if (schemaMigrations === undefined) {
    return undefined;
  }

  const schemaTransitions = Object.fromEntries(
    schemaMigrations.transitions.map(
      (transition): [string, OntologyIrInterfaceTypeSchemaTransition] => [
        transition.id,
        {
          id: transition.id,
          title: transition.title,
          description: transition.description,
          gracePeriod: convertInterfaceSchemaGracePeriod(
            transition.gracePeriod,
          ),
          migrations: transition.instructions.map((instruction) =>
            convertInstruction(instruction, interfaceType),
          ),
        },
      ],
    ),
  );

  return { schemaTransitions };
}

export function convertInterfaceSchemaGracePeriod(
  gracePeriod: InterfaceSchemaGracePeriod,
): WireGracePeriod {
  switch (gracePeriod.type) {
    case "afterInstall":
      return {
        type: "daysAfterActivation",
        daysAfterActivation: gracePeriod.days,
      };
    case "deadline":
      // Normalize deadline format to match Java (strip .000 milliseconds)
      return {
        type: "deadline",
        deadline: gracePeriod.deadline.replace(/\.000Z$/u, "Z"),
      };
    default: {
      const unhandled: never = gracePeriod;
      throw new Error(
        `Unknown schema migration grace period type: ${
          (unhandled as InterfaceSchemaGracePeriod).type
        }`,
      );
    }
  }
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceType: InterfaceType,
): OntologyIrInterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty":
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          // Ontology-ir types this as an API name despite the field name
          propertyTypeRid: interfacePropertyWireApiName(
            interfaceType.propertiesV3[instruction.property],
            instruction.property,
          ),
        },
      };
    case "addRequiredActionTypeConstraint":
      return {
        type: "addRequiredActionTypeConstraint",
        addRequiredActionTypeConstraint: {
          // Ontology-ir types this as an API name despite the field name
          actionTypeConstraintRid: combineApiNamespaceIfMissing(
            namespace,
            instruction.actionTypeConstraint,
          ),
        },
      };
    case "replace":
      return {
        type: "replace",
        replace: {
          replacement: convertReplacement(
            resolveInterfaceTypeReplacementApiNames(
              interfaceType,
              instruction.replacement,
            ),
          ),
        },
      };
    default: {
      const unhandled: never = instruction;
      throw new Error(
        `Unknown schema migration instruction type: ${
          (unhandled as InterfaceSchemaMigrationInstruction).type
        }`,
      );
    }
  }
}

function convertReplacement(
  resolved: ResolvedInterfaceTypeReplacement,
): OntologyIrInterfaceTypeReplacement {
  const toApiNames = (mappings: readonly ResolvedInterfaceMemberMapping[]) =>
    Object.fromEntries(
      mappings.map(({ from, to }) => [from.apiName, to.apiName]),
    );
  return {
    // Ontology-ir types this as an API name despite the field name
    interfaceTypeRid: resolved.interfaceTypeApiName,
    propertyMappings: toApiNames(resolved.propertyMappings),
    linkTypeConstraintMappings: toApiNames(resolved.linkTypeConstraintMappings),
    actionTypeConstraintMappings: toApiNames(
      resolved.actionTypeConstraintMappings,
    ),
  };
}

/** An entity (property, link type constraint, action type constraint) of an interface type. */
export interface ResolvedInterfaceMember {
  /** The fully-qualified API name the entity is published under. */
  apiName: string;
  /** The interface type that declares the entity: an ancestor's API name when inherited. */
  interfaceTypeApiName: string;
}

export interface ResolvedInterfaceProperty extends ResolvedInterfaceMember {
  /** The key the property is authored under on `interfaceTypeApiName`. */
  authoredKey: string;
  /** Absent when the interface type is known only by API name. */
  property?: InterfacePropertyType;
}

export interface ResolvedInterfaceMemberMapping<
  M extends ResolvedInterfaceMember = ResolvedInterfaceMember,
> {
  /** The entity on the replaced interface type. */
  from: M;
  /** The entity on the replacement interface type. */
  to: M;
}

export interface ResolvedInterfaceTypeReplacement {
  /** The replacement's fully-qualified API name. */
  interfaceTypeApiName: string;
  propertyMappings: Array<
    ResolvedInterfaceMemberMapping<ResolvedInterfaceProperty>
  >;
  linkTypeConstraintMappings: Array<ResolvedInterfaceMemberMapping>;
  actionTypeConstraintMappings: Array<ResolvedInterfaceMemberMapping>;
}

/**
 * Resolves a `replace` instruction's authored replacement to the API names, and declaring
 * interface types, of everything it maps, on both the replaced and the replacement side.
 *
 * Mapped entities may be inherited, so each side is searched through its extended interfaces.
 * When the replacement is known only by API name, its side passes the authored names through.
 */
export function resolveInterfaceTypeReplacementApiNames(
  declaringInterface: InterfaceType,
  replacement: InterfaceTypeReplacement,
): ResolvedInterfaceTypeReplacement {
  const resolved = resolveReplacementInterfaceType(replacement);
  const replacementDefinition =
    typeof replacement.interfaceType !== "string"
      ? replacement.interfaceType
      : (resolved.local ?? resolved.imported);

  return {
    interfaceTypeApiName: resolved.apiName,
    propertyMappings: Object.entries(replacement.propertyMappings).map(
      ([from, to]) => ({
        from: resolveProperty(
          declaringInterface,
          declaringInterface.apiName,
          from,
        ),
        to: resolveProperty(replacementDefinition, resolved.apiName, to),
      }),
    ),
    linkTypeConstraintMappings: Object.entries(
      replacement.linkTypeConstraintMappings ?? {},
    ).map(([from, to]) => ({
      from: resolveConstraint(
        declaringInterface,
        declaringInterface.apiName,
        from,
        linkApiNames,
      ),
      to: resolveConstraint(
        replacementDefinition,
        resolved.apiName,
        to,
        linkApiNames,
      ),
    })),
    actionTypeConstraintMappings: Object.entries(
      replacement.actionTypeConstraintMappings ?? {},
    ).map(([from, to]) => ({
      from: resolveConstraint(
        declaringInterface,
        declaringInterface.apiName,
        from,
        actionTypeConstraintApiNames,
      ),
      to: resolveConstraint(
        replacementDefinition,
        resolved.apiName,
        to,
        actionTypeConstraintApiNames,
      ),
    })),
  };
}

/**
 * Finds a property by authored key (or published API name) on `interfaceType` or the interface
 * types it extends, with the same precedence as `getFlattenedInterfaceProperties`. That helper is
 * keyed by published API name only, which loses the authored key and declaring interface type that
 * RID generation needs.
 */
function resolveProperty(
  interfaceType: InterfaceType | undefined,
  interfaceTypeApiName: string,
  name: string,
): ResolvedInterfaceProperty {
  const found =
    interfaceType !== undefined ? findProperty(interfaceType, name) : undefined;
  // Without a definition (or with an imported one that omits the property) there is nothing to
  // resolve against; validation rejects unknown names on locally defined interface types.
  return found ?? { apiName: name, interfaceTypeApiName, authoredKey: name };
}

function findProperty(
  interfaceType: InterfaceType,
  name: string,
): ResolvedInterfaceProperty | undefined {
  for (const [authoredKey, property] of Object.entries(
    interfaceType.propertiesV3,
  )) {
    const apiName = interfacePropertyWireApiName(property, authoredKey);
    if (authoredKey === name || apiName === name) {
      return {
        apiName,
        interfaceTypeApiName: interfaceType.apiName,
        authoredKey,
        property,
      };
    }
  }
  for (const parent of interfaceType.extendsInterfaces) {
    const found = findProperty(parent, name);
    if (found !== undefined) {
      return found;
    }
  }
  return undefined;
}

function linkApiNames(interfaceType: InterfaceType): string[] {
  return interfaceType.links.map((link) => link.metadata.apiName);
}

function actionTypeConstraintApiNames(interfaceType: InterfaceType): string[] {
  return interfaceType.actionTypeConstraints.map(
    (constraint) => constraint.metadata.apiName,
  );
}

/**
 * Namespaces a constraint's authored name the way `defineInterfaceLinkConstraint` and
 * `defineInterfaceActionTypeConstraint` do, and finds which interface type in the hierarchy
 * declares it.
 */
function resolveConstraint(
  interfaceType: InterfaceType | undefined,
  interfaceTypeApiName: string,
  name: string,
  declaredApiNames: (interfaceType: InterfaceType) => readonly string[],
): ResolvedInterfaceMember {
  const apiName = combineApiNamespaceIfMissing(namespace, name);
  const owner =
    interfaceType !== undefined
      ? findOwner(interfaceType, apiName, declaredApiNames)
      : undefined;
  return {
    apiName,
    interfaceTypeApiName: owner?.apiName ?? interfaceTypeApiName,
  };
}

function findOwner(
  interfaceType: InterfaceType,
  apiName: string,
  declaredApiNames: (interfaceType: InterfaceType) => readonly string[],
): InterfaceType | undefined {
  if (declaredApiNames(interfaceType).includes(apiName)) {
    return interfaceType;
  }
  for (const parent of interfaceType.extendsInterfaces) {
    const owner = findOwner(parent, apiName, declaredApiNames);
    if (owner !== undefined) {
      return owner;
    }
  }
  return undefined;
}
