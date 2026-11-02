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

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { namespace } from "../defineOntology.js";
import { combineApiNamespaceIfMissing } from "../namespace/combineApiNamespaceIfMissing.js";
import {
  describePropertyType,
  type NormalizedPropertyType,
  normalizePropertyType,
} from "../properties/normalizePropertyType.js";
import type { OntologyContext } from "../validateOntology.js";
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
import type { ResolvedInterfaceMember } from "./ResolvedInterfaceMember.js";
import {
  type ResolvedInterfaceActionTypeConstraintMapping,
  type ResolvedInterfaceMemberMapping,
  resolveInterfaceTypeReplacement,
} from "./resolveInterfaceTypeReplacement.js";

/**
 * Validates interface schema migrations against the other entities they reference.
 *
 * These run once the whole ontology is defined, since action type constraints, link constraints,
 * and extending interface types are all attached after `defineInterface` returns.
 */
export function validateInterfaceSchemaMigrationReferences(
  validationContext: OntologyContext,
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
  validationContext: OntologyContext;
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
  const resolved = resolveInterfaceTypeReplacement(
    validationContext,
    interfaceType,
    replacement,
    prefix,
  );
  const replacementType = resolved.interfaceType;

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
    pairsOf(
      Object.entries(replacement.propertyMappings),
      resolved.propertyMappings,
      ({ property }) => property,
      ({ authoredKey }) => authoredKey,
    ),
    {
      field: "propertyMappings",
      noun: "property",
      targets: flattenedPropertiesIncludingInherited(replacementType),
      isRequired: (property) => isInterfacePropertyRequired(property),
      mismatch: (from, to) => {
        const sourceType = normalizedTypeOf(from);
        const targetType = normalizedTypeOf(to);
        return isDeepStrictEqual(sourceType, targetType)
          ? undefined
          : `type ${describePropertyType(sourceType)} does not match ${describePropertyType(targetType)}`;
      },
    },
  );
  validateMapping(
    context,
    interfaceType.apiName,
    replacementType.apiName,
    pairsOf(
      Object.entries(replacement.linkTypeConstraintMappings ?? {}),
      resolved.linkTypeConstraintMappings,
      ({ linkTypeConstraint }) => linkTypeConstraint,
      ({ apiName }) => apiName,
    ),
    {
      field: "linkTypeConstraintMappings",
      noun: "link type constraint",
      targets: flattenedLinksIncludingInherited(replacementType),
      isRequired: (link) => link.required,
      mismatch: checkForLinkMismatch,
    },
  );

  const authoredActionTypeConstraintSources = Object.keys(
    replacement.actionTypeConstraintMappings ?? {},
  );
  validateMapping(
    context,
    interfaceType.apiName,
    replacementType.apiName,
    pairsOf(
      Object.entries(replacement.actionTypeConstraintMappings ?? {}).map(
        ([from, { actionTypeConstraint }]) => [from, actionTypeConstraint],
      ),
      resolved.actionTypeConstraintMappings,
      ({ actionTypeConstraint }) => actionTypeConstraint,
      ({ apiName }) => apiName,
    ),
    {
      field: "actionTypeConstraintMappings",
      noun: "action type constraint",
      targets:
        flattenedActionTypeConstraintsIncludingInherited(replacementType),
      isRequired: (constraint) => constraint.requireImplementation,
      // After required-ness check above, only the parameters need compatibility
      // checking, and that happens separately in validateParameterMappings
      mismatch: () => undefined,
    },
  );
  resolved.actionTypeConstraintMappings.forEach((mapping, i) =>
    validateParameterMappings(
      context,
      authoredActionTypeConstraintSources[i],
      mapping,
    ),
  );
}

function validateParameterMappings(
  context: ReferenceContext,
  authoredActionTypeConstraint: string,
  { from, to, parameterMappings }: ResolvedInterfaceActionTypeConstraintMapping,
): void {
  const field = `actionTypeConstraintMappings["${authoredActionTypeConstraint}"].parameterMappings`;
  const sources = from.actionTypeConstraint.parameters;
  const targets = to.actionTypeConstraint.parameters;
  const pairs = Object.entries(parameterMappings).map(
    ([authoredSource, authoredTarget]) => {
      invariant(
        Object.hasOwn(sources, authoredSource),
        `${context.prefix}, whose ${field} maps from parameter "${authoredSource}", but ${from.apiName} has no such parameter.`,
      );
      invariant(
        Object.hasOwn(targets, authoredTarget),
        `${context.prefix}, whose ${field} maps to parameter "${authoredTarget}", but ${to.apiName} has no such parameter.`,
      );
      return {
        authoredSource,
        authoredTarget,
        source: sources[authoredSource],
        target: targets[authoredTarget],
        targetKey: authoredTarget,
      };
    },
  );

  validateMapping(context, from.apiName, to.apiName, pairs, {
    field,
    noun: "parameter",
    targets: new Map(Object.entries(targets)),
    isRequired: (parameter) => parameter.requireImplementation,
    mismatch: (source, target) =>
      isDeepStrictEqual(source.type, target.type)
        ? undefined
        : `type ${JSON.stringify(source.type)} does not match ${JSON.stringify(target.type)}`,
  });
}

/** One authored mapping entry, with both sides already resolved. */
interface MappedPair<T> {
  authoredSource: string;
  authoredTarget: string;
  source: T;
  target: T;
  /** The key `target` has in `MappingSpec.targets`. */
  targetKey: string;
}

/** Zips authored mapping entries with their resolutions, which are in the same order. */
function pairsOf<M extends ResolvedInterfaceMember, T>(
  authored: ReadonlyArray<[source: string, target: string]>,
  resolved: ReadonlyArray<ResolvedInterfaceMemberMapping<M>>,
  definitionOf: (member: M) => T,
  keyOf: (member: M) => string,
): Array<MappedPair<T>> {
  return resolved.map(({ from, to }, i) => ({
    authoredSource: authored[i][0],
    authoredTarget: authored[i][1],
    source: definitionOf(from),
    target: definitionOf(to),
    targetKey: keyOf(to),
  }));
}

interface MappingSpec<T> {
  field: string;
  noun: string;
  /** Every member of the replacement entity, keyed as `MappedPair.targetKey`. */
  targets: ReadonlyMap<string, T>;
  /** Whether the replacement requires `target`. */
  isRequired: (target: T) => boolean;
  /** Why `source` can't stand in for `target`, if it can't. */
  mismatch: (source: T, target: T) => string | undefined;
}

function validateMapping<T>(
  { prefix }: ReferenceContext,
  sourceApiName: string,
  targetApiName: string,
  pairs: ReadonlyArray<MappedPair<T>>,
  { field, noun, targets, isRequired, mismatch }: MappingSpec<T>,
): void {
  for (const { authoredSource, authoredTarget, source, target } of pairs) {
    const reason = mismatch(source, target);
    invariant(
      reason === undefined,
      `${prefix}, whose ${field} maps ${noun} "${authoredSource}" to "${authoredTarget}", but its ${reason}.`,
    );
  }

  const mappedTargets = new Set(pairs.map(({ targetKey }) => targetKey));
  for (const [key, target] of targets) {
    invariant(
      mappedTargets.has(key) || !isRequired(target),
      `${prefix}, but its ${field} does not map to ${noun} "${key}", which ${targetApiName} requires. Map ${sourceApiName}'s corresponding ${noun} to it, so that automatically-generated changes produce a valid implementation.`,
    );
  }
}

function normalizedTypeOf(
  property: InterfacePropertyType,
): NormalizedPropertyType {
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
