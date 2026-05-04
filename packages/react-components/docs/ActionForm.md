# ActionForm

`ActionForm` renders a form from an OSDK action definition and submits through `@osdk/react`.

## Basic usage

```tsx
import { ActionForm } from "@osdk/react-components/experimental";

<ActionForm actionDefinition={updateEmployee} />;
```

By default, the form title uses the action display name, then falls back to the action API name. Pass `formTitle={null}` to hide the title.

## Custom fields

Pass `formFieldDefinitions` when you need to override the generated field components. The list is currently complete-replacement: include every field you want rendered.

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

Boolean action parameters still render as radio buttons by default. Use `fieldComponent: "SWITCH"` when a switch better matches the UX.

## Date and time fields

`DATETIME_PICKER` displays deterministic values by default:

- date-only: `YYYY-MM-DD`
- date + time: `YYYY-MM-DD HH:mm`

Set `showTime: true` to render the segmented `HH:mm` time picker in the calendar popover.

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
