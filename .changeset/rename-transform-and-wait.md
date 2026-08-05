---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/react-components": patch
---

Rename the experimental `__EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait` export to `transformAndWait`, and change its argument from `mediaReference: MediaReference` to `media: Media`. It is still only exported from `@osdk/api/unstable`. Callers holding a media property can now pass it straight through instead of unwrapping it with `getMediaReference()` first.
