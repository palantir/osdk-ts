---
"@osdk/vite-plugin-superrepo": minor
---

Fix race where a late-publishing service (e.g. python-functions waiting on ontology discovery) is silently absent from the proxy table. Vite's `server.restart()` dedups concurrent calls, so a change event arriving while a restart is in flight is dropped; chokidar can additionally swallow `add` for files not present at watch-time under `ignoreInitial: true`. The watcher now restarts in a loop until the discovery fingerprint is stable, and polls discovery state once per second as a fallback for missed `add` events.
