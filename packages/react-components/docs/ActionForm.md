# ActionForm

`ActionForm` renders and submits an OSDK action using `@osdk/react-components`.

## Table of Contents

- [Import](#import)
- [Basic Usage](#basic-usage)
- [Choosing ActionForm vs BaseForm](#choosing-actionform-vs-baseform)
- [Default Field Rendering](#default-field-rendering)
- [Custom Field Definitions](#custom-field-definitions)
- [Behavior Notes](#behavior-notes)
- [Examples](#examples)
- [Styling](#styling)

## Import

```typescript
import { ActionForm } from "@osdk/react-components/experimental";
import type { FormFieldDefinition } from "@osdk/react-components/experimental";
```

## Basic Usage

```tsx
import { ActionForm } from "@osdk/react-components/experimental";
import { updateEmployee } from "@YourApp/sdk";

function UpdateEmployeeForm() {
  return <ActionForm actionDefinition={updateEmployee} />;
}
```

`ActionForm` fetches action metadata, renders fields for the action parameters, validates the form, and calls the OSDK action when the user submits. The form title is hidden by default. Pass `showFormTitle={true}` to show it; the title uses `formTitle` when provided, otherwise the action display name, otherwise the action API name.

## Choosing ActionForm vs BaseForm

| Use case                                                                 | Use this API                             |
| ------------------------------------------------------------------------ | ---------------------------------------- |
| Render a form directly from an OSDK action and submit with `applyAction` | `ActionForm`                             |
| Override generated fields for an OSDK action                             | `ActionForm` with `formFieldDefinitions` |
| Build a form from manually-authored field definitions                    | `BaseForm`                               |
| Compose sections, standalone fields, or custom form layouts              | `BaseForm`                               |

## Default Field Rendering

When `formFieldDefinitions` is omitted, `ActionForm` derives one field per action parameter from action metadata.

| Action parameter type                          | Default field component | Default behavior                               |
| ---------------------------------------------- | ----------------------- | ---------------------------------------------- |
| `string`                                       | `TEXT_INPUT`            | Single-line text input                         |
| `marking`, `geohash`, `geoshape`, `objectType` | `TEXT_INPUT`            | Text input fallback for string-like values     |
| `boolean`                                      | `RADIO_BUTTONS`         | True/False radio options                       |
| `integer`, `double`, `long`                    | `NUMBER_INPUT`          | Numeric input                                  |
| `datetime`, `timestamp`                        | `DATETIME_PICKER`       | Date picker                                    |
| `attachment`, `mediaReference`                 | `FILE_PICKER`           | File picker                                    |
| `{ type: "object" }`                           | `OBJECT_SELECT`         | Object selector for the referenced object type |
| `{ type: "objectSet" }`                        | `OBJECT_SET`            | Read-only object set summary                   |
| `{ type: "interface" }`, `{ type: "struct" }`  | `TEXT_INPUT`            | Text input fallback                            |

Required validation is inferred from the action parameter's nullability. Additional validation comes from field-specific props such as `min`, `max`, `minLength`, `maxLength`, and `maxSize`.

## Custom Field Definitions

Use `formFieldDefinitions` when the default rendering for a parameter is not the UI you want. The list is a complete replacement: include every parameter that should appear in the form.

```tsx
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
```

### Rich dropdown labels

Use `itemToStringLabel` for the dropdown's text behavior: search matching, accessibility labels, fallback item keys, and default visual text. Add `renderItemLabel` when the visible label needs richer React content while preserving the same string behavior.

```tsx
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
```

### Scoped object select fields

`OBJECT_SELECT` can load options from either an object type or a pre-scoped object set. Pass `objectType` for an unfiltered selector, or pass `objectSet` to limit selectable options. The two are mutually exclusive. Search text is applied within the object set, and the current value is not automatically cleared when it is outside that set.

```tsx
import { $, Employee, updateEmployee } from "@YourApp/sdk";
import { useMemo } from "react";

function UpdateEmployeeForm() {
  const marketingEmployees = useMemo(
    () => $(Employee).where({ department: "Marketing" }),
    [],
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
```

For a completely custom field, use `fieldComponent: "CUSTOM"` and provide `customRenderer`:

```tsx
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
```

## Behavior Notes

- `formFieldDefinitions` replaces generated fields. Passing one custom field means only that field renders.
- `fieldKey` must match the action parameter key; submitted form state uses the same keys.
- `fieldComponentProps` should not include `value`, `onChange`, or `id`; form state wiring provides those.
- Controlled mode requires both `formState` and `onFormStateChange`.
- Use `onSubmit` for custom submission behavior. If `onSubmit` is omitted, `ActionForm` calls `applyAction` and then `onSuccess`.

## Examples

### Controlled form state

```tsx
const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  isRemote: true,
});

<ActionForm
  actionDefinition={updateEmployee}
  formState={formState}
  onFormStateChange={setFormState}
/>;
```

### Custom submit handling

```tsx
<ActionForm
  actionDefinition={updateEmployee}
  onSubmit={async (formState, applyAction) => {
    await applyAction(formState);
    showToast("Employee updated");
  }}
/>;
```

## Styling

`ActionForm` is built on `BaseForm`, so the form layout and field styling use the same CSS variables documented in [CSSVariables.md](./CSSVariables.md).

`ActionForm` does not add outer padding by default. Apply internal spacing by setting the form padding variables on the form or a wrapper element:

```css
.employeeForm {
  --osdk-form-content-padding-inline: calc(var(--osdk-surface-spacing) * 4);
  --osdk-form-content-padding-block: calc(var(--osdk-surface-spacing) * 4);
}
```

```tsx
<div className="employeeForm">
  <ActionForm actionDefinition={updateEmployee} />
</div>;
```

Use `--osdk-form-content-padding-inline` to apply shared horizontal padding to the header, fields, and footer. Use `--osdk-form-content-padding-block` to control vertical padding for the form fields section. For card-style outer spacing, apply margin, border, background, and border radius to the wrapper rather than the form itself.
