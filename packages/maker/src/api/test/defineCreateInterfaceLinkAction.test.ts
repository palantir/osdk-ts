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

import { beforeEach, describe, expect, it } from "vitest";

import { defineCreateInterfaceLinkAction } from "../defineCreateInterfaceLinkAction.js";
import { defineDeleteInterfaceLinkAction } from "../defineDeleteInterfaceLinkAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";

describe("defineCreateInterfaceLinkAction", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("defineInterfaceLinkConstraint returns a handle describing the constraint", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    const handle = defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });
    expect(handle.apiName).toBe("com.palantir.employer");
    expect(handle.cardinality).toBe("SINGLE");
    expect(handle.from).toBe(person);
  });

  it("creates a SINGLE interface-link action derived from the ILC", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
    });

    const actionTypes = dumpOntologyFullMetadata().ontology.actionTypes;
    expect(Object.keys(actionTypes)).toContain(
      "com.palantir.link-person-employer"
    );
    const actionType =
      actionTypes["com.palantir.link-person-employer"].actionType;
    expect(actionType).toMatchInlineSnapshot(`
      {
        "actionTypeLogic": {
          "logic": {
            "rules": [
              {
                "addInterfaceLinkRuleV2": {
                  "interfaceLinkTypeRid": "com.palantir.employer",
                  "interfaceTypeRid": "com.palantir.Person",
                  "sourceObjects": [
                    {
                      "existingObject": "source",
                      "type": "existingObject",
                    },
                  ],
                  "targetObjects": [
                    {
                      "existingObject": "target",
                      "type": "existingObject",
                    },
                  ],
                },
                "type": "addInterfaceLinkRuleV2",
              },
            ],
          },
          "validation": {
            "actionTypeLevelValidation": {
              "rules": {
                "0": {
                  "condition": {
                    "true": {},
                    "type": "true",
                  },
                  "displayMetadata": {
                    "failureMessage": "",
                    "typeClasses": [],
                  },
                },
              },
            },
            "parameterValidations": {
              "source": {
                "conditionalOverrides": [],
                "defaultValidation": {
                  "display": {
                    "renderHint": {
                      "dropdown": {},
                      "type": "dropdown",
                    },
                    "visibility": {
                      "editable": {},
                      "type": "editable",
                    },
                  },
                  "validation": {
                    "allowedValues": {
                      "interfaceObjectQuery": {
                        "interfaceObjectQuery": {},
                        "type": "interfaceObjectQuery",
                      },
                      "type": "interfaceObjectQuery",
                    },
                    "required": {
                      "required": {},
                      "type": "required",
                    },
                  },
                },
              },
              "target": {
                "conditionalOverrides": [],
                "defaultValidation": {
                  "display": {
                    "renderHint": {
                      "dropdown": {},
                      "type": "dropdown",
                    },
                    "visibility": {
                      "editable": {},
                      "type": "editable",
                    },
                  },
                  "validation": {
                    "allowedValues": {
                      "interfaceObjectQuery": {
                        "interfaceObjectQuery": {},
                        "type": "interfaceObjectQuery",
                      },
                      "type": "interfaceObjectQuery",
                    },
                    "required": {
                      "required": {},
                      "type": "required",
                    },
                  },
                },
              },
            },
            "sectionValidations": {},
          },
        },
        "metadata": {
          "apiName": "com.palantir.link-person-employer",
          "displayMetadata": {
            "applyingMessage": [],
            "configuration": {
              "defaultLayout": "FORM",
              "displayAndFormat": {
                "table": {
                  "columnWidthByParameterRid": {},
                  "enableFileImport": true,
                  "fitHorizontally": false,
                  "frozenColumnCount": 0,
                  "rowHeightInLines": 1,
                },
              },
              "enableLayoutUserSwitch": false,
            },
            "description": "",
            "displayName": "Link Person",
            "icon": {
              "blueprint": {
                "color": "#000000",
                "locator": "edit",
              },
              "type": "blueprint",
            },
            "successMessage": [],
            "typeClasses": [],
          },
          "entities": {
            "affectedInterfaceTypes": [
              "com.palantir.Person",
              "com.palantir.Company",
            ],
            "affectedLinkTypes": [],
            "affectedObjectTypes": [],
            "typeGroups": [],
          },
          "formContentOrdering": [],
          "parameterOrdering": [
            "source",
            "target",
          ],
          "parameters": {
            "source": {
              "displayMetadata": {
                "description": "",
                "displayName": "Person",
                "typeClasses": [],
              },
              "id": "source",
              "type": {
                "interfaceReference": {
                  "interfaceTypeRid": "com.palantir.Person",
                },
                "type": "interfaceReference",
              },
            },
            "target": {
              "displayMetadata": {
                "description": "",
                "displayName": "Company",
                "typeClasses": [],
              },
              "id": "target",
              "type": {
                "interfaceReference": {
                  "interfaceTypeRid": "com.palantir.Company",
                },
                "type": "interfaceReference",
              },
            },
          },
          "sections": {},
          "status": {
            "active": {},
            "type": "active",
          },
        },
      }
    `);
  });

  it("accepts an InterfaceLinkConstraint handle for interfaceLink", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    const employer = defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineCreateInterfaceLinkAction({ interfaceLink: employer });

    const actionType =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.link-person-employer"
      ].actionType; // "person" in the default apiName proves from was derived
    const rule = actionType.actionTypeLogic.logic.rules[0];
    if (rule.type !== "addInterfaceLinkRuleV2") {
      throw new Error("expected addInterfaceLinkRuleV2");
    }
    expect(rule.addInterfaceLinkRuleV2.interfaceTypeRid).toBe(
      "com.palantir.Person"
    );
    expect(rule.addInterfaceLinkRuleV2.interfaceLinkTypeRid).toBe(
      "com.palantir.employer"
    );
    const sourceParam = actionType.metadata.parameters.source;
    if (sourceParam.type.type !== "interfaceReference") {
      throw new Error("expected interfaceReference");
    }
    expect(sourceParam.type.interfaceReference.interfaceTypeRid).toBe(
      "com.palantir.Person"
    );
  });

  it("respects apiName and parameter overrides", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
      apiName: "link-person-to-employer",
      sourceParameter: { id: "sourcePerson", displayName: "Person" },
      targetParameter: { id: "targetCompany", displayName: "Company" },
    });

    const actionTypes = dumpOntologyFullMetadata().ontology.actionTypes;
    expect(Object.keys(actionTypes)).toContain(
      "com.palantir.link-person-to-employer"
    );
    const rule =
      actionTypes["com.palantir.link-person-to-employer"].actionType
        .actionTypeLogic.logic.rules[0];
    expect(rule.type).toBe("addInterfaceLinkRuleV2");
    if (rule.type !== "addInterfaceLinkRuleV2") {
      throw new Error("Expected an addInterfaceLinkRuleV2 rule");
    }
    const sourceObject = rule.addInterfaceLinkRuleV2.sourceObjects[0];
    const targetObject = rule.addInterfaceLinkRuleV2.targetObjects[0];
    if (
      sourceObject.type !== "existingObject" ||
      targetObject.type !== "existingObject"
    ) {
      throw new Error("Expected existingObject references");
    }
    expect(sourceObject.existingObject).toBe("sourcePerson");
    expect(targetObject.existingObject).toBe("targetCompany");
    expect(rule.addInterfaceLinkRuleV2.interfaceTypeRid).toBe(
      "com.palantir.Person"
    );
    expect(rule.addInterfaceLinkRuleV2.interfaceLinkTypeRid).toBe(
      "com.palantir.employer"
    );
  });

  it("uses an interfaceReferenceList target for MANY cardinality", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employers",
      from: person,
      toMany: company,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employers",
    });

    const actionType =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.link-person-employers"
      ].actionType;
    const params = actionType.metadata.parameters;
    const targetParam = params.target;
    expect(targetParam.type.type).toBe("interfaceReferenceList");
    if (targetParam.type.type !== "interfaceReferenceList") {
      throw new Error("expected interfaceReferenceList");
    }
    expect(targetParam.type.interfaceReferenceList.interfaceTypeRid).toBe(
      "com.palantir.Company"
    );
    // source stays single
    expect(params.source.type.type).toBe("interfaceReference");
  });

  it("emits listLengthValidation for a MANY (list-type) target", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employers",
      from: person,
      toMany: company,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employers",
    });

    const validations =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.link-person-employers"
      ].actionType.actionTypeLogic.validation.parameterValidations;

    // A list-type parameter must use listLengthValidation, not scalar required.
    expect(validations.target.defaultValidation.validation.required).toEqual({
      type: "listLengthValidation",
      listLengthValidation: { minLength: 1, maxLength: undefined },
    });

    // The singular source stays a scalar required configuration.
    expect(validations.source.defaultValidation.validation.required).toEqual({
      type: "required",
      required: {},
    });
  });

  it("propagates required: false on a MANY target as an unconstrained list", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employers",
      from: person,
      toMany: company,
      required: false,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employers",
    });

    const validations =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.link-person-employers"
      ].actionType.actionTypeLogic.validation.parameterValidations;

    expect(validations.target.defaultValidation.validation.required).toEqual({
      type: "listLengthValidation",
      listLengthValidation: { minLength: undefined, maxLength: undefined },
    });
  });

  it("propagates required: false on a SINGLE target as notRequired", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
      required: false,
    });

    defineCreateInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
    });

    const validations =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.link-person-employer"
      ].actionType.actionTypeLogic.validation.parameterValidations;

    expect(validations.target.defaultValidation.validation.required).toEqual({
      type: "notRequired",
      notRequired: {},
    });
  });

  it("throws when the ILC does not exist on the from interface", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });

    expect(() =>
      defineCreateInterfaceLinkAction({
        from: person,
        interfaceLink: "employer",
      })
    ).toThrow(/Interface link constraint "employer" not found on interface/);
  });

  it("throws when the ILC target interface is not defined", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    // ILC target is a bare string that is not a defined interface
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: "NonExistentCompany",
    });

    expect(() =>
      defineCreateInterfaceLinkAction({
        from: person,
        interfaceLink: "employer",
      })
    ).toThrow(/Target interface .* is not defined/);
  });

  it("throws when an explicit from does not match the handle's interface", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    const other = defineInterface({
      apiName: "Other",
      displayName: "Other",
      properties: {},
    });
    const employer = defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    expect(() =>
      defineCreateInterfaceLinkAction({ from: other, interfaceLink: employer })
    ).toThrow(/does not match/);
  });

  it("throws when interfaceLink is a string and from is omitted", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    expect(() =>
      // @ts-expect-error "from" is required when interfaceLink is a string
      defineCreateInterfaceLinkAction({ interfaceLink: "employer" })
    ).toThrow(/"from" is required/);
  });
});

