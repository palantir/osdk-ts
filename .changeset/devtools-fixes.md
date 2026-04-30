---
"@osdk/react-devtools": patch
---

fix devtools: errors panel surfaces console.error, uncaught errors, and unhandled rejections; compute tab classifies success-without-usage as its own state instead of failure; pause network blocks all OSDK traffic regardless of recording; rename getCacheEntries to loadCacheEntries (deprecated alias kept); add OsdkAppErrorBoundary for production render-error capture; emit OSDK_PAUSE_BLOCK MonitorEvent; bind unwrapped prototype methods on the wrapped ObservableClient so callers (e.g. canonicalizeOptions, which uses private fields) don't fail with "Receiver must be an instance of class ObservableClientImpl".
