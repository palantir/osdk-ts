---
name: convert-library-osdk-native
description: Convert any React component library into OSDK-native components that accept Foundry Ontology types directly as props. Classifies components, applies one of three conversion recipes (Engine-Owning, Data-Mapping, Action-Driven), and produces type-safe wrappers using @osdk/react hooks. Triggers when user says "convert to OSDK", "make OSDK-native", "add OSDK bindings", "wrap this library for Foundry", or wants to connect an external component library to OSDK data.
user-invocable: true
---

# Convert a React Component Library to OSDK-Native

Operational playbook for converting any React component library (shadcn, Blueprint, MUI, internal Palantir, or third-party) into OSDK-native variants where components accept Foundry Ontology types directly as props.

This skill is a **companion** to [`CONTRIBUTING.md`](../../../CONTRIBUTING.md) and [`CLAUDE.md`](../../../CLAUDE.md). Those documents are the canonical source of truth for API design, styling, testing, and OSDK component architecture. This skill **does not restate them** — it cites them and layers a library-conversion workflow on top:

1. An **audit & classification phase** — scan the target library, gate each component on "reads/writes Foundry data?", classify survivors into one of three conversion recipes.
2. A **value-ordered conversion queue** — biggest user impact first (tables → forms → charts → pickers → search).
3. **Three recipe playbooks** — Engine-Owning, Data-Mapping, Action-Driven — each with concrete implementation steps, OSDK hook wiring, and type-safety patterns.
4. **Named user checkpoints** — explicit `AskUserQuestion` gates at audit approval, API design, and final review.
5. A **pattern extraction phase** — after 2+ conversions, distill findings into a reusable conversion checklist.

If this skill conflicts with `CONTRIBUTING.md` or `CLAUDE.md`, **those win** — flag the conflict to the user.

---

## Git Policy

Ask the user before every git/gh action that mutates remote state (`git commit`, `git push`, `gh pr create`, edits to a PR). A "yes" once does not extend to the next action.

---

## Core Principle: Wrap, Don't Replace

The original component library stays untouched. The OSDK layer sits in front of it, owning data fetching, mutations, and state translation. The original components become the rendering substrate.

This mirrors the proven pattern in this package:

- `ObjectTable.tsx` (OSDK wrapper) owns `useReactTable` with `manualSorting: true`
- `Table.tsx` (Base) receives the table instance and renders — zero OSDK imports
- The wrapper translates between OSDK query params and the component's state model

When converting an external library, **the external component IS the Base layer**. We write only the OSDK wrapper on top.

---

## Preflight — Before Writing Any Code

Ask the user, in order. Do not skip.

1. **Target library.** What library are we converting? Get:
   - Repository URL or local path to the fork
   - Component source directory (e.g., `src/components/`, `registry/ui/`)
   - Package manager and framework (Next.js, Vite, etc.)

2. **Scope.** Full library or specific components? If specific, which ones?

3. **Destination.** Where should the converted components live?
   - In the library's fork alongside originals (default: `osdk/` directory)
   - In a new package in this monorepo
   - In a standalone package

4. **OSDK dependencies.** Verify the target has or can receive:
   ```json
   { "@osdk/api": "^2.x", "@osdk/client": "^2.x", "@osdk/react": "^2.x" }
   ```

5. **Ontology types.** Does the target have generated types (via `@osdk/cli`), or will we use mock types?

---

## Phase 1: Audit & Classify

### The Conversion Gate

A component gets converted if and only if:

> **Does this component need to read data from or write data to Foundry?**

