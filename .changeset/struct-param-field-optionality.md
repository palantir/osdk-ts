---
"@osdk/api": minor
"@osdk/generator-converters": minor
"@osdk/generator": minor
---

Action struct parameters now respect the required-ness of individual struct fields. Optional struct fields are generated as optional properties (`field?: T | null`) instead of required ones, so callers can omit them the same way they omit top-level optional parameters. Required fields keep the existing bare-string encoding, so previously generated SDKs are unaffected.
