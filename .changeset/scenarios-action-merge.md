---
"@osdk/client": minor
---

`toDataValue` (action parameter serialization) now accepts a `ScenarioClient` or a raw `{ scenarioRid: string }` object and emits the scenario rid as the `DataValue` wire format. Enables passing scenarios directly to actions whose parameter type is `scenarioReference` — e.g. an "Apply Scenario" merge action: `client(ScenarioMerge).applyAction({ scenario })`.
