# Office Assignment e2e Sandbox

A small `@osdk/react` + `@osdk/react-components` app simulating office assignment.
It emphasizes OSDK React hooks, and Filter List, Object Table, and Action Form components.

The notional Workforce ontology here models `Assignment -> StatusUpdate` as one-to-many: each
assignment has many status updates over time. The app builds a derived-property
filter that, per assignment, finds the latest `StatusUpdate` (via `targetMax` /
timestamp-diff aggregations) and narrows the assignment object set to those whose
latest status matches the selection. That narrowed object set then feeds a
`FilterList`, an `ObjectTable`, a metrics header, and a detail drawer showing the
status timeline and the available actions.

## What it demonstrates

- Latest-linked-value filtering: aggregating over a one-to-many link to pick the most
  recent `StatusUpdate` per `Assignment`, then narrowing the object set by the matched
  primary keys (see `src/hooks/useAssignmentFilters.ts` and `src/utils/statusFilter.ts`).
- `FilterList` facets wired to live OSDK `WhereClause`s, with visibility/order state.
- `ObjectTable` over the narrowed set, a metrics header, and a per-row detail drawer.
- Two tabs (`Assignments`, `Status Updates`) backed by the generated client.

## Run server for dev

1. Create a `.env` in this directory and fill out details for your stack. `VITE_FOUNDRY_URL`,
   `FOUNDRY_USER_TOKEN` and `VITE_FOUNDRY_CLIENT_ID` are required.
2. Install and build all dependencies, run `pnpm transpileEsm` and also `pnpm codegen` to make sure the generated client is up to date.
3. Run `pnpm dev`, then open http://localhost:8080.
