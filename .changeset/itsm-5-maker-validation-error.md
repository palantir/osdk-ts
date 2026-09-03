---
"@osdk/maker": patch
---

Report author-facing maker failures as a message rather than a stack trace, and stop yargs usage errors from calling `process.exit` inside the host process.