describe("defineDeleteInterfaceLinkAction", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("creates a SINGLE interface-link delete action with singular params", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineDeleteInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
    });

    const actionTypes = dumpOntologyFullMetadata().ontology.actionTypes;
    expect(Object.keys(actionTypes)).toContain(
      "com.palantir.delete-interface-link-person-employer"
    );
    const actionType =
      actionTypes["com.palantir.delete-interface-link-person-employer"]
        .actionType;

    // default display name
    expect(actionType.metadata.displayMetadata.displayName).toBe(
      "Delete Person link"
    );

    // singular params on both sides
    const params = actionType.metadata.parameters;
    expect(params.source.type.type).toBe("interfaceReference");
    expect(params.target.type.type).toBe("interfaceReference");

    // scalar required validation (no list-length)
    const validations =
      actionType.actionTypeLogic.validation.parameterValidations;
    expect(validations.target.defaultValidation.validation.required).toEqual({
      type: "required",
      required: {},
    });

    // deleteInterfaceLinkRule with singular sourceObject/targetObject
    const rule = actionType.actionTypeLogic.logic.rules[0];
    if (rule.type !== "deleteInterfaceLinkRule") {
      throw new Error("expected deleteInterfaceLinkRule");
    }
    expect(rule.deleteInterfaceLinkRule).toEqual({
      interfaceTypeRid: "com.palantir.Person",
      interfaceLinkTypeRid: "com.palantir.employer",
      sourceObject: "source",
      targetObject: "target",
    });
  });

  it("uses a singular target even for MANY cardinality", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employers",
      from: person,
      toMany: company,
    });

    defineDeleteInterfaceLinkAction({
      from: person,
      interfaceLink: "employers",
    });

    const actionType =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.delete-interface-link-person-employers"
      ].actionType;
    const params = actionType.metadata.parameters;

    // delete operates on a single link instance, so the target is NOT a list
    expect(params.target.type.type).toBe("interfaceReference");
    expect(params.source.type.type).toBe("interfaceReference");
    expect(
      actionType.actionTypeLogic.validation.parameterValidations.target
        .defaultValidation.validation.required
    ).toEqual({ type: "required", required: {} });
  });

  it("respects apiName and parameter overrides", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineDeleteInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
      apiName: "unlink-person-from-employer",
      sourceParameter: { id: "sourcePerson" },
      targetParameter: { id: "targetCompany" },
    });

    const actionTypes = dumpOntologyFullMetadata().ontology.actionTypes;
    expect(Object.keys(actionTypes)).toContain(
      "com.palantir.unlink-person-from-employer"
    );
    const rule =
      actionTypes["com.palantir.unlink-person-from-employer"].actionType
        .actionTypeLogic.logic.rules[0];
    if (rule.type !== "deleteInterfaceLinkRule") {
      throw new Error("expected deleteInterfaceLinkRule");
    }
    expect(rule.deleteInterfaceLinkRule.sourceObject).toBe("sourcePerson");
    expect(rule.deleteInterfaceLinkRule.targetObject).toBe("targetCompany");
  });

  it("accepts an InterfaceLinkConstraint handle and derives from", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    const employer = defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineDeleteInterfaceLinkAction({ interfaceLink: employer });

    const rule =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.delete-interface-link-person-employer"
      ].actionType.actionTypeLogic.logic.rules[0];
    if (rule.type !== "deleteInterfaceLinkRule") {
      throw new Error("expected deleteInterfaceLinkRule");
    }
    expect(rule.deleteInterfaceLinkRule.interfaceTypeRid).toBe(
      "com.palantir.Person"
    );
  });

  it("throws when interfaceLink is a string and from is omitted", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    expect(() =>
      // @ts-expect-error "from" is required when interfaceLink is a string
      defineDeleteInterfaceLinkAction({ interfaceLink: "employer" })
    ).toThrow(/"from" is required/);
  });

  it("throws when source and target parameter ids collide", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    expect(() =>
      defineDeleteInterfaceLinkAction({
        from: person,
        interfaceLink: "employer",
        sourceParameter: { id: "shared" },
        targetParameter: { id: "shared" },
      })
    ).toThrow(/must differ/);
  });

  it("threads custom display metadata and status through", () => {
    const person = defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties: {},
    });
    const company = defineInterface({
      apiName: "Company",
      displayName: "Company",
      properties: {},
    });
    defineInterfaceLinkConstraint({
      apiName: "employer",
      from: person,
      toOne: company,
    });

    defineDeleteInterfaceLinkAction({
      from: person,
      interfaceLink: "employer",
      displayName: "Remove employer",
      status: "experimental",
      sourceParameter: { id: "src", displayName: "The person" },
      targetParameter: { id: "tgt", displayName: "The employer" },
      icon: { locator: "trash", color: "#FF0000" },
    });

    const actionType =
      dumpOntologyFullMetadata().ontology.actionTypes[
        "com.palantir.delete-interface-link-person-employer"
      ].actionType;
    const meta = actionType.metadata;

    expect(meta.displayMetadata.displayName).toBe("Remove employer");
    expect(meta.status.type).toBe("experimental");
    expect(meta.displayMetadata.icon).toEqual({
      type: "blueprint",
      blueprint: { locator: "trash", color: "#FF0000" },
    });
    expect(meta.parameters.src.displayMetadata.displayName).toBe("The person");
    expect(meta.parameters.tgt.displayMetadata.displayName).toBe(
      "The employer"
    );
  });
});
