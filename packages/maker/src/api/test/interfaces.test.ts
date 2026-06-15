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
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";

describe("Interfaces", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("doesn't let you define the same interface twice", () => {
    defineInterface({ apiName: "Foo" });
    expect(() => {
      defineInterface({ apiName: "Foo" });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Interface com.palantir.Foo already exists]`,
    );
  });

  it("defaults displayName to apiName", () => {
    const result = defineInterface({ apiName: "Foo" });
    expect(result.displayMetadata.displayName).toBe("Foo");
  });

  it("defaults description to displayName", () => {
    const result = defineInterface({ apiName: "Foo", displayName: "d" });
    expect(result.displayMetadata.description).toBe("d");
  });

  it("defaults description to displayName to apiName", () => {
    const result = defineInterface({ apiName: "Foo" });
    expect(result.displayMetadata.description).toBe("Foo");
  });

  describe("Auto IDPs", () => {
    it("Auto creates IDPs", () => {
      defineInterface({
        apiName: "Foo",
        properties: {
          foo: { type: "string" },
        },
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.Foo": {
              "interfaceType": {
                "actionTypeConstraints": [],
                "apiName": "com.palantir.Foo",
                "displayMetadata": {
                  "description": "Foo",
                  "displayName": "Foo",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
                },
                "extendsInterfaces": [],
                "extendsInterfacesMetadata": [],
                "linkedInterfaces": [],
                "links": [],
                "permission": undefined,
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {
                  "foo": {
                    "interfaceDefinedPropertyType": {
                      "apiName": "foo",
                      "constraints": {
                        "dataConstraints": undefined,
                        "indexedForSearch": true,
                        "primaryKeyConstraint": "NO_RESTRICTION",
                        "requireImplementation": true,
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "foo",
                        "visibility": "NORMAL",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                    },
                    "type": "interfaceDefinedPropertyType",
                  },
                },
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        }
      `);
    });
  });

  describe("Interface properties", () => {
    it("IDPs and SPTs on the same interface", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
      });

      const iface = defineInterface({
        apiName: "bar",
        displayName: "Bar",
        properties: {
          "foo": { type: "boolean" },
          spt,
        },
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.bar": {
              "interfaceType": {
                "actionTypeConstraints": [],
                "apiName": "com.palantir.bar",
                "displayMetadata": {
                  "description": "Bar",
                  "displayName": "Bar",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
                },
                "extendsInterfaces": [],
                "extendsInterfacesMetadata": [],
                "linkedInterfaces": [],
                "links": [],
                "permission": undefined,
                "properties": [],
                "propertiesV2": {
                  "com.palantir.spt": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.spt",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "spt",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                },
                "propertiesV3": {
                  "com.palantir.spt": {
                    "sharedPropertyBasedPropertyType": {
                      "requireImplementation": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.spt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "spt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "type": "sharedPropertyBasedPropertyType",
                  },
                  "foo": {
                    "interfaceDefinedPropertyType": {
                      "apiName": "foo",
                      "constraints": {
                        "dataConstraints": undefined,
                        "indexedForSearch": true,
                        "primaryKeyConstraint": "NO_RESTRICTION",
                        "requireImplementation": true,
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "foo",
                        "visibility": "NORMAL",
                      },
                      "type": {
                        "boolean": {},
                        "type": "boolean",
                      },
                    },
                    "type": "interfaceDefinedPropertyType",
                  },
                },
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.spt": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.spt",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "spt",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
                "type": {
                  "string": {
                    "analyzerOverride": undefined,
                    "enableAsciiFolding": undefined,
                    "isLongText": false,
                    "supportsEfficientLeadingWildcard": false,
                    "supportsExactMatching": true,
                  },
                  "type": "string",
                },
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE",
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE",
                  },
                ],
                "valueType": undefined,
              },
            },
          },
        }
      `);
    });

    it("supports optional properties", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
      });
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          spt: { required: false, sharedPropertyType: spt },
          idp: { required: false, type: "string" },
        },
      });

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.parentInterface": {
              "interfaceType": {
                "actionTypeConstraints": [],
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
                },
                "extendsInterfaces": [],
                "extendsInterfacesMetadata": [],
                "linkedInterfaces": [],
                "links": [],
                "permission": undefined,
                "properties": [],
                "propertiesV2": {
                  "com.palantir.spt": {
                    "required": false,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.spt",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "spt",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                },
                "propertiesV3": {
                  "com.palantir.spt": {
                    "sharedPropertyBasedPropertyType": {
                      "requireImplementation": false,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.spt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "spt",
                          "visibility": "NORMAL",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "type": "sharedPropertyBasedPropertyType",
                  },
                  "idp": {
                    "interfaceDefinedPropertyType": {
                      "apiName": "idp",
                      "constraints": {
                        "dataConstraints": undefined,
                        "indexedForSearch": true,
                        "primaryKeyConstraint": "NO_RESTRICTION",
                        "requireImplementation": false,
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "idp",
                        "visibility": "NORMAL",
                      },
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": false,
                          "supportsEfficientLeadingWildcard": false,
                          "supportsExactMatching": true,
                        },
                        "type": "string",
                      },
                    },
                    "type": "interfaceDefinedPropertyType",
                  },
                },
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.spt": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.spt",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "spt",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
                "type": {
                  "string": {
                    "analyzerOverride": undefined,
                    "enableAsciiFolding": undefined,
                    "isLongText": false,
                    "supportsEfficientLeadingWildcard": false,
                    "supportsExactMatching": true,
                  },
                  "type": "string",
                },
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE",
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE",
                  },
                ],
                "valueType": undefined,
              },
            },
          },
        }
      `);
    });

    it("Struct IDPs", () => {
      const iface = defineInterface({
        apiName: "bar",
        displayName: "Bar",
        properties: {
          "struct": {
            type: {
              type: "struct",
              structDefinition: {
                field: {
                  fieldType: "string",
                  requireImplementation: true,
                  displayMetadata: {
                    displayName: "Field",
                  },
                },
                optional: "string",
              },
            },
          },
        },
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.bar": {
              "interfaceType": {
                "actionTypeConstraints": [],
                "apiName": "com.palantir.bar",
                "displayMetadata": {
                  "description": "Bar",
                  "displayName": "Bar",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
                },
                "extendsInterfaces": [],
                "extendsInterfacesMetadata": [],
                "linkedInterfaces": [],
                "links": [],
                "permission": undefined,
                "properties": [],
                "propertiesV2": {},
                "propertiesV3": {
                  "struct": {
                    "interfaceDefinedPropertyType": {
                      "apiName": "struct",
                      "constraints": {
                        "dataConstraints": undefined,
                        "indexedForSearch": true,
                        "primaryKeyConstraint": "NO_RESTRICTION",
                        "requireImplementation": true,
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "struct",
                        "visibility": "NORMAL",
                      },
                      "type": {
                        "struct": {
                          "structFields": [
                            {
                              "aliases": [],
                              "apiName": "field",
                              "displayMetadata": {
                                "displayName": "Field",
                              },
                              "fieldType": {
                                "string": {
                                  "analyzerOverride": undefined,
                                  "enableAsciiFolding": undefined,
                                  "isLongText": false,
                                  "supportsEfficientLeadingWildcard": false,
                                  "supportsExactMatching": true,
                                },
                                "type": "string",
                              },
                              "requireImplementation": true,
                              "typeClasses": [],
                            },
                            {
                              "aliases": [],
                              "apiName": "optional",
                              "displayMetadata": {
                                "description": undefined,
                                "displayName": "optional",
                              },
                              "fieldType": {
                                "string": {
                                  "analyzerOverride": undefined,
                                  "enableAsciiFolding": undefined,
                                  "isLongText": false,
                                  "supportsEfficientLeadingWildcard": false,
                                  "supportsExactMatching": true,
                                },
                                "type": "string",
                              },
                              "requireImplementation": true,
                              "typeClasses": [],
                            },
                          ],
                        },
                        "type": "struct",
                      },
                    },
                    "type": "interfaceDefinedPropertyType",
                  },
                },
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Complex interface properties", () => {
      const spt = defineSharedPropertyType({
        apiName: "spt",
        type: "string",
        array: true,
        description: "Description",
        displayName: "Display Name",
        visibility: "HIDDEN",
        nullability: {
          noEmptyCollections: true,
          noNulls: true,
        },
      });
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          spt: { required: false, sharedPropertyType: spt },
          idp: {
            required: false,
            type: "string",
            primaryKeyConstraint: "MUST_BE_PK",
            array: true,
            description: "Description",
            displayName: "Display Name",
            visibility: "HIDDEN",
            nullability: {
              noEmptyCollections: true,
              noNulls: true,
            },
          },
        },
      });

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "interfaceTypes": {},
            "linkTypes": {},
            "objectTypes": {},
            "sharedPropertyTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.parentInterface": {
              "interfaceType": {
                "actionTypeConstraints": [],
                "apiName": "com.palantir.parentInterface",
                "displayMetadata": {
                  "description": "parentInterface",
                  "displayName": "parentInterface",
                  "icon": {
                    "blueprint": {
                      "color": "#4C90F0",
                      "locator": "layout-hierarchy",
                    },
                    "type": "blueprint",
                  },
                },
                "extendsInterfaces": [],
                "extendsInterfacesMetadata": [],
                "linkedInterfaces": [],
                "links": [],
                "permission": undefined,
                "properties": [],
                "propertiesV2": {
                  "com.palantir.spt": {
                    "required": false,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.spt",
                      "baseFormatter": undefined,
                      "dataConstraints": {
                        "nullability": undefined,
                        "nullabilityV2": {
                          "noEmptyCollections": true,
                          "noNulls": true,
                        },
                        "propertyTypeConstraints": [],
                      },
                      "displayMetadata": {
                        "description": "Description",
                        "displayName": "Display Name",
                        "visibility": "HIDDEN",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
                      "type": {
                        "array": {
                          "reducers": [],
                          "subtype": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                        },
                        "type": "array",
                      },
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE",
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE",
                        },
                      ],
                      "valueType": undefined,
                    },
                  },
                },
                "propertiesV3": {
                  "com.palantir.spt": {
                    "sharedPropertyBasedPropertyType": {
                      "requireImplementation": false,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.spt",
                        "baseFormatter": undefined,
                        "dataConstraints": {
                          "nullability": undefined,
                          "nullabilityV2": {
                            "noEmptyCollections": true,
                            "noNulls": true,
                          },
                          "propertyTypeConstraints": [],
                        },
                        "displayMetadata": {
                          "description": "Description",
                          "displayName": "Display Name",
                          "visibility": "HIDDEN",
                        },
                        "gothamMapping": undefined,
                        "indexedForSearch": true,
                        "type": {
                          "array": {
                            "reducers": [],
                            "subtype": {
                              "string": {
                                "analyzerOverride": undefined,
                                "enableAsciiFolding": undefined,
                                "isLongText": false,
                                "supportsEfficientLeadingWildcard": false,
                                "supportsExactMatching": true,
                              },
                              "type": "string",
                            },
                          },
                          "type": "array",
                        },
                        "typeClasses": [
                          {
                            "kind": "render_hint",
                            "name": "SELECTABLE",
                          },
                          {
                            "kind": "render_hint",
                            "name": "SORTABLE",
                          },
                        ],
                        "valueType": undefined,
                      },
                    },
                    "type": "sharedPropertyBasedPropertyType",
                  },
                  "idp": {
                    "interfaceDefinedPropertyType": {
                      "apiName": "idp",
                      "constraints": {
                        "dataConstraints": {
                          "nullability": undefined,
                          "nullabilityV2": {
                            "noEmptyCollections": true,
                            "noNulls": true,
                          },
                          "propertyTypeConstraints": [],
                        },
                        "indexedForSearch": true,
                        "primaryKeyConstraint": "MUST_BE_PK",
                        "requireImplementation": false,
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                      "displayMetadata": {
                        "description": "Description",
                        "displayName": "Display Name",
                        "visibility": "HIDDEN",
                      },
                      "type": {
                        "array": {
                          "subtype": {
                            "string": {
                              "analyzerOverride": undefined,
                              "enableAsciiFolding": undefined,
                              "isLongText": false,
                              "supportsEfficientLeadingWildcard": false,
                              "supportsExactMatching": true,
                            },
                            "type": "string",
                          },
                        },
                        "type": "array",
                      },
                    },
                    "type": "interfaceDefinedPropertyType",
                  },
                },
                "searchable": true,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.spt": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.spt",
                "baseFormatter": undefined,
                "dataConstraints": {
                  "nullability": undefined,
                  "nullabilityV2": {
                    "noEmptyCollections": true,
                    "noNulls": true,
                  },
                  "propertyTypeConstraints": [],
                },
                "displayMetadata": {
                  "description": "Description",
                  "displayName": "Display Name",
                  "visibility": "HIDDEN",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
                "type": {
                  "array": {
                    "reducers": [],
                    "subtype": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
                    },
                  },
                  "type": "array",
                },
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE",
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE",
                  },
                ],
                "valueType": undefined,
              },
            },
          },
        }
      `);
    });
  });

  it("allows extends interfaces with apiName provided", () => {
    const parentInterface = defineInterface({
      apiName: "parentInterface",
      properties: {
        property1: { type: "string" },
      },
    });
    const childInterface = defineInterface({
      apiName: "childInterface",
      properties: {
        property2: { type: "string" },
      },
      extends: parentInterface,
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "blockPermissionInformation": {
          "actionTypes": {},
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.childInterface": {
            "interfaceType": {
              "actionTypeConstraints": [],
              "apiName": "com.palantir.childInterface",
              "displayMetadata": {
                "description": "childInterface",
                "displayName": "childInterface",
                "icon": {
                  "blueprint": {
                    "color": "#4C90F0",
                    "locator": "layout-hierarchy",
                  },
                  "type": "blueprint",
                },
              },
              "extendsInterfaces": [
                "com.palantir.parentInterface",
              ],
              "extendsInterfacesMetadata": [
                {
                  "actionTypeConstraints": [],
                  "apiName": "com.palantir.parentInterface",
                  "displayMetadata": {
                    "description": "parentInterface",
                    "displayName": "parentInterface",
                    "icon": {
                      "blueprint": {
                        "color": "#4C90F0",
                        "locator": "layout-hierarchy",
                      },
                      "type": "blueprint",
                    },
                  },
                  "extendsInterfaces": [],
                  "extendsInterfacesMetadata": [],
                  "linkedInterfaces": [],
                  "links": [],
                  "permission": undefined,
                  "properties": [],
                  "propertiesV2": {},
                  "propertiesV3": {
                    "property1": {
                      "interfaceDefinedPropertyType": {
                        "apiName": "property1",
                        "constraints": {
                          "dataConstraints": undefined,
                          "indexedForSearch": true,
                          "primaryKeyConstraint": "NO_RESTRICTION",
                          "requireImplementation": true,
                          "typeClasses": [],
                          "valueType": undefined,
                        },
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "property1",
                          "visibility": "NORMAL",
                        },
                        "type": {
                          "string": {
                            "analyzerOverride": undefined,
                            "enableAsciiFolding": undefined,
                            "isLongText": false,
                            "supportsEfficientLeadingWildcard": false,
                            "supportsExactMatching": true,
                          },
                          "type": "string",
                        },
                      },
                      "type": "interfaceDefinedPropertyType",
                    },
                  },
                  "searchable": true,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              ],
              "linkedInterfaces": [],
              "links": [],
              "permission": undefined,
              "properties": [],
              "propertiesV2": {},
              "propertiesV3": {
                "property2": {
                  "interfaceDefinedPropertyType": {
                    "apiName": "property2",
                    "constraints": {
                      "dataConstraints": undefined,
                      "indexedForSearch": true,
                      "primaryKeyConstraint": "NO_RESTRICTION",
                      "requireImplementation": true,
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "property2",
                      "visibility": "NORMAL",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
                    },
                  },
                  "type": "interfaceDefinedPropertyType",
                },
              },
              "searchable": true,
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
          "com.palantir.parentInterface": {
            "interfaceType": {
              "actionTypeConstraints": [],
              "apiName": "com.palantir.parentInterface",
              "displayMetadata": {
                "description": "parentInterface",
                "displayName": "parentInterface",
                "icon": {
                  "blueprint": {
                    "color": "#4C90F0",
                    "locator": "layout-hierarchy",
                  },
                  "type": "blueprint",
                },
              },
              "extendsInterfaces": [],
              "extendsInterfacesMetadata": [],
              "linkedInterfaces": [],
              "links": [],
              "permission": undefined,
              "properties": [],
              "propertiesV2": {},
              "propertiesV3": {
                "property1": {
                  "interfaceDefinedPropertyType": {
                    "apiName": "property1",
                    "constraints": {
                      "dataConstraints": undefined,
                      "indexedForSearch": true,
                      "primaryKeyConstraint": "NO_RESTRICTION",
                      "requireImplementation": true,
                      "typeClasses": [],
                      "valueType": undefined,
                    },
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "property1",
                      "visibility": "NORMAL",
                    },
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
                      "type": "string",
                    },
                  },
                  "type": "interfaceDefinedPropertyType",
                },
              },
              "searchable": true,
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {},
      }
    `);
  });

  it("supports specifying searchable", () => {
    const parentInterface = defineInterface({
      apiName: "parentInterface",
      searchable: false,
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "blockPermissionInformation": {
          "actionTypes": {},
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.parentInterface": {
            "interfaceType": {
              "actionTypeConstraints": [],
              "apiName": "com.palantir.parentInterface",
              "displayMetadata": {
                "description": "parentInterface",
                "displayName": "parentInterface",
                "icon": {
                  "blueprint": {
                    "color": "#4C90F0",
                    "locator": "layout-hierarchy",
                  },
                  "type": "blueprint",
                },
              },
              "extendsInterfaces": [],
              "extendsInterfacesMetadata": [],
              "linkedInterfaces": [],
              "links": [],
              "permission": undefined,
              "properties": [],
              "propertiesV2": {},
              "propertiesV3": {},
              "searchable": false,
              "status": {
                "active": {},
                "type": "active",
              },
            },
          },
        },
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {},
      }
    `);
  });

  it("defaults interface status to active", () => {
    const result = defineInterface({ apiName: "Foo" });
    expect(result.status).toEqual({ type: "active", active: {} });
  });

  it("sets interface status as experimental from opts", () => {
    const experimentalStatus = {
      type: "experimental",
      experimental: {},
    };
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "experimental" },
    });
    expect(result.status).toEqual(experimentalStatus);
  });

  it("sets interface status as deprecated from opts", () => {
    const deprecatedStatus = {
      type: "deprecated",
      deprecated: {
        message: "foo",
        deadline: "foo",
      },
    };
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "deprecated", message: "foo", deadline: "foo" },
    });
    expect(result.status).toEqual(deprecatedStatus);
  });

  it("sets interface status as example from opts", () => {
    const exampleStatus = {
      type: "example",
      example: {},
    };
    const result = defineInterface({
      apiName: "Foo",
      status: { type: "example" },
    });
    expect(result.status).toEqual(exampleStatus);
  });

  it("serializes publicProject permission on interface type", async () => {
    await defineOntology("com.palantir.", () => {
      defineInterface({
        apiName: "myInterface",
        displayName: "My Interface",
        permission: "publicProject",
      });

      const bpi = dumpOntologyFullMetadata().ontology
        .blockPermissionInformation!;
      const itPerms = Object.values(bpi.interfaceTypes);
      expect(itPerms).toHaveLength(1);
      expect(itPerms[0].restrictionStatus).toEqual({
        publicProject: true,
        ontologyPackageRid: null,
      });
    }, "/tmp/");
  });

  describe("Action Type Constraints", () => {
    it("can define an action type constraint with parameter constraints", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      defineInterfaceActionTypeConstraint({
        interfaceType: iface,
        apiName: "myConstraint",
        displayName: "My Constraint",
        description: "A test constraint",
        requireImplementation: false,
        parameters: [
          {
            apiName: "booleanParam",
            displayName: "Boolean Param",
            type: { type: "boolean", boolean: {} },
            requireImplementation: false,
          },
        ],
      });

      expect(iface.actionTypeConstraints).toHaveLength(1);
      const constraint = iface.actionTypeConstraints[0];
      expect(constraint.metadata.apiName).toBe(
        "com.palantir.myConstraint",
      );
      expect(constraint.metadata.displayName).toBe("My Constraint");
      expect(constraint.metadata.description).toBe("A test constraint");
      expect(constraint.requireImplementation).toBe(false);
      expect(Object.keys(constraint.parameters)).toHaveLength(1);

      const paramKey = Object.keys(constraint.parameters)[0];
      expect(paramKey).toBe("booleanParam");
      const param = constraint.parameters[paramKey];
      expect(param.displayMetadata.displayName).toBe("Boolean Param");
      expect(param.displayMetadata.apiName).toBe("booleanParam");
      expect(param.type).toEqual({ type: "boolean", boolean: {} });
      expect(param.requireImplementation).toBe(false);
    });

    it("doesn't let you define duplicate action type constraints", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      defineInterfaceActionTypeConstraint({
        interfaceType: iface,
        apiName: "myConstraint",
        displayName: "My Constraint",
        description: "A test constraint",
        requireImplementation: false,
        parameters: [],
      });

      expect(() => {
        defineInterfaceActionTypeConstraint({
          interfaceType: iface,
          apiName: "myConstraint",
          displayName: "My Constraint",
          description: "A test constraint",
          requireImplementation: false,
          parameters: [],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Action type constraint with apiName com.palantir.myConstraint already exists on interface com.palantir.MyInterface]`,
      );
    });

    it("uses explicit apiName on parameter constraint", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      defineInterfaceActionTypeConstraint({
        interfaceType: iface,
        apiName: "myConstraint",
        displayName: "My Constraint",
        description: "A test constraint",
        requireImplementation: false,
        parameters: [
          {
            apiName: "boolParam",
            displayName: "Boolean Param",
            type: { type: "boolean", boolean: {} },
            requireImplementation: false,
          },
        ],
      });

      const constraint = iface.actionTypeConstraints[0];
      const paramKey = Object.keys(constraint.parameters)[0];
      expect(paramKey).toBe("boolParam");
      const param = constraint.parameters[paramKey];
      expect(param.displayMetadata.apiName).toBe("boolParam");
      expect(param.displayMetadata.displayName).toBe("Boolean Param");
    });

    it("doesn't let you define duplicate parameter constraint apiNames", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      expect(() => {
        defineInterfaceActionTypeConstraint({
          interfaceType: iface,
          apiName: "myConstraint",
          displayName: "My Constraint",
          description: "A test constraint",
          requireImplementation: false,
          parameters: [
            {
              apiName: "paramA",
              displayName: "Param A",
              type: { type: "boolean", boolean: {} },
              requireImplementation: false,
            },
            {
              apiName: "paramA",
              displayName: "Param A Different",
              type: { type: "string", string: {} },
              requireImplementation: false,
            },
          ],
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Duplicate parameter constraint apiName "paramA" in action type constraint com.palantir.myConstraint]`,
      );
    });

    it("allows requireImplementation true on constraint definition", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      defineInterfaceActionTypeConstraint({
        interfaceType: iface,
        apiName: "myConstraint",
        displayName: "My Constraint",
        description: "A test constraint",
        requireImplementation: true,
        parameters: [
          {
            apiName: "boolParam",
            displayName: "Boolean Param",
            type: { type: "boolean", boolean: {} },
            requireImplementation: true,
          },
        ],
      });

      const constraint = iface.actionTypeConstraints[0];
      expect(constraint.requireImplementation).toBe(true);
      const param = Object.values(constraint.parameters)[0];
      expect(param.requireImplementation).toBe(true);
    });

    it("throws when object implements interface with required constraint", async () => {
      await expect(
        defineOntology("com.palantir.", () => {
          const iface = defineInterface({ apiName: "MyInterface" });

          defineInterfaceActionTypeConstraint({
            interfaceType: iface,
            apiName: "myConstraint",
            displayName: "My Constraint",
            description: "A test constraint",
            requireImplementation: true,
            parameters: [],
          });

          defineObject({
            apiName: "myObject",
            displayName: "My Object",
            pluralDisplayName: "My Objects",
            titlePropertyApiName: "name",
            primaryKeyPropertyApiName: "id",
            properties: {
              "id": { type: "string", displayName: "ID" },
              "name": { type: "string", displayName: "Name" },
            },
            implementsInterfaces: [{
              implements: iface,
              propertyMapping: [],
            }],
          });
        }, undefined),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Object "com.palantir.myObject" implements interface "com.palantir.MyInterface" which has required action type constraints: com.palantir.myConstraint. Action type constraint implementation is not yet supported in OAC. Set requireImplementation to false and manually implement the constraint after installation.]`,
      );
    });

    it("allows object to implement interface with non-required constraint", () => {
      const iface = defineInterface({ apiName: "MyInterface" });

      defineInterfaceActionTypeConstraint({
        interfaceType: iface,
        apiName: "myConstraint",
        displayName: "My Constraint",
        description: "A test constraint",
        requireImplementation: false,
        parameters: [],
      });

      const obj = defineObject({
        apiName: "myObject",
        displayName: "My Object",
        pluralDisplayName: "My Objects",
        titlePropertyApiName: "name",
        primaryKeyPropertyApiName: "id",
        properties: {
          "id": { type: "string", displayName: "ID" },
          "name": { type: "string", displayName: "Name" },
        },
        implementsInterfaces: [{
          implements: iface,
          propertyMapping: [],
        }],
      });

      expect(obj).toBeDefined();
    });
  });
});
