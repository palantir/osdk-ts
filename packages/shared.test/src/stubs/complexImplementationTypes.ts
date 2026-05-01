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

import type {
  InterfaceType,
  ObjectTypeFullMetadata,
  ObjectTypeV2,
} from "@osdk/foundry.ontologies";

export const complexImplementationObjectType: ObjectTypeV2 = {
  apiName: "ComplexImplementationObject",
  displayName: "Complex Implementation Object",
  pluralDisplayName: "Complex Implementation Objects",
  icon: { type: "blueprint", color: "blue", name: "cube" },
  description:
    "Backs ComplexImplementationInterface with one property per impl kind",
  primaryKey: "id",
  titleProperty: "id",
  visibility: "NORMAL",
  properties: {
    id: {
      dataType: { type: "string" },
      rid: "rid",
      typeClasses: [],
    },
    localValue: {
      dataType: { type: "string" },
      rid: "rid",
      typeClasses: [],
    },
    nestedStruct: {
      dataType: {
        type: "struct",
        structFieldTypes: [
          {
            apiName: "label",
            dataType: { type: "string" },
            rid: "ri.struct.label",
            typeClasses: [],
          },
          {
            apiName: "count",
            dataType: { type: "integer" },
            rid: "ri.struct.count",
            typeClasses: [],
          },
        ],
      },
      rid: "rid",
      typeClasses: [],
    },
    multiStruct: {
      dataType: {
        type: "struct",
        structFieldTypes: [
          {
            apiName: "alpha",
            dataType: { type: "string" },
            rid: "ri.struct.alpha",
            typeClasses: [],
          },
          {
            apiName: "beta",
            dataType: { type: "integer" },
            rid: "ri.struct.beta",
            typeClasses: [],
          },
          {
            apiName: "gamma",
            dataType: { type: "string" },
            rid: "ri.struct.gamma",
            typeClasses: [],
          },
        ],
      },
      rid: "rid",
      typeClasses: [],
    },
    arrayValue: {
      dataType: {
        type: "array",
        subType: { type: "integer" },
        reducers: [{ direction: "DESCENDING_NULLS_LAST" }],
      },
      rid: "rid",
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.object-type.complex-implementation-object",
  status: "ACTIVE",
} as const satisfies ObjectTypeV2;

export const ComplexImplementationInterface: InterfaceType = {
  apiName: "ComplexImplementationInterface",
  displayName: "Complex Implementation Interface",
  description: "Interface with one property per implementation kind",
  rid: "ri.interface.main.interface.complex-implementation",
  extendsInterfaces: [],
  allExtendsInterfaces: [],
  implementedByObjectTypes: ["ComplexImplementationObject"],
  links: {},
  allLinks: {},
  properties: {},
  allProperties: {},
  propertiesV2: {
    iLocal: {
      type: "interfaceDefinedPropertyType",
      rid: "ri.interfacePropertyType.main.iLocal",
      apiName: "iLocal",
      displayName: "i Local",
      dataType: { type: "string" },
      requireImplementation: true,
      typeClasses: [],
    },
    iStructField: {
      type: "interfaceDefinedPropertyType",
      rid: "ri.interfacePropertyType.main.iStructField",
      apiName: "iStructField",
      displayName: "i Struct Field",
      dataType: { type: "string" },
      requireImplementation: true,
      typeClasses: [],
    },
    iStruct: {
      type: "interfaceDefinedPropertyType",
      rid: "ri.interfacePropertyType.main.iStruct",
      apiName: "iStruct",
      displayName: "i Struct",
      dataType: {
        type: "struct",
        structFieldTypes: [
          {
            apiName: "theAlpha",
            dataType: { type: "string" },
            rid: "ri.iface.struct.theAlpha",
            typeClasses: [],
          },
          {
            apiName: "theBeta",
            dataType: { type: "integer" },
            rid: "ri.iface.struct.theBeta",
            typeClasses: [],
          },
        ],
      },
      requireImplementation: true,
      typeClasses: [],
    },
    iReduced: {
      type: "interfaceDefinedPropertyType",
      rid: "ri.interfacePropertyType.main.iReduced",
      apiName: "iReduced",
      displayName: "i Reduced",
      dataType: { type: "integer" },
      requireImplementation: true,
      typeClasses: [],
    },
  },
  allPropertiesV2: {
    iLocal: {
      rid: "ri.interfacePropertyType.main.iLocal",
      apiName: "iLocal",
      displayName: "i Local",
      dataType: { type: "string" },
      requireImplementation: true,
    },
    iStructField: {
      rid: "ri.interfacePropertyType.main.iStructField",
      apiName: "iStructField",
      displayName: "i Struct Field",
      dataType: { type: "string" },
      requireImplementation: true,
    },
    iStruct: {
      rid: "ri.interfacePropertyType.main.iStruct",
      apiName: "iStruct",
      displayName: "i Struct",
      dataType: {
        type: "struct",
        structFieldTypes: [
          {
            apiName: "theAlpha",
            dataType: { type: "string" },
            rid: "ri.iface.struct.theAlpha",
            typeClasses: [],
          },
          {
            apiName: "theBeta",
            dataType: { type: "integer" },
            rid: "ri.iface.struct.theBeta",
            typeClasses: [],
          },
        ],
      },
      requireImplementation: true,
    },
    iReduced: {
      rid: "ri.interfacePropertyType.main.iReduced",
      apiName: "iReduced",
      displayName: "i Reduced",
      dataType: { type: "integer" },
      requireImplementation: true,
    },
  },
};

export const complexImplementationObjectTypeWithLinkTypes:
  ObjectTypeFullMetadata = {
    objectType: complexImplementationObjectType,
    linkTypes: [],
    implementsInterfaces: ["ComplexImplementationInterface"],
    implementsInterfaces2: {
      ComplexImplementationInterface: {
        properties: {},
        propertiesV2: {
          iLocal: {
            type: "localPropertyImplementation",
            propertyApiName: "localValue",
          },
          iStructField: {
            type: "structFieldImplementation",
            structFieldOfProperty: {
              propertyApiName: "nestedStruct",
              structFieldApiName: "label",
            },
          },
          iStruct: {
            type: "structImplementation",
            mapping: {
              theAlpha: {
                type: "structFieldOfProperty",
                propertyApiName: "multiStruct",
                structFieldApiName: "alpha",
              },
              theBeta: {
                type: "structFieldOfProperty",
                propertyApiName: "multiStruct",
                structFieldApiName: "beta",
              },
            },
          },
          iReduced: {
            type: "reducedPropertyImplementation",
            implementation: {
              type: "localPropertyImplementation",
              propertyApiName: "arrayValue",
            },
          },
        },
        links: {},
      },
    },
    sharedPropertyTypeMapping: {},
  };
