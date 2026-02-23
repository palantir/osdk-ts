/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { FauxOntology } from "@osdk/faux";

type InterfaceType = Parameters<
  FauxOntology["registerInterfaceType"]
>[0];

export const interfaceMetadata: Record<string, InterfaceType> = {
  "Person": {
    "apiName": "Person",
    "type": "interface",
    "displayName": "Person",
    "description": "A person interface",
    "rid": "ri.ontology.main.interface.353734ce-ae2d-4e49-8070-163b2126af5a",
    "status": "ACTIVE",
    "properties": {
      "email": {
        "rid": "ri.property.12345678-90ab-cdef-1234-567890abcdef",
        "apiName": "email",
        "displayName": "Email",
        "dataType": {
          "type": "string",
        },
        "required": false,
      },
      "employeeNumber": {
        "rid": "ri.property.12345678-90ab-cdef-1234-567890abc123",
        "apiName": "employeeNumber",
        "displayName": "Employee Number",
        "dataType": {
          "type": "integer",
        },
        "required": false,
      },
    },
    "links": {},
  },
  "Worker": {
    "apiName": "Worker",
    "type": "interface",
    "displayName": "Worker",
    "description": "A worker interface",
    "rid": "ri.ontology.main.interface.777ffb22-9b3c-4fb6-908f-56d23c3a5198",
    "status": "ACTIVE",
    "properties": {
      "email": {
        "rid": "ri.property.12345678-90ab-cdef-5678-567890abc123",
        "apiName": "email",
        "displayName": "Email",
        "dataType": {
          "type": "string",
        },
        "required": false,
      },
      "name": {
        "rid": "ri.property.12345678-90ab-xyzw-5678-567890abc123",
        "apiName": "name",
        "displayName": "Name",
        "dataType": {
          "type": "string",
        },
        "required": false,
      },
      "employeeNumber": {
        "rid": "ri.property.01235678-90ab-xyzw-5678-567890abc123",
        "apiName": "employeeNumber",
        "displayName": "Employee Number",
        "dataType": {
          "type": "integer",
        },
        "required": false,
      },
    },
    "links": {},
  },
};
