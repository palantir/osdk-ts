# @osdk/react-devtools

## 0.4.0

### Minor Changes

- 645363b: fix devtools: errors panel surfaces console.error, uncaught errors, and unhandled rejections; compute tab classifies success-without-usage as its own state instead of failure; pause network blocks all OSDK traffic regardless of recording; rename getCacheEntries to loadCacheEntries (deprecated alias kept); add OsdkAppErrorBoundary for production render-error capture; emit OSDK_PAUSE_BLOCK MonitorEvent; bind unwrapped prototype methods on the wrapped ObservableClient so callers (e.g. canonicalizeOptions, which uses private fields) don't fail with "Receiver must be an instance of class ObservableClientImpl".
- 3e8db28: add devtools registration, vite plugin, and e2e wiring

## 0.3.0

### Minor Changes

- 41b94dc: implement v0 of react devtools panel

## 0.2.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.1.0

### Minor Changes

- 89def41: patch bump associated with BlueprintJS upgrade
