---
"@osdk/language-models": patch
---

Build Anthropic and OpenAI proxy URLs via the URL constructor so they work correctly regardless of whether `client.baseUrl` carries a trailing slash or a path prefix.
