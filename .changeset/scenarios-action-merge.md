---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/generator": minor
"@osdk/generator-converters": patch
"@osdk/react-components": patch
---

Add end-to-end support for `scenarioReference` action parameters:

- `@osdk/api` exposes `ActionParam.ScenarioReference` (structurally typed as `{ getScenarioReference(): { scenarioRid } }` to avoid a circular dep on `@osdk/client`) and `ActionMetadata.DataType.ScenarioReference`.
- `@osdk/generator` emits `ActionParam.ScenarioReference` and `ActionMetadata.DataType.ScenarioReference` for scenarioReference parameters; `@osdk/generator-converters` wires the variant through (previously threw).
- `@osdk/client`'s `toDataValue` accepts a `ScenarioClient` and emits the rid string the platform expects.
- `@osdk/react-components`'s ActionForm renders scenarioReference parameters as `UNSUPPORTED` for now.

Enables `client(ScenarioMerge).applyAction({ scenario })` end-to-end in generated SDKs.