- Yes → Convert it
- No → Skip it (it's UI chrome: buttons, badges, tooltips, separators, etc.)

Individual input primitives (Input, Switch, Slider, Checkbox) are NOT converted standalone — they are building blocks used _inside_ the Form (Action-Driven) conversion.

### Classification: Three Recipes

For each component that passes the gate, classify into exactly one recipe:

#### Recipe 1: Engine-Owning

**For:** Components with a data engine (table library, chart library, virtualized list).
**Pattern:** OSDK wrapper owns the engine instance, uses `manual*` flags for server-side operations, passes the engine instance to the original component for rendering.
**Examples:** DataTable (TanStack Table), Chart (Recharts), VirtualList.
**OSDK hooks:** `useOsdkObjects` + `useOsdkMetadata`.
**Key challenge:** Translating component state (sorting, filtering, pagination) ↔ OSDK query params (`orderBy`, `where`, `fetchMore`).

The engine lives in the OSDK wrapper — NOT in the original component. This is how `ObjectTable` works: it calls `useReactTable` with `manualSorting: true` and passes the table instance down to `Table.tsx` for rendering.

Filtering **bypasses** the engine entirely — `WhereClause<Q>` goes straight to `useOsdkObjects({ where })`. Never wire it through the engine's filter model.

Pagination uses OSDK's `fetchMore()` with append-based loading (infinite scroll or "load more" button). Data accumulates in the array; the engine just renders what it has.

#### Recipe 2: Data-Mapping

**For:** Components that display a list of options or items from an ObjectSet.
**Pattern:** OSDK wrapper fetches data, maps objects to the component's expected children/options format.
**Examples:** Select, Combobox, Command, List, Autocomplete.
**OSDK hooks:** `useOsdkObjects` + `useOsdkMetadata`.
**Key challenge:** Extracting display text and value from OSDK objects.

Default label property: `metadata.titleProperty` (a first-class Ontology concept).
Default value property: `metadata.primaryKeyApiName`.
Both overridable via explicit `labelProperty` / `valueProperty` props using `PropertyKeys<Q>`.

For searchable variants (Combobox, Command), debounce input and translate to `where: { [searchProperty]: { $startsWith: query } }`.

#### Recipe 3: Action-Driven

**For:** Components that submit data to Foundry (forms, editors, dialogs with submit).
**Pattern:** OSDK wrapper owns the action lifecycle — parameter discovery, field rendering, validation, submission, optimistic updates.
**Examples:** Form, EditDialog, InlineEditor.
**OSDK hooks:** `useOsdkAction` + `useOsdkMetadata`.
**Key challenge:** Mapping action parameter types to input components at runtime.

Auto-generate fields from `ActionMetadata.parameters` using this type mapping:

- `"string"` → text input
- `"integer"`, `"long"`, `"double"` → number input
- `"boolean"` → switch/checkbox
- `"datetime"`, `"timestamp"` → date picker
- `DataType.Object<T>` → object picker (Select with OSDK data)
- Unknown → text input fallback

### Running the Audit

Spawn an Explore sub-agent to scan the library's component directory. For each component file:

1. Read the source
2. Determine: does it consume data arrays, accept user input for submission, or display selectable options?
3. If yes → classify into Recipe 1, 2, or 3
4. If no → skip (note as "UI chrome, no conversion needed")

Present audit results as a table:

| Component | Passes Gate? | Recipe        | OSDK Binding             | Notes               |
| --------- | ------------ | ------------- | ------------------------ | ------------------- |
| DataTable | Yes          | Engine-Owning | ObjectSet → rows         | Uses TanStack Table |
| Select    | Yes          | Data-Mapping  | ObjectSet → options      | Radix primitive     |
| Form      | Yes          | Action-Driven | Action → fields + submit | react-hook-form     |
| Button    | No           | —             | —                        | UI chrome           |

### Value Ordering

Sort convertible components by value:

1. **Data tables / lists** — every Foundry app needs these
2. **Forms** — every app that writes data needs these
3. **Charts / dashboards** — aggregation views are core Foundry
4. **Pickers / selectors** — appear inside forms and filters
5. **Search / command** — nice-to-have

Convert in this order. Even stopping after 2–3 covers 80% of real app needs.

**Checkpoint (named: audit-approval).** Present audit and value ordering via `AskUserQuestion`. Get approval before implementing.

---

## Phase 2: Implement — Per-Component Workflow

Process components sequentially — each conversion informs the next.

### Step 2.0: Scaffold

Create an `osdk/` directory alongside the library's existing components:

```
<library-component-dir>/
  table.tsx              ← untouched original
  select.tsx             ← untouched original
osdk/                    ← NEW directory
  provider.tsx           ← OsdkProvider (Client context) — first component creates this
  OsdkDataTable.tsx
  OsdkDataTableApi.ts
  OsdkSelect.tsx
  OsdkSelectApi.ts
  hooks/
    use-osdk-table-sorting.ts
    use-osdk-column-defs.ts
```

If the target library does not already wrap `@osdk/react`'s `OsdkProvider`, the first conversion must also create `provider.tsx`. If `@osdk/react`'s `OsdkProvider` is already available in the app tree, skip this — use `@osdk/react` directly.

### Step 2.1: Write the API Contract (Api.ts)

The API file defines the public type surface. **Get user approval before implementing.**

Apply the API design rules from [`CLAUDE.md`](../../../CLAUDE.md):

1. **Generic over `ObjectOrInterfaceDefinition`** (or `ActionDefinition` for forms):
   ```typescript
   import type {
     ObjectOrInterfaceDefinition,
     Osdk,
     PropertyKeys,
     WhereClause,
   } from "@osdk/api";
   ```

2. **One required prop** — `objectType` (read) or `action` (write). Question every additional required prop.

3. **Magic by default, explicit as escape hatch:**
   - Auto-discover via `useOsdkMetadata` → `metadata.titleProperty`, `metadata.properties`
   - Accept explicit overrides for everything auto-discovered:
     - `labelProperty?: PropertyKeys<Q>` overrides `titleProperty`
     - `columns?: ColumnDefinition<Q>[]` overrides auto-generated columns
     - `fields?: FieldDefinition[]` overrides auto-generated form fields

4. **Three-mode state** for every stateful feature (see `CLAUDE.md` "API Design"):
   - **Controlled:** `orderBy` + `onOrderByChanged`
   - **Uncontrolled with default:** `defaultOrderBy`
   - **Uncontrolled, no default:** component manages internally

5. **`enable*` flags default `true`** when the feature is out-of-the-box.

6. **JSDoc on every prop** with `@default` for optional props.

**Checkpoint (named: api-approval).** Present the Api.ts via `AskUserQuestion` with `preview` showing the full TypeScript interface. Iterate until approved.

### Step 2.2: Implement by Recipe

Follow the recipe-specific instructions from Phase 1 classification. Key implementation rules:

**All recipes:**

- Use `@osdk/react` hooks exclusively — never raw `fetch` or custom HTTP
- Handle `isLoading`, `error`, and empty data states
- Use the library's own loading/error/empty components when available (Skeleton, Spinner, Empty)

**Engine-Owning specific:**

- OSDK wrapper calls `useReactTable` (or equivalent engine) — NOT the original component
- Set `manualSorting: true` — OSDK sorts server-side
- Filtering bypasses the engine — `WhereClause<Q>` goes straight to OSDK hooks
- Pagination via `fetchMore()` — no page-index model
- Build a sorting translation hook (TanStack `SortingState` ↔ OSDK `orderBy`)
- Build a column auto-generation hook using `useOsdkMetadata`

**Data-Mapping specific:**

- Resolve label/value from metadata with fallback chain: explicit prop → `titleProperty` → `primaryKeyApiName`
- Provide `onObjectSelected` callback for full instance access (not just string value)
- Debounce search queries (300ms) for searchable variants

**Action-Driven specific:**

- Auto-generate fields from `ActionMetadata.parameters` at runtime
- Map parameter `type` to input type (see mapping table above)
- Wire `applyAction` to form submit, `validateAction` to field-level validation
- Accept explicit `fields` override for custom layout

### OSDK Type Gotchas

These were discovered empirically and **will** bite you during conversion:

1. **`useOsdkMetadata` returns `{ metadata, loading, error }` — NOT `{ data }`.**

2. **Metadata type narrowing.** When generic is `Q extends ObjectOrInterfaceDefinition`, `useOsdkMetadata` returns `ObjectMetadata | InterfaceMetadata`. Cast to the expected type:
   ```typescript
   const { metadata: rawMetadata } = useOsdkMetadata(objectType);
   const metadata = rawMetadata as ObjectMetadata | undefined;
   ```

3. **`ActionMetadata.Parameter` has NO `displayName` field.** Only `description`, `type`, `nullable`, `multiplicity`. Use the parameter key name as label fallback.

4. **`ActionMetadata.Parameter.type` can be a string OR a complex object.** Base types are strings (`"string"`, `"integer"`). Object/Struct types are objects with a nested `.type` field. Always check `typeof paramMeta.type === "string"` first.

5. **`PropertyKeys<Q>` is compile-time only.** For runtime property enumeration, use `Object.keys(metadata.properties)` from `useOsdkMetadata`.

6. **`useOsdkObjects` `orderBy`/`where` need `as any` casts** when passing dynamically constructed values through generic type boundaries.

### Step 2.3: Verify

For each converted component:

1. **TypeScript check** — `tsc --noEmit`. Generics must infer correctly. `PropertyKeys<T>` autocompletes valid property names.
2. **Loading states** — component shows loading UI while `isLoading === true`.
3. **Error states** — component handles fetch errors gracefully.
4. **Empty states** — component handles `data.length === 0`.
5. **Pagination** — Engine-Owning: `fetchMore` loads additional pages.
6. **Server-side operations** — sorting/filtering trigger new OSDK fetches, not client-side computation.

### Step 2.4: Document the Conversion

After each component, write a conversion note:

```markdown
## Osdk<Name>

- **Recipe:** Engine-Owning | Data-Mapping | Action-Driven
- **Original:** <file> (<library>) + <engine if any>
- **OSDK hooks used:** useOsdkObjects, useOsdkMetadata, etc.
- **State translation:** <what was translated and how>
- **Gotchas:** <issues encountered>
```

No checkpoint between components — auto-proceed to the next. Status update only ("DataTable done, 0 type errors. Starting Select.").

---

## Phase 3: Pattern Extraction

After converting 2+ components, extract findings into a reusable document.

### Conversion Checklist

- [ ] Fork the target component library
- [ ] Add `@osdk/api`, `@osdk/client`, `@osdk/react` as dependencies
- [ ] Create `osdk/provider.tsx` (or verify `OsdkProvider` is in the app tree)
- [ ] Audit components → classify into Recipe 1/2/3 or skip
- [ ] For each component (in value order):
  - [ ] Write Api.ts — generic over `ObjectTypeDefinition`, one required prop, three-mode state
  - [ ] Implement wrapper using the recipe playbook
  - [ ] Verify: types, loading, error, empty, pagination, server-side ops
  - [ ] Document conversion notes
- [ ] Test against mock or real OSDK client

### What Makes a Component OSDK-Convertible

Convertible when:

1. It consumes external data (arrays, objects, options) — not just children/layout
2. The data source can be an ObjectSet (read) or Action (write)
3. The component's state model can be translated to OSDK query params (or bypassed)

NOT convertible when:

1. Purely structural (Card, Dialog, Tabs, Accordion)
2. Single primitive input (Input, Switch) — building blocks inside Form
3. Feedback/chrome (Toast, Badge, Spinner, Tooltip)

### Escape Hatches

Where the generic pattern breaks down:

- **Linked object pickers:** Use explicit `objectType={Department}` rather than `sourceType={Employee} linkName="department"` — avoids double-generic complexity
- **Custom cell renderers:** Engine-Owning must accept `cell` overrides per column
- **Complex form layouts:** Action-driven auto-generation produces single-column forms. Accept `fields` prop for custom layout
- **Time-series / geospatial:** Out of scope — require domain-specific components

---

## API Design Quick Reference

| Principle              | Rule                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| **Required props**     | One: `objectType` (read) or `action` (write)                            |
| **Auto-discovery**     | `useOsdkMetadata` for `titleProperty`, property types, display names    |
| **Explicit overrides** | Every auto-discovered value has a corresponding explicit prop           |
| **State management**   | Three modes: controlled / uncontrolled-default / uncontrolled           |
| **Feature flags**      | `enable*` defaults `true`                                               |
| **Server-side ops**    | Engine-Owning uses `manual*: true`. Filtering bypasses engine entirely  |
| **Pagination**         | `fetchMore` with append-based loading, not page-index                   |
| **Loading**            | Always handle `isLoading`, `error`, empty data                          |
| **Type safety**        | Generic over `ObjectOrInterfaceDefinition`, props use `PropertyKeys<Q>` |

## OSDK Hooks Reference

| Hook                                  | Purpose                                                    | Used In         |
| ------------------------------------- | ---------------------------------------------------------- | --------------- |
| `useOsdkObjects(objectType, options)` | Fetch paginated objects with where/orderBy                 | Recipe 1, 2     |
| `useOsdkMetadata(type)`               | Runtime metadata (properties, titleProperty, displayNames) | All recipes     |
| `useOsdkAction(actionDef)`            | Execute action with validation + optimistic updates        | Recipe 3        |
| `useOsdkFunction(queryDef, params)`   | Execute query functions                                    | Advanced        |
| `useOsdkAggregation(type, req)`       | Aggregations ($count, $sum, $avg)                          | Charts          |
| `useDebouncedCallback(cb, ms)`        | Debounce search input                                      | Recipe 2 search |

All hooks from `@osdk/react`. They share a single observable cache — mutations propagate to all readers automatically.
