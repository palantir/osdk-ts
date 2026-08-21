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
  BaseObjectSet,
  ObjectSet,
  ObjectTypeDefinition,
} from "@osdk/api";

import type {
  FieldValueType,
  FormFieldDefinition,
} from "../../public/experimental/action-form.js";

const EMPLOYEE_TYPE = {
  type: "object",
  apiName: "Employee",
} as const satisfies ObjectTypeDefinition;

const OFFICE_TYPE = {
  type: "object",
  apiName: "Office",
} as const satisfies ObjectTypeDefinition;

const GENERATED_OFFICE_TYPE = {
  type: "object",
  apiName: "GeneratedOffice",
  primaryKeyApiName: "officeId",
  primaryKeyType: "integer",
} as const satisfies ObjectTypeDefinition;

interface GeneratedEmployeeObjectSet extends ObjectSet<
  GeneratedEmployee,
  GeneratedEmployeeObjectSet
> {}

interface GeneratedEmployee extends ObjectTypeDefinition {
  apiName: "GeneratedEmployee";
  primaryKeyApiName: "employeeId";
  primaryKeyType: "string";
  __DefinitionMetadata?: {
    objectSet: GeneratedEmployeeObjectSet;
    props: { employeeId: string };
    linksType: {};
    strictProps: { employeeId: string };
    apiName: "GeneratedEmployee";
    description: string;
    displayName: string;
    icon: undefined;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: string;
    primaryKeyApiName: "employeeId";
    primaryKeyType: "string";
    properties: { employeeId: { type: "string" } };
    rid: string;
    status: undefined;
    titleProperty: "employeeId";
    type: "object";
    visibility: undefined;
  };
}

declare const generatedEmployeeObjectSet: GeneratedEmployeeObjectSet;
declare const generatedOfficeObjectSet: ObjectSet<typeof GENERATED_OFFICE_TYPE>;

interface UpdateProfileAction extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      enabled: { type: "boolean" };
      employee: {
        type: ActionMetadata.DataType.Object<typeof EMPLOYEE_TYPE>;
      };
      employees: {
        type: ActionMetadata.DataType.ObjectSet<GeneratedEmployee>;
      };
      tags: { type: "string"; multiplicity: true };
      title: { type: "string" };
    };
    type: "action";
    apiName: "UpdateProfile";
    status: "ACTIVE";
    rid: string;
  };
}

generatedEmployeeObjectSet satisfies ObjectSet<GeneratedEmployee>;
generatedEmployeeObjectSet satisfies BaseObjectSet<GeneratedEmployee>;
generatedEmployeeObjectSet satisfies FieldValueType<
  UpdateProfileAction,
  "employees"
>;

const booleanDropdown: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "DROPDOWN",
  label: "Enabled",
  fieldComponentProps: {
    items: [true, false],
    itemToStringLabel: (item) => {
      item satisfies boolean;
      return item ? "Enabled" : "Disabled";
    },
  },
};
booleanDropdown satisfies FormFieldDefinition<UpdateProfileAction>;

const booleanRadioButtons: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "RADIO_BUTTONS",
  label: "Enabled",
  fieldComponentProps: {
    options: [
      { label: "Enabled", value: true },
      { label: "Disabled", value: false },
    ],
  },
};
if (booleanRadioButtons.fieldComponent === "RADIO_BUTTONS") {
  booleanRadioButtons.fieldComponentProps.options[0]?.value satisfies
    | boolean
    | undefined;
}

// @ts-expect-error Boolean action parameters require boolean option values
const invalidBooleanRadioButtons: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "RADIO_BUTTONS",
  label: "Enabled",
  fieldComponentProps: {
    options: [
      {
        label: "Enabled",
        value: "enabled",
      },
    ],
  },
};
invalidBooleanRadioButtons satisfies FormFieldDefinition<UpdateProfileAction>;

const booleanCustomField: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "CUSTOM",
  label: "Enabled",
  fieldComponentProps: {
    customRenderer: (props) => {
      props.value satisfies boolean | null;
      return null;
    },
  },
};
booleanCustomField satisfies FormFieldDefinition<UpdateProfileAction>;

const repeatedStringCustomField: FormFieldDefinition<
  UpdateProfileAction,
  "tags"
> = {
  fieldKey: "tags",
  fieldComponent: "CUSTOM",
  label: "Tags",
  defaultValue: ["Engineer"],
  validate: (value) => {
    value satisfies string[];
    return Promise.resolve(undefined);
  },
  fieldComponentProps: {
    customRenderer: (props) => {
      props.value satisfies string[] | null;
      return null;
    },
  },
};
repeatedStringCustomField satisfies FormFieldDefinition<
  UpdateProfileAction,
  "tags"
>;

const invalidEmployeeObjectSelect: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "employee",
  fieldComponent: "OBJECT_SELECT",
  label: "Employee",
  fieldComponentProps: {
    // @ts-expect-error Object fields require the action parameter's object type
    objectType: OFFICE_TYPE,
  },
};
invalidEmployeeObjectSelect satisfies FormFieldDefinition<UpdateProfileAction>;

