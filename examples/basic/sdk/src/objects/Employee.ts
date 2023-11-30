/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectDefinition } from "@osdk/api";

export const Employee = {
  apiName: "Employee",
  description: "An employee",
  primaryKeyType: "string",
  links: {
    lead: {
      multiplicity: false,
      targetType: "Employee",
    },
    peeps: {
      multiplicity: true,
      targetType: "Employee",
    },
  },
  properties: {
    adUsername: {
      multiplicity: false,
      type: "string",
      nullable: false,
    },
    locationName: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    locationCity: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    firstFullTimeStartDate: {
      multiplicity: false,
      type: "datetime",
      nullable: true,
    },
    businessTitle: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    employeeNumber: {
      multiplicity: false,
      type: "double",
      nullable: true,
    },
    jobProfile: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    locationType: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    favPlace: {
      multiplicity: false,
      type: "geopoint",
      nullable: true,
    },
  },
} satisfies ObjectDefinition<"Employee", "Employee">;
