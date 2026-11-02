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

import { isDeepStrictEqual } from "node:util";

import type {
  OntologyIrInterfaceActionTypeConstraint,
  OntologyIrLinkedEntityTypeId,
  OntologyIrMarketplaceInterfaceLinkType,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";

import {
  describeType,
  type LockedPropertyType,
  normalizePropertyType,
} from "../../lockfile/LockedPropertyType.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { namespace } from "../defineOntology.js";
import { combineApiNamespaceIfMissing } from "../namespace/combineApiNamespaceIfMissing.js";
import type { OntologyValidationContext } from "../validateOntology.js";
import { describeInstruction } from "./describeInterfaceSchemaMigrationInstruction.js";
import {
  getInterfacePropertyTypeType,
  type InterfacePropertyType,
  isInterfacePropertyArray,
  isInterfacePropertyRequired,
} from "./InterfacePropertyType.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceTypeReplacement,
} from "./InterfaceSchemaMigrations.js";
import type { InterfaceType } from "./InterfaceType.js";
import { resolveReplacementInterfaceType } from "./resolveInterfaceTypeReplacement.js";

/**
 * Validates interface schema migrations against the other entities they reference.
 *
 * These run once the whole ontology is defined, since action type constraints, link constraints,
 * and extending interface types are all attached after `defineInterface` returns.
 */
export function validateInterfaceSchemaMigrationReferences(
  validationContext: OntologyValidationContext,
): void {
  const interfaceTypes = Object.values(
    validationContext.ontology[OntologyEntityTypeEnum.INTERFACE_TYPE],
  );

  for (const interfaceType of interfaceTypes) {
    const transitions = interfaceType.schemaMigrations?.transitions ?? [];
    for (const transition of transitions) {
      for (const instruction of transition.instructions) {
        const context: ReferenceContext = {
          validationContext,
          interfaceType,
          transitionId: transition.id,
          prefix: `Schema migration transition "${transition.id}" on interface ${interfaceType.apiName} declares ${describeInstruction(instruction)}`,
        };

        validateInstructionReferences(context, instruction, interfaceTypes);
      }
    }
  }
}

interface ReferenceContext {
  validationContext: OntologyValidationContext;
  interfaceType: InterfaceType;
  transitionId: string;
  /** The start of every error message, naming the transition, interface, and instruction. */
  prefix: string;
}

