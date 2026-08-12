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
  ObjectTypeDefinition,
} from "@osdk/api";

import type { FormFieldDefinition } from "../../public/experimental/action-form.js";

const EMPLOYEE_TYPE = {
  type: "object",
  apiName: "Employee",
} as const satisfies ObjectTypeDefinition;

const OFFICE_TYPE = {
  type: "object",
  apiName: "Office",
} as const satisfies ObjectTypeDefinition;

interface UpdateProfileAction extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      enabled: { type: "boolean" };
      employee: {
        type: ActionMetadata.DataType.Object<typeof EMPLOYEE_TYPE>;
      };
      title: { type: "string" };
    };
    type: "action";
    apiName: "UpdateProfile";
    status: "ACTIVE";
    rid: string;
  };
}

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

const invalidBooleanRadioButtons: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "RADIO_BUTTONS",
  label: "Enabled",
  fieldComponentProps: {
    options: [
      {
        label: "Enabled",
        // @ts-expect-error Boolean action parameters require boolean option values
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

// @ts-expect-error Boolean action parameters do not support text inputs
const invalidBooleanTextInput: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "enabled",
  fieldComponent: "TEXT_INPUT",
  label: "Enabled",
  fieldComponentProps: {},
};
invalidBooleanTextInput satisfies FormFieldDefinition<UpdateProfileAction>;

const invalidStringDropdown: FormFieldDefinition<UpdateProfileAction> = {
  fieldKey: "title",
  fieldComponent: "DROPDOWN",
  label: "Title",
  fieldComponentProps: {
    // @ts-expect-error String dropdowns are not enabled by this preparatory change
    items: ["Engineer", "Manager"],
  },
};
invalidStringDropdown satisfies FormFieldDefinition<UpdateProfileAction>;

declare const fieldDefinition: FormFieldDefinition<UpdateProfileAction>;
if (fieldDefinition.fieldComponent === "DROPDOWN") {
  fieldDefinition.fieldComponentProps.items[0] satisfies boolean | undefined;
}
