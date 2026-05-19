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

import { defineObject, type OacObjectTypeDefinition } from "@osdk/maker";

defineObject({
  apiName: "mwaltherTestAiFdePsgs",
  displayName: "Mwalther Test AI FDE PSGs",
  pluralDisplayName: "Mwalther Test AI FDE PSGs",
  properties: {
    id: {
      type: { type: "string" },
      display: { displayName: "ID" },
      datasource: {
        type: "primaryKey",
        columns: [{ type: "dataset", column: "primary-key" }],
      },
    },
    age: {
      type: { type: "integer" },
      display: { displayName: "Age" },
    },
    ageAcl: {
      type: { type: "string" },
      display: { displayName: "Age ACL" },
    },
    dateOfBirth: {
      type: { type: "date" },
      display: { displayName: "Date of Birth" },
    },
    dateOfBirthAcl: {
      type: { type: "string" },
      display: { displayName: "Date of Birth ACL" },
    },
    usCitizen: {
      type: { type: "boolean" },
      display: { displayName: "US Citizen" },
    },
    usCitizenAcl: {
      type: { type: "string" },
      display: { displayName: "US Citizen ACL" },
    },
  },
  primaryKey: "id",
  titleProperty: "id",
  displayMetadata: { description: "foo bar baz" },
  allowEdits: true,
  datasources: [{ type: "dataset" }],
} satisfies OacObjectTypeDefinition);
