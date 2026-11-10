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
  OntologyIrExistingObjectEditRequirement,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
  OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  OntologyIrInterfaceLinkRequirement,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";

import { convertEditsValidationToIr } from "../interface/convertEditsValidationToIr.js";
import type {
  ExistingObjectEditRequirementDefinition,
  InterfaceActionTypeEditsValidationConditionDefinition,
  InterfaceActionTypeEditsValidationDefinition,
  InterfaceActionTypeEditsValidationSubjectDefinition,
  InterfaceLinkRequirementDefinition,
} from "../interface/InterfaceActionTypeEditsValidationDefinition.js";

const INTERFACE_API_NAME = "com.palantir.Task";
const CONSTRAINT_API_NAME = "com.palantir.editTask";

interface SubjectCase {
  subject: InterfaceActionTypeEditsValidationSubjectDefinition;
  expected: OntologyIrInterfaceActionTypeEditsValidationConditionSubject;
}

describe("convertEditsValidationToIr", () => {
  it.each(Object.entries(subjectCases()))(
    "converts %s to IR without changing the input",
    (_name, { subject, expected }) => {
      const authored: InterfaceActionTypeEditsValidationDefinition = {
        condition: entry("rule", subject),
      };
      const original = structuredClone(authored);
      expect(
        convertEditsValidationToIr(
          authored,
          INTERFACE_API_NAME,
          CONSTRAINT_API_NAME,
        ),
      ).toEqual({ condition: irEntry(expected) });
      expect(authored).toEqual(original);
    },
  );

  it("converts nested conditions and preserves their order", () => {
    const cases = subjectCases();
    const authored: InterfaceActionTypeEditsValidationDefinition = {
      condition: {
        type: "and",
        and: {
          conditions: [
            entry("link", cases.linkCreate.subject),
            {
              type: "and",
              and: {
                conditions: [
                  entry("object", cases.concreteObjectModify.subject),
                  entry("interface", cases.interfaceObjectDelete.subject),
                ],
              },
            },
          ],
        },
      },
    };
    const original = structuredClone(authored);
    expect(
      convertEditsValidationToIr(
        authored,
        INTERFACE_API_NAME,
        CONSTRAINT_API_NAME,
      ),
    ).toEqual({
      condition: {
        type: "and",
        and: {
          conditions: [
            irEntry(cases.linkCreate.expected),
            {
              type: "and",
              and: {
                conditions: [
                  irEntry(cases.concreteObjectModify.expected),
                  irEntry(cases.interfaceObjectDelete.expected),
                ],
              },
            },
          ],
        },
      },
    });
    expect(authored).toEqual(original);
  });

  it("rejects an unknown condition", () => {
    const authored = {
      condition: { type: "futureCondition" },
    } as unknown as InterfaceActionTypeEditsValidationDefinition;
    expect(() =>
      convertEditsValidationToIr(
        authored,
        INTERFACE_API_NAME,
        CONSTRAINT_API_NAME,
      ),
    ).toThrow("Unsupported edit validation variant");
  });

  it.each(Object.entries(unknownSubjectCases()))(
    "rejects an unknown %s",
    (_name, subject) => {
      const authored = {
        condition: { type: "entry", entry: { id: "rule", subject } },
      } as unknown as InterfaceActionTypeEditsValidationDefinition;
      expect(() =>
        convertEditsValidationToIr(
          authored,
          INTERFACE_API_NAME,
          CONSTRAINT_API_NAME,
        ),
      ).toThrow("Unsupported edit validation variant");
    },
  );
});

function entry(
  id: string,
  subject: InterfaceActionTypeEditsValidationSubjectDefinition,
): InterfaceActionTypeEditsValidationConditionDefinition {
  return { type: "entry", entry: { id, subject } };
}

function irEntry(
  subject: OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
): OntologyIrInterfaceActionTypeEditsValidationCondition {
  return { type: "entry", entry: { rid: expect.any(String), subject } };
}

