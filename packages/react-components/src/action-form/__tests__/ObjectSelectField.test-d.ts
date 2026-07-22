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

import type {
  ActionDefinition,
  ActionMetadata,
  ObjectSet,
  ObjectTypeDefinition,
} from "@osdk/api";

import type {
  FormFieldDefinition,
  ObjectSelectFieldProps,
} from "../../public/experimental/action-form.js";

const EMPLOYEE_TYPE = {
  type: "object",
  apiName: "Employee",
} satisfies ObjectTypeDefinition;

const employeeObjectSet = {
  $objectSetInternals: { def: EMPLOYEE_TYPE },
} as ObjectSet<typeof EMPLOYEE_TYPE>;

interface AssignManagerAction extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      manager: {
        type: ActionMetadata.DataType.Object<typeof EMPLOYEE_TYPE>;
      };
    };
    type: "action";
    apiName: "AssignManager";
    status: "ACTIVE";
    rid: string;
  };
}

const objectTypeOnly: ObjectSelectFieldProps<typeof EMPLOYEE_TYPE> = {
  objectType: EMPLOYEE_TYPE,
  value: null,
};
objectTypeOnly satisfies ObjectSelectFieldProps<typeof EMPLOYEE_TYPE>;

const objectSetOnly: ObjectSelectFieldProps<typeof EMPLOYEE_TYPE> = {
  objectSet: employeeObjectSet,
  value: null,
};
objectSetOnly satisfies ObjectSelectFieldProps<typeof EMPLOYEE_TYPE>;

// @ts-expect-error objectType and objectSet are mutually exclusive
const bothSources: ObjectSelectFieldProps<typeof EMPLOYEE_TYPE> = {
  objectType: EMPLOYEE_TYPE,
  objectSet: employeeObjectSet,
  value: null,
};
bothSources satisfies ObjectSelectFieldProps<typeof EMPLOYEE_TYPE>;

// @ts-expect-error one source is required
const neitherSource: ObjectSelectFieldProps<typeof EMPLOYEE_TYPE> = {
  value: null,
};
neitherSource satisfies ObjectSelectFieldProps<typeof EMPLOYEE_TYPE>;

const formFieldObjectTypeOnly: FormFieldDefinition<AssignManagerAction> = {
  fieldKey: "manager",
  fieldComponent: "OBJECT_SELECT",
  label: "Manager",
  fieldComponentProps: { objectType: EMPLOYEE_TYPE },
};
formFieldObjectTypeOnly satisfies FormFieldDefinition<AssignManagerAction>;

const formFieldObjectSetOnly: FormFieldDefinition<AssignManagerAction> = {
  fieldKey: "manager",
  fieldComponent: "OBJECT_SELECT",
  label: "Manager",
  fieldComponentProps: { objectSet: employeeObjectSet },
};
formFieldObjectSetOnly satisfies FormFieldDefinition<AssignManagerAction>;

const formFieldBothSources: FormFieldDefinition<AssignManagerAction> = {
  fieldKey: "manager",
  fieldComponent: "OBJECT_SELECT",
  label: "Manager",
  // @ts-expect-error objectType and objectSet are mutually exclusive
  fieldComponentProps: {
    objectType: EMPLOYEE_TYPE,
    objectSet: employeeObjectSet,
  },
};
formFieldBothSources satisfies FormFieldDefinition<AssignManagerAction>;

const formFieldNeitherSource: FormFieldDefinition<AssignManagerAction> = {
  fieldKey: "manager",
  fieldComponent: "OBJECT_SELECT",
  label: "Manager",
  // @ts-expect-error one source is required
  fieldComponentProps: {},
};
formFieldNeitherSource satisfies FormFieldDefinition<AssignManagerAction>;
