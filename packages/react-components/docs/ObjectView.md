# ObjectView

Single-object view that renders a Foundry ontology object as a header + Properties section,
with rendering driven by the object type's metadata (display names, icons, title property).

> **Status:** experimental. The MVP supports the `{ objectType, primaryKey }` input mode
> only. The `objectSet` and `object` modes throw at runtime — pre-fetched instances should
> be passed to `<BaseObjectView>` directly until those modes ship.

## Prerequisites

Same as the rest of `@osdk/react-components` — install the package, wrap your app with
`OsdkProvider2`, and import the CSS. See the [README](../README.md) for setup.

## Import

```typescript
import { ObjectView } from "@osdk/react-components/experimental/object-view";
import type { ObjectViewProps } from "@osdk/react-components/experimental/object-view";
```

For pre-fetched data:

```typescript
import { BaseObjectView } from "@osdk/react-components/experimental/object-view";
import type {
  BaseObjectViewProps,
  ObjectViewObject,
} from "@osdk/react-components/experimental/object-view";
```

## Basic Usage

```tsx
import { Supplier } from "$osdk/objects/Supplier";
import { ObjectView } from "@osdk/react-components/experimental/object-view";

export function SupplierDetail({ supplierId }: { supplierId: string }) {
  return <ObjectView objectType={Supplier} primaryKey={supplierId} />;
}
```

That's it. The component fetches the object, fetches the type metadata, derives the layout
from `titleProperty` + property metadata, and renders.

## Props Reference

### `ObjectViewProps`

| Prop                | Type                                        | Default | Description                                                                                                       |
| ------------------- | ------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `objectType`        | `Q`                                         | —       | The object or interface type. Required when using primary-key mode.                                               |
| `primaryKey`        | `PrimaryKeyType<Q>`                         | —       | The primary key of the object to display. Required when using primary-key mode.                                   |
| `enableHeader`      | `boolean`                                   | `true`  | Whether the header (icon + title + type) is shown.                                                                |
| `renderHeader`      | `(object) => ReactNode`                     | —       | Override the default header rendering. Receives the loaded `Osdk.Instance`.                                       |
| `renderProperty`    | `(propertyKey, value, object) => ReactNode` | —       | Override the rendering of a property cell. If undefined for a given property, the default value renderer is used. |
| `onObjectLoaded`    | `(object) => void`                          | —       | Fires after the object is fetched and ready. Default rendering still runs.                                        |
| `onObjectLoadError` | `(error: Error) => void`                    | —       | Fires when fetching fails. Default error UI still renders.                                                        |
| `className`         | `string`                                    | —       | Forwarded to the outer container.                                                                                 |

The `objectSet` and `object` input modes are reserved on the type but not yet implemented.

## Render Overrides

```tsx
<ObjectView
  objectType={Supplier}
  primaryKey={id}
  renderHeader={(supplier) => (
    <header className="custom-header">
      <h1>{supplier.name}</h1>
      <span>{supplier.country}</span>
    </header>
  )}
  renderProperty={(propertyKey, value) => {
    if (propertyKey === "rating" && typeof value === "number") {
      return <span>★ {value.toFixed(2)}</span>;
    }
    return value == null ? "—" : String(value);
  }}
/>;
```

## Lifecycle Listeners

These fire alongside the default behavior — they don't replace it. Use them for analytics,
scroll-to-top, or any side effect that should run when the displayed object changes.

```tsx
<ObjectView
  objectType={Supplier}
  primaryKey={id}
  onObjectLoaded={(supplier) => {
    analytics.track("supplier_viewed", { id: supplier.supplierId });
  }}
  onObjectLoadError={(error) => {
    logger.error("Supplier load failed", error);
  }}
/>;
```

## BaseObjectView

If you already have a fetched object (e.g. you're driving a list view and don't want to
re-fetch), use `<BaseObjectView>` with a primitive shape. The Base accepts no OSDK types —
it's pure UI.

```tsx
import { BaseObjectView } from "@osdk/react-components/experimental/object-view";

<BaseObjectView
  object={{
    apiName: "Supplier",
    typeDisplayName: "Supplier",
    icon: { type: "blueprint", name: "shop", color: "#3b82f6" },
    title: "Supplier 6",
    properties: [
      {
        apiName: "country",
        displayName: "Country",
        value: "France",
        dataType: "string",
        visibility: "PROMINENT",
      },
      {
        apiName: "supplierId",
        displayName: "Supplier ID",
        value: "SUP-00006",
        dataType: "string",
      },
    ],
  }}
/>;
```

## Theming

All visual properties are exposed as CSS variables under the `--osdk-object-view-*`
namespace. See [CSSVariables.md](./CSSVariables.md) for the full list. Defaults map to the
package's `--osdk-*` token system, which in turn maps to Blueprint `--bp-*` tokens.

## Limitations (MVP)

- Only the `{ objectType, primaryKey }` input mode is implemented. `objectSet` and `object`
  modes throw at runtime.
- Per-property visibility (`PROMINENT` vs `NORMAL` vs `HIDDEN`) is not surfaced through
  OSDK's metadata shape, so the OSDK wrapper renders all properties as `NORMAL`. The Base
  fully supports the visibility levels — pass `visibility` on individual properties.
- Linked objects sections, tabs, search, and view toggles are out of MVP scope.
- The dynamic Blueprint icon name is captured but not rendered visually (avoids depending
  on `@blueprintjs/core` at runtime); a colored initial is shown instead.
