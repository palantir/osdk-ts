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
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineLink } from "../defineLink.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { type InterfaceType } from "../interface/InterfaceType.js";

describe("Link Types", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });
  describe("Object Links", () => {
    it("One To Many Links are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
      });

      defineLink({
        apiName: "fizzToFoo",
        one: {
          object: object,
          metadata: {
            apiName: "fizzes",
            displayName: "Foo",
            pluralDisplayName: "Foos",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "foos",
          },
        },
        manyForeignKeyProperty: "bar",
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
          "linkTypes": {
            "fizz-to-foo": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.fizz",
                    "objectTypeRidOneSide": "com.palantir.foo",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Foo",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.fizz",
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
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.foo",
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
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Foo",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Many To Many Links are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
      });

      defineLink({
        apiName: "fizzToFoo",
        many: {
          object: object,
          metadata: {
            displayName: "Foo",
            pluralDisplayName: "Foos",
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "foos",
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
          "linkTypes": {
            "fizz-to-foo": {
              "datasources": [
                {
                  "datasource": {
                    "dataset": {
                      "datasetRid": "link-fizzToFoo",
                      "objectTypeAPrimaryKeyMapping": [
                        {
                          "column": "bar",
                          "property": {
                            "apiName": "bar",
                            "object": "com.palantir.foo",
                          },
                        },
                      ],
                      "objectTypeBPrimaryKeyMapping": [
                        {
                          "column": "fizz",
                          "property": {
                            "apiName": "fizz",
                            "object": "com.palantir.fizz",
                          },
                        },
                      ],
                      "writebackDatasetRid": undefined,
                    },
                    "type": "dataset",
                  },
                  "datasourceName": "fizzToFoo",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": undefined,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "manyToMany": {
                    "objectTypeAPrimaryKeyPropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                      },
                    ],
                    "objectTypeAToBLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Foo",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeBPrimaryKeyPropertyMapping": [
                      {
                        "from": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizz",
                        },
                        "to": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "objectTypeBToALinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidA": "com.palantir.foo",
                    "objectTypeRidB": "com.palantir.fizz",
                    "peeringMetadata": undefined,
                  },
                  "type": "manyToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.fizz",
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
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.foo",
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
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Foo",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Intermediary link types are properly defined", () => {
      const bar = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Bar",
        pluralDisplayName: "Bar",
        apiName: "barObject",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });

      const fizz = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizzObject",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" } },
      });

      const intermediaryObject = defineObject({
        titlePropertyApiName: "buzz",
        displayName: "Buzz",
        pluralDisplayName: "Buzz",
        apiName: "buzzObject",
        primaryKeyPropertyApiName: "buzz",
        properties: {
          "buzz": { type: "string" },
          "barBuzz": { type: "string" },
          "fizzBuzz": { type: "string" },
        },
      });

      const barToBuzz = defineLink({
        apiName: "barToBuzz",
        manyForeignKeyProperty: "barBuzz",
        one: {
          object: bar,
          metadata: {
            displayName: "Buzz",
            pluralDisplayName: "Buzz",
            apiName: "buzz1",
          },
        },
        toMany: {
          object: intermediaryObject,
          metadata: {
            displayName: "Bar",
            pluralDisplayName: "Bars",
            apiName: "bars",
          },
        },
      });

      const fizzToBuzz = defineLink({
        apiName: "fizzToBuzz",
        manyForeignKeyProperty: "fizzBuzz",
        one: {
          object: fizz,
          metadata: {
            displayName: "Buzz",
            pluralDisplayName: "Buzz",
            apiName: "buzz2",
          },
        },
        toMany: {
          object: intermediaryObject,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "fizzes",
          },
        },
      });

      defineLink({
        apiName: "fizzToBar",
        many: {
          object: bar,
          metadata: {
            displayName: "Fizz",
            pluralDisplayName: "Fizzes",
            apiName: "fizzes1",
          },
          linkToIntermediary: barToBuzz,
        },
        toMany: {
          object: fizz,
          metadata: {
            displayName: "Bar",
            pluralDisplayName: "Bars",
            apiName: "bars1",
          },
          linkToIntermediary: fizzToBuzz,
        },
        intermediaryObjectType: intermediaryObject,
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
          "linkTypes": {
            "bar-to-buzz": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "bars",
                      "displayMetadata": {
                        "displayName": "Bar",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Bars",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.buzzObject",
                    "objectTypeRidOneSide": "com.palantir.barObject",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.barObject",
                        },
                        "to": {
                          "apiName": "barBuzz",
                          "object": "com.palantir.buzzObject",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "buzz1",
                      "displayMetadata": {
                        "displayName": "Buzz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "bar-to-buzz",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "fizz-to-bar": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "intermediary": {
                    "aToIntermediaryLinkTypeRid": "bar-to-buzz",
                    "intermediaryObjectTypeRid": "com.palantir.buzzObject",
                    "intermediaryToBLinkTypeRid": "fizz-to-buzz",
                    "objectTypeAToBLinkMetadata": {
                      "apiName": "fizzes1",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeBToALinkMetadata": {
                      "apiName": "bars1",
                      "displayMetadata": {
                        "displayName": "Bar",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Bars",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidA": "com.palantir.barObject",
                    "objectTypeRidB": "com.palantir.fizzObject",
                  },
                  "type": "intermediary",
                },
                "id": "fizz-to-bar",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
            "fizz-to-buzz": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Fizz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.buzzObject",
                    "objectTypeRidOneSide": "com.palantir.fizzObject",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "fizz",
                          "object": "com.palantir.fizzObject",
                        },
                        "to": {
                          "apiName": "fizzBuzz",
                          "object": "com.palantir.buzzObject",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "buzz2",
                      "displayMetadata": {
                        "displayName": "Buzz",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Buzz",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-buzz",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.barObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.barObject",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.barObject",
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
                "apiName": "com.palantir.barObject",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Bar",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Bar",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
            "com.palantir.buzzObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.buzzObject",
                      "propertyMapping": {
                        "barBuzz": {
                          "column": "barBuzz",
                          "type": "column",
                        },
                        "buzz": {
                          "column": "buzz",
                          "type": "column",
                        },
                        "fizzBuzz": {
                          "column": "fizzBuzz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.buzzObject",
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
                "apiName": "com.palantir.buzzObject",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Buzz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Buzz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "buzz",
                ],
                "propertyTypes": {
                  "barBuzz": {
                    "apiName": "barBuzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "BarBuzz",
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
                  "buzz": {
                    "apiName": "buzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Buzz",
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
                  "fizzBuzz": {
                    "apiName": "fizzBuzz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "FizzBuzz",
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
                "titlePropertyTypeRid": "buzz",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
            "com.palantir.fizzObject": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizzObject",
                      "propertyMapping": {
                        "fizz": {
                          "column": "fizz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.fizzObject",
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
                "apiName": "com.palantir.fizzObject",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });

    it("Minimal link definitions are properly defined", () => {
      const object = defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });

      const otherObject = defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Fizz",
        pluralDisplayName: "Fizz",
        apiName: "fizz",
        primaryKeyPropertyApiName: "fizz",
        properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
      });

      defineLink({
        apiName: "fizzToFoo",
        one: {
          object: object,
          metadata: {
            apiName: "fizzes",
          },
        },
        toMany: {
          object: otherObject,
          metadata: {
            apiName: "foos",
          },
        },
        manyForeignKeyProperty: "bar",
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
          "linkTypes": {
            "fizz-to-foo": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "foos",
                      "displayMetadata": {
                        "displayName": "Foos",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Foos",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.fizz",
                    "objectTypeRidOneSide": "com.palantir.foo",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "bar",
                          "object": "com.palantir.foo",
                        },
                        "to": {
                          "apiName": "bar",
                          "object": "com.palantir.fizz",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "fizzes",
                      "displayMetadata": {
                        "displayName": "Fizzes",
                        "groupDisplayName": "",
                        "pluralDisplayName": "Fizzes",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "fizz-to-foo",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.fizz",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "fizz": {
                          "column": "fizz",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.fizz",
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
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Fizz",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Fizz",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "fizz",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                  "fizz": {
                    "apiName": "fizz",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Fizz",
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
                "titlePropertyTypeRid": "fizz",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.foo",
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
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Foo",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Foo",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "bar": {
                    "apiName": "bar",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Bar",
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
                "titlePropertyTypeRid": "bar",
              },
              "propertySecurityGroupPackagingVersion": {
                "type": "v2",
                "v2": {},
              },
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
    });
  });

  describe("ILTs", () => {
    let a: InterfaceType;
    let b: InterfaceType;

    beforeEach(() => {
      a = defineInterface({ apiName: "A" });
      b = defineInterface({ apiName: "B" });
    });

    it("single link works", () => {
      expect(a).not.toBeUndefined();
      defineInterfaceLinkConstraint({
        from: a,
        toOne: b,
        apiName: "singleLink",
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
                "com.palantir.A": {
                  "interfaceType": {
                    "apiName": "com.palantir.A",
                    "displayMetadata": {
                      "description": "A",
                      "displayName": "A",
                      "icon": {
                        "blueprint": {
                          "color": "#4C90F0",
                          "locator": "layout-hierarchy",
                        },
                        "type": "blueprint",
                      },
                    },
                    "extendsInterfaces": [],
                    "links": [
                      {
                        "cardinality": "SINGLE",
                        "linkedEntityTypeId": {
                          "interfaceType": "com.palantir.B",
                          "type": "interfaceType",
                        },
                        "metadata": {
                          "apiName": "com.palantir.singleLink",
                          "description": "singleLink",
                          "displayName": "singleLink",
                        },
                        "required": true,
                      },
                    ],
                    "properties": [],
                    "propertiesV2": {},
                    "propertiesV3": {},
                    "searchable": true,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
                "com.palantir.B": {
                  "interfaceType": {
                    "apiName": "com.palantir.B",
                    "displayMetadata": {
                      "description": "B",
                      "displayName": "B",
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

    it("many link works", () => {
      defineInterfaceLinkConstraint({
        from: a,
        toMany: b,
        apiName: "manyLink",
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
                "com.palantir.A": {
                  "interfaceType": {
                    "apiName": "com.palantir.A",
                    "displayMetadata": {
                      "description": "A",
                      "displayName": "A",
                      "icon": {
                        "blueprint": {
                          "color": "#4C90F0",
                          "locator": "layout-hierarchy",
                        },
                        "type": "blueprint",
                      },
                    },
                    "extendsInterfaces": [],
                    "links": [
                      {
                        "cardinality": "MANY",
                        "linkedEntityTypeId": {
                          "interfaceType": "com.palantir.B",
                          "type": "interfaceType",
                        },
                        "metadata": {
                          "apiName": "com.palantir.manyLink",
                          "description": "manyLink",
                          "displayName": "manyLink",
                        },
                        "required": true,
                      },
                    ],
                    "properties": [],
                    "propertiesV2": {},
                    "propertiesV3": {},
                    "searchable": true,
                    "status": {
                      "active": {},
                      "type": "active",
                    },
                  },
                },
                "com.palantir.B": {
                  "interfaceType": {
                    "apiName": "com.palantir.B",
                    "displayMetadata": {
                      "description": "B",
                      "displayName": "B",
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
});
