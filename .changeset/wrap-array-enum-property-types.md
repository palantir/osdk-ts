---
"@osdk/generator": patch
---

Wrap enum value type unions in parentheses for array properties so they generate `('A' | 'B')[]` instead of `'A' | 'B'[]`.
