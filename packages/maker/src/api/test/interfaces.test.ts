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
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.Foo": {
              "interfaceType": {
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
                "links": [],
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
          "spt": spt,
        },
      });
      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
        {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.bar": {
              "interfaceType": {
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
                "links": [],
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
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.parentInterface": {
            "interfaceType": {
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
              "links": [],
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
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.bar": {
              "interfaceType": {
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
                "links": [],
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
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.parentInterface": {
              "interfaceType": {
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
                "links": [],
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
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {
          "com.palantir.childInterface": {
            "interfaceType": {
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
              "links": [],
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
              "links": [],
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
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {
            "com.palantir.parentInterface": {
              "interfaceType": {
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
                "links": [],
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
});