function subjectCases(): Record<string, SubjectCase> {
  const fromParameters: ExistingObjectEditRequirementDefinition = {
    type: "objectsFromParameterRequirement",
    objectsFromParameterRequirement: {
      interfaceParameterConstraintApiNames: ["source", "secondary"],
    },
  };
  const irFromParameters: OntologyIrExistingObjectEditRequirement = {
    type: "objectsFromParameterRequirement",
    objectsFromParameterRequirement: {
      interfaceParameterConstraintRids: ["source", "secondary"],
    },
  };
  const anyObject: ExistingObjectEditRequirementDefinition = {
    type: "anyObjectOfType",
    anyObjectOfType: {},
  };
  const linkCreation: InterfaceLinkRequirementDefinition = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeApiName: "com.palantir.relatedTasks",
      interfaceLinkedObjectRequirement: {
        type: "interfaceParameterConstraintApiName",
        interfaceParameterConstraintApiName: "target",
      },
    },
  };
  const irLinkCreation: OntologyIrInterfaceLinkRequirement = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeRid: "com.palantir.relatedTasks",
      interfaceLinkedObjectRequirement: {
        type: "interfaceParameterConstraintRid",
        interfaceParameterConstraintRid: "target",
      },
    },
  };
  const linkDeletion: InterfaceLinkRequirementDefinition = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeApiName: "com.palantir.previousTask",
      interfaceLinkedObjectRequirement: {
        type: "anyCompatibleObject",
        anyCompatibleObject: {},
      },
    },
  };
  const irLinkDeletion: OntologyIrInterfaceLinkRequirement = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeRid: "com.palantir.previousTask",
      interfaceLinkedObjectRequirement: {
        type: "anyCompatibleObject",
        anyCompatibleObject: {},
      },
    },
  };
  return {
    concreteObjectCreate: {
      subject: {
        type: "concreteObject",
        concreteObject: {
          objectType: "com.palantir.TaskObject",
          operation: { type: "create", create: {} },
        },
      },
      expected: {
        type: "concreteObject",
        concreteObject: {
          rid: "com.palantir.TaskObject",
          operation: { type: "create", create: {} },
        },
      },
    },
    concreteObjectModify: {
      subject: {
        type: "concreteObject",
        concreteObject: {
          objectType: "com.palantir.TaskObject",
          operation: {
            type: "modify",
            modify: { editRequirement: fromParameters },
          },
        },
      },
      expected: {
        type: "concreteObject",
        concreteObject: {
          rid: "com.palantir.TaskObject",
          operation: {
            type: "modify",
            modify: { editRequirement: irFromParameters },
          },
        },
      },
    },
    concreteObjectDelete: {
      subject: {
        type: "concreteObject",
        concreteObject: {
          objectType: "com.palantir.TaskObject",
          operation: { type: "delete", delete: { editRequirement: anyObject } },
        },
      },
      expected: {
        type: "concreteObject",
        concreteObject: {
          rid: "com.palantir.TaskObject",
          operation: {
            type: "delete",
            delete: {
              editRequirement: { type: "anyObjectOfType", anyObjectOfType: {} },
            },
          },
        },
      },
    },
    interfaceObjectCreate: {
      subject: {
        type: "interfaceObject",
        interfaceObject: {
          interfaceType: "com.palantir.Task",
          operation: { type: "create", create: {} },
        },
      },
      expected: {
        type: "interfaceObject",
        interfaceObject: {
          rid: "com.palantir.Task",
          operation: { type: "create", create: {} },
        },
      },
    },
    interfaceObjectModify: {
      subject: {
        type: "interfaceObject",
        interfaceObject: {
          interfaceType: "com.palantir.Task",
          operation: { type: "modify", modify: { editRequirement: anyObject } },
        },
      },
      expected: {
        type: "interfaceObject",
        interfaceObject: {
          rid: "com.palantir.Task",
          operation: {
            type: "modify",
            modify: {
              editRequirement: { type: "anyObjectOfType", anyObjectOfType: {} },
            },
          },
        },
      },
    },
    interfaceObjectDelete: {
      subject: {
        type: "interfaceObject",
        interfaceObject: {
          interfaceType: "com.palantir.Task",
          operation: {
            type: "delete",
            delete: { editRequirement: fromParameters },
          },
        },
      },
      expected: {
        type: "interfaceObject",
        interfaceObject: {
          rid: "com.palantir.Task",
          operation: {
            type: "delete",
            delete: { editRequirement: irFromParameters },
          },
        },
      },
    },
    implementingObjectCreate: {
      subject: {
        type: "implementingObject",
        implementingObject: {
          type: "create",
          create: {
            requiredInterfaceLinkCreations: [linkCreation, linkDeletion],
          },
        },
      },
      expected: {
        type: "implementingObject",
        implementingObject: {
          type: "create",
          create: {
            requiredInterfaceLinkCreations: [irLinkCreation, irLinkDeletion],
          },
        },
      },
    },
    implementingObjectModify: {
      subject: {
        type: "implementingObject",
        implementingObject: {
          type: "modify",
          modify: {
            editRequirement: fromParameters,
            requiredInterfaceLinkCreations: [linkCreation],
            requiredInterfaceLinkDeletions: [linkDeletion],
          },
        },
      },
      expected: {
        type: "implementingObject",
        implementingObject: {
          type: "modify",
          modify: {
            editRequirement: irFromParameters,
            requiredInterfaceLinkCreations: [irLinkCreation],
            requiredInterfaceLinkDeletions: [irLinkDeletion],
          },
        },
      },
    },
    implementingObjectDelete: {
      subject: {
        type: "implementingObject",
        implementingObject: {
          type: "delete",
          delete: {
            editRequirement: fromParameters,
            requiredInterfaceLinkDeletions: [linkDeletion, linkCreation],
          },
        },
      },
      expected: {
        type: "implementingObject",
        implementingObject: {
          type: "delete",
          delete: {
            editRequirement: irFromParameters,
            requiredInterfaceLinkDeletions: [irLinkDeletion, irLinkCreation],
          },
        },
      },
    },
    linkCreate: {
      subject: {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          type: "create",
          create: {
            interfaceLinkTypeApiName: "com.palantir.relatedTasks",
            source: {
              type: "interfaceParameterConstraintApiName",
              interfaceParameterConstraintApiName: "source",
            },
            target: {
              type: "interfaceParameterConstraintApiName",
              interfaceParameterConstraintApiName: "target",
            },
          },
        },
      },
      expected: {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          type: "create",
          create: {
            interfaceLinkTypeRid: "com.palantir.relatedTasks",
            source: {
              type: "interfaceParameterConstraintRid",
              interfaceParameterConstraintRid: "source",
            },
            target: {
              type: "interfaceParameterConstraintRid",
              interfaceParameterConstraintRid: "target",
            },
          },
        },
      },
    },
    linkDelete: {
      subject: {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          type: "delete",
          delete: {
            interfaceLinkTypeApiName: "com.palantir.previousTask",
            source: { type: "anyCompatibleObject", anyCompatibleObject: {} },
            target: {
              type: "interfaceParameterConstraintApiName",
              interfaceParameterConstraintApiName: "target",
            },
          },
        },
      },
      expected: {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          type: "delete",
          delete: {
            interfaceLinkTypeRid: "com.palantir.previousTask",
            source: { type: "anyCompatibleObject", anyCompatibleObject: {} },
            target: {
              type: "interfaceParameterConstraintRid",
              interfaceParameterConstraintRid: "target",
            },
          },
        },
      },
    },
  };
}

function unknownSubjectCases(): Record<string, unknown> {
  const unknown = { type: "futureVariant" };
  return {
    objectOperation: {
      type: "concreteObject",
      concreteObject: {
        objectType: "com.palantir.TaskObject",
        operation: unknown,
      },
    },
    implementingObjectOperation: {
      type: "implementingObject",
      implementingObject: unknown,
    },
    linkOperation: {
      type: "implementingObjectInterfaceLink",
      implementingObjectInterfaceLink: unknown,
    },
    editRequirement: {
      type: "concreteObject",
      concreteObject: {
        objectType: "com.palantir.TaskObject",
        operation: { type: "modify", modify: { editRequirement: unknown } },
      },
    },
    nestedLinkRequirement: {
      type: "implementingObject",
      implementingObject: {
        type: "create",
        create: { requiredInterfaceLinkCreations: [unknown] },
      },
    },
    linkEndpoint: {
      type: "implementingObjectInterfaceLink",
      implementingObjectInterfaceLink: {
        type: "create",
        create: {
          interfaceLinkTypeApiName: "com.palantir.relatedTasks",
          source: unknown,
          target: { type: "anyCompatibleObject", anyCompatibleObject: {} },
        },
      },
    },
  };
}
