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
import { defineCreateInterfaceObjectAction } from "../defineCreateInterfaceObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineModifyInterfaceObjectAction } from "../defineModifyInterfaceObjectAction.js";
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

  describe("auto spts", () => {
    it("auto creates spts", () => {
      defineInterface({
        apiName: "Foo",
        properties: {
          foo: { type: "string" },
        },
      });

      expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(`` // `
        //   {
        //     "actionTypes": {},
        //     "blockPermissionInformation": {
        //       "actionTypes": {},
        //       "linkTypes": {},
        //       "objectTypes": {},
        //     },
        //     "interfaceTypes": {
        //       "com.palantir.Foo": {
        //         "interfaceType": {
        //           "apiName": "com.palantir.Foo",
        //           "displayMetadata": {
        //             "description": "Foo",
        //             "displayName": "Foo",
        //             "icon": {
        //               "blueprint": {
        //                 "color": "#4C90F0",
        //                 "locator": "layout-hierarchy",
        //               },
        //               "type": "blueprint",
        //             },
        //           },
        //           "extendsInterfaces": [],
        //           "links": [],
        //           "properties": [],
        //           "propertiesV2": {
        //             "com.palantir.foo": {
        //               "required": true,
        //               "sharedPropertyType": {
        //                 "aliases": [],
        //                 "apiName": "com.palantir.foo",
        //                 "baseFormatter": undefined,
        //                 "dataConstraints": undefined,
        //                 "displayMetadata": {
        //                   "description": undefined,
        //                   "displayName": "foo",
        //                   "visibility": "NORMAL",
        //                 },
        //                 "gothamMapping": undefined,
        //                 "indexedForSearch": true,
        //                 "type": {
        //                   "string": {
        //                     "analyzerOverride": undefined,
        //                     "enableAsciiFolding": undefined,
        //                     "isLongText": false,
        //                     "supportsEfficientLeadingWildcard": false,
        //                     "supportsExactMatching": true,
        //                   },
        //                   "type": "string",
        //                 },
        //                 "typeClasses": [
        //                   {
        //                     "kind": "render_hint",
        //                     "name": "SELECTABLE",
        //                   },
        //                   {
        //                     "kind": "render_hint",
        //                     "name": "SORTABLE",
        //                   },
        //                 ],
        //                 "valueType": undefined,
        //               },
        //             },
        //           },
        //           "propertiesV3": {},
        //           "searchable": true,
        //           "status": {
        //             "active": {},
        //             "type": "active",
        //           },
        //         },
        //       },
        //     },
        //     "linkTypes": {},
        //     "objectTypes": {},
        //     "sharedPropertyTypes": {
        //       "com.palantir.foo": {
        //         "sharedPropertyType": {
        //           "aliases": [],
        //           "apiName": "com.palantir.foo",
        //           "baseFormatter": undefined,
        //           "dataConstraints": undefined,
        //           "displayMetadata": {
        //             "description": undefined,
        //             "displayName": "foo",
        //             "visibility": "NORMAL",
        //           },
        //           "gothamMapping": undefined,
        //           "indexedForSearch": true,
        //           "type": {
        //             "string": {
        //               "analyzerOverride": undefined,
        //               "enableAsciiFolding": undefined,
        //               "isLongText": false,
        //               "supportsEfficientLeadingWildcard": false,
        //               "supportsExactMatching": true,
        //             },
        //             "type": "string",
        //           },
        //           "typeClasses": [
        //             {
        //               "kind": "render_hint",
        //               "name": "SELECTABLE",
        //             },
        //             {
        //               "kind": "render_hint",
        //               "name": "SORTABLE",
        //             },
        //           ],
        //           "valueType": undefined,
        //         },
        //       },
        //     },
        //   }
        // `
      );
    });

    it("does not let you conflict spts", () => {
      defineSharedPropertyType({
        apiName: "foo",
        type: "string",
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

      expect(() => {
        defineInterface({
          apiName: "Foo",
          properties: {
            foo: { type: "string" },
          },
        });
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Shared property type com.palantir.foo already exists]`,
      );
    });
  });

  it("allows extends interfaces with InterfaceType provided", () => {
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
      extends: [parentInterface],
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
                "propertiesV2": {
                  "com.palantir.property2": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
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
                "propertiesV3": {},
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
                "propertiesV2": {
                  "com.palantir.property1": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
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
                "propertiesV3": {},
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
            "com.palantir.property1": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property1",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property1",
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
            "com.palantir.property2": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property2",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property2",
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
        property1: { required: false, sharedPropertyType: spt },
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
                  "com.palantir.property1": {
                    "required": false,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
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
                "propertiesV3": {},
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
            "com.palantir.property1": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property1",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property1",
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
                "propertiesV2": {
                  "com.palantir.property2": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
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
                "propertiesV3": {},
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
                "propertiesV2": {
                  "com.palantir.property1": {
                    "required": true,
                    "sharedPropertyType": {
                      "aliases": [],
                      "apiName": "com.palantir.property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
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
                "propertiesV3": {},
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
            "com.palantir.property1": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property1",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property1",
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
            "com.palantir.property2": {
              "sharedPropertyType": {
                "aliases": [],
                "apiName": "com.palantir.property2",
                "baseFormatter": undefined,
                "dataConstraints": undefined,
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "property2",
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
  it("IDP TEST", () => {
    const ethanaSpt = defineSharedPropertyType({
      apiName: "ethanaSpt",
      type: "string",
    });

    const iface = defineInterface({
      apiName: "idp5",
      displayName: "Test IDP 5",
      properties: {
        "bar": {
          type: "string",
          primaryKeyConstraint: "MUST_BE_PK",
        },
        "foo": { type: "boolean" },
        "ethanaSpt": ethanaSpt,
        // "struct": {
        //   type: {
        //     type: "struct",
        //     structDefinition: {
        //       field: {
        //         fieldType: "string",
        //         requireImplementation: true
        //       }
        //     }
        //   }
        // },
      },
    });

    defineModifyInterfaceObjectAction({
      interfaceType: iface,
    });
    defineCreateInterfaceObjectAction({
      interfaceType: iface,
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchInlineSnapshot(``);
  });
});
