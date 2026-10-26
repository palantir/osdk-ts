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
  InterfaceTypeReplacement as WireInterfaceTypeReplacement,
  InterfaceTypeSchemaMigrationBlockData,
  InterfaceTypeSchemaMigrationInstruction,
  InterfaceTypeSchemaTransition,
} from "@osdk/client.unstable";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceType,
  InterfaceTypeReplacement,
  OntologyDefinition,
  ResolvedInterfaceMember,
  ResolvedInterfaceProperty,
  ResolvedInterfaceTypeReplacement,
} from "@osdk/maker";
import {
  addNamespaceIfNone,
  convertInterfaceSchemaGracePeriod,
  getImportedTypes,
  getOntologyDefinition,
  interfacePropertyWireApiName,
  isInterfaceSharedPropertyType,
  OntologyEntityTypeEnum,
  resolveInterfaceTypeReplacementApiNames,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { interfacePropertyWireRid } from "./convertInterfacePropertyType.js";

export function convertInterfaceSchemaMigrations(
  interfaceType: InterfaceType,
  ridGenerator: OntologyRidGenerator,
): InterfaceTypeSchemaMigrationBlockData | undefined {
  const { schemaMigrations } = interfaceType;
  if (schemaMigrations === undefined) {
    return undefined;
  }

  const references = new WireReferences(ridGenerator);
  const schemaTransitions = Object.fromEntries(
    schemaMigrations.transitions.map(
      (transition): [string, InterfaceTypeSchemaTransition] => {
        const rid = ridGenerator.generateRidForInterfaceSchemaTransition(
          transition.id,
          interfaceType.apiName,
        );
        return [
          rid,
          {
            rid,
            id: transition.id,
            title: transition.title,
            description: transition.description,
            gracePeriod: convertInterfaceSchemaGracePeriod(
              transition.gracePeriod,
            ),
            migrations: transition.instructions.map((instruction) =>
              convertInstruction(instruction, interfaceType, references),
            ),
          },
        ];
      },
    ),
  );

  return { ...references.ridsToApiNames, schemaTransitions };
}

type RidsToApiNames = Omit<
  InterfaceTypeSchemaMigrationBlockData,
  "schemaTransitions"
>;

/**
 * Generates the rids the migrations reference, recording each one's API name for the block data.
 */
class WireReferences {
  readonly ridsToApiNames: RidsToApiNames = {
    interfaceActionTypeConstraintRidsToApiNames: {},
    interfaceLinkTypeRidsToApiNames: {},
    interfaceParameterConstraintRidsToApiNames: {},
    interfacePropertyTypeRidsToApiNames: {},
    interfaceTypeRidsToApiNames: {},
  };

  constructor(private readonly ridGenerator: OntologyRidGenerator) {}

  property({
    apiName,
    authoredKey,
    interfaceTypeApiName,
    property,
  }: ResolvedInterfaceProperty): string {
    // Without a definition the property can't be known to be SPT-backed, so it's assumed to be
    // interface-defined.
    const rid =
      property !== undefined
        ? interfacePropertyWireRid(
            property,
            authoredKey,
            interfaceTypeApiName,
            this.ridGenerator,
          )
        : this.ridGenerator.generateInterfacePropertyTypeRid(
            authoredKey,
            interfaceTypeApiName,
          );
    this.ridsToApiNames.interfacePropertyTypeRidsToApiNames[rid] = apiName;
    return rid;
  }

  actionTypeConstraint({
    apiName,
    interfaceTypeApiName,
  }: ResolvedInterfaceMember): string {
    const rid = this.ridGenerator.generateRidForInterfaceActionTypeConstraint(
      apiName,
      interfaceTypeApiName,
    );
    this.ridsToApiNames.interfaceActionTypeConstraintRidsToApiNames[rid] =
      apiName;
    return rid;
  }

  /** Parameter API names are scoped to `actionTypeConstraint`, which keys their rids. */
  parameterConstraint(
    { apiName, interfaceTypeApiName }: ResolvedInterfaceMember,
    parameterApiName: string,
  ): string {
    const rid = this.ridGenerator.generateRidForInterfaceParameterConstraint(
      apiName,
      interfaceTypeApiName,
      parameterApiName,
    );
    this.ridsToApiNames.interfaceParameterConstraintRidsToApiNames[rid] =
      parameterApiName;
    return rid;
  }

  linkType({ apiName, interfaceTypeApiName }: ResolvedInterfaceMember): string {
    const rid = this.ridGenerator.generateRidForInterfaceLinkType(
      apiName,
      interfaceTypeApiName,
    );
    this.ridsToApiNames.interfaceLinkTypeRidsToApiNames[rid] = apiName;
    return rid;
  }

  interfaceType(apiName: string): string {
    const rid = this.ridGenerator.generateRidForInterface(apiName);
    this.ridsToApiNames.interfaceTypeRidsToApiNames[rid] = apiName;
    return rid;
  }
}

function convertInstruction(
  instruction: InterfaceSchemaMigrationInstruction,
  interfaceType: InterfaceType,
  references: WireReferences,
): InterfaceTypeSchemaMigrationInstruction {
  switch (instruction.type) {
    case "addRequiredProperty": {
      const property = interfaceType.propertiesV3[instruction.property];
      return {
        type: "addRequiredProperty",
        addRequiredProperty: {
          propertyTypeRid: references.property({
            apiName: interfacePropertyWireApiName(
              property,
              instruction.property,
            ),
            interfaceTypeApiName: interfaceType.apiName,
            authoredKey: instruction.property,
            property,
          }),
        },
      };
    }
    case "addRequiredActionTypeConstraint":
      return {
        type: "addRequiredActionTypeConstraint",
        addRequiredActionTypeConstraint: {
          // Validation requires the constraint to be declared directly by this interface type
          actionTypeConstraintRid: references.actionTypeConstraint({
            apiName: addNamespaceIfNone(instruction.actionTypeConstraint),
            interfaceTypeApiName: interfaceType.apiName,
          }),
        },
      };
    case "replace":
      return {
        type: "replace",
        replace: {
          replacement: convertReplacement(
            interfaceType,
            instruction.replacement,
            references,
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
  interfaceType: InterfaceType,
  replacement: InterfaceTypeReplacement,
  references: WireReferences,
): WireInterfaceTypeReplacement {
  const resolved = resolveInterfaceTypeReplacementApiNames(
    interfaceType,
    replacement,
  );
  assertReplacementHasBlockShapes(interfaceType, resolved);
  return {
    interfaceTypeRid: references.interfaceType(resolved.interfaceTypeApiName),
    propertyMappings: Object.fromEntries(
      resolved.propertyMappings.map(({ from, to }) => [
        references.property(from),
        references.property(to),
      ]),
    ),
    linkTypeConstraintMappings: Object.fromEntries(
      resolved.linkTypeConstraintMappings.map(({ from, to }) => [
        references.linkType(from),
        references.linkType(to),
      ]),
    ),
    actionTypeConstraintMappings: Object.fromEntries(
      resolved.actionTypeConstraintMappings.map(
        ({ from, to, parameterMappings }) => [
          references.actionTypeConstraint(from),
          {
            actionTypeConstraintRid: references.actionTypeConstraint(to),
            parameterMappings: Object.fromEntries(
              Object.entries(parameterMappings).map(
                ([fromParameter, toParameter]) => [
                  references.parameterConstraint(from, fromParameter),
                  references.parameterConstraint(to, toParameter),
                ],
              ),
            ),
          },
        ],
      ),
    ),
  };
}

/**
 * A locally defined interface type's replacement must resolve to block shapes: outputs when it is
 * defined locally too, the inputs `ImportedShapeExtractor` emits when it is imported. An interface
 * type known only by API name has neither, and no definition to derive input shapes from.
 */
function assertReplacementHasBlockShapes(
  interfaceType: InterfaceType,
  resolved: ResolvedInterfaceTypeReplacement,
): void {
  const local = getOntologyDefinition();
  const isDefinedIn = (ontology: OntologyDefinition, apiName: string) =>
    Object.hasOwn(ontology[OntologyEntityTypeEnum.INTERFACE_TYPE], apiName);
  if (!isDefinedIn(local, interfaceType.apiName)) {
    return;
  }
  const { interfaceTypeApiName } = resolved;
  if (
    !isDefinedIn(local, interfaceTypeApiName) &&
    !isDefinedIn(getImportedTypes(), interfaceTypeApiName)
  ) {
    throw new Error(
      `Interface ${interfaceType.apiName} is being replaced by ${interfaceTypeApiName}, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.`,
    );
  }
  // Imported SPT-backed properties are represented only by their shared property type's input shape
  const importedSptBacked = resolved.propertyMappings.find(
    ({ to }) =>
      to.property !== undefined &&
      isInterfaceSharedPropertyType(to.property) &&
      !isDefinedIn(local, to.interfaceTypeApiName),
  );
  if (importedSptBacked !== undefined) {
    throw new Error(
      `Interface ${interfaceType.apiName} is being replaced by ${interfaceTypeApiName}, mapping property "${importedSptBacked.from.apiName}" to the SPT-backed property "${importedSptBacked.to.apiName}" of imported interface ${importedSptBacked.to.interfaceTypeApiName}. Mapping to imported SPT-backed properties is not supported yet, because they have no interface property type input shape to reference.`,
    );
  }
}