const generatedEmployeeObjectSetField: FormFieldDefinition<UpdateProfileAction> =
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: {
      value: generatedEmployeeObjectSet,
    },
  };
generatedEmployeeObjectSetField satisfies FormFieldDefinition<UpdateProfileAction>;

const invalidGeneratedOfficeObjectSetField: FormFieldDefinition<UpdateProfileAction> =
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: {
      // @ts-expect-error Object-set fields require the action parameter's object type
      value: generatedOfficeObjectSet,
    },
  };
invalidGeneratedOfficeObjectSetField satisfies FormFieldDefinition<UpdateProfileAction>;

// @ts-expect-error Boolean action parameters do not support text inputs
const invalidBooleanTextInput: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "TEXT_INPUT",
  label: "Enabled",
  fieldComponentProps: {},
};
invalidBooleanTextInput satisfies FormFieldDefinition<UpdateProfileAction>;

const stringTextInput: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "TEXT_INPUT",
  label: "Title",
  defaultValue: "Engineer",
  validate: (value) => {
    value satisfies string;
    return Promise.resolve(undefined);
  },
  fieldComponentProps: {},
};
stringTextInput satisfies FormFieldDefinition<UpdateProfileAction>;

const stringDropdown: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "DROPDOWN",
  label: "Title",
  defaultValue: "Engineer",
  validate: (value) => {
    value satisfies string;
    return Promise.resolve(undefined);
  },
  fieldComponentProps: {
    items: ["Engineer", "Manager"],
    itemToStringLabel: (item) => {
      item satisfies string;
      return item;
    },
    isItemEqual: (left, right) => {
      left satisfies string;
      right satisfies string;
      return left === right;
    },
  },
};
stringDropdown satisfies FormFieldDefinition<UpdateProfileAction>;

const repeatedStringDropdown: FormFieldDefinition<UpdateProfileAction, "tags"> =
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags",
    fieldComponentProps: {
      items: ["Engineer", "Manager"],
      isMultiple: true,
      itemToStringLabel: (item) => {
        item satisfies string;
        return item;
      },
    },
  };
repeatedStringDropdown satisfies FormFieldDefinition<
  UpdateProfileAction,
  "tags"
>;

const invalidSingleSelectForRepeatedString: FormFieldDefinition<
  UpdateProfileAction,
  "tags"
> = {
  fieldKey: "tags",
  fieldComponent: "DROPDOWN",
  label: "Tags",
  // @ts-expect-error Repeated action parameters require multi-select dropdowns
  fieldComponentProps: {
    items: ["Engineer", "Manager"],
  },
};
invalidSingleSelectForRepeatedString satisfies FormFieldDefinition<
  UpdateProfileAction,
  "tags"
>;

const invalidTextInputForRepeatedString: FormFieldDefinition<
  UpdateProfileAction,
  "tags"
> = {
  fieldKey: "tags",
  // @ts-expect-error Repeated string parameters require an array-capable field
  fieldComponent: "TEXT_INPUT",
  label: "Tags",
  fieldComponentProps: { customRenderer: () => null },
};
invalidTextInputForRepeatedString satisfies FormFieldDefinition<
  UpdateProfileAction,
  "tags"
>;

const invalidMultiStringDropdown: FormFieldDefinition<
  UpdateProfileAction,
  "title"
> = {
  fieldKey: "title",
  fieldComponent: "DROPDOWN",
  label: "Title",
  fieldComponentProps: {
    items: ["Engineer", "Manager"],
    // @ts-expect-error Scalar action parameters cannot use multi-select dropdowns
    isMultiple: true,
  },
};
invalidMultiStringDropdown satisfies FormFieldDefinition<
  UpdateProfileAction,
  "title"
>;

// @ts-expect-error String action parameters require string dropdown items
const invalidStringDropdown: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "DROPDOWN",
  label: "Title",
  fieldComponentProps: {
    items: [true],
  },
};
invalidStringDropdown satisfies FormFieldDefinition<UpdateProfileAction>;

const stringRadioButtons: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "RADIO_BUTTONS",
  label: "Title",
  fieldComponentProps: {
    options: [
      { label: "Engineer", value: "Engineer" },
      { label: "Manager", value: "Manager" },
    ],
  },
};
if (stringRadioButtons.fieldComponent === "RADIO_BUTTONS") {
  stringRadioButtons.fieldComponentProps.options[0]?.value satisfies
    | string
    | undefined;
}

// @ts-expect-error String action parameters require string radio-button option values
const invalidStringRadioButtons: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "RADIO_BUTTONS",
  label: "Title",
  fieldComponentProps: {
    options: [{ label: "Engineer", value: true }],
  },
};
invalidStringRadioButtons satisfies FormFieldDefinition<UpdateProfileAction>;