function validateInstructionReferences(
  context: ReferenceContext,
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceTypes: readonly InterfaceType[],
): void {
  switch (instruction.type) {
    case "addRequiredProperty":
      // Already eagerly validated by defineInterface
      return;
    case "addRequiredActionTypeConstraint":
      // action type constraints are defined separately from defineInterface
      validateActionTypeConstraintTarget(
        context,
        combineApiNamespaceIfMissing(
          namespace,
          instruction.actionTypeConstraint,
        ),
      );
      return;
    case "replace": {
      const { interfaceType, prefix } = context;
      const extender = interfaceTypes.find((candidate) =>
        candidate.extendsInterfaces.some(
          (parent) => parent.apiName === interfaceType.apiName,
        ),
      );
      invariant(
        extender === undefined,
        `${prefix}, but interface ${extender?.apiName} extends it. An interface type may not be replaced while another interface type extends it; replace or remove the extension first.`,
      );
      validateReplacement(context, instruction.replacement);
      return;
    }
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

function validateActionTypeConstraintTarget(
  { interfaceType, prefix }: ReferenceContext,
  actionTypeConstraintApiName: string,
): void {
  const constraint = interfaceType.actionTypeConstraints.find(
    (candidate) => candidate.metadata.apiName === actionTypeConstraintApiName,
  );

  const hint = flattenedActionTypeConstraintsIncludingInherited(
    interfaceType,
  ).has(actionTypeConstraintApiName)
    ? "Action type constraints inherited from an extended interface must be migrated by a transition on the interface that declares them."
    : "Declare it with `defineInterfaceActionTypeConstraint` and `requireImplementation: false`.";
  invariant(
    constraint !== undefined,
    `${prefix}, but interface ${interfaceType.apiName} does not declare action type constraint "${actionTypeConstraintApiName}". ${hint}`,
  );
  invariant(
    !constraint.requireImplementation,
    `${prefix}, but action type constraint "${actionTypeConstraintApiName}" is \`requireImplementation: true\`. Only action type constraints declared \`requireImplementation: false\` may be targeted.`,
  );
}

function validateReplacement(
  context: ReferenceContext,
  replacement: InterfaceTypeReplacement,
): void {
  const { validationContext, interfaceType, prefix } = context;
  const { definition: replacementType } = resolveReplacementInterfaceType(
    validationContext,
    interfaceType,
    replacement,
  );

  invariant(
    replacementType.apiName !== interfaceType.apiName,
    `${prefix}, but an interface type cannot be replaced by itself.`,
  );

  invariant(
    !ancestorsOf(replacementType).has(interfaceType.apiName) &&
      !ancestorsOf(interfaceType).has(replacementType.apiName),
    `${prefix}, but one of ${interfaceType.apiName} and ${replacementType.apiName} extends the other. The replacement must be unrelated to the interface type it replaces.`,
  );

  validateMapping(
    context,
    interfaceType.apiName,
    replacementType.apiName,
    replacement.propertyMappings,
    {
      field: "propertyMappings",
      noun: "property",
      sources: flattenedPropertiesIncludingInherited(interfaceType),
      targets: flattenedPropertiesIncludingInherited(replacementType),
      normalizeKey: (key) => key,
      isRequired: (property) => isInterfacePropertyRequired(property),
      mismatch: (from, to) => {
        const sourceType = lockedTypeOf(from);
        const targetType = lockedTypeOf(to);
        return isDeepStrictEqual(sourceType, targetType)
          ? undefined
          : `type ${describeType(sourceType)} does not match ${describeType(targetType)}`;
      },
    },
  );
  validateMapping(
    context,
    interfaceType.apiName,
    replacementType.apiName,
    replacement.linkTypeConstraintMappings ?? {},
    {
      field: "linkTypeConstraintMappings",
      noun: "link type constraint",
      sources: flattenedLinksIncludingInherited(interfaceType),
      targets: flattenedLinksIncludingInherited(replacementType),
      normalizeKey: (key) => combineApiNamespaceIfMissing(namespace, key),
      isRequired: (link) => link.required,
      mismatch: checkForLinkMismatch,
    },
  );
  validateMapping(
    context,
    interfaceType.apiName,
    replacementType.apiName,
    Object.fromEntries(
      Object.entries(replacement.actionTypeConstraintMappings ?? {}).map(
        ([from, { actionTypeConstraint }]) => [from, actionTypeConstraint],
      ),
    ),
    {
      field: "actionTypeConstraintMappings",
      noun: "action type constraint",
      sources: flattenedActionTypeConstraintsIncludingInherited(interfaceType),
      targets:
        flattenedActionTypeConstraintsIncludingInherited(replacementType),
      normalizeKey: (key) => combineApiNamespaceIfMissing(namespace, key),
      isRequired: (constraint) => constraint.requireImplementation,
      // After required-ness check above, only the parameters need compatibility
      // checking, and that happens separately in validateParameterMappings
      mismatch: () => undefined,
    },
  );
  validateParameterMappings(context, replacement, replacementType);
}

function validateParameterMappings(
  context: ReferenceContext,
  replacement: InterfaceTypeReplacement,
  replacementType: InterfaceType,
): void {
  const sources = flattenedActionTypeConstraintsIncludingInherited(
    context.interfaceType,
  );
  const targets =
    flattenedActionTypeConstraintsIncludingInherited(replacementType);
  for (const [
    authoredSource,
    { actionTypeConstraint, parameterMappings },
  ] of Object.entries(replacement.actionTypeConstraintMappings ?? {})) {
    const source = sources.get(
      combineApiNamespaceIfMissing(namespace, authoredSource),
    )!;
    const target = targets.get(
      combineApiNamespaceIfMissing(namespace, actionTypeConstraint),
    )!;

    validateMapping(
      context,
      source.metadata.apiName,
      target.metadata.apiName,
      parameterMappings ?? {},
      {
        field: `actionTypeConstraintMappings["${authoredSource}"].parameterMappings`,
        noun: "parameter",
        sources: new Map(Object.entries(source.parameters)),
        targets: new Map(Object.entries(target.parameters)),
        normalizeKey: (key) => key,
        isRequired: (parameter) => parameter.requireImplementation,
        mismatch: (from, to) =>
          isDeepStrictEqual(from.type, to.type)
            ? undefined
            : `type ${JSON.stringify(from.type)} does not match ${JSON.stringify(to.type)}`,
      },
    );
  }
}

interface MappingSpec<T> {
  field: string;
  noun: string;
  /** The replaced entity's members, keyed by normalized API name. */
  sources: ReadonlyMap<string, T>;
  /** The replacement entity's members, keyed by normalized API name. */
  targets: ReadonlyMap<string, T>;
  /** Normalizes an authored API name to the key `sources` and `targets` use. */
  normalizeKey: (authored: string) => string;
  /** Whether the replacement requires `target`. */
  isRequired: (target: T) => boolean;
  /** Why `source` can't stand in for `target`, if it can't. */
  mismatch: (source: T, target: T) => string | undefined;
}

function validateMapping<T>(
  { prefix }: ReferenceContext,
  sourceApiName: string,
  targetApiName: string,
  mapping: Record<string, string>,
  {
    field,
    noun,
    sources,
    targets,
    normalizeKey,
    isRequired,
    mismatch,
  }: MappingSpec<T>,
): void {
  const mappedTargets = new Set<string>();
  for (const [authoredSource, authoredTarget] of Object.entries(mapping)) {
    const source = sources.get(normalizeKey(authoredSource));
    invariant(
      source !== undefined,
      `${prefix}, whose ${field} maps from ${noun} "${authoredSource}", but ${sourceApiName} has no such ${noun}.`,
    );

    const targetKey = normalizeKey(authoredTarget);
    const target = targets.get(targetKey);
    invariant(
      target !== undefined,
      `${prefix}, whose ${field} maps to ${noun} "${authoredTarget}", but ${targetApiName} has no such ${noun}.`,
    );

    const reason = mismatch(source, target);
    invariant(
      reason === undefined,
      `${prefix}, whose ${field} maps ${noun} "${authoredSource}" to "${authoredTarget}", but its ${reason}.`,
    );
    mappedTargets.add(targetKey);
  }

  for (const [key, target] of targets) {
    invariant(
      mappedTargets.has(key) || !isRequired(target),
      `${prefix}, but its ${field} does not map to ${noun} "${key}", which ${targetApiName} requires. Map ${sourceApiName}'s corresponding ${noun} to it, so that automatically-generated changes produce a valid implementation.`,
    );
  }
}

function lockedTypeOf(property: InterfacePropertyType): LockedPropertyType {
  return normalizePropertyType(
    getInterfacePropertyTypeType(property),
    isInterfacePropertyArray(property),
  );
}

function checkForLinkMismatch(
  from: OntologyIrMarketplaceInterfaceLinkType,
  to: OntologyIrMarketplaceInterfaceLinkType,
): string | undefined {
  if (from.cardinality !== to.cardinality) {
    return `cardinality ${from.cardinality} does not match ${to.cardinality}`;
  }
  if (!isDeepStrictEqual(from.linkedEntityTypeId, to.linkedEntityTypeId)) {
    return `linked entity ${describeLinkedEntity(from.linkedEntityTypeId)} does not match ${describeLinkedEntity(to.linkedEntityTypeId)}`;
  }
  return undefined;
}

function describeLinkedEntity(linked: OntologyIrLinkedEntityTypeId): string {
  return linked.type === "interfaceType"
    ? `interface ${linked.interfaceType}`
    : `object type ${linked.objectType}`;
}

/** The API names of every interface type `interfaceType` extends, transitively. */
function ancestorsOf(interfaceType: InterfaceType): Set<string> {
  return new Set(
    hierarchyOf(interfaceType)
      .filter((ancestor) => ancestor !== interfaceType)
      .map((ancestor) => ancestor.apiName),
  );
}

/** `interfaceType` followed by everything it extends, transitively. */
function hierarchyOf(interfaceType: InterfaceType): InterfaceType[] {
  return [
    interfaceType,
    ...interfaceType.extendsInterfaces.flatMap(hierarchyOf),
  ];
}

function flattenedPropertiesIncludingInherited(
  interfaceType: InterfaceType,
): Map<string, InterfacePropertyType> {
  return new Map(
    hierarchyOf(interfaceType)
      .reverse()
      .flatMap((it) => Object.entries(it.propertiesV3)),
  );
}

function flattenedLinksIncludingInherited(
  interfaceType: InterfaceType,
): Map<string, OntologyIrMarketplaceInterfaceLinkType> {
  return new Map(
    hierarchyOf(interfaceType)
      .reverse()
      .flatMap((it) => it.links)
      .map((link) => [link.metadata.apiName, link]),
  );
}

function flattenedActionTypeConstraintsIncludingInherited(
  interfaceType: InterfaceType,
): Map<string, OntologyIrInterfaceActionTypeConstraint> {
  return new Map(
    hierarchyOf(interfaceType)
      .reverse()
      .flatMap((it) => it.actionTypeConstraints)
      .map((constraint) => [constraint.metadata.apiName, constraint]),
  );
}
