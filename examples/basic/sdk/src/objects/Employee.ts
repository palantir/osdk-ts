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

import type { ObjectTypeDefinition } from "@osdk/api";

export const Employee = {
  apiName: "Employee",

  primaryKeyType: "double",

  properties: {
    /** Username as stored in active directory */
    adUsername: {
      type: "string",
      nullable: false,
    },
    locationName: {
      type: "string",
      nullable: false,
    },
    locationCity: {
      type: "string",
      nullable: false,
    },
    firstFullTimeStartDate: {
      type: "datetime",
      nullable: true,
    },
    businessTitle: {
      type: "string",
    },
    employeeNumber: {
      type: "double",
    },
    jobProfile: {
      type: "string",
    },
    locationType: {
      type: "string",
    },
    favPlace: {
      type: "geopoint",
    },
  },

  links: {
    lead: {
      targetType: "Employee",
      multiplicity: false,
    },
    peeps: {
      targetType: "Employee",
      multiplicity: true,
    },
  },
} satisfies ObjectTypeDefinition<"Employee", "Employee">;
