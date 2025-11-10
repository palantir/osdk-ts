# @osdk/react-toolkit-monitor

Real-time performance monitoring and visualization for the OSDK React Toolkit. See exactly how the toolkit optimizes your application with visual indicators for cache hits, request deduplication, and optimistic updates.

## Features

- **Real-time Performance Metrics**: Monitor cache hit rates, deduplication, and optimistic updates as they happen
- **Visual Dashboard**: Draggable, resizable panel showing key performance indicators
- **Operation Tracking**: See individual operations with timing and optimization details
- **Zero Config**: Single-line integration with automatic detection of optimizations
- **Development-Only**: Automatically disabled in production builds
- **Action Insights**: Measure optimistic coverage, perceived speedups, and rollback risk for actions

## Installation

```bash
npm install @osdk/react-toolkit-monitor --save-dev
```

## Quick Start

The easiest way to add monitoring is to use the `MonitoredOsdkProvider2` wrapper component:

```tsx
import { MonitoredOsdkProvider2 } from "@osdk/react-toolkit-monitor/provider";
import { createPublicOauthClient } from "@osdk/oauth";
import "@osdk/react-toolkit-monitor/build/esm/index.css";

const auth = createPublicOauthClient(
  YOUR_CLIENT_ID,
  YOUR_FOUNDRY_URL,
  YOUR_REDIRECT_URL,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MonitoredOsdkProvider2
    config={{
      baseUrl: YOUR_FOUNDRY_URL,
      ontologyRid: YOUR_ONTOLOGY_RID,
      auth: auth,
    }}
    enabled={true} // Optional: defaults to process.env.NODE_ENV === "development"
  >
    <App />
  </MonitoredOsdkProvider2>
);
```

That's it! The monitoring panel automatically appears with full tracking enabled.

### Zero-Bundle-Impact When Disabled

When `enabled={false}`, **no monitoring code is loaded** into your bundle. The monitoring panel and all monitoring logic are lazy-loaded only when enabled. This means:

```tsx
// Example: Runtime control
const enableMonitor =
  localStorage.getItem("enableMonitor") === "true" ||
  process.env.NODE_ENV === "development";

<MonitoredOsdkProvider2 config={config} enabled={enableMonitor}>
  <App />
</MonitoredOsdkProvider2>
```

## What It Monitors

### Cache Performance
- **Cache Hit Rate**: Percentage of requests served from cache
- **Response Times**: Compare cached vs network response times
- **Data Saved**: Amount of data served from cache without network requests

### Request Optimization
- **Deduplication**: Identical requests made within 100ms are automatically deduplicated
- **Request Savings**: Total number of network requests prevented
- **Optimistic Updates**: Instant UI updates without waiting for server response

### Action Performance
- **Optimistic Coverage**: Share of actions configured for optimistic updates and those observed in practice
- **Perceived Speedup**: Average time saved before the server confirmed the action
- **Rollback Rate**: Percentage of optimistic actions that rolled back due to failures
- **Validation Time**: Average latency of `validateAction` calls and estimated time saved versus full action execution

### Visual Indicators

| Icon | Type | Description |
|------|------|-------------|
| ✓ | Cache Hit | Data served from cache |
| × | Cache Miss | Network request required |
| = | Deduplication | Duplicate request prevented |
| ⚡ | Optimistic | Instant UI update |
| ⚙ | Action | Action lifecycle metrics (speedup / rollback)
| ✔ | Validation | Action validation timing and savings

## Advanced Usage

### Manual Client Setup

If you need explicit control over client creation or want to conditionally enable monitoring outside of `NODE_ENV`, you can use the `enableReactToolkitMonitor` function directly:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { enableReactToolkitMonitor, MonitoringPanel } from "@osdk/react-toolkit-monitor";
import { createObservableClient } from "@osdk/client/unstable-do-not-use";

let client;
let observableClient;
let monitorStore = null;

if (CUSTOM_CONDITION) {
  const result = enableReactToolkitMonitor({
    baseUrl: YOUR_FOUNDRY_URL,
    ontologyRid: YOUR_ONTOLOGY_RID,
    auth: auth,
  });
  client = result.client;
  observableClient = result.observableClient;
  monitorStore = result.monitorStore;
} else {
  client = createClient(YOUR_FOUNDRY_URL, YOUR_ONTOLOGY_RID, auth);
  observableClient = createObservableClient(client);
}

function App() {
  return (
    <OsdkProvider2 client={client} observableClient={observableClient}>
      <YourAppContent />
      {monitorStore && <MonitoringPanel monitorStore={monitorStore} />}
    </OsdkProvider2>
  );
}
```

### Programmatic Access to Metrics

```tsx
import { useMetrics, useComputeMetrics } from "@osdk/react-toolkit-monitor";

function PerformanceDisplay({ monitorStore }) {
  const metricsStore = monitorStore.getMetricsStore();
  const computeStore = monitorStore.getComputeStore();

  const metrics = useMetrics(metricsStore);
  const computeMetrics = useComputeMetrics(computeStore);

  return (
    <div>
      Cache Hit Rate: {(metrics.rates.cacheHitRate * 100).toFixed(0)}%
      Requests Saved: {metrics.aggregates.requestsSaved}
      Total Compute: {computeMetrics.totalUsage} CU
    </div>
  );
}
```