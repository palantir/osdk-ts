---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/generator-converters": patch
"@osdk/react-components": patch
---

Add end-to-end support for `scenarioReference` action parameters:

- `@osdk/api` adds `"scenarioReference"` to `ActionMetadata.DataType.BaseActionParameterTypes` and a matching `scenarioReference: ScenarioClient` entry in `DataValueClientToWire` (structurally typed as `{ getScenarioReference(): { scenarioRid } }` to avoid a circular dep on `@osdk/client`).
- `@osdk/generator-converters` maps the wire `scenarioReference` variant into the primitive type.
- Generated SDKs now emit `ActionParam.PrimitiveType<"scenarioReference">` (resolves to `ScenarioClient`) for scenarioReference parameters, instead of throwing at SDK build time.
- `@osdk/client`'s `toDataValue` accepts a `ScenarioClient` and serializes it to the rid string the platform expects.
- `@osdk/react-components`'s ActionForm renders scenarioReference parameters as `UNSUPPORTED` for now.

Enables `client(ScenarioMerge).applyAction({ scenario })` end-to-end in generated SDKs.
