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
  InterfacePropertyApiName,
  InterfacePropertyTypeRid,
  InterfaceType,
} from "@osdk/foundry.ontologies";
import { birthDateIdp, idp } from "./idps.js";
import { ageSpt, firstNameSpt, fooSpt, lastNameSpt } from "./spts.js";

export const BarInterface: InterfaceType = {
  apiName: "BarInterface",
  description: "Interface for Bar",
  displayName: "Bar Interface",
  rid: "ri.interface.main.interface.2",
  extendsInterfaces: [],
  properties: {},
  allProperties: {},
  propertiesV2: {},
  allPropertiesV2: {},
  links: {
    "toFoo": {
      rid: "ri.interface.link.main.1",
      apiName: "toFoo",
      linkedEntityApiName: {
        type: "interfaceTypeApiName",
        apiName: "FooInterface",
      },
      displayName: "foos",
      cardinality: "MANY",
      required: true,
    },
  },
  implementedByObjectTypes: [],
  allExtendsInterfaces: [],
  allLinks: {
    "toFoo": {
      rid: "ri.interface.link.main.1",
      apiName: "toFoo",
      linkedEntityApiName: {
        type: "interfaceTypeApiName",
        apiName: "FooInterface",
      },
      displayName: "foos",
      cardinality: "MANY",
      required: true,
    },
  },
};

export const FooInterface: InterfaceType = {
  apiName: "FooInterface",
  description: "Interface for Foo",
  displayName: "Foo Interface",
  rid: "ri.interface.main.interface.1",
  extendsInterfaces: [],
  properties: {
    fooSpt: {
      ...fooSpt,
      required: true,
    },
  },
  propertiesV2: {
    fooSpt: {
      ...fooSpt,
      type: "interfaceSharedPropertyType",
      required: true,
    },
    fooIdp: {
      ...idp,
      type: "interfaceDefinedPropertyType",
    },
  },
  links: {
    "toBar": {
      rid: "ri.interface.link.main.2",
      apiName: "toBar",
      linkedEntityApiName: {
        type: "interfaceTypeApiName",
        apiName: "BarInterface",
      },
      displayName: "bars",
      cardinality: "MANY",
      required: true,
    },
  },
  implementedByObjectTypes: ["Employee", "Person"],
  allProperties: {
    fooSpt: {
      ...fooSpt,
      required: true,
    },
  },
  allPropertiesV2: {
    fooSpt: {
      ...fooSpt,
      rid: fooSpt.rid as InterfacePropertyTypeRid,
      apiName: fooSpt.apiName as InterfacePropertyApiName,
      requireImplementation: true,
    },
    fooIdp: {
      ...idp,
    },
  },
  allExtendsInterfaces: [],
  allLinks: {
    "toBar": {
      rid: "ri.interface.link.main.2",
      apiName: "toBar",
      linkedEntityApiName: {
        type: "interfaceTypeApiName",
        apiName: "BarInterface",
      },
      displayName: "bars",
      cardinality: "MANY",
      required: true,
    },
  },
};

export const InterfaceWithNamespace: InterfaceType = {
  apiName: "com.example.namespace.myInterface",
  description: "Interface for Foo",
  displayName: "Foo Interface",
  rid: "ri.interface.main.interface.1",
  extendsInterfaces: [],
  properties: {
    fooSpt: {
      ...fooSpt,
      required: true,
    },
  },
  propertiesV2: {
    "com.example.namespace.firstName": {
      ...firstNameSpt,
      type: "interfaceSharedPropertyType",
      required: true,
    },
    "com.example.namespace.lastName": {
      ...lastNameSpt,
      type: "interfaceSharedPropertyType",
      required: true,
    },
    "com.example.namespace.age": {
      ...ageSpt,
      type: "interfaceSharedPropertyType",
      required: true,
    },
    "myBirthday": {
      ...birthDateIdp,
      type: "interfaceDefinedPropertyType",
    },
  },
  links: {},
  implementedByObjectTypes: [],
  allProperties: {
    "com.example.namespace.firstName": {
      ...firstNameSpt,
      required: true,
    },
    "com.example.namespace.lastName": {
      ...lastNameSpt,
      required: true,
    },
    "com.example.namespace.age": {
      ...ageSpt,
      required: true,
    },
  },
  allPropertiesV2: {
    "com.example.namespace.firstName": {
      ...firstNameSpt,
      rid: firstNameSpt.rid as InterfacePropertyTypeRid,
      apiName: firstNameSpt.apiName as InterfacePropertyApiName,
      requireImplementation: true,
    },
    "com.example.namespace.lastName": {
      ...lastNameSpt,
      rid: lastNameSpt.rid as InterfacePropertyTypeRid,
      apiName: lastNameSpt.apiName as InterfacePropertyApiName,
      requireImplementation: true,
    },
    "com.example.namespace.age": {
      ...ageSpt,
      rid: ageSpt.rid as InterfacePropertyTypeRid,
      apiName: ageSpt.apiName as InterfacePropertyApiName,
      requireImplementation: true,
    },
    "myBirthday": {
      ...birthDateIdp,
    },
  },
  allExtendsInterfaces: [],
  allLinks: {},
};
