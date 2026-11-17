# WorkshopModule

Renders a Workshop module in an iframe using the Foundry URL from your `OsdkProvider` client. This experimental component accepts a module RID and version and uses Workshop's embedded view.

## Import

```tsx
import { WorkshopModule } from "@osdk/react-components/experimental/workshop-module";
```

## Usage

Render inside an existing `OsdkProvider` and give the container a height. Import the component stylesheet as described in the [package setup](./GettingStarted.md#2-import-styles).

```tsx
<div style={{ height: "70vh" }}>
  <WorkshopModule
    moduleRid="ri.workshop.main.module.00000000-0000-0000-0000-000000000000"
    title="Operations dashboard"
  />
</div>
```

`moduleVersion` defaults to `published` and accepts only `latest` or `published`. Use `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Changing the RID or version navigates the iframe to the new module or version.

The iframe uses the user's browser session to authenticate with Foundry. The user must have access to the module, and the Foundry deployment must permit embedding from the app's origin. The component does not forward the OSDK client's access token into the iframe.

The component connects to Workshop through a dedicated message channel after the iframe loads. Variable synchronization requires a Foundry deployment with the Workshop embed integration.

## Declaring variable types

Declare the module-interface external IDs and their value types, then pass that type to `WorkshopModule` or `BaseWorkshopModule`:

```tsx
import {
  WorkshopModule,
  type WorkshopVariableValues,
} from "@osdk/react-components/experimental/workshop-module";
import { useState } from "react";

type ModuleVariables = {
  count: number;
  searchText: string;
  includeArchived: boolean;
};

function Dashboard() {
  const [variables, setVariables] = useState<
    WorkshopVariableValues<ModuleVariables>
  >({ count: 25, searchText: "Ada" });

  return (
    <WorkshopModule<ModuleVariables>
      moduleRid="ri.workshop.main.module.example"
      variables={variables}
      onVariablesChanged={(changes) =>
        setVariables((previous) => ({ ...previous, ...changes }))
      }
    />
  );
}
```

TypeScript checks variable names and values against the declared contract, including the callback's partial updates. For example, `{ count: "25" }` and `{ unknownVariable: true }` are rejected. Omitted fields are unchanged, and `null` represents clearing a value. Supported types are `string`, `number`, `boolean`, homogeneous arrays of those primitives (including readonly arrays), and `WorkshopObjectSetValue` references.

The connection waits for Workshop to publish its module schema, then validates inputs and outputs against the declared variable types. Integrations that do not publish a schema time out. The current `variables` object is sent when the connection is established and whenever that prop changes. Merge the partial updates from `onVariablesChanged` back into your state, as above, to retain Workshop edits when sending later inputs. A new connection sends the latest values again after iframe navigation or reload. These messages do not acknowledge that Workshop applied an update.

## Array variables

Declare list variables as `string[]`, `number[]`, or `boolean[]` (or their readonly equivalents). Each update replaces the whole list. Use `[]` for an empty list and `null` to clear the variable; omit the field to leave it unchanged. Mixed types, nested arrays, sparse arrays, and null or undefined elements are not supported.

```tsx
<WorkshopModule<{ selectedNames: readonly string[] }>
  moduleRid="ri.workshop.main.module.example"
  variables={{ selectedNames: ["Ada", "Grace"] }}
/>
```

Array inputs and outputs require a Foundry deployment with list-variable support in the Workshop embed integration. Scalar-only deployments reject messages containing arrays.

## Object-set variables

Declare object-set variables as `WorkshopObjectSetValue` and pass a reference to a set that Workshop's signed-in user can access:

```tsx
import type { WorkshopObjectSetValue } from "@osdk/react-components/experimental/workshop-module";

<WorkshopModule<{ employees: WorkshopObjectSetValue }>
  moduleRid="ri.workshop.main.module.example"
  variables={{
    employees: {
      objectSetRid: "ri.object-set.main.temporary-object-set.example",
    },
  }}
/>;
```

`onVariablesChanged` receives the same reference shape. Merge changes into your controlled state as above. Use `null` to clear the variable. Pass a serialized RID reference, not an OSDK `ObjectSet` instance; the component does not create temporary object sets or hydrate received references. Object-set arrays are not supported.

This requires a Foundry deployment with object-set support in the Workshop embed integration. Older deployments reject messages containing object-set references.

## Branch

`WorkshopModule` inherits the resolved global branch from the client in `OsdkProvider`, so the embedded module uses the same branch as the app's OSDK requests. Replacing the provider's client with one on a different branch navigates the iframe and resets the module's state.

`BaseWorkshopModule` accepts an explicit `branchRid`. When no branch is supplied, it opens on main, including when Workshop previously remembered another branch in the browser session.

```tsx
<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  branchRid="ri.branch..branch.example"
/>
```

Version selection keeps Workshop's existing behavior: on a branch, both `published` and `latest` load the latest saved module on that branch, falling back to the latest saved module on main if needed. On main, `moduleVersion` selects the published or latest saved version as described above.

## Theme

`WorkshopModule` inherits the initial theme from the nearest [OsdkThemeProvider](./OsdkThemeProvider.md). The provider is optional; without one, Workshop uses the module's theme. In `system` mode, the iframe stays hidden with no URL until the browser preference is resolved. It starts loading only after the initial light or dark theme is known.

The theme is captured once per mount. Later provider changes do not reload the iframe or reset the module's state. Remount the component to apply a different theme. A Workshop module with a variable-driven theme keeps its own theme behavior.

For `BaseWorkshopModule`, pass `defaultTheme="light"`, `defaultTheme="dark"`, or `defaultTheme="system"` explicitly. It does not read `OsdkThemeProvider`.

## Without OsdkProvider

Use `BaseWorkshopModule` to supply the Foundry URL explicitly:

```tsx
import { BaseWorkshopModule } from "@osdk/react-components/experimental/workshop-module";

<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.00000000-0000-0000-0000-000000000000"
  style={{ height: "70vh" }}
/>;
```

## Props

### WorkshopModuleProps

<!-- AUTOGEN:props START src=src/workshop-module/WorkshopModuleApi.ts interface=WorkshopModuleProps — generated by scripts/gen-props.mjs; run `pnpm --filter @osdk/react-components gen-props` -->

Type parameters: `TVariables extends WorkshopVariableMap = WorkshopVariableMap`

| Name                 | Type                                                    | Description                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`          | `string`                                                | **Required.** RID of the Workshop module to render.                                                                                                                                                                 |
| `moduleVersion`      | `"latest" \| "published"`                               | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                         |
| `variables`          | `WorkshopVariableValues<TVariables>`                    | Controlled variable values keyed by module-interface external ID. Pair with onVariablesChanged to retain Workshop edits. Omitted variables are unchanged; null represents a cleared value. Defaults to `undefined`. |
| `onVariablesChanged` | `(changes: WorkshopVariableValues<TVariables>) => void` | Callback for partial updates to the controlled variables. Merge the changes into variables to retain Workshop edits. Defaults to `undefined`.                                                                       |
| `title`              | `string`                                                | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                   |
| `className`          | `string`                                                | Additional CSS class name for the iframe. Defaults to `undefined`.                                                                                                                                                  |
| `style`              | `CSSProperties`                                         | Inline styles for the iframe. By default, it fills its container. Defaults to `undefined`.                                                                                                                          |

<!-- AUTOGEN:props END -->

### BaseWorkshopModuleProps

<!-- AUTOGEN:props START src=src/workshop-module/WorkshopModuleApi.ts interface=BaseWorkshopModuleProps — generated by scripts/gen-props.mjs; run `pnpm --filter @osdk/react-components gen-props` -->

Type parameters: `TVariables extends WorkshopVariableMap = WorkshopVariableMap`

| Name                 | Type                                                    | Description                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`          | `string`                                                | **Required.** RID of the Workshop module to render.                                                                                                                                                                       |
| `moduleVersion`      | `"latest" \| "published"`                               | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                               |
| `variables`          | `WorkshopVariableValues<TVariables>`                    | Controlled variable values keyed by module-interface external ID. Pair with onVariablesChanged to retain Workshop edits. Omitted variables are unchanged; null represents a cleared value. Defaults to `undefined`.       |
| `onVariablesChanged` | `(changes: WorkshopVariableValues<TVariables>) => void` | Callback for partial updates to the controlled variables. Merge the changes into variables to retain Workshop edits. Defaults to `undefined`.                                                                             |
| `title`              | `string`                                                | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                         |
| `className`          | `string`                                                | Additional CSS class name for the iframe. Defaults to `undefined`.                                                                                                                                                        |
| `style`              | `CSSProperties`                                         | Inline styles for the iframe. By default, it fills its container. Defaults to `undefined`.                                                                                                                                |
| `foundryUrl`         | `string`                                                | **Required.** HTTP or HTTPS Foundry base URL, for example `https://example.palantirfoundry.com`.                                                                                                                          |
| `branchRid`          | `string`                                                | Global branch RID. Changing the branch reloads the module. Defaults to `undefined (main branch)`.                                                                                                                         |
| `defaultTheme`       | `"light" \| "dark" \| "system"`                         | Sets the initial theme. `system` reads the browser's preference once before the module loads.<br /><br />Changes after mount are ignored. Remount to change the theme. Defaults to `undefined (uses the module's theme)`. |

<!-- AUTOGEN:props END -->
