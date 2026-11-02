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

## Variables

Pass `variables` to send scalar inputs using the external IDs exposed in the module interface. Merge `onVariablesChanged` patches into your state to keep edits from Workshop in sync:

```tsx
import type { WorkshopVariableValues } from "@osdk/workshop-embed";
import { useCallback, useState } from "react";

// Inside your component:
const [variables, setVariables] = useState<WorkshopVariableValues>({
  searchText: "Ada",
  maxResults: 25,
  includeArchived: false,
});
const onVariablesChanged = useCallback((changes: WorkshopVariableValues) => {
  setVariables((previous) => ({ ...previous, ...changes }));
}, []);

<WorkshopModule
  moduleRid="ri.workshop.main.module.example"
  variables={variables}
  onVariablesChanged={onVariablesChanged}
  onConnectionError={handleConnectionError}
/>;
```

Strings, finite numbers, booleans, and `null` are supported. Changing an input sends its new value without reloading the iframe. Omitted inputs remain unchanged; use `null` to request clearing an input. Pass a new object when changing inputs.

The callback reports changed fields only, including `null` for cleared values. Values received from Workshop are remembered before the callback, so merging them into props does not echo them back. Inputs are compared with the latest values sent or received: if the app sends `25`, Workshop reports `50`, and the app then sets `25` again, the new `25` is sent. Keep your state in sync through the callback; ignoring updates can cause stale props to overwrite Workshop edits on a later render. Notifications are delivered as they arrive; concurrent edits are not resolved by the messaging layer.

The component connects after the iframe loads and sends the current inputs again after an iframe reload or destination change. It closes the previous connection on navigation and unmount. Automatic reconnection after restoration from the browser's back/forward cache is not supported yet. Initial inputs may arrive after the module has rendered its defaults.

This requires a Workshop deployment with the embed messaging and scalar-input integration. Receiving updates additionally requires Workshop to publish variable changes; input-only deployments will not invoke the callback. A successful handshake confirms a connection, not that the module is ready or has applied an input. Older deployments can still render the iframe. Connection failures, including the default ten-second handshake timeout, and input-send failures are reported through `onConnectionError`; they do not replace the iframe or automatically open a sign-in window. A timeout alone does not identify an authentication failure.

`BaseWorkshopModule` accepts the same props. Arrays and object sets are not supported yet.

## Branch

`WorkshopModule` inherits the resolved Foundry branch from the client in `OsdkProvider`, so the embedded module uses the same branch as the app's OSDK requests. Replacing the provider's client with one on a different branch navigates the iframe and resets the module's state.

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

| Name                 | Type                                        | Description                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`          | `string`                                    | **Required.** RID of the Workshop module to render.                                                                                                                                                                                                                                                                                           |
| `moduleVersion`      | `"latest" \| "published"`                   | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                                                                                                                                                   |
| `variables`          | `WorkshopVariableValues`                    | Controlled scalar inputs keyed by module-interface external ID. Changed values are sent without reloading the iframe. Merge onVariablesChanged patches into these values to keep edits from Workshop in sync. Omitted inputs remain unchanged; null requests clearing a value. Inputs are resent after reconnection. Defaults to `undefined`. |
| `onVariablesChanged` | `(changes: WorkshopVariableValues) => void` | Reports scalar changes from Workshop as a partial update keyed by module-interface external ID. Merge the patch into variables to retain Workshop edits. Unchanged values are not reported. Defaults to `undefined`.                                                                                                                          |
| `onConnectionError`  | `(error: Error) => void`                    | Called when connecting or sending inputs fails. The iframe remains visible. Defaults to `undefined`.                                                                                                                                                                                                                                          |
| `title`              | `string`                                    | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                                                                                                                                             |
| `className`          | `string`                                    | Additional CSS class name for the iframe. Defaults to `undefined`.                                                                                                                                                                                                                                                                            |
| `style`              | `CSSProperties`                             | Inline styles for the iframe. By default, it fills its container. Defaults to `undefined`.                                                                                                                                                                                                                                                    |

<!-- AUTOGEN:props END -->

### BaseWorkshopModuleProps

<!-- AUTOGEN:props START src=src/workshop-module/WorkshopModuleApi.ts interface=BaseWorkshopModuleProps — generated by scripts/gen-props.mjs; run `pnpm --filter @osdk/react-components gen-props` -->

| Name                 | Type                                        | Description                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`          | `string`                                    | **Required.** RID of the Workshop module to render.                                                                                                                                                                                                                                                                                           |
| `moduleVersion`      | `"latest" \| "published"`                   | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                                                                                                                                                   |
| `variables`          | `WorkshopVariableValues`                    | Controlled scalar inputs keyed by module-interface external ID. Changed values are sent without reloading the iframe. Merge onVariablesChanged patches into these values to keep edits from Workshop in sync. Omitted inputs remain unchanged; null requests clearing a value. Inputs are resent after reconnection. Defaults to `undefined`. |
| `onVariablesChanged` | `(changes: WorkshopVariableValues) => void` | Reports scalar changes from Workshop as a partial update keyed by module-interface external ID. Merge the patch into variables to retain Workshop edits. Unchanged values are not reported. Defaults to `undefined`.                                                                                                                          |
| `onConnectionError`  | `(error: Error) => void`                    | Called when connecting or sending inputs fails. The iframe remains visible. Defaults to `undefined`.                                                                                                                                                                                                                                          |
| `title`              | `string`                                    | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                                                                                                                                             |
| `className`          | `string`                                    | Additional CSS class name for the iframe. Defaults to `undefined`.                                                                                                                                                                                                                                                                            |
| `style`              | `CSSProperties`                             | Inline styles for the iframe. By default, it fills its container. Defaults to `undefined`.                                                                                                                                                                                                                                                    |
| `foundryUrl`         | `string`                                    | **Required.** HTTP or HTTPS Foundry base URL, for example `https://example.palantirfoundry.com`.                                                                                                                                                                                                                                              |
| `branchRid`          | `string`                                    | Foundry branch RID. Changing the branch reloads the module. Defaults to `undefined (main branch)`.                                                                                                                                                                                                                                            |
| `defaultTheme`       | `"light" \| "dark" \| "system"`             | Initial theme override. `system` resolves the browser preference once before loading the module. Uncontrolled: changes after mount are ignored. Remount to apply a different theme. Defaults to `undefined (use the module's theme)`.                                                                                                         |

<!-- AUTOGEN:props END -->
