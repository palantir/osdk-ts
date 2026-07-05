---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/functions": minor
---

cipherText object edits now accept distinct, ergonomic create and update inputs — `{ plaintext }` for create, `{ plaintext, strategy? }` for update, or an existing `CipherText` to reuse — and `getEdits()` emits the backend wire shape (`{ plaintext }` or `{ ciphertext }`, the reused ciphertext's encrypted envelope).
