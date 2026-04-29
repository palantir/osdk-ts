---
"@osdk/api": minor
"@osdk/generator-converters": minor
"@osdk/client": minor
---

add support for cipher text properties on objects

Cipher text properties on object types are now hydrated into a `CipherText` value with a `decrypt()` helper that returns the plaintext, e.g. `await customer.ssn?.decrypt()`. Previously these properties were silently dropped from generated SDKs.
