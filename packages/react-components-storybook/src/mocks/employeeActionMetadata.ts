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

import type { ActionTypeV2 } from "@osdk/foundry.ontologies";

export const ModifyEmployee: ActionTypeV2 = {
  apiName: "modifyEmployee",
  displayName: "Modify Employee",
  description: "Update an employee's profile information",
  parameters: {
    fullName: {
      displayName: "Full Name",
      dataType: {
        type: "string",
      },
      required: true,
      typeClasses: [],
    },
    employeeNumber: {
      displayName: "Employee Number",
      dataType: {
        type: "integer",
      },
      required: true,
      typeClasses: [],
    },
    department: {
      displayName: "Department",
      dataType: {
        type: "string",
      },
      required: false,
      typeClasses: [],
    },
    isActive: {
      displayName: "Is Active",
      dataType: {
        type: "boolean",
      },
      required: false,
      typeClasses: [],
    },
    startDate: {
      displayName: "Start Date",
      dataType: {
        type: "timestamp",
      },
      required: false,
      typeClasses: [],
    },
    employeeFile: {
      displayName: "Employee File",
      description: "Supporting document for the employee",
      dataType: {
        type: "attachment",
      },
      required: false,
      typeClasses: [],
    },
  },
  rid: "ri.ontology.main.action-type.storybook-modify-employee",
  operations: [],
  status: "ACTIVE",
};
