/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { beforeEach, describe, expect, it } from "vitest";
import { addDependency } from "../addDependency.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import { importOntologyEntity } from "../importOntologyEntity.js";
import { importSharedPropertyType } from "../importSharedPropertyType.js";
import { type SharedPropertyType } from "../properties/SharedPropertyType.js";

describe("Miscellaneous Tests", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("Imports", () => {
    it("Legacy importing works", () => {
      const id = importSharedPropertyType({
        apiName: "id",
        packageName: "com.palantir.core.ontology.types",
        typeHint: "string",
      });
      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          id,
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
            "sharedPropertyTypes": {
              "com.palantir.core.ontology.types.id": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.core.ontology.types.id",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "com.palantir.core.ontology.types.id",
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
                  "typeClasses": [],
                  "valueType": undefined,
                },
              },
            },
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
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
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
                    "com.palantir.core.ontology.types.id": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.core.ontology.types.id",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "com.palantir.core.ontology.types.id",
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
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.palantir.core.ontology.types.id": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.core.ontology.types.id",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "com.palantir.core.ontology.types.id",
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
                          "typeClasses": [],
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
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
    it("Simple importing works", () => {
      // does the same as "import { spt } from '@other/package'"
      const spt: SharedPropertyType = {
        apiName: "com.other.package.spt",
        nonNameSpacedApiName: "spt",
        type: "string",
        __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
      };
      importOntologyEntity(spt);

      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          spt,
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
            "sharedPropertyTypes": {
              "com.other.package.spt": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.other.package.spt",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "com.other.package.spt",
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
                  "typeClasses": [],
                  "valueType": undefined,
                },
              },
            },
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
            "interfaceTypes": {
              "com.palantir.myInterface": {
                "interfaceType": {
                  "apiName": "com.palantir.myInterface",
                  "displayMetadata": {
                    "description": "myInterface",
                    "displayName": "myInterface",
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
                    "com.other.package.spt": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.other.package.spt",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "com.other.package.spt",
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
                        "typeClasses": [],
                        "valueType": undefined,
                      },
                    },
                  },
                  "propertiesV3": {
                    "com.other.package.spt": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.other.package.spt",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "com.other.package.spt",
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
                          "typeClasses": [],
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
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
    it("Export files are generated correctly", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "export_files_are_generated_correctly",
      ));
      await defineOntology("com.my.package.", () => {
        const mySpt = defineSharedPropertyType({
          apiName: "mySpt",
          type: "string",
        });
        const myInterface = defineInterface({
          apiName: "myInterface",
          properties: {
            mySpt,
          },
        });
        const myObject = defineObject({
          titlePropertyApiName: "bar",
          displayName: "My Object",
          pluralDisplayName: "myObjects",
          apiName: "myObject",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
          implementsInterfaces: [{
            implements: myInterface,
            propertyMapping: [{
              interfaceProperty: "com.my.package.mySpt",
              mapsTo: "bar",
            }],
          }],
        });
      }, generatedDir);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/myInterface.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { InterfaceType } from '@osdk/maker';

        /** @type {import('@osdk/maker').InterfaceType} */
        const myInterface_base: InterfaceType = {
          "apiName": "com.my.package.myInterface",
          "displayMetadata": {
            "displayName": "myInterface",
            "description": "myInterface"
          },
          "extendsInterfaces": [],
          "links": [],
          "status": {
            "type": "active",
            "active": {}
          },
          "propertiesV2": {
            "com.my.package.mySpt": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.my.package.mySpt",
                "type": "string",
                "nonNameSpacedApiName": "mySpt",
                "displayName": "mySpt",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "propertiesV3": {
            "mySpt": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.my.package.mySpt",
                "type": "string",
                "nonNameSpacedApiName": "mySpt",
                "displayName": "mySpt",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "searchable": true,
          "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
        } as unknown as InterfaceType;
                
        export const myInterface: InterfaceType = wrapWithProxy(myInterface_base);
                "
      `);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/object-types/myObject.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { ObjectType } from '@osdk/maker';

        /** @type {import('@osdk/maker').ObjectType} */
        const myObject_base: ObjectType = {
          "titlePropertyApiName": "bar",
          "displayName": "My Object",
          "pluralDisplayName": "myObjects",
          "apiName": "com.my.package.myObject",
          "primaryKeyPropertyApiName": "bar",
          "properties": [
            {
              "type": "string",
              "displayName": "Bar",
              "apiName": "bar"
            }
          ],
          "implementsInterfaces": [
            {
              "implements": {
                "apiName": "com.my.package.myInterface",
                "displayMetadata": {
                  "displayName": "myInterface",
                  "description": "myInterface"
                },
                "extendsInterfaces": [],
                "links": [],
                "status": {
                  "type": "active",
                  "active": {}
                },
                "propertiesV2": {
                  "com.my.package.mySpt": {
                    "required": true,
                    "sharedPropertyType": {
                      "apiName": "com.my.package.mySpt",
                      "type": "string",
                      "nonNameSpacedApiName": "mySpt",
                      "displayName": "mySpt",
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE"
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE"
                        }
                      ],
                      "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                    }
                  }
                },
                "propertiesV3": {
                  "mySpt": {
                    "required": true,
                    "sharedPropertyType": {
                      "apiName": "com.my.package.mySpt",
                      "type": "string",
                      "nonNameSpacedApiName": "mySpt",
                      "displayName": "mySpt",
                      "typeClasses": [
                        {
                          "kind": "render_hint",
                          "name": "SELECTABLE"
                        },
                        {
                          "kind": "render_hint",
                          "name": "SORTABLE"
                        }
                      ],
                      "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                    }
                  }
                },
                "searchable": true,
                "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
              },
              "propertyMapping": [
                {
                  "interfaceProperty": "com.my.package.mySpt",
                  "mapsTo": "bar"
                }
              ]
            }
          ],
          "__type": OntologyEntityTypeEnum.OBJECT_TYPE
        } as unknown as ObjectType;
                
        export const myObject: ObjectType = wrapWithProxy(myObject_base);
                "
      `);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/shared-property-types/mySpt.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { SharedPropertyType } from '@osdk/maker';

        /** @type {import('@osdk/maker').SharedPropertyType} */
        const mySpt_base: SharedPropertyType = {
          "apiName": "com.my.package.mySpt",
          "type": "string",
          "nonNameSpacedApiName": "mySpt",
          "displayName": "mySpt",
          "typeClasses": [
            {
              "kind": "render_hint",
              "name": "SELECTABLE"
            },
            {
              "kind": "render_hint",
              "name": "SORTABLE"
            }
          ],
          "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
        } as unknown as SharedPropertyType;
                
        export const mySpt: SharedPropertyType = wrapWithProxy(mySpt_base);
                "
      `);
      fs.rmSync(path.resolve(path.join(generatedDir, "..")), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interfaces are propagated to the static objects", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "extended_interfaces_are_propagated_to_the_static_objects",
      ));
      await defineOntology("com.palantir.", () => {
        const property1 = defineSharedPropertyType({
          apiName: "property1",
          type: "string",
        });
        const property2 = defineSharedPropertyType({
          apiName: "property2",
          type: "string",
        });
        const parentInterface = defineInterface({
          apiName: "parentInterface",
          properties: {
            property1: property1,
          },
        });
        const childInterface = defineInterface({
          apiName: "childInterface",
          properties: {
            property2: property2,
          },
          extends: [parentInterface],
        });
      }, generatedDir);

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/childInterface.ts"),
          "utf8",
        ),
      ).toMatchInlineSnapshot(`
        "
        import { wrapWithProxy, OntologyEntityTypeEnum } from '@osdk/maker';
        import type { InterfaceType } from '@osdk/maker';

        /** @type {import('@osdk/maker').InterfaceType} */
        const childInterface_base: InterfaceType = {
          "apiName": "com.palantir.childInterface",
          "displayMetadata": {
            "displayName": "childInterface",
            "description": "childInterface"
          },
          "extendsInterfaces": [
            {
              "apiName": "com.palantir.parentInterface",
              "displayMetadata": {
                "displayName": "parentInterface",
                "description": "parentInterface"
              },
              "extendsInterfaces": [],
              "links": [],
              "status": {
                "type": "active",
                "active": {}
              },
              "propertiesV2": {
                "com.palantir.property1": {
                  "required": true,
                  "sharedPropertyType": {
                    "apiName": "com.palantir.property1",
                    "type": "string",
                    "nonNameSpacedApiName": "property1",
                    "displayName": "property1",
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE"
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE"
                      }
                    ],
                    "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                  }
                }
              },
              "propertiesV3": {
                "property1": {
                  "required": true,
                  "sharedPropertyType": {
                    "apiName": "com.palantir.property1",
                    "type": "string",
                    "nonNameSpacedApiName": "property1",
                    "displayName": "property1",
                    "typeClasses": [
                      {
                        "kind": "render_hint",
                        "name": "SELECTABLE"
                      },
                      {
                        "kind": "render_hint",
                        "name": "SORTABLE"
                      }
                    ],
                    "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
                  }
                }
              },
              "searchable": true,
              "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
            }
          ],
          "links": [],
          "status": {
            "type": "active",
            "active": {}
          },
          "propertiesV2": {
            "com.palantir.property2": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.palantir.property2",
                "type": "string",
                "nonNameSpacedApiName": "property2",
                "displayName": "property2",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "propertiesV3": {
            "property2": {
              "required": true,
              "sharedPropertyType": {
                "apiName": "com.palantir.property2",
                "type": "string",
                "nonNameSpacedApiName": "property2",
                "displayName": "property2",
                "typeClasses": [
                  {
                    "kind": "render_hint",
                    "name": "SELECTABLE"
                  },
                  {
                    "kind": "render_hint",
                    "name": "SORTABLE"
                  }
                ],
                "__type": OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE
              }
            }
          },
          "searchable": true,
          "__type": OntologyEntityTypeEnum.INTERFACE_TYPE
        } as unknown as InterfaceType;
                
        export const childInterface: InterfaceType = wrapWithProxy(childInterface_base);
                "
      `);
      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interface properties are checked in object type property mapping", () => {
      const iProperty1 = defineSharedPropertyType({
        apiName: "iProperty1",
        type: "string",
      });
      const iProperty2 = defineSharedPropertyType({
        apiName: "iProperty2",
        type: "string",
      });
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          iProperty1: iProperty1,
        },
      });
      const childInterface = defineInterface({
        apiName: "childInterface",
        properties: {
          iProperty2: iProperty2,
        },
        extends: [parentInterface],
      });
      const objectDef = defineObject({
        apiName: "objectDef",
        primaryKeyPropertyApiName: "property1",
        titlePropertyApiName: "property1",
        displayName: "objectDef",
        pluralDisplayName: "objectDefs",
        properties: {
          "property1": { type: "string", displayName: "property1" },
          "property2": { type: "string", displayName: "property2" },
        },
        implementsInterfaces: [
          {
            implements: childInterface,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.iProperty1",
                mapsTo: "property1",
              },
              {
                interfaceProperty: "com.palantir.iProperty2",
                mapsTo: "property2",
              },
            ],
          },
        ],
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
                    "com.palantir.iProperty2": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.iProperty2",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "iProperty2",
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
                    "com.palantir.iProperty2": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.iProperty2",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "iProperty2",
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
                    "com.palantir.iProperty1": {
                      "required": true,
                      "sharedPropertyType": {
                        "aliases": [],
                        "apiName": "com.palantir.iProperty1",
                        "baseFormatter": undefined,
                        "dataConstraints": undefined,
                        "displayMetadata": {
                          "description": undefined,
                          "displayName": "iProperty1",
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
                    "com.palantir.iProperty1": {
                      "sharedPropertyBasedPropertyType": {
                        "requireImplementation": true,
                        "sharedPropertyType": {
                          "aliases": [],
                          "apiName": "com.palantir.iProperty1",
                          "baseFormatter": undefined,
                          "dataConstraints": undefined,
                          "displayMetadata": {
                            "description": undefined,
                            "displayName": "iProperty1",
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
            "objectTypes": {
              "com.palantir.objectDef": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.objectDef",
                        "propertyMapping": {
                          "property1": {
                            "column": "property1",
                            "type": "column",
                          },
                          "property2": {
                            "column": "property2",
                            "type": "column",
                          },
                        },
                      },
                      "type": "datasetV2",
                    },
                    "datasourceName": "com.palantir.objectDef",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "aliases": [],
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.objectDef",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "objectDef",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "objectDefs",
                    "visibility": "NORMAL",
                  },
                  "implementsInterfaces2": [
                    {
                      "interfaceTypeApiName": "com.palantir.childInterface",
                      "linksV2": {},
                      "properties": {},
                      "propertiesV2": {
                        "com.palantir.iProperty1": {
                          "propertyTypeRid": "property1",
                          "type": "propertyTypeRid",
                        },
                        "com.palantir.iProperty2": {
                          "propertyTypeRid": "property2",
                          "type": "propertyTypeRid",
                        },
                      },
                    },
                  ],
                  "primaryKeys": [
                    "property1",
                  ],
                  "propertyTypes": {
                    "property1": {
                      "apiName": "property1",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property1",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
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
                    "property2": {
                      "apiName": "property2",
                      "baseFormatter": undefined,
                      "dataConstraints": undefined,
                      "displayMetadata": {
                        "description": undefined,
                        "displayName": "property2",
                        "visibility": "NORMAL",
                      },
                      "indexedForSearch": true,
                      "inlineAction": undefined,
                      "ruleSetBinding": undefined,
                      "sharedPropertyTypeApiName": undefined,
                      "sharedPropertyTypeRid": undefined,
                      "status": {
                        "active": {},
                        "type": "active",
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
                  "redacted": false,
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                  "titlePropertyTypeRid": "property1",
                },
                "propertySecurityGroupPackagingVersion": {
                  "type": "v2",
                  "v2": {},
                },
              },
            },
            "sharedPropertyTypes": {
              "com.palantir.iProperty1": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.iProperty1",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "iProperty1",
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
              "com.palantir.iProperty2": {
                "sharedPropertyType": {
                  "aliases": [],
                  "apiName": "com.palantir.iProperty2",
                  "baseFormatter": undefined,
                  "dataConstraints": undefined,
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "iProperty2",
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
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
    });
  });

  describe("Dependencies", () => {
    it("Correctly adds dependencies", async () => {
      const generatedDir = path.resolve(path.join(
        __dirname,
        "..",
        "generatedNoCheck",
        "correctly_adds_dependencies",
      ));
      await defineOntology(
        "com.palantir.",
        () => {
          addDependency("com.palantir", fileURLToPath(import.meta.url));
          defineInterface({
            apiName: "myInterface",
            properties: {
              property1: { type: "string" },
            },
          });
        },
        generatedDir,
        path.join(generatedDir, "dependencies.json"),
      );

      const packageJson = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "..", "..", "package.json"),
          "utf8",
        ),
      );
      expect(packageJson.version).toBeDefined();

      expect(
        fs.readFileSync(path.join(generatedDir, "dependencies.json"), "utf8"),
      ).toMatchInlineSnapshot(`
        "{
          "com.palantir": "${packageJson.version}"
        }"
      `);

      expect(
        fs.readFileSync(path.join(generatedDir, "index.ts"), "utf8"),
      )
        .toContain(
          `addDependency("com.palantir", new URL(import.meta.url).pathname);`,
        );

      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
  });
});
