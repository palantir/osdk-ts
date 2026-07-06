import{j as e}from"./iframe-Uj1mp38m.js";import{useMDXComponents as i}from"./index-C-O4lJlM.js";import{b as a,c as r}from"./blocks-Dba3hliJ.js";import"./preload-helper-BSqn5y6A.js";import"./index-CItR5Z3S.js";import"./index-CbsB4Pba.js";import"./index-DsnzPfzX.js";const s=`# ActionForm

\`ActionForm\` renders and submits an OSDK action using \`@osdk/react-components\`.

## Table of Contents

- [Import](#import)
- [Basic Usage](#basic-usage)
- [Choosing ActionForm vs BaseForm](#choosing-actionform-vs-baseform)
- [Default Field Rendering](#default-field-rendering)
- [Unsupported Features](#unsupported-features)
- [Custom Field Definitions](#custom-field-definitions)
- [Behavior Notes](#behavior-notes)
- [Examples](#examples)
- [Styling](#styling)

## Import

\`\`\`typescript
import { ActionForm } from "@osdk/react-components/experimental";
import type { FormFieldDefinition } from "@osdk/react-components/experimental";
\`\`\`

## Basic Usage

:::note About \`@my/osdk\` and \`./client\`
\`@my/osdk\` is a placeholder for **your generated SDK package** (e.g. \`@your-app/sdk\`). \`./client\` (used in scoped object-select examples below) is the file in your app where you exported the OSDK client returned by \`createClient(...)\`. Replace both with the actual paths in your project.
:::

\`\`\`tsx
import { updateEmployee } from "@my/osdk";
import { ActionForm } from "@osdk/react-components/experimental";

function UpdateEmployeeForm() {
  return <ActionForm actionDefinition={updateEmployee} />;
}
\`\`\`

\`ActionForm\` fetches action metadata, renders fields for the action parameters, runs client-side validation, and calls the OSDK action when the user submits. The form title is hidden by default. Pass \`showFormTitle={true}\` to show it; the title uses \`formTitle\` when provided, otherwise the action display name, otherwise the action API name.

## Choosing ActionForm vs BaseForm

| Use case                                                                 | Use this API                             |
| ------------------------------------------------------------------------ | ---------------------------------------- |
| Render a form directly from an OSDK action and submit with \`applyAction\` | \`ActionForm\`                             |
| Override generated fields for an OSDK action                             | \`ActionForm\` with \`formFieldDefinitions\` |
| Build a form from manually-authored field definitions                    | \`BaseForm\`                               |
| Compose sections, standalone fields, or custom form layouts              | \`BaseForm\`                               |

## Default Field Rendering

When \`formFieldDefinitions\` is omitted, \`ActionForm\` derives one field per action parameter from action metadata.

| Action parameter type                          | Default field component | Default behavior                               |
| ---------------------------------------------- | ----------------------- | ---------------------------------------------- |
| \`string\`                                       | \`TEXT_INPUT\`            | Single-line text input                         |
| \`boolean\`                                      | \`RADIO_BUTTONS\`         | True/False radio options                       |
| \`integer\`, \`double\`, \`long\`                    | \`NUMBER_INPUT\`          | Numeric input                                  |
| \`datetime\`, \`timestamp\`                        | \`DATETIME_PICKER\`       | Date picker                                    |
| \`attachment\`, \`mediaReference\`                 | \`FILE_PICKER\`           | File picker                                    |
| \`{ type: "object" }\`                           | \`OBJECT_SELECT\`         | Object selector for the referenced object type |
| \`{ type: "objectSet" }\`                        | \`OBJECT_SET\`            | Read-only object set summary                   |
| \`marking\`, \`geohash\`, \`geoshape\`, \`objectType\` | \`UNSUPPORTED\`           | Disabled field recommending a custom field     |
| \`{ type: "interface" }\`, \`{ type: "struct" }\`  | \`UNSUPPORTED\`           | Disabled field recommending a custom field     |

Required validation is inferred from the action parameter's nullability. Additional client-side validation comes from field-specific props such as \`min\`, \`max\`, \`minLength\`, \`maxLength\`, and \`maxSize\`.

## Unsupported Features

\`ActionForm\` is a lightweight OSDK component and does not yet match the full ActionForm in Foundry. The table below lists the main gaps to account for when adopting it.

| Feature                                     | Current behavior                                                                                                                                                                                              | Workaround                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend action validation                   | The form does not call backend validation before submit and does not process validation-derived displays, allowed values, defaults, or section results.                                                       | Use \`formFieldDefinitions\` validation props, field-level \`validate\`, \`onSubmit\`, and \`onError\` for app-owned checks and submission error handling.      |
| Unsupported generated parameter types       | \`marking\`, \`geohash\`, \`geoshape\`, \`objectType\`, \`interface\`, and \`struct\` render as disabled unsupported fields by default.                                                                                   | Override those parameters with \`fieldComponent: "CUSTOM"\` or another compatible component in \`formFieldDefinitions\`.                                    |
| Action-authored layout metadata             | Action-defined sections, form content ordering, section validation, and layout toggles are not read from metadata. Fields render in metadata parameter order unless fully replaced by \`formFieldDefinitions\`. | Use \`BaseForm\` with explicit \`FormContentItem\` sections when you need custom grouping, or control field order with \`formFieldDefinitions\`.              |
| Conditional logic and dynamic display state | Backend-driven hidden, disabled, required, and allowed-value rules are not evaluated as the user edits the form.                                                                                              | Encode static display state in field definitions, or manage dynamic state in your app and pass updated \`formFieldDefinitions\` / controlled \`formState\`. |
| Defaults and prefills                       | Backend prefills, type-class defaults, current timestamp defaults, and validation-derived default values are not applied automatically.                                                                       | Provide \`defaultValue\` in field definitions, seed controlled \`formState\`, or compute defaults in app code before rendering.                             |

## Custom Field Definitions

Use \`formFieldDefinitions\` when the default rendering for a parameter is not the UI you want. The list is a complete replacement: include every parameter that should appear in the form.

\`\`\`tsx
const fields = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    fieldComponentProps: {
      placeholder: "Jane Doe",
      minLength: 2,
    },
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    fieldComponentProps: {
      min: 0,
      max: 80,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    fieldComponentProps: {},
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployee>>;

<ActionForm actionDefinition={updateEmployee} formFieldDefinitions={fields} />;
\`\`\`

### Rich dropdown labels

Use \`itemToStringLabel\` for the dropdown's text behavior: search matching, accessibility labels, fallback item keys, and default visual text. Add \`renderItemLabel\` when the visible label needs richer React content while preserving the same string behavior.

\`\`\`tsx
const fields = [
  {
    fieldKey: "assigneeUserId",
    label: "Assignee",
    fieldComponent: "DROPDOWN",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => userNames[userId] ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{userNames[userId] ?? userId}</strong>
          <span>{userTeams[userId]}</span>
        </span>
      ),
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployee>>;
\`\`\`

### Scoped object select fields

\`OBJECT_SELECT\` can load options from either an object type or a pre-scoped object set. Pass \`objectType\` for an unfiltered selector, or pass \`objectSet\` to limit selectable options. The two are mutually exclusive. Search text is applied within the object set, and the current value is not automatically cleared when it is outside that set.

\`\`\`tsx
import { Employee, updateEmployee } from "@my/osdk";
import { useMemo } from "react";
import client from "./client";

function UpdateEmployeeForm() {
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    []
  );

  const fields = [
    {
      fieldKey: "manager",
      label: "Marketing manager",
      fieldComponent: "OBJECT_SELECT",
      fieldComponentProps: {
        objectSet: marketingEmployees,
        placeholder: "Search Marketing employees…",
      },
    },
  ] satisfies Array<FormFieldDefinition<typeof updateEmployee>>;

  return (
    <ActionForm
      actionDefinition={updateEmployee}
      formFieldDefinitions={fields}
    />
  );
}
\`\`\`

For a completely custom field, use \`fieldComponent: "CUSTOM"\` and provide \`customRenderer\`:

\`\`\`tsx
const fields = [
  {
    fieldKey: "approvalReason",
    label: "Approval reason",
    fieldComponent: "CUSTOM",
    fieldComponentProps: {
      customRenderer: ({ value, onChange }) => (
        <textarea
          value={value != null ? String(value) : ""}
          onChange={(event) => onChange?.(event.target.value)}
        />
      ),
    },
  },
] satisfies Array<FormFieldDefinition<typeof approveEmployee>>;

<ActionForm actionDefinition={approveEmployee} formFieldDefinitions={fields} />;
\`\`\`

## Behavior Notes

- \`formFieldDefinitions\` replaces generated fields. Passing one custom field means only that field renders.
- \`fieldKey\` must match the action parameter key; submitted form state uses the same keys.
- \`fieldComponentProps\` should not include \`value\`, \`onChange\`, or \`id\`; form state wiring provides those.
- Controlled mode requires both \`formState\` and \`onFormStateChange\`.
- Use \`onSubmit\` for custom submission behavior. If \`onSubmit\` is omitted, \`ActionForm\` calls \`applyAction\` and then \`onSuccess\`.

## Examples

### Controlled form state

\`\`\`tsx
const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  isRemote: true,
});

<ActionForm
  actionDefinition={updateEmployee}
  formState={formState}
  onFormStateChange={setFormState}
/>;
\`\`\`

### Custom submit handling

\`\`\`tsx
<ActionForm
  actionDefinition={updateEmployee}
  onSubmit={async (formState, applyAction) => {
    await applyAction(formState);
    showToast("Employee updated");
  }}
/>
\`\`\`

## Styling

\`ActionForm\` is built on \`BaseForm\`, so the form layout and field styling use the same CSS variables documented in [CSSVariables.md](./CSSVariables.md).

\`ActionForm\` does not add outer padding by default. Apply internal spacing by setting the form padding variables on the form or a wrapper element:

\`\`\`css
.employeeForm {
  --osdk-form-content-padding-inline: calc(var(--osdk-surface-spacing) * 4);
  --osdk-form-content-padding-block: calc(var(--osdk-surface-spacing) * 4);
}
\`\`\`

\`\`\`tsx
<div className="employeeForm">
  <ActionForm actionDefinition={updateEmployee} />
</div>
\`\`\`

Use \`--osdk-form-content-padding-inline\` to apply shared horizontal padding to the header, fields, and footer. Use \`--osdk-form-content-padding-block\` to control vertical padding for the form fields section. For card-style outer spacing, apply margin, border, background, and border radius to the wrapper rather than the form itself.
`;function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Components/ActionForm/Docs",tags:["beta"]}),`
`,e.jsx(r,{children:s})]})}function h(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{h as default};
