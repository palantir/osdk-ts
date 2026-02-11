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
describe("SPTs", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("doesn't let you create the same spt twice", () => {
    defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    expect(() => {
      defineSharedPropertyType({
        apiName: "foo",
        type: "string",
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Shared property type com.palantir.foo already exists]`,
    );
  });

  it("uses a predefined spt", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: "string",
    });

    const FooInterface = defineInterface({
      apiName: "FooInterface",
      displayName: "Foo Interface",
      properties: {
        fooSpt,
      },
      icon: { color: "#00000", locator: "airplane" },
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
          "com.palantir.FooInterface": {
            "interfaceType": {
              "apiName": "com.palantir.FooInterface",
              "displayMetadata": {
                "description": "Foo Interface",
                "displayName": "Foo Interface",
                "icon": {
                  "blueprint": {
                    "color": "#00000",
                    "locator": "airplane",
                  },
                  "type": "blueprint",
                },
              },
              "extendsInterfaces": [],
              "links": [],
              "properties": [],
              "propertiesV2": {
                "com.palantir.fooSpt": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.fooSpt",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "fooSpt",
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
                "com.palantir.fooSpt": {
                  "sharedPropertyBasedPropertyType": {
                    "requireImplementation": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.fooSpt",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "fooSpt",
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
          "com.palantir.fooSpt": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.fooSpt",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "fooSpt",
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

  it("properly serializes both types of struct SPTs", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: {
        type: "struct",
        structDefinition: {
          "simpleProperty": "boolean",
          "complexProperty": {
            fieldType: "date",
            displayMetadata: {
              displayName: "complex property",
              description: undefined,
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
        "interfaceTypes": {},
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {
          "com.palantir.fooSpt": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.fooSpt",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "fooSpt",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "type": {
                "struct": {
                  "mainValue": undefined,
                  "structFields": [
                    {
                      "aliases": [],
                      "apiName": "simpleProperty",
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "simpleProperty",
                      },
                      "fieldType": {
                        "boolean": {},
                        "type": "boolean",
                      },
                      "typeClasses": [],
                    },
                    {
                      "aliases": [],
                      "apiName": "complexProperty",
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "complex property",
                      },
                      "fieldType": {
                        "date": {},
                        "type": "date",
                      },
                      "typeClasses": [],
                    },
                  ],
                },
                "type": "struct",
              },
              "typeClasses": [],
              "valueType": undefined,
            },
          },
        },
      }
    `);
  });

  it("Custom string fields properly set", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: {
        type: "string",
        isLongText: true,
        supportsEfficientLeadingWildcard: true,
        supportsExactMatching: false,
      },
    });

    defineInterface({
      apiName: "interface",
      properties: { foo: spt },
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
          "com.palantir.interface": {
            "interfaceType": {
              "apiName": "com.palantir.interface",
              "displayMetadata": {
                "description": "interface",
                "displayName": "interface",
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
                "com.palantir.foo": {
                  "required": true,
                  "sharedPropertyType": {
                    "aliases": [],
                    "apiName": "com.palantir.foo",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "foo",
                      "visibility": "NORMAL",
                    },
                    "gothamMapping": undefined,
                    "indexedForSearch": true,
                    "type": {
                      "string": {
                        "analyzerOverride": undefined,
                        "enableAsciiFolding": undefined,
                        "isLongText": true,
                        "supportsEfficientLeadingWildcard": true,
                        "supportsExactMatching": false,
                        "supportsFullTextRegex": undefined,
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
                "com.palantir.foo": {
                  "sharedPropertyBasedPropertyType": {
                    "requireImplementation": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.foo",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "foo",
                        "visibility": "NORMAL",
                      },
                      "gothamMapping": undefined,
                      "indexedForSearch": true,
                      "type": {
                        "string": {
                          "analyzerOverride": undefined,
                          "enableAsciiFolding": undefined,
                          "isLongText": true,
                          "supportsEfficientLeadingWildcard": true,
                          "supportsExactMatching": false,
                          "supportsFullTextRegex": undefined,
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
          "com.palantir.foo": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.foo",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "foo",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "type": {
                "string": {
                  "analyzerOverride": undefined,
                  "enableAsciiFolding": undefined,
                  "isLongText": true,
                  "supportsEfficientLeadingWildcard": true,
                  "supportsExactMatching": false,
                  "supportsFullTextRegex": undefined,
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

  it("Custom decimal fields properly set", () => {
    const spt1 = defineSharedPropertyType({
      apiName: "precision",
      type: {
        type: "decimal",
        precision: 10,
      },
    });
    const spt2 = defineSharedPropertyType({
      apiName: "scale",
      type: {
        type: "decimal",
        scale: 5,
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
        "interfaceTypes": {},
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {
          "com.palantir.precision": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.precision",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "precision",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "type": {
                "decimal": {
                  "precision": 10,
                  "scale": undefined,
                },
                "type": "decimal",
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
          "com.palantir.scale": {
            "sharedPropertyType": {
              "aliases": [],
              "apiName": "com.palantir.scale",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "scale",
                "visibility": "NORMAL",
              },
              "gothamMapping": undefined,
              "indexedForSearch": true,
              "type": {
                "decimal": {
                  "precision": undefined,
                  "scale": 5,
                },
                "type": "decimal",
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
  it("Number formatting works", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "double",
      baseFormatter: {
        type: "number",
        number: {
          type: "base",
          base: {
            maximumFractionDigits: 1,
          },
        },
      },
    });
    expect(dumpOntologyFullMetadata()).toMatchInlineSnapshot(`
      {
        "importedOntology": {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {},
        },
        "importedValueTypes": {
          "valueTypes": [],
        },
        "ontology": {
          "actionTypes": {},
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {},
          "objectTypes": {},
          "sharedPropertyTypes": {
            "com.palantir.foo": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.foo",
                "baseFormatter": {
                  "number": {
                    "base": {
                      "maximumFractionDigits": 1,
                    },
                    "type": "base",
                  },
                  "type": "number",
                },
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "foo",
                  "visibility": "NORMAL",
                },
                "gothamMapping": undefined,
                "indexedForSearch": true,
                "type": {
                  "double": {},
                  "type": "double",
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
        },
        "randomnessKey": undefined,
        "valueTypes": {
          "valueTypes": [],
        },
      }
    `);
  });
  it("Aliases properly set", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: { type: "string" },
      aliases: ["alias1", "alias2"],
    });
    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "blockPermissionInformation": {
          "actionTypes": {},
          "linkTypes": {},
          "objectTypes": {},
        },
        "interfaceTypes": {},
        "linkTypes": {},
        "objectTypes": {},
        "sharedPropertyTypes": {
          "com.palantir.foo": {
            "sharedPropertyType": {
              "aliases": [
                "alias1",
                "alias2",
              ],
              "apiName": "com.palantir.foo",
              "baseFormatter": undefined,
              "dataConstraints": undefined,
              "displayMetadata": {
                "description": undefined,
                "displayName": "foo",
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
                  "supportsFullTextRegex": undefined,
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
});
