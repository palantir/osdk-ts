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
import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineDeleteObjectAction } from "../defineDeleteObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineLink } from "../defineLink.js";
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
      datasources: [{ type: "dataset" }],
    });

    const streamBackedObjectNoRetention = defineObject({
      titlePropertyApiName: "fizz",
      displayName: "streamBackedObjectNoRetention",
      pluralDisplayName: "streamBackedObjectNoRetention",
      apiName: "fizz",
      primaryKeyPropertyApiName: "fizz",
      properties: { "fizz": { type: "string" }, "bar": { type: "string" } },
      datasources: [{ type: "stream" }],
    });

    const streamBackedObjectWithRetention = defineObject({
      titlePropertyApiName: "buzz",
      displayName: "streamBackedObjectWithRetention",
      pluralDisplayName: "streamBackedObjectWithRetention",
      apiName: "buzz",
      primaryKeyPropertyApiName: "buzz",
      properties: { "buzz": { type: "string" } },
      datasources: [{ type: "stream", retentionPeriod: "PT1H" }],
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
      datasources: [{ type: "restrictedView" }],
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
        datasources: [{
          type: "stream",
          retentionPeriod: "bad retention period string",
        }],
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
      datasources: [{ type: "stream" }],
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
  it("Derived datasources are properly defined", () => {
    const passenger = defineObject({
      displayName: "Passenger",
      pluralDisplayName: "Passengers",
      apiName: "passenger",
      primaryKeyPropertyApiName: "name",
      titlePropertyApiName: "name",
      editsEnabled: true,
      properties: {
        "name": {
          type: "string",
          displayName: "Name",
        },
        "flight_id": {
          type: "string",
          displayName: "Flight ID",
        },
      },
    });
    const flightToPassengers = defineLink({
      apiName: "flightToPassengersLink",
      one: {
        object: "com.palantir.flight",
        metadata: {
          apiName: "flightFromPassengers",
        },
      },
      toMany: {
        object: passenger.apiName,
        metadata: {
          apiName: "passengersFromFlight",
        },
      },
      manyForeignKeyProperty: "flight_id",
    });
    expect(() => {
      defineObject({
        displayName: "Flight",
        pluralDisplayName: "Flights",
        apiName: "flight",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        properties: {
          id: {
            type: "string",
            displayName: "ID",
          },
          numPassengers: {
            type: "string",
            displayName: "Passengers",
          },
        },
        datasources: [
          { type: "dataset" },
          {
            type: "derived",
            linkDefinition: [{
              linkType: flightToPassengers,
            }],
            propertyMapping: {
              numPassengers: {
                type: "collectList",
                property: "name",
                limit: 100,
              },
            },
          },
        ],
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Property 'numPassengers' on object 'flight' is not collectible]`,
    );
    const flight = defineObject({
      displayName: "Flight",
      pluralDisplayName: "Flights",
      apiName: "flight",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      editsEnabled: true,
      properties: {
        id: {
          type: "string",
          displayName: "ID",
        },
        passengersList: {
          type: "string",
          array: true,
          displayName: "Passengers",
        },
      },
      datasources: [
        { type: "dataset" },
        {
          type: "derived",
          linkDefinition: [{
            linkType: flightToPassengers,
          }],
          propertyMapping: {
            passengersList: {
              type: "collectList",
              property: "name",
              limit: 100,
            },
          },
        },
      ],
    });
    defineCreateObjectAction({
      displayName: "Create flight",
      objectType: flight,
    });
    defineDeleteObjectAction({
      displayName: "Delete flight",
      objectType: flight,
    });
    defineCreateObjectAction({
      displayName: "Create passenger",
      objectType: passenger,
    });
    defineDeleteObjectAction({
      displayName: "Delete passenger",
      objectType: passenger,
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
          "actionTypes": {
            "com.palantir.create-object-flight": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "addObjectRule": {
                          "objectTypeId": "com.palantir.flight",
                          "propertyValues": {
                            "id": {
                              "parameterId": "id",
                              "type": "parameterId",
                            },
                          },
                          "structFieldValues": {},
                        },
                        "type": "addObjectRule",
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
                      "id": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "textInput": {},
                              "type": "textInput",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "text": {
                                "text": {},
                                "type": "text",
                              },
                              "type": "text",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                    },
                    "sectionValidations": {},
                  },
                },
                "metadata": {
                  "apiName": "com.palantir.create-object-flight",
                  "displayMetadata": {
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
                    "displayName": "Create flight",
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
                    "affectedInterfaceTypes": [],
                    "affectedLinkTypes": [],
                    "affectedObjectTypes": [
                      "com.palantir.flight",
                    ],
                    "typeGroups": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "id",
                  ],
                  "parameters": {
                    "id": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "ID",
                        "typeClasses": [],
                      },
                      "id": "id",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "com.palantir.create-object-passenger": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "addObjectRule": {
                          "objectTypeId": "com.palantir.passenger",
                          "propertyValues": {
                            "flight_id": {
                              "parameterId": "flight_id",
                              "type": "parameterId",
                            },
                            "name": {
                              "parameterId": "name",
                              "type": "parameterId",
                            },
                          },
                          "structFieldValues": {},
                        },
                        "type": "addObjectRule",
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
                      "flight_id": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "textInput": {},
                              "type": "textInput",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "text": {
                                "text": {},
                                "type": "text",
                              },
                              "type": "text",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "textInput": {},
                              "type": "textInput",
                            },
                            "visibility": {
                              "editable": {},
                              "type": "editable",
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "text": {
                                "text": {},
                                "type": "text",
                              },
                              "type": "text",
                            },
                            "required": {
                              "notRequired": {},
                              "type": "notRequired",
                            },
                          },
                        },
                      },
                    },
                    "sectionValidations": {},
                  },
                },
                "metadata": {
                  "apiName": "com.palantir.create-object-passenger",
                  "displayMetadata": {
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
                    "displayName": "Create passenger",
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
                    "affectedInterfaceTypes": [],
                    "affectedLinkTypes": [],
                    "affectedObjectTypes": [
                      "com.palantir.passenger",
                    ],
                    "typeGroups": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "name",
                    "flight_id",
                  ],
                  "parameters": {
                    "flight_id": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Flight ID",
                        "typeClasses": [],
                      },
                      "id": "flight_id",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                    "name": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Name",
                        "typeClasses": [],
                      },
                      "id": "name",
                      "type": {
                        "string": {},
                        "type": "string",
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "com.palantir.delete-object-flight": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                        "type": "deleteObjectRule",
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
                      "objectToDeleteParameter": {
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
                              "objectQuery": {
                                "objectQuery": {},
                                "type": "objectQuery",
                              },
                              "type": "objectQuery",
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
                  "apiName": "com.palantir.delete-object-flight",
                  "displayMetadata": {
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
                    "displayName": "Delete flight",
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
                    "affectedInterfaceTypes": [],
                    "affectedLinkTypes": [],
                    "affectedObjectTypes": [
                      "com.palantir.flight",
                    ],
                    "typeGroups": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Delete object",
                        "typeClasses": [],
                      },
                      "id": "objectToDeleteParameter",
                      "type": {
                        "objectReference": {
                          "objectTypeId": "com.palantir.flight",
                        },
                        "type": "objectReference",
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
            "com.palantir.delete-object-passenger": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                        "type": "deleteObjectRule",
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
                      "objectToDeleteParameter": {
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
                              "objectQuery": {
                                "objectQuery": {},
                                "type": "objectQuery",
                              },
                              "type": "objectQuery",
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
                  "apiName": "com.palantir.delete-object-passenger",
                  "displayMetadata": {
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
                    "displayName": "Delete passenger",
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
                    "affectedInterfaceTypes": [],
                    "affectedLinkTypes": [],
                    "affectedObjectTypes": [
                      "com.palantir.passenger",
                    ],
                    "typeGroups": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "displayMetadata": {
                        "description": "",
                        "displayName": "Delete object",
                        "typeClasses": [],
                      },
                      "id": "objectToDeleteParameter",
                      "type": {
                        "objectReference": {
                          "objectTypeId": "com.palantir.passenger",
                        },
                        "type": "objectReference",
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "active": {},
                    "type": "active",
                  },
                },
              },
            },
          },
          "blockPermissionInformation": {
            "actionTypes": {},
            "linkTypes": {},
            "objectTypes": {},
          },
          "interfaceTypes": {},
          "linkTypes": {
            "flight-to-passengers-link": {
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
              "linkType": {
                "definition": {
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_MANY",
                    "manyToOneLinkMetadata": {
                      "apiName": "passengersFromFlight",
                      "displayMetadata": {
                        "displayName": "PassengersFromFlight",
                        "groupDisplayName": "",
                        "pluralDisplayName": "PassengersFromFlights",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "com.palantir.passenger",
                    "objectTypeRidOneSide": "com.palantir.flight",
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "id",
                          "object": "com.palantir.flight",
                        },
                        "to": {
                          "apiName": "flight_id",
                          "object": "com.palantir.passenger",
                        },
                      },
                    ],
                    "oneToManyLinkMetadata": {
                      "apiName": "flightFromPassengers",
                      "displayMetadata": {
                        "displayName": "FlightFromPassengers",
                        "groupDisplayName": "",
                        "pluralDisplayName": "FlightFromPassengers",
                        "visibility": "NORMAL",
                      },
                      "typeClasses": [],
                    },
                  },
                  "type": "oneToMany",
                },
                "id": "flight-to-passengers-link",
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
              },
            },
          },
          "objectTypes": {
            "com.palantir.flight": {
              "datasources": [
                {
                  "datasource": {
                    "derived": {
                      "definition": {
                        "aggregatedProperties": {
                          "linkDefinition": {
                            "multiHopLink": {
                              "steps": [
                                {
                                  "searchAround": {
                                    "linkTypeIdentifier": {
                                      "linkType": "flight-to-passengers-link",
                                      "type": "linkType",
                                    },
                                    "linkTypeSide": "SOURCE",
                                  },
                                  "type": "searchAround",
                                },
                              ],
                            },
                            "type": "multiHopLink",
                          },
                          "propertyTypeMapping": {
                            "passengersList": {
                              "collectList": {
                                "limit": 100,
                                "linkedProperty": {
                                  "propertyType": "name",
                                  "type": "propertyType",
                                },
                              },
                              "type": "collectList",
                            },
                          },
                        },
                        "type": "aggregatedProperties",
                      },
                    },
                    "type": "derived",
                  },
                  "datasourceName": "com.palantir.flight.derived.0",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.flight",
                      "propertyMapping": {
                        "id": {
                          "column": "id",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.flight",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": true,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.flight",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Flight",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Flights",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "id",
                ],
                "propertyTypes": {
                  "id": {
                    "apiName": "id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "ID",
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
                  "passengersList": {
                    "apiName": "passengersList",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Passengers",
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
                },
                "redacted": false,
                "status": {
                  "active": {},
                  "type": "active",
                },
                "titlePropertyTypeRid": "id",
              },
            },
            "com.palantir.passenger": {
              "datasources": [
                {
                  "datasource": {
                    "datasetV2": {
                      "datasetRid": "com.palantir.passenger",
                      "propertyMapping": {
                        "flight_id": {
                          "column": "flight_id",
                          "type": "column",
                        },
                        "name": {
                          "column": "name",
                          "type": "column",
                        },
                      },
                    },
                    "type": "datasetV2",
                  },
                  "datasourceName": "com.palantir.passenger",
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": true,
              },
              "objectType": {
                "allImplementsInterfaces": {},
                "apiName": "com.palantir.passenger",
                "displayMetadata": {
                  "description": undefined,
                  "displayName": "Passenger",
                  "groupDisplayName": undefined,
                  "icon": {
                    "blueprint": {
                      "color": "#2D72D2",
                      "locator": "cube",
                    },
                    "type": "blueprint",
                  },
                  "pluralDisplayName": "Passengers",
                  "visibility": "NORMAL",
                },
                "implementsInterfaces2": [],
                "primaryKeys": [
                  "name",
                ],
                "propertyTypes": {
                  "flight_id": {
                    "apiName": "flight_id",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Flight ID",
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
                  "name": {
                    "apiName": "name",
                    "baseFormatter": undefined,
                    "dataConstraints": undefined,
                    "displayMetadata": {
                      "description": undefined,
                      "displayName": "Name",
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
                "titlePropertyTypeRid": "name",
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
