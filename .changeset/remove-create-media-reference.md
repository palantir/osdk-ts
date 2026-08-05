---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/typescript-sdk-docs": patch
"@osdk/react-sdk-docs": patch
"@osdk/osdk-docs-context": patch
---

Remove the experimental `__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference` export. To upload media, pass `{ data, fileName }` directly to an Action's media parameter; the client uploads it via `uploadMedia` and links the resulting media item.
