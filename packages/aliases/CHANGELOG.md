# @osdk/aliases

## 0.3.0

### Minor Changes

- 7b737e7: Add the experimental asynchronous `Aliases.custom()` API for browser applications and Functions. Browsers load custom aliases from `/resources.json` at the site's origin, sharing the request across repeated and concurrent calls. Functions reuse the existing filesystem runtime.

  Reject inherited JavaScript properties when looking up aliases; explicitly declared aliases with those names remain supported.

## 0.2.0

### Minor Changes

- ffb171d: Extract the existing Functions alias runtime into `@osdk/aliases/internal`, an internal compatibility entry point for `@osdk/functions`. All six alias readers remain available through `Aliases` in `@osdk/functions` with the same synchronous return types and error behavior.
