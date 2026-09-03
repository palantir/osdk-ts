---
"@osdk/maker": patch
"@osdk/maker-experimental": patch
---

Let each interface schema migration instruction variant own what it targets, and reject two transitions that migrate the same property rather than only two that declare the identical instruction.
