This documentation provides guidance for developing in `@osdk/react-components`.

## Workflow skills

When the user asks to **add, create, or scaffold a new component**, invoke the `add-new-component` skill. It walks through API-first PR, MVP feature checklist, and verification loop on top of `CONTRIBUTING.md`. Do not improvise the workflow — follow the skill.

If a skill ever conflicts with this file or `CONTRIBUTING.md`, those win — flag the conflict.

## TypeScript Best Practices

- NEVER use `any` without asking the user first. If you think you need `any`, you probably don't understand the problem
- Projects are ESM/TypeScript - look for `.ts`/`.tsx` files, not `.js`
- To check compilation: `pnpm turbo typecheck --filter=@osdk/react-components` (NEVER `pnpm --dir <path> turbo` — `--dir` breaks Turbo)

## React Best Practices

- Always put new components in their own file and create separate components instead of inline functions
- NEVER conditionally call React hooks
- ALWAYS keep components rendering during loading/error states. Don't use early returns like `if (isLoading) return <LoadingMessage />`. Show loading/error indicators while rendering existing data to prevent UI flashing
- ALWAYS memoize non-primitive values passed to component props with useCallback or useMemo
- ALWAYS combine classnames with the `classnames` utility. NEVER use string literal class names
- NEVER use empty arrays `[]` or empty objects `{}` directly in component bodies as they create new references on every render, causing infinite re-renders. Always extract them as constants outside the component or memoize them. For example, instead of `const defaultValue = []`, use `const EMPTY_ARRAY: [] = []` outside the component or `const defaultValue = useMemo(() => [], [])`

## OSDK Component Architecture

- The outermost component (e.g. `ObjectTable`) handles data fetching from Foundry using `@osdk/react` hooks. ALWAYS use a hook from `@osdk/react` for network requests — never `fetch`, `axios`, or other HTTP clients directly
- The base component (`Base<Name>`) contains all interactions and styling and is OSDK-agnostic. The outer component processes OSDK data and passes primitives to the base component. This lets users build on the base component with their own data fetching
- Component interactions live in a hook (e.g. `useBase<Name>State`) so the same logic can later be exported as a headless component without rewriting. Treat Base as `<headless-hook> + <markup>` from day one
- For complex components, split into a building blocks tier: sub-components and hooks under `components/` and `hooks/` subfolders (e.g. `PdfViewerToolbar`, `PdfViewerSidebar`, `usePdfViewerState`)

### Reuse before writing

