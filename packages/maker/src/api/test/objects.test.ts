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
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";

describe("Object Types", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("Fails if the api name is invalid", () => {
    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo_with_underscores",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Invalid API name foo_with_underscores. API names must match the regex /^([a-zA-Z][a-zA-Z0-9\\\\-]*)$/.]`,
    );
  });
  it("Fails if any property reference does not exist", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    const sample = defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    expect(() => {
      defineObject({
        titlePropertyApiName: "fizz",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Title property fizz is not defined on object foo]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "fizz",
        properties: { "bar": { type: "string" } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Primary key property fizz does not exist on object foo]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
        implementsInterfaces: [{
          implements: sample,
          propertyMapping: [{
            interfaceProperty: "com.palantir.foo",
            mapsTo: "fizz",
          }],
        }],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: \nOntology Definition Error: Object property mapped to interface does not exist. Object Property Mapped: fizz\n]`,
    );

    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string" } },
        implementsInterfaces: [{
          implements: sample,
          propertyMapping: [{
            interfaceProperty: "com.palantir.fizz",
            mapsTo: "bar",
          }, {
            interfaceProperty: "com.palantir.foo",
            mapsTo: "bar",
          }],
        }],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: \nOntology Definition Error: Interface property com.palantir.fizz referenced in foo object does not exist\n]`,
    );
  });

  it("Objects properly defined", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    const sample = defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        "bar": { type: "string", displayName: "Bar" },
        "arrayProp": {
          type: "string",
          array: true,
          displayName: "Array Property Test",
        },
        "geopoint": {
          type: {
            type: "struct",
            structDefinition: { lat: "double", lng: "double" },
          },
          displayName: "geopoint",
        },
      },
      implementsInterfaces: [{
        implements: sample,
        propertyMapping: [{
          interfaceProperty: "foo",
          mapsTo: "bar",
        }],
      }],
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
          "objectTypes": {
            "com.palantir.foo": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.foo",
                      "propertyMapping": {
                        "arrayProp": {
                          "column": "arrayProp",
                          "type": "column",
                        },
                        "bar": {
                          "column": "bar",
                          "type": "column",
                        },
                        "geopoint": {
                          "struct": {
                            "column": "geopoint",
                            "mapping": {
                              "lat": {
                                "apiName": "lat",
                                "mappings": {},
                              },
                              "lng": {
                                "apiName": "lng",
                                "mappings": {},
                              },
                            },
                          },
                          "type": "struct",
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
                "implementsInterfaces2": [
                  {
                    "interfaceTypeApiName": "com.palantir.interface",
                    "linksV2": {},
                    "properties": {
                      "com.palantir.foo": {
                        "propertyTypeRid": "bar",
                      },
                    },
                    "propertiesV2": {},
                  },
                ],
                "primaryKeys": [
                  "bar",
                ],
                "propertyTypes": {
                  "arrayProp": {
                    "apiName": "arrayProp",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Array Property Test",
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
                  "geopoint": {
                    "apiName": "geopoint",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "geopoint",
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
                      "struct": {
                        "structFields": [
                          {
                            "aliases": [],
                            "apiName": "lat",
                            "displayMetadata": {
                              "description": undefined,
                              "displayName": "lat",
                            },
                            "fieldType": {
                              "double": {},
                              "type": "double",
                            },
                            "typeClasses": [],
                          },
                          {
                            "aliases": [],
                            "apiName": "lng",
                            "displayMetadata": {
                              "description": undefined,
                              "displayName": "lng",
                            },
                            "fieldType": {
                              "double": {},
                              "type": "double",
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
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "bar",
              },
            },
          },
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
  });

  it("Explicit datasource definitions are properly defined", () => {
    const datasetBackedObject = defineObject({
      titlePropertyApiName: "bar",
      displayName: "datasetBackedObject",
      pluralDisplayName: "datasetBackedObject",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: { "bar": { type: "string" } },
      datasource: { type: "dataset" },
    });

    const streamBackedObjectNoRetention = defineObject({
      titlePropertyApiName: "fizz",
      displayName: "streamBackedObjectNoRetention",
      pluralDisplayName: "streamBackedObjectNoRetention",
      apiName: "fizz",
      primaryKeyPropertyApiName: "fizz",
      properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
      datasource: { type: "stream" },
    });

    const streamBackedObjectWithRetention = defineObject({
      titlePropertyApiName: "buzz",
      displayName: "streamBackedObjectWithRetention",
      pluralDisplayName: "streamBackedObjectWithRetention",
      apiName: "buzz",
      primaryKeyPropertyApiName: "buzz",
      properties: { "buzz": { type: "string" } },
      datasource: { type: "stream", retentionPeriod: "PT1H" },
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
          "objectTypes": {
            "com.palantir.buzz": {
              "datasources": [
                {
                  "datasource": {
                    "streamV2": {
                      "propertyMapping": {
                        "buzz": "buzz",
                      },
                      "propertySecurityGroups": undefined,
                      "retentionPolicy": {
                        "time": {
                          "window": "PT1H",
                        },
                        "type": "time",
                      },
                      "streamLocator": "com.palantir.buzz",
                    },
                    "type": "streamV2",
                  },
                  "datasourceName": "com.palantir.buzz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.buzz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "streamBackedObjectWithRetention",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "streamBackedObjectWithRetention",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "buzz",
                ],
                "propertyTypes": {
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
                },
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "buzz",
              },
            },
            "com.palantir.fizz": {
              "datasources": [
                {
                  "datasource": {
                    "streamV2": {
                      "propertyMapping": {
                        "bar": "bar",
                        "fizz": "fizz",
                      },
                      "propertySecurityGroups": undefined,
                      "retentionPolicy": {
                        "none": {},
                        "type": "none",
                      },
                      "streamLocator": "com.palantir.fizz",
                    },
                    "type": "streamV2",
                  },
                  "datasourceName": "com.palantir.fizz",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.fizz",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "streamBackedObjectNoRetention",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "streamBackedObjectNoRetention",
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
                "arePatchesEnabled": false,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.foo",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "datasetBackedObject",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "datasetBackedObject",
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
            },
          },
          "sharedPropertyTypes": {},
        }
      `);
  });

  it("Restricted view datasources are properly defined", () => {
    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "bar",
      properties: {
        "bar": { type: "string" },
      },
      datasource: { type: "restrictedView" },
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
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "restrictedViewV2": {
                        "propertyMapping": {
                          "bar": {
                            "column": "bar",
                            "type": "column",
                          },
                        },
                        "restrictedViewRid": "com.palantir.foo",
                      },
                      "type": "restrictedViewV2",
                    },
                    "datasourceName": "com.palantir.foo",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
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
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
  });

  it("Edit only properties are properly defined", () => {
    const object = defineObject({
      titlePropertyApiName: "bar",
      displayName: "Foo",
      pluralDisplayName: "Foo",
      apiName: "foo",
      primaryKeyPropertyApiName: "fizz",
      properties: {
        "bar": {
          type: "string",
          editOnly: true,
        },
        "fizz": {
          type: "string",
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
            "objectTypes": {
              "com.palantir.foo": {
                "datasources": [
                  {
                    "datasource": {
                      "datasetV2": {
                        "datasetRid": "com.palantir.foo",
                        "propertyMapping": {
                          "bar": {
                            "editOnly": {},
                            "type": "editOnly",
                          },
                          "fizz": {
                            "column": "fizz",
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
                  "titlePropertyTypeRid": "bar",
                },
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
  });

  it("Fails if edit only property is primary key", () => {
    expect(() => {
      defineObject({
        titlePropertyApiName: "bar",
        displayName: "Foo",
        pluralDisplayName: "Foo",
        apiName: "foo",
        primaryKeyPropertyApiName: "bar",
        properties: { "bar": { type: "string", editOnly: true } },
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Primary key property bar on object foo cannot be edit-only]`,
    );
  });

  it("Fail if stream retention period is not ISO 8601 compliant", () => {
    expect(() =>
      defineObject({
        titlePropertyApiName: "buzz",
        displayName: "streamBackedObjectWithRetention",
        pluralDisplayName: "streamBackedObjectWithRetention",
        apiName: "buzz",
        primaryKeyPropertyApiName: "buzz",
        properties: { "buzz": { type: "string" } },
        datasource: {
          type: "stream",
          retentionPeriod: "bad retention period string",
        },
      })
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Retention period "bad retention period string" on object "buzz" is not a valid ISO 8601 duration string]`,
    );
  });

  it("Property-level datasources are properly defined", () => {
    const exampleObject = defineObject({
      titlePropertyApiName: "bar",
      displayName: "exampleObject",
      pluralDisplayName: "exampleObject",
      apiName: "fizz",
      primaryKeyPropertyApiName: "bar",
      properties: {
        "fizz": { type: "mediaReference" },
        "bar": { type: "string" },
      },
      datasource: { type: "stream" },
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
            "objectTypes": {
              "com.palantir.fizz": {
                "datasources": [
                  {
                    "datasource": {
                      "mediaSetView": {
                        "assumedMarkings": [],
                        "mediaSetViewLocator": "com.palantir.fizz.fizz",
                        "properties": [
                          "fizz",
                        ],
                      },
                      "type": "mediaSetView",
                    },
                    "datasourceName": "fizz",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                  {
                    "datasource": {
                      "streamV2": {
                        "propertyMapping": {
                          "bar": "bar",
                          "fizz": "fizz",
                        },
                        "propertySecurityGroups": undefined,
                        "retentionPolicy": {
                          "none": {},
                          "type": "none",
                        },
                        "streamLocator": "com.palantir.fizz",
                      },
                      "type": "streamV2",
                    },
                    "datasourceName": "com.palantir.fizz",
                    "editsConfiguration": {
                      "onlyAllowPrivilegedEdits": false,
                    },
                    "redacted": false,
                  },
                ],
                "entityMetadata": {
                  "arePatchesEnabled": false,
                },
                "objectType": {
                  "allImplementsInterfaces": {},
                  "apiName": "com.palantir.fizz",
                  "displayMetadata": {
                    "description": undefined,
                    "displayName": "exampleObject",
                    "groupDisplayName": undefined,
                    "icon": {
                      "blueprint": {
                        "color": "#2D72D2",
                        "locator": "cube",
                      },
                      "type": "blueprint",
                    },
                    "pluralDisplayName": "exampleObject",
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
                        "mediaReference": {},
                        "type": "mediaReference",
                      },
                      "typeClasses": [],
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
              },
            },
            "sharedPropertyTypes": {},
          },
          "randomnessKey": undefined,
          "valueTypes": {
            "valueTypes": [],
          },
        }
      `);
  });
});
