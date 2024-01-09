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

import { employee1, employee2, employee3 } from "./objects";

export const employeePeepLinks = {
  [employee2.__primaryKey.toString()]: {
    data: [employee1, employee3],
  },
};

export const employeeLeadLinks = {
  [employee1.__primaryKey.toString()]: {
    data: [employee2],
  },
  [employee3.__primaryKey.toString()]: {
    data: [employee2],
  },
};

export const linkResponseMap: {
  [objectType: string]: { [linkType: string]: any };
} = {
  Employee: {
    peeps: employeePeepLinks,
    lead: employeeLeadLinks,
  },
};
