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

This component renders the module only. It does not map interface variables or establish a message channel.

## Sign-in

Sign-in handling is disabled by default. Set `enableAuthPopup` on `WorkshopModule` or `BaseWorkshopModule` to enable it:

```tsx
<WorkshopModule moduleRid="ri.workshop.main.module.example" enableAuthPopup />
```

When enabled, the component checks the module URL using the user's browser session before loading it. If the response redirects or returns 401, it automatically attempts to open Foundry sign-in in a popup. If the browser blocks the popup, the component shows a **Sign in to Foundry** button so the user can open it directly. Modules on the same Foundry origin share one sign-in popup.

The component rechecks the session while the popup is open and after it closes. It loads the iframe when the check succeeds; closing the popup alone does not indicate successful sign-in. If sign-in is still required, users can retry or choose **Open in Foundry**.

This is a best-effort check: redirects can have causes other than authentication, and a fetch is not equivalent to iframe navigation. If CORS, a network error, or an unsupported HEAD request prevents the check, the component falls back to loading the iframe normally. Each check times out after five seconds. Signing in cannot bypass browser restrictions on third-party cookies or the deployment's embedding policy.

When disabled, the component loads the iframe without session checks, sign-in UI, or popups. Turning the prop off during sign-in stops polling and releases the popup, closing it if no other module is using it.

`className` and `style` apply to the outer container, which holds either the iframe or the sign-in UI. Size the container as you would the module; the iframe fills it.

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

| Name              | Type                      | Description                                                                                                                                                                                                                                   |
| ----------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`       | `string`                  | **Required.** RID of the Workshop module to render.                                                                                                                                                                                           |
| `moduleVersion`   | `"latest" \| "published"` | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                                                   |
| `enableAuthPopup` | `boolean`                 | Enables browser-session checks and a Foundry sign-in popup before loading the module, with a sign-in button if the popup is blocked. When disabled, loads the iframe without checking the session or showing sign-in UI. Defaults to `false`. |
| `title`           | `string`                  | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                                             |
| `className`       | `string`                  | Additional CSS class name for the module container, including its sign-in state. Defaults to `undefined`.                                                                                                                                     |
| `style`           | `CSSProperties`           | Inline styles for the module container. By default, it fills its parent. Defaults to `undefined`.                                                                                                                                             |

<!-- AUTOGEN:props END -->

### BaseWorkshopModuleProps

<!-- AUTOGEN:props START src=src/workshop-module/WorkshopModuleApi.ts interface=BaseWorkshopModuleProps — generated by scripts/gen-props.mjs; run `pnpm --filter @osdk/react-components gen-props` -->

| Name              | Type                            | Description                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleRid`       | `string`                        | **Required.** RID of the Workshop module to render.                                                                                                                                                                                           |
| `moduleVersion`   | `"latest" \| "published"`       | Module version: `latest` for the latest saved version, or `published` for the published version (falling back to the latest saved version if none is published). Defaults to `"published"`.                                                   |
| `enableAuthPopup` | `boolean`                       | Enables browser-session checks and a Foundry sign-in popup before loading the module, with a sign-in button if the popup is blocked. When disabled, loads the iframe without checking the session or showing sign-in UI. Defaults to `false`. |
| `title`           | `string`                        | Accessible title for the iframe. Defaults to `"Workshop module"`.                                                                                                                                                                             |
| `className`       | `string`                        | Additional CSS class name for the module container, including its sign-in state. Defaults to `undefined`.                                                                                                                                     |
| `style`           | `CSSProperties`                 | Inline styles for the module container. By default, it fills its parent. Defaults to `undefined`.                                                                                                                                             |
| `foundryUrl`      | `string`                        | **Required.** HTTP or HTTPS Foundry base URL, for example `https://example.palantirfoundry.com`.                                                                                                                                              |
| `branchRid`       | `string`                        | Global branch RID. Changing the branch reloads the module. Defaults to `undefined (main branch)`.                                                                                                                                             |
| `defaultTheme`    | `"light" \| "dark" \| "system"` | Sets the initial theme. `system` reads the browser's preference once before the module loads.<br /><br />Changes after mount are ignored. Remount to change the theme. Defaults to `undefined (uses the module's theme)`.                     |

<!-- AUTOGEN:props END -->
