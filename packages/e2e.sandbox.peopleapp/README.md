# People App

Internally, use `pnpm codegen-from-server` to generate local osdk and update ontology.json.

## ActionForm + FilterList network reproduction demo

The sandbox includes a routed demo page at `/employees/action-form-filter-list-repro` for investigating slow `ActionForm` submits when `FilterList` aggregations are active.

The page renders:

- a controlled `FilterList` for meaningful `Employee` filters,
- an `ObjectTable` showing the same filtered employees, and
- a button that opens an office-assignment dialog backed by an `ActionForm` for `modifyEmployee`.

`ActionForm` calls `useOsdkAction` internally. After submitting `modifyEmployee`, watch the browser Network tab for `Employee` table reloads and `FilterList` aggregation calls.

### Reproduce

1. Start the app with `pnpm --dir packages/e2e.sandbox.peopleapp dev`.
2. Open `/employees/action-form-filter-list-repro`, or click **ActionForm Repro** in the app navigation.
3. Open browser DevTools → Network.
4. Change a few filters so `FilterList` has active aggregation state.
5. Click **Open office assignment form**.
6. Select an employee, choose the new primary office, and submit.
7. Compare the action submit call with the follow-up `ObjectTable` and `FilterList` calls.
