# @osdk/e2e.sandbox.officeassignment

An e2e sandbox app over a notional **Workforce** ontology (office-worker domain). It exercises
`@osdk/react` hooks and `@osdk/react-components` (FilterList + ObjectTable), and stress-tests the
"latest value of a status type" linked runtime derived property (RDP) pattern over the
`Assignment → statusUpdate` one-to-many link.

The headline query: _Active Permanent assignments where the latest `WorkMode` is `Remote` AND the
latest `RemoteEligible` is `Yes`_ → expected result `ASG-1`.

## Setup

1. Copy the env sample:
   ```
   cp .env.local.sample .env
   ```
   Fill in your Foundry stack URL and (public) OAuth client id. There is no token or secret to add —
   auth happens in the browser via OAuth (PKCE).

2. Generate the SDK from the live ontology (opens a browser to log in):
   ```
   pnpm --filter @osdk/e2e.sandbox.officeassignment codegen-from-server
   ```
   This writes `src/generatedNoCheck2/` and `ontology.json` (both committed). After generating,
   re-running offline is possible with `pnpm --filter @osdk/e2e.sandbox.officeassignment codegen`.

3. Build the workspace deps, then run the dev server:
   ```
   pnpm turbo transpile
   pnpm --filter @osdk/e2e.sandbox.officeassignment dev
   ```
   Open http://localhost:8080.

## What it demonstrates

- **Latest-status filter** (`src/utils/statusFilter.ts`): per `(type, value)`, derives
  `targetMax = pivotTo(statusUpdate).where(type==T, value==V).aggregate("timestampEpochMs:max")` and
  `diff = targetMax.subtract(... value!=V ...)`, then filters on
  `diff >= 0 OR (diff IS NULL AND targetMax IS NOT NULL)`. The "no record" value (e.g.
  `RemoteEligible = Unknown`) uses a `count == 0` rule.
- **Assignments tab**: latest-status control + FilterList facets + metrics header + ObjectTable +
  detail drawer with the StatusUpdate timeline and the 4 actions.
- **Status Updates tab**: flat StatusUpdate table with a two-hop pivot to employee name, facets, and
  per-row exclusion toggle.
