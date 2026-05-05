# ActionForm

A comprehensive guide for using the ActionForm component from `@osdk/react-components`.

## Prerequisites

Before using ActionForm, make sure you have completed the library setup described in the [README](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/README.md#setup), including:

- Installing the required dependencies
- Wrapping your app with `OsdkProvider2`
- Adding the CSS imports

## Table of Contents

- [Import](#import)
- [Basic Usage](#basic-usage)
- [Props Reference](#props-reference)
- [Custom Fields](#custom-fields)
- [Examples](#examples)
- [Styling](#styling)
- [Best Practices](#best-practices)

## Import

```typescript
import { ActionForm } from "@osdk/react-components/experimental";
```

## Basic Usage

The simplest way to use ActionForm is with an action definition:

```tsx
import { ActionForm } from "@osdk/react-components/experimental";
import { updateEmployee } from "@YourApp/sdk";

function EmployeeForm() {
  return (
    <ActionForm
      actionDefinition={updateEmployee}
      onSuccess={(result) => console.log("Applied:", result)}
    />
  );
}
```

By default, the form title uses the action display name, then falls back to the action API name. Pass `formTitle={null}` to hide the title.

## Props Reference

| Prop                   | Type                              | Default             | Description                                              |
| ---------------------- | --------------------------------- | ------------------- | -------------------------------------------------------- |
| `actionDefinition`     | `ActionDefinition`                | _required_          | The OSDK action definition to render                     |
| `formTitle`            | `string \| null`                  | action display name | Title shown above the form. Pass `null` to hide          |
| `formFieldDefinitions` | `FormFieldDefinition[]`           | auto-generated      | Custom field definitions. Replaces auto-generated fields |
| `formState`            | `FormState`                       | —                   | Controlled form state                                    |
| `onFormStateChange`    | `(updater) => void`               | —                   | Required when `formState` is provided                    |
| `isSubmitDisabled`     | `boolean`                         | `false`             | Disables the submit button                               |
| `onSubmit`             | `(state, applyAction) => Promise` | —                   | Custom submit handler. Overrides default action apply    |
| `onSuccess`            | `(result) => void`                | —                   | Called after successful submission                       |
| `onError`              | `(error) => void`                 | —                   | Called on metadata or submission errors                  |
| `onValidationResponse` | `(response) => void`              | —                   | Called with server-side validation results               |

## Custom Fields

Pass `formFieldDefinitions` when you need to override the generated field components. The list is complete-replacement: include every field you want rendered.

```tsx
<ActionForm
  actionDefinition={updateEmployee}
  formFieldDefinitions={[
    {
      fieldKey: "fullName",
      label: "Full name",
      fieldComponent: "TEXT_INPUT",
      fieldComponentProps: {},
    },
    {
      fieldKey: "isRemote",
      label: "Remote employee",
      fieldComponent: "SWITCH",
      fieldComponentProps: {},
    },
  ]}
/>;
```

Boolean action parameters render as radio buttons by default. Use `fieldComponent: "SWITCH"` when a toggle better matches the UX.

### Available Field Components

| Component          | Description                    |
| ------------------ | ------------------------------ |
| `TEXT_INPUT`       | Single-line text input         |
| `TEXT_AREA`        | Multi-line text area           |
| `NUMBER_INPUT`     | Numeric input with stepper     |
| `DROPDOWN`         | Select or searchable combobox  |
| `DATETIME_PICKER`  | Date picker with optional time |
| `DATE_RANGE_INPUT` | Start/end date range picker    |
| `RADIO_BUTTONS`    | Radio button group             |
| `SWITCH`           | Boolean toggle switch          |
| `FILE_PICKER`      | Single or multi-file upload    |
| `OBJECT_SELECT`    | Object search dropdown         |
| `OBJECT_SET`       | Object set summary display     |
| `CUSTOM`           | User-defined renderer          |

## Examples

### Date and Time Fields

`DATETIME_PICKER` displays deterministic values by default:

- date-only: `YYYY-MM-DD`
- date + time: `YYYY-MM-DD HH:mm`

Set `showTime: true` to render the time picker in the calendar popover.

```tsx
{
  fieldKey: "scheduledAt",
  label: "Scheduled at",
  fieldComponent: "DATETIME_PICKER",
  fieldComponentProps: {
    showTime: true,
    placeholder: "Select date and time",
  },
}
```

Single-date calendars always render Today/Clear actions. Date-range calendars intentionally do not.

### Controlled Form State

```tsx
const [formState, setFormState] = useState({});

<ActionForm
  actionDefinition={updateEmployee}
  formState={formState}
  onFormStateChange={setFormState}
  onSuccess={(result) => console.log("Applied:", result)}
/>;
```

### Custom Submit Handler

```tsx
<ActionForm
  actionDefinition={updateEmployee}
  onSubmit={async (formState, applyAction) => {
    // Pre-process values before submission
    const result = await applyAction(formState);
    console.log("Applied:", result);
  }}
/>;
```

## Styling

ActionForm uses CSS custom properties for theming. See [CSS Variables](./CSSVariables.md) for the full list of form tokens.

Key tokens:

| Token                               | Description                                       |
| ----------------------------------- | ------------------------------------------------- |
| `--osdk-form-content-padding-block` | Block padding for the form fields region          |
| `--osdk-form-padding-inline`        | Inline padding for form regions                   |
| `--osdk-form-field-gap`             | Gap between form fields                           |
| `--osdk-form-region-gap`            | Gap between form regions (header, fields, footer) |

## Best Practices

- Let ActionForm auto-generate field definitions when possible. Only pass `formFieldDefinitions` when you need to override components or labels.
- Use controlled mode (`formState` + `onFormStateChange`) when you need to read or modify form values externally.
- Use `onSubmit` when you need pre-processing before submission. Otherwise, rely on the default `applyAction` behavior with `onSuccess`/`onError` callbacks.
- Use `fieldComponent: "SWITCH"` for boolean parameters that represent on/off toggles, and keep `RADIO_BUTTONS` for boolean choices where both options need explicit labels.
