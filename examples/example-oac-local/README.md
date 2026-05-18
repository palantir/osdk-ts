# `@osdk/examples.oac-local`

End-to-end **local** OSDK demo backed by `vite-plugin-oac` + FauxFoundry. No
Foundry login, no remote stack — clone, install, run, browse.

```bash
pnpm install
pnpm --filter=@osdk/examples.oac-local dev
```

Open the URL Vite prints. The dev server intercepts every `/api/v2/*` request
via a Node-side FauxFoundry that the OAC plugin wires into Vite middleware, so
the OSDK client talks to mocked data without any auth or network roundtrip.

## What this exercises

Stack: `defineOacOntology` → `vite-plugin-oac` → FauxFoundry (Node middleware) →
OSDK client → `@osdk/react` hooks → `@osdk/react-components` UI.

| Page | What it demonstrates |
| --- | --- |
| `/` Flights | `ObjectTable<Flight>` core read path, row navigation |
| `/flights/:flightNumber` | `useOsdkObject(Flight, pk)` + `useLinks(flight, "airplane")` + `ActionForm<modifyObjectFlight>` |
| `/airlines` | `FilterList` driving `ObjectTable<Airline>` (M:M Airline ↔ Airport) |
| `/schedule` | `ActionForm<createObjectFlight>` + `ActionForm<chargeBaggageFee>` (validation + sections) |
| `/interfaces` | `Asset → Vehicle` extends chain; `Airplane` direct implements vs `GroundVehicle` explicit `propertyMapping` |

## How it's wired

```
.ontology/ontology.mts          → vite-plugin-oac (build/dev) → .osdk/src/*  (generated OSDK)
.ontology/seed.ts               → vite-plugin-oac (dev) → FauxFoundry seed data
                                                       ↓
                                                  Vite Connect middleware
                                                  intercepts /api/v2/*

src/                            → app code imports types from `@osdk-local`
                                  (alias → .osdk/src/index.ts)
src/client.ts                   → createClient(window.location.origin, …)
```

`@osdk-local` is a path alias defined in `tsconfig.json` and `vite.config.ts`
that points at the plugin-generated OSDK in `.osdk/src/`. The browser never
imports the ontology source — only the generated OSDK + a fake bearer token.

## Files

- `.ontology/ontology.mts` — single OaC definition (objects, links, actions,
  interfaces) via `defineOacOntology`
- `.ontology/seed.ts` — default-exports `(faux: FauxFoundry) => void`; the
  plugin calls this every time the ontology rebuilds
- `vite.config.ts` — registers `ontologyAsCode({ ontologyDir: ".ontology" })`
- `src/client.ts` — `createClient(window.location.origin, ontologyRid, () => "myAccessToken")`
- `src/pages/*` — one page per surface area

## Demo-only caveats

- FauxFoundry is intentionally bundled into dev/build for the demo; production
  apps do not ship faux.
- The auth check in `@osdk/faux` accepts the literal token `myAccessToken`.
- FauxFoundry doesn't yet serve interface-typed queries against implementing
  objects (Vehicle); the Interfaces page renders the concrete implementing
  object types directly.
- Aggregations like `sum`/`avg`/`min`/`max` are gated on an upstream faux PR
  and are not used here.

## Production build / preview

```bash
pnpm --filter=@osdk/examples.oac-local build
pnpm --filter=@osdk/examples.oac-local preview
```

Note: `vite preview` serves static assets only — there is no Faux middleware
during `preview`, so live data fetches fail. The build is included only to
exercise the bundler against the plugin output; the demo experience is `dev`.
