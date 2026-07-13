# browser-compat

Low-level shims that reach into non-standard, engine-specific stack-trace
internals: V8's `Error.captureStackTrace` / `Error.prepareStackTrace` /
`CallSite` API on Chrome/Node/Electron, and the `name@file:line:column` stack
text format on Firefox/Safari.

This code is intentionally fiddly and full of engine quirks. You should not need
to read or understand it to maintain the rest of `@osdk/react-devtools` — treat
it as a black box exposing a small, stable API (`captureCallerLocation`,
`formatCallerLocation`).
