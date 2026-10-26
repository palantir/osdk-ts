---
"@osdk/client": minor
"@osdk/react": minor
---

Add opt-in `revalidateOnOutOfDate` option to observable list and object set queries (and `useOsdkObjects` / `useObjectSet`). When enabled with `streamUpdates`, the query fetches again when its websocket subscription reports it is out of date. Defaults to `false`.
