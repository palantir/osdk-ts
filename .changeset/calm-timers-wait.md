---
"@osdk/oauth": patch
---

Fix the refresh timer firing in a loop for tokens that live under a minute or longer than the maximum setTimeout delay.
