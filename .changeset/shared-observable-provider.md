---
"@osdk/client": minor
"@osdk/react": minor
---

Allow OsdkProvider's client prop to accept an existing ObservableClient so React and non-React consumers can share a cache. Allow creation options only with a plain client. Add ObservableClient.getClient() to access the store's underlying client and registerUserAgent() to preserve request attribution.
