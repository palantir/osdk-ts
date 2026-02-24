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

import { describe, expect, it } from "vitest";
import { OntologyIrToFullMetadataConverter } from "./OntologyIrToFullMetadataConverter.js";

describe(OntologyIrToFullMetadataConverter, () => {
  it("should convert ontology IR to full metadata", async () => {
    const result = OntologyIrToFullMetadataConverter
      .getFullMetadataFromIr(
        {
          "objectTypes": {
            "Dc3DistributionCenterProposal": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Distribution Center Proposal",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Distribution Center Proposals",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "name": {
                    "apiName": "name",
                    "displayMetadata": {
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "price": {
                    "apiName": "price",
                    "displayMetadata": {
                      "displayName": "Price",
                      "description":
                        "The price of the distribution center proposal in USD",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "float",
                      "float": {},
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "proposedLocation": {
                    "apiName": "proposedLocation",
                    "displayMetadata": {
                      "displayName": "Proposed Location",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "geohash",
                      "geohash": {},
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "name",
                "apiName": "Dc3DistributionCenterProposal",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3DistributionCenterProposal",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3DistributionCenterProposal",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "name": {
                          "type": "column",
                          "column": "name",
                        },
                        "price": {
                          "type": "column",
                          "column": "price",
                        },
                        "proposedLocation": {
                          "type": "column",
                          "column": "proposedLocation",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
            "Dc3Restaurant": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Restaurant",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Restaurants",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "name": {
                    "apiName": "name",
                    "displayMetadata": {
                      "displayName": "Name",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "location": {
                    "apiName": "location",
                    "displayMetadata": {
                      "displayName": "Location",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "geohash",
                      "geohash": {},
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "rating": {
                    "apiName": "rating",
                    "displayMetadata": {
                      "displayName": "Rating",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "integer",
                      "integer": {},
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "name",
                "apiName": "Dc3Restaurant",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3Restaurant",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3Restaurant",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "name": {
                          "type": "column",
                          "column": "name",
                        },
                        "location": {
                          "type": "column",
                          "column": "location",
                        },
                        "rating": {
                          "type": "column",
                          "column": "rating",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
            "Dc3DistributionRouteAnalysis": {
              "objectType": {
                "displayMetadata": {
                  "displayName": "[DC3] Distribution Route Analysis",
                  "icon": {
                    "type": "blueprint",
                    "blueprint": {
                      "locator": "cube",
                      "color": "#2D72D2",
                    },
                  },
                  "pluralDisplayName": "[DC3] Distribution Route Analyses",
                  "visibility": "NORMAL",
                },
                "primaryKeys": [
                  "primaryKey_",
                ],
                "propertyTypes": {
                  "primaryKey_": {
                    "apiName": "primaryKey_",
                    "displayMetadata": {
                      "displayName": "Primary Key",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "distributionProposal": {
                    "apiName": "distributionProposal",
                    "displayMetadata": {
                      "displayName": "Distribution Proposal",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "restaurant": {
                    "apiName": "restaurant",
                    "displayMetadata": {
                      "displayName": "Restaurant",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                  "timeMinutes": {
                    "apiName": "timeMinutes",
                    "displayMetadata": {
                      "displayName": "Time (Minutes)",
                      "visibility": "NORMAL",
                    },
                    "indexedForSearch": true,
                    "type": {
                      "type": "string",
                      "string": {
                        "isLongText": false,
                        "supportsEfficientLeadingWildcard": false,
                        "supportsExactMatching": true,
                      },
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
                    "status": {
                      "type": "active",
                      "active": {},
                    },
                  },
                },
                "titlePropertyTypeRid": "primaryKey_",
                "apiName": "Dc3DistributionRouteAnalysis",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
                "implementsInterfaces2": [],
                "allImplementsInterfaces": {},
              },
              "datasources": [
                {
                  "datasourceName": "Dc3DistributionRouteAnalysis",
                  "datasource": {
                    "type": "datasetV2",
                    "datasetV2": {
                      "datasetRid": "Dc3DistributionRouteAnalysis",
                      "propertyMapping": {
                        "primaryKey_": {
                          "type": "column",
                          "column": "primaryKey_",
                        },
                        "distributionProposal": {
                          "type": "column",
                          "column": "distributionProposal",
                        },
                        "restaurant": {
                          "type": "column",
                          "column": "restaurant",
                        },
                        "timeMinutes": {
                          "type": "column",
                          "column": "timeMinutes",
                        },
                      },
                    },
                  },
                  "editsConfiguration": {
                    "onlyAllowPrivilegedEdits": false,
                  },
                  "redacted": false,
                },
              ],
              "entityMetadata": {
                "arePatchesEnabled": false,
                "aliases": [],
              },
            },
          },
          "sharedPropertyTypes": {},
          "interfaceTypes": {},
          "linkTypes": {
            "Dc3RestaurantToDistributionRoute": {
              "linkType": {
                "definition": {
                  "type": "oneToMany",
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_ONE",
                    "manyToOneLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Route Analysis",
                        "pluralDisplayName": "Distribution Route Analyses",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionRouteAnalysis",
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "Dc3DistributionRouteAnalysis",
                    "objectTypeRidOneSide": "Dc3Restaurant",
                    "oneToManyLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "pluralDisplayName": "Restaurants",
                        "visibility": "NORMAL",
                      },
                      "apiName": "restaurant",
                      "typeClasses": [],
                    },
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "primaryKey_",
                          "object": "Dc3Restaurant",
                        },
                        "to": {
                          "apiName": "restaurant",
                          "object": "Dc3DistributionRouteAnalysis",
                        },
                      },
                    ],
                  },
                },
                "id": "Dc3RestaurantToDistributionRoute",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
              },
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
            },
            "Dc3DistributionCenterProposalToDistributionRoute": {
              "linkType": {
                "definition": {
                  "type": "oneToMany",
                  "oneToMany": {
                    "cardinalityHint": "ONE_TO_ONE",
                    "manyToOneLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Route Analysis",
                        "pluralDisplayName": "Distribution Route Analyses",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionRouteAnalysis",
                      "typeClasses": [],
                    },
                    "objectTypeRidManySide": "Dc3DistributionRouteAnalysis",
                    "objectTypeRidOneSide": "Dc3DistributionCenterProposal",
                    "oneToManyLinkMetadata": {
                      "displayMetadata": {
                        "displayName": "Distribution Center Proposal",
                        "pluralDisplayName": "Distribution Center Proposals",
                        "visibility": "NORMAL",
                      },
                      "apiName": "distributionCenterProposal",
                      "typeClasses": [],
                    },
                    "oneSidePrimaryKeyToManySidePropertyMapping": [
                      {
                        "from": {
                          "apiName": "primaryKey_",
                          "object": "Dc3DistributionCenterProposal",
                        },
                        "to": {
                          "apiName": "distributionProposal",
                          "object": "Dc3DistributionRouteAnalysis",
                        },
                      },
                    ],
                  },
                },
                "id": "Dc3DistributionCenterProposalToDistributionRoute",
                "status": {
                  "type": "active",
                  "active": {},
                },
                "redacted": false,
              },
              "datasources": [],
              "entityMetadata": {
                "arePatchesEnabled": false,
              },
            },
          },
          "actionTypes": {
            "create-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "price": {
                              "type": "parameterId",
                              "parameterId": "price",
                            },
                            "proposedLocation": {
                              "type": "parameterId",
                              "parameterId": "proposedLocation",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "price": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "proposedLocation": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3distribution-center-proposal",
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
                    "displayName": "Create [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "name",
                    "price",
                    "proposedLocation",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "price": {
                      "id": "price",
                      "type": {
                        "type": "double",
                        "double": {},
                      },
                      "displayMetadata": {
                        "displayName": "Price",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "proposedLocation": {
                      "id": "proposedLocation",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Proposed Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "price": {
                              "type": "parameterId",
                              "parameterId": "price",
                            },
                            "proposedLocation": {
                              "type": "parameterId",
                              "parameterId": "proposedLocation",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "price": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "proposedLocation": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3distribution-center-proposal",
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
                    "displayName": "Modify [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "name",
                    "price",
                    "proposedLocation",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "price": {
                      "id": "price",
                      "type": {
                        "type": "double",
                        "double": {},
                      },
                      "displayMetadata": {
                        "displayName": "Price",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "proposedLocation": {
                      "id": "proposedLocation",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Proposed Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3distribution-center-proposal": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
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
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3distribution-center-proposal",
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
                    "displayName": "Delete [DC3] Distribution Center Proposal",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionCenterProposal",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "create-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3Restaurant",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "location": {
                              "type": "parameterId",
                              "parameterId": "location",
                            },
                            "rating": {
                              "type": "parameterId",
                              "parameterId": "rating",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "location": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "rating": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3restaurant",
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
                    "displayName": "Create [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "name",
                    "location",
                    "rating",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "location": {
                      "id": "location",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "rating": {
                      "id": "rating",
                      "type": {
                        "type": "integer",
                        "integer": {},
                      },
                      "displayMetadata": {
                        "displayName": "Rating",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "name": {
                              "type": "parameterId",
                              "parameterId": "name",
                            },
                            "location": {
                              "type": "parameterId",
                              "parameterId": "location",
                            },
                            "rating": {
                              "type": "parameterId",
                              "parameterId": "rating",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "name": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "location": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "geoshape",
                              "geoshape": {
                                "type": "geoshape",
                                "geoshape": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "rating": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "numericInput",
                              "numericInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "range",
                              "range": {
                                "type": "range",
                                "range": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3restaurant",
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
                    "displayName": "Modify [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "name",
                    "location",
                    "rating",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3Restaurant",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "name": {
                      "id": "name",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Name",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "location": {
                      "id": "location",
                      "type": {
                        "type": "geoshape",
                        "geoshape": {},
                      },
                      "displayMetadata": {
                        "displayName": "Location",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "rating": {
                      "id": "rating",
                      "type": {
                        "type": "integer",
                        "integer": {},
                      },
                      "displayMetadata": {
                        "displayName": "Rating",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3restaurant": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
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
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3restaurant",
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
                    "displayName": "Delete [DC3] Restaurant",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3Restaurant",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "create-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "addObjectRule",
                        "addObjectRule": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "distributionProposal": {
                              "type": "parameterId",
                              "parameterId": "distributionProposal",
                            },
                            "restaurant": {
                              "type": "parameterId",
                              "parameterId": "restaurant",
                            },
                            "timeMinutes": {
                              "type": "parameterId",
                              "parameterId": "timeMinutes",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "distributionProposal": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "restaurant": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "timeMinutes": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "create-object-dc3distribution-route-analysis",
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
                    "displayName": "Create [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "primaryKey_",
                    "distributionProposal",
                    "restaurant",
                    "timeMinutes",
                  ],
                  "parameters": {
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "distributionProposal": {
                      "id": "distributionProposal",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Distribution Proposal",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "restaurant": {
                      "id": "restaurant",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "timeMinutes": {
                      "id": "timeMinutes",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Time (Minutes)",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "modify-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "modifyObjectRule",
                        "modifyObjectRule": {
                          "objectToModify": "objectToModifyParameter",
                          "propertyValues": {
                            "primaryKey_": {
                              "type": "parameterId",
                              "parameterId": "primaryKey_",
                            },
                            "distributionProposal": {
                              "type": "parameterId",
                              "parameterId": "distributionProposal",
                            },
                            "restaurant": {
                              "type": "parameterId",
                              "parameterId": "restaurant",
                            },
                            "timeMinutes": {
                              "type": "parameterId",
                              "parameterId": "timeMinutes",
                            },
                          },
                          "structFieldValues": {},
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
                          },
                          "displayMetadata": {
                            "failureMessage": "",
                            "typeClasses": [],
                          },
                        },
                      },
                    },
                    "parameterValidations": {
                      "objectToModifyParameter": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "primaryKey_": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "distributionProposal": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "restaurant": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                      "timeMinutes": {
                        "conditionalOverrides": [],
                        "defaultValidation": {
                          "display": {
                            "renderHint": {
                              "type": "textInput",
                              "textInput": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "text",
                              "text": {
                                "type": "text",
                                "text": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "modify-object-dc3distribution-route-analysis",
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
                    "displayName": "Modify [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToModifyParameter",
                    "primaryKey_",
                    "distributionProposal",
                    "restaurant",
                    "timeMinutes",
                  ],
                  "parameters": {
                    "objectToModifyParameter": {
                      "id": "objectToModifyParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Modify object",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "primaryKey_": {
                      "id": "primaryKey_",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Primary Key",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "distributionProposal": {
                      "id": "distributionProposal",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Distribution Proposal",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "restaurant": {
                      "id": "restaurant",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Restaurant",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                    "timeMinutes": {
                      "id": "timeMinutes",
                      "type": {
                        "type": "string",
                        "string": {},
                      },
                      "displayMetadata": {
                        "displayName": "Time (Minutes)",
                        "description": "",
                        "typeClasses": [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
                  },
                },
              },
            },
            "delete-object-dc3distribution-route-analysis": {
              "actionType": {
                "actionTypeLogic": {
                  "logic": {
                    "rules": [
                      {
                        "type": "deleteObjectRule",
                        "deleteObjectRule": {
                          "objectToDelete": "objectToDeleteParameter",
                        },
                      },
                    ],
                  },
                  "validation": {
                    "sectionValidations": {},
                    "actionTypeLevelValidation": {
                      "rules": {
                        "0": {
                          "condition": {
                            "type": "true",
                            "true": {},
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
                              "type": "dropdown",
                              "dropdown": {},
                            },
                            "visibility": {
                              "type": "editable",
                              "editable": {},
                            },
                          },
                          "validation": {
                            "allowedValues": {
                              "type": "objectQuery",
                              "objectQuery": {
                                "type": "objectQuery",
                                "objectQuery": {},
                              },
                            },
                            "required": {
                              "type": "required",
                              "required": {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                "metadata": {
                  "apiName": "delete-object-dc3distribution-route-analysis",
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
                    "displayName": "Delete [DC3] Distribution Route Analysis",
                    "icon": {
                      "type": "blueprint",
                      "blueprint": {
                        "locator": "edit",
                        "color": "#000000",
                      },
                    },
                    "successMessage": [],
                    "typeClasses": [],
                  },
                  "formContentOrdering": [],
                  "parameterOrdering": [
                    "objectToDeleteParameter",
                  ],
                  "parameters": {
                    "objectToDeleteParameter": {
                      "id": "objectToDeleteParameter",
                      "type": {
                        "type": "objectReference",
                        "objectReference": {
                          "objectTypeId": "Dc3DistributionRouteAnalysis",
                        },
                      },
                      "displayMetadata": {
                        "displayName": "Delete object",
                        "description": "",
                        typeClasses: [],
                      },
                    },
                  },
                  "sections": {},
                  "status": {
                    "type": "active",
                    "active": {},
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
        } as const,
      );

    expect(result).toMatchInlineSnapshot(`
      {
        "actionTypes": {
          "create-object-dc3distribution-center-proposal": {
            "apiName": "create-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Create [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "createObject",
              },
            ],
            "parameters": {
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "price": {
                "dataType": {
                  "type": "double",
                },
                "description": "",
                "displayName": "Price",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "proposedLocation": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Proposed Location",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "create-object-dc3distribution-route-analysis": {
            "apiName": "create-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Create [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "createObject",
              },
            ],
            "parameters": {
              "distributionProposal": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Distribution Proposal",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "restaurant": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Restaurant",
                "required": true,
                "typeClasses": [],
              },
              "timeMinutes": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Time (Minutes)",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "create-object-dc3restaurant": {
            "apiName": "create-object-dc3restaurant",
            "description": "",
            "displayName": "Create [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "createObject",
              },
            ],
            "parameters": {
              "location": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Location",
                "required": true,
                "typeClasses": [],
              },
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "rating": {
                "dataType": {
                  "type": "integer",
                },
                "description": "",
                "displayName": "Rating",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.create-object-dc3restaurant",
            "status": "ACTIVE",
          },
          "delete-object-dc3distribution-center-proposal": {
            "apiName": "delete-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Delete [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionCenterProposal",
                  "objectTypeApiName": "Dc3DistributionCenterProposal",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "delete-object-dc3distribution-route-analysis": {
            "apiName": "delete-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Delete [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionRouteAnalysis",
                  "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "delete-object-dc3restaurant": {
            "apiName": "delete-object-dc3restaurant",
            "description": "",
            "displayName": "Delete [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "deleteObject",
              },
            ],
            "parameters": {
              "objectToDeleteParameter": {
                "dataType": {
                  "objectApiName": "Dc3Restaurant",
                  "objectTypeApiName": "Dc3Restaurant",
                  "type": "object",
                },
                "description": "",
                "displayName": "Delete object",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.delete-object-dc3restaurant",
            "status": "ACTIVE",
          },
          "modify-object-dc3distribution-center-proposal": {
            "apiName": "modify-object-dc3distribution-center-proposal",
            "description": "",
            "displayName": "Modify [DC3] Distribution Center Proposal",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionCenterProposal",
                  "objectTypeApiName": "Dc3DistributionCenterProposal",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "price": {
                "dataType": {
                  "type": "double",
                },
                "description": "",
                "displayName": "Price",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "proposedLocation": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Proposed Location",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3distribution-center-proposal",
            "status": "ACTIVE",
          },
          "modify-object-dc3distribution-route-analysis": {
            "apiName": "modify-object-dc3distribution-route-analysis",
            "description": "",
            "displayName": "Modify [DC3] Distribution Route Analysis",
            "operations": [
              {
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "distributionProposal": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Distribution Proposal",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3DistributionRouteAnalysis",
                  "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "restaurant": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Restaurant",
                "required": true,
                "typeClasses": [],
              },
              "timeMinutes": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Time (Minutes)",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3distribution-route-analysis",
            "status": "ACTIVE",
          },
          "modify-object-dc3restaurant": {
            "apiName": "modify-object-dc3restaurant",
            "description": "",
            "displayName": "Modify [DC3] Restaurant",
            "operations": [
              {
                "objectTypeApiName": "Dc3Restaurant",
                "type": "modifyObject",
              },
            ],
            "parameters": {
              "location": {
                "dataType": {
                  "type": "geoshape",
                },
                "description": "",
                "displayName": "Location",
                "required": true,
                "typeClasses": [],
              },
              "name": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Name",
                "required": true,
                "typeClasses": [],
              },
              "objectToModifyParameter": {
                "dataType": {
                  "objectApiName": "Dc3Restaurant",
                  "objectTypeApiName": "Dc3Restaurant",
                  "type": "object",
                },
                "description": "",
                "displayName": "Modify object",
                "required": true,
                "typeClasses": [],
              },
              "primaryKey_": {
                "dataType": {
                  "type": "string",
                },
                "description": "",
                "displayName": "Primary Key",
                "required": true,
                "typeClasses": [],
              },
              "rating": {
                "dataType": {
                  "type": "integer",
                },
                "description": "",
                "displayName": "Rating",
                "required": true,
                "typeClasses": [],
              },
            },
            "rid": "ri.action.modify-object-dc3restaurant",
            "status": "ACTIVE",
          },
        },
        "interfaceTypes": {},
        "objectTypes": {
          "Dc3DistributionCenterProposal": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "distributionRouteAnalysis",
                "cardinality": "MANY",
                "displayName": "Distribution Route Analysis",
                "linkTypeRid": "ri.Dc3DistributionCenterProposal.Dc3DistributionCenterProposalToDistributionRoute.Dc3DistributionRouteAnalysis",
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "apiName": "Dc3DistributionCenterProposal",
              "description": undefined,
              "displayName": "[DC3] Distribution Center Proposal",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "name": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Name",
                  "rid": "ri.Dc3DistributionCenterProposal.name",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "price": {
                  "dataType": {
                    "type": "float",
                  },
                  "description": "The price of the distribution center proposal in USD",
                  "displayName": "Price",
                  "rid": "ri.Dc3DistributionCenterProposal.price",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3DistributionCenterProposal.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "proposedLocation": {
                  "dataType": {
                    "type": "geopoint",
                  },
                  "description": undefined,
                  "displayName": "Proposed Location",
                  "rid": "ri.Dc3DistributionCenterProposal.proposedLocation",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3DistributionCenterProposal",
              "status": "ACTIVE",
              "titleProperty": "name",
            },
            "sharedPropertyTypeMapping": {},
          },
          "Dc3DistributionRouteAnalysis": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "restaurant",
                "cardinality": "ONE",
                "displayName": "Restaurant",
                "foreignKeyPropertyApiName": "restaurant",
                "linkTypeRid": "ri.Dc3Restaurant.Dc3RestaurantToDistributionRoute.Dc3DistributionRouteAnalysis",
                "objectTypeApiName": "Dc3Restaurant",
                "status": "ACTIVE",
              },
              {
                "apiName": "distributionCenterProposal",
                "cardinality": "ONE",
                "displayName": "Distribution Center Proposal",
                "foreignKeyPropertyApiName": "distributionProposal",
                "linkTypeRid": "ri.Dc3DistributionCenterProposal.Dc3DistributionCenterProposalToDistributionRoute.Dc3DistributionRouteAnalysis",
                "objectTypeApiName": "Dc3DistributionCenterProposal",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "apiName": "Dc3DistributionRouteAnalysis",
              "description": undefined,
              "displayName": "[DC3] Distribution Route Analysis",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "distributionProposal": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Distribution Proposal",
                  "rid": "ri.Dc3DistributionRouteAnalysis.distributionProposal",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3DistributionRouteAnalysis.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "restaurant": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Restaurant",
                  "rid": "ri.Dc3DistributionRouteAnalysis.restaurant",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "timeMinutes": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Time (Minutes)",
                  "rid": "ri.Dc3DistributionRouteAnalysis.timeMinutes",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3DistributionRouteAnalysis",
              "status": "ACTIVE",
              "titleProperty": "primaryKey_",
            },
            "sharedPropertyTypeMapping": {},
          },
          "Dc3Restaurant": {
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "linkTypes": [
              {
                "apiName": "distributionRouteAnalysis",
                "cardinality": "MANY",
                "displayName": "Distribution Route Analysis",
                "linkTypeRid": "ri.Dc3Restaurant.Dc3RestaurantToDistributionRoute.Dc3DistributionRouteAnalysis",
                "objectTypeApiName": "Dc3DistributionRouteAnalysis",
                "status": "ACTIVE",
              },
            ],
            "objectType": {
              "apiName": "Dc3Restaurant",
              "description": undefined,
              "displayName": "[DC3] Restaurant",
              "icon": {
                "color": "#2D72D2",
                "name": "cube",
                "type": "blueprint",
              },
              "pluralDisplayName": "",
              "primaryKey": "primaryKey_",
              "properties": {
                "location": {
                  "dataType": {
                    "type": "geopoint",
                  },
                  "description": undefined,
                  "displayName": "Location",
                  "rid": "ri.Dc3Restaurant.location",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "name": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Name",
                  "rid": "ri.Dc3Restaurant.name",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "primaryKey_": {
                  "dataType": {
                    "type": "string",
                  },
                  "description": undefined,
                  "displayName": "Primary Key",
                  "rid": "ri.Dc3Restaurant.primaryKey_",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
                "rating": {
                  "dataType": {
                    "type": "integer",
                  },
                  "description": undefined,
                  "displayName": "Rating",
                  "rid": "ri.Dc3Restaurant.rating",
                  "status": {
                    "type": "active",
                  },
                  "typeClasses": [],
                  "visibility": "NORMAL",
                },
              },
              "rid": "ri.Dc3Restaurant",
              "status": "ACTIVE",
              "titleProperty": "name",
            },
            "sharedPropertyTypeMapping": {},
          },
        },
        "ontology": {
          "apiName": "ontology",
          "description": "",
          "displayName": "ontology",
          "rid": "ri.00000",
        },
        "queryTypes": {},
        "sharedPropertyTypes": {},
        "valueTypes": {},
      }
    `);
  });
});