- **Reuse from `src/base-components/` first.** This folder contains shared internal UI primitives (`action-button/`, `checkbox/`, `combobox/`, `dialog/`, `draggable-list/`, `icon/`, `search-bar/`, `searchable-menu/`, `select/`, `skeleton/`, `switch/`, `tooltip/`). Check this folder before writing a new UI primitive — reusing avoids visual / behavioral drift
- **Public primitives barrel: `src/public/primitives.ts`.** Enumerates primitives that are intentionally re-exported (`ActionButton`, `Dialog`, `SkeletonBar`, `Tooltip`, etc.). Anything in `src/base-components/` not re-exported through `primitives.ts` stays internal-only
- **NEVER export UI primitives from a component folder.** Anything in `src/base-components/` is internal. If a primitive is reusable across components, move it into `src/base-components/` so the next component can pick it up
- **Prefer `@base-ui/react` over primitive HTML for interactive elements.** When you need a button, dialog, menu, popover, tooltip, select, switch, or similar interactive primitive, reach for the `@base-ui/react` component (it's a workspace dependency) rather than a raw `<button>`, `<div role="dialog">`, etc. Base-ui handles accessibility, keyboard, and focus correctly. Plain semantic HTML (`<div>`, `<section>`, `<span>`, `<a>`) is fine for non-interactive layout
- **Prefer Blueprint icons (`@blueprintjs/icons`) for iconography.** Use Blueprint's icon set rather than inlining SVGs, importing from another icon library, or hand-rolling glyphs. Verify the icon name exists at the chosen export path before committing — typos surface at runtime, not build time

## API Design

These rules apply whenever a component's public API changes — new component, new feature, or bug fix that touches props.

### Controlled / uncontrolled / no-default

Every feature that holds state the user can change (selection, sort, filter, expansion, edit-in-progress, active tab, etc.) must expose all three modes:

- **Controlled** — caller passes `<feature>` (e.g. `selectedRows`, `orderBy`, `filter`). The prop is the source of truth; caller re-renders with new values via the `on<Feature>Changed` callback
- **Uncontrolled with explicit default** — caller passes `default<Feature>` (e.g. `defaultOrderBy`, `defaultSelectedRows`). The component seeds its own internal state from the default and continues to manage it. `on<Feature>Changed` still fires so callers can observe
- **Uncontrolled with no default** — caller passes neither. **The feature must still work out of the box.** The component maintains internal state seeded with a sensible empty default (e.g. `[]`, `{}`, `null`) and built-in interactions continue to function

**Naming**: `<feature>` (controlled), `default<Feature>` (uncontrolled seed), `on<Feature>Changed` (callback). Match `ObjectTableApi.ts` exactly: `selectedRows` / `onRowSelection`, `orderBy` / `defaultOrderBy` / `onOrderByChanged`, `filter` / `onFilterChanged`.

**Canonical implementation**: see `src/object-table/hooks/useRowSelection.ts` — `rowSelectionState` is computed from `selectedRows` when controlled, falls back to `internalRowSelection` (a `useState({})`) otherwise; `onRowSelection` fires in both modes. Mirror this hook structure for any new stateful feature.

### Render override slots

Expose `render*` slots (e.g. `renderHeader`, `renderProperty`, `renderRow`) where consumers may legitimately want to deviate from default rendering. Default rendering must remain feature-complete with no overrides supplied. Don't add slots speculatively — add them where the surface is obviously customisable (header, individual cell/property, empty state). When in doubt, add the override; we want to enable flexibility where we can.

### Event listeners on top of default behavior

For every state change with a built-in default behavior (sort, filter, select, edit, navigate, load), expose a non-controlling `on*` listener so consumers can layer extra handling — analytics, scroll-to-top, telemetry, side effects — without replacing the default. The default still runs whether or not the listener is provided. **Distinct from controlled-mode `on*Changed` handlers, which DO take over the state.**

### Other API rules

- **Aim for one required prop.** Most "required" inputs can be derived (e.g. column definitions from `objectType`) or defaulted
- **`enable*` boolean flags default to `true`** when the feature is part of the out-of-the-box experience
- **Document defaults inline** with `@default` JSDoc on every optional prop. Use `@param` / `@returns` for callbacks
- **Define the API in its own file**: `<Name>Api.ts` co-located with the component, exporting only the OSDK-aware outer-component props plus public sub-types. Base props live inline in `Base<Name>.tsx`

## CSS Styling

- **Read `src/tokens/base-tokens/base.css` first** to discover the real `--osdk-*` token names available in the package. The file is authoritative — do not assume token names
- **Use `--bp` design tokens first.** Any `--bp` token used must be mapped from an `--osdk` token in `base.css`
- **NEVER hardcode colors or pixel values.** Every visual property goes through a CSS variable
- **If a value has no analog in `base.css`, do not inline it.** Flag it as a follow-up for a separate token-addition change. Inlining bypasses theming and accumulates as drift
- **Use CSS modules** (`<Name>.module.css`) for component-scoped styles
- **Define a CSS variable for every property a consumer may want to customize.** Defaults go in `src/tokens/<name>.css`. Document new variables in `docs/CSSVariables.md`
- **Respect CSS layers** — see `README.md` "CSS Setup" for layer order and how brand overrides plug in

## Testing

- **One test file per source file.** Before writing, glob for an existing `<X>.test.tsx`; if it exists, append nested `describe` blocks. **NEVER split** into `<X>.<feature>.test.tsx`
- Test files live in `__tests__/` directories alongside the code they test
- **Test the Base layer independently of OSDK** — keeps tests fast and focused
- **Test the OSDK wrapper separately** for data transformation and hook-usage behavior
- **If no mock pattern exists** for the OSDK data shape, scaffold OSDK-wrapper tests with `it.todo("<behaviour>")` rather than fabricating mocks. Fabricated mocks drift from real shapes and create false-positive coverage

## Storybook

- Stories live in `packages/react-components-storybook/src/stories/<Name>/<Name>.stories.tsx`
- **Tier placement is via `title:`, not folder path.** New components belong under the `Experimental/` category:

  ```ts
  const meta: Meta<typeof MyComponent> = {
    title: "Experimental/<Name>", // or "Experimental/<Parent>/<Subfeature>"
    tags: ["experimental"],
    component: MyComponent,
  };
  ```

  Produces URLs like `experimental-myname--default`, matching `experimental-baseform--default`, `experimental-objecttable-building-blocks-basetable--default`
- **OSDK-aware components must accept mocked data via props in stories.** Storybook runs without a Foundry stack, so the OSDK wrapper cannot fetch real data there. Either expose a `data` / `objects` / `value` prop the story can populate, or render the `Base<Name>` component directly. Use the MSW addon for stories that exercise hook-level fetch paths

## Metrics

- Wrap OSDK components with `withOsdkMetrics` at the **export barrel** (`src/public/experimental/<name>.ts`), NOT inside the component body:

  ```ts
  // src/public/experimental/<name>.ts
  import { MyComponent as _MyComponent } from "../../<name>/<Name>.js";
  import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
  export const MyComponent: typeof _MyComponent = withOsdkMetrics(
    _MyComponent,
    "MyComponent",
  );
  ```

- Add the `typeof _Component` annotation so `--isolatedDeclarations` is satisfied
- **Do NOT** wrap Base components
- **Do NOT** call `useRegisterUserAgent` directly inside the component body

## Project Management

- This project uses pnpm. DO NOT use npm
- Monorepo: run tests from individual packages, not root

## Security

- NEVER disable gpg signing unless explicitly requested

## Code Maintenance

- Do not fix diagnostic warnings in old code

## Common pitfalls

- **NEVER `pnpm --dir <path> turbo` or `cd <path> && pnpm turbo`** — the `--dir` flag breaks Turbo (pnpm interprets the path as the command). Always `pnpm turbo <task> --filter=@osdk/react-components`. For non-turbo commands (vitest, lint), `pnpm --dir packages/react-components <cmd>` is fine
- **If `pnpm turbo check` fails on lint**, run `pnpm --dir packages/react-components fix-lint` then re-check
- **Format scoped to changed files only**: `git ls-files --modified --others --exclude-standard | xargs npx dprint fmt`. The pre-commit hook rejects unformatted code, but bare `npx dprint fmt` reformats the entire repo and produces a noisy diff
- **Do NOT skip `transpileAllDeps`.** This package depends on transpiled output of other monorepo packages; skipping leads to "missing export" errors that look like real bugs:
  ```sh
  pnpm --filter @osdk/react-components transpileAllDeps
  ```
