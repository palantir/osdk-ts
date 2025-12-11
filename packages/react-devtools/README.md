# @osdk/react-devtools

Developer tools and debugging utilities for the OSDK React Toolkit. See exactly how the toolkit optimizes your application with visual indicators for cache hits, request deduplication, and optimistic updates.

## Features

- **Real-time Performance Metrics**: Monitor cache hit rates, deduplication, and optimistic updates as they happen
- **Flexible Docking Modes**: Float, dock to bottom, or dock to right side - just like Chrome DevTools (NEW! 🎯)
- **Organized 4-Tab Interface**: Performance, Compute, Mocking, and Debugging tabs for streamlined workflow (NEW! 🎯)
- **Visual Dashboard**: Draggable/resizable panel with persistent positioning
- **Operation Tracking**: See individual operations with timing and optimization details
- **Component-to-Query Mapping**: See which React components use which OSDK hooks and queries
- **Action Impact Visualization**: Complete action execution flow with phases, affected objects, and renders
- **Action Chain Detection**: Visualize cascading actions and detect circular loops
- **Zero Config**: Single-line integration with automatic detection of optimizations
- **Development-Only**: Automatically disabled in production builds
- **Action Insights**: Measure optimistic coverage, perceived speedups, and rollback risk for actions

## Installation

```bash
npm install @osdk/react-devtools --save-dev
```

## Quick Start

The easiest way to add monitoring is to use the `MonitoredOsdkProvider2` wrapper component:

```tsx
import { MonitoredOsdkProvider2 } from "@osdk/react-devtools/provider";
import { createPublicOauthClient } from "@osdk/oauth";
import "@osdk/react-devtools/build/esm/index.css";

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

### Component-to-Query Mapping
- **Active Components**: See all React components currently mounted
- **Hook Usage**: View which OSDK hooks each component uses (useOsdkObject, useOsdkObjects, useOsdkAction, useLinks, useObjectSet)
- **Query Signatures**: See the exact queries being made by each component
- **Source Locations**: Click to jump to component source code (VSCode integration)
- **Performance Metrics**: Render count and average render time per component
- **Search & Filter**: Quickly find components by name
- **Statistics Dashboard**: Total components, hooks, average hooks per component, and unique queries
- **Real-time Hook Registration**: Hooks register synchronously during render phase for immediate tracking

### Action Impact Visualization (NEW! 🎯)
- **Complete Action Flow**: Visualize validation → optimistic update → network call → server response → refetch
- **Phase Breakdown**: See timing for each phase of action execution
- **Affected Objects**: Track which objects were modified by optimistic updates vs server responses
- **Component Renders**: See which components re-rendered during each phase
- **Optimistic Speedup**: Calculate perceived performance improvement from optimistic updates
- **Query Invalidation**: Track which queries were invalidated and refetched

### Action Chain Detection (NEW! 🎯)
- **Cascading Actions**: Detect when one action triggers another (A → B → C)
- **Trigger Mechanisms**: See how actions are connected (explicit, hook-effect, rollback, refetch)
- **Circular Loop Detection**: Automatic warnings for actions that trigger themselves
- **Chain Depth**: Calculate and display nesting depth of action sequences
- **Performance Analysis**: Total duration and timing for entire action chains
- **Debugging Aid**: Identify unintended action loops and complex workflows

### Mocking & Testing (NEW! 🧪)
- **Interactive Component Selection**: Click-to-inspect mode for discovering OSDK primitives in your UI
- **Intelligent Primitive Discovery**: Two discovery approaches for comprehensive coverage:
  - **Type-based Discovery**: Automatically finds related components by shared object types (e.g., clicking FilterSelector finds all TodoList components using the same type)
  - **Tree-based Discovery**: Walks React fiber tree for direct component-to-hook mapping
- **Mock Creation**: Create static or dynamic mocks for objects, lists, actions, and links
- **Network Simulation**: Configure delays, jitter, and failure rates for realistic testing
- **Mock Management**: Enable/disable mocks, view usage stats, import/export configurations
- **Pass-through Mode**: Log real requests and responses for mock data generation
- **Visual Feedback**: See which mocks are active and their impact on the application

### Visual Indicators

**Operations:**
| Icon | Type | Description |
|------|------|-------------|
| ✓ | Cache Hit | Data served from cache |
| × | Cache Miss | Network request required |
| = | Deduplication | Duplicate request prevented |
| ⚡ | Optimistic | Instant UI update |
| ⚙ | Action | Action lifecycle metrics (speedup / rollback) |
| ✔ | Validation | Action validation timing and savings |

**Hook Types:**
| Badge Color | Hook Type | Description |
|-------------|-----------|-------------|
| Blue | useOsdkObject | Single object fetch |
| Light Blue | useOsdkObjects | List/collection fetch |
| Orange | useOsdkAction | Action execution |
| Purple | useLinks | Link traversal |
| Green | useObjectSet | Object set operations |

## Advanced Usage

### Manual Client Setup

If you need explicit control over client creation or want to conditionally enable monitoring outside of `NODE_ENV`, you can use the `enableReactToolkitMonitor` function directly:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { enableReactToolkitMonitor, MonitoringPanel } from "@osdk/react-devtools";
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
import { useMetrics, useComputeMetrics } from "@osdk/react-devtools";

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

### Using the Mocking System

The mocking system allows you to test your application with controlled data and network conditions:

1. **Activate Selection Mode**: Click the paint icon in the Mocking tab
2. **Select a Component**: Click any component using OSDK hooks to discover its primitives
3. **Create a Mock**: Choose a primitive and configure the mock response
4. **Configure Network Simulation**: Add delays and failure rates for realistic testing

Example mock configuration:

```json
{
  "type": "object",
  "matcher": {
    "objectType": "Todo",
    "primaryKey": "todo-123"
  },
  "response": {
    "type": "object",
    "object": {
      "$primaryKey": "todo-123",
      "$apiName": "Todo",
      "title": "Mocked Todo",
      "isComplete": false,
      "priority": "high"
    }
  },
  "delay": 500,
  "failureRate": 0.1
}
```

Mocks can be:
- **Static**: Return fixed data every time
- **Function**: Generate dynamic responses based on request parameters
- **Pass-through**: Log real responses for mock data generation

## User Interface

### Docking Modes

The OSDK Devtools panel supports three docking modes, similar to Chrome DevTools:

1. **Floating Mode** (default) - Draggable and resizable panel that can be positioned anywhere
2. **Docked Bottom** - Full-width panel stuck to the bottom of the screen, resizable height
3. **Docked Right** - Full-height panel stuck to the right side of the screen, resizable width

Click the dock icon in the top-right corner to cycle through modes. Your preference is saved across sessions.

### Tab Organization

The devtools are organized into 4 main tabs:

#### 1. Performance
Combines cache and action performance metrics:
- Cache hit rates, request savings, response times
- Optimistic update adoption and effectiveness
- Rollback rates and validation metrics
- Filterable operations list (All/Cache/Actions)

#### 2. Compute
Track compute usage and quotas:
- Real-time compute usage monitoring
- Bubble chart visualization of operations
- Request-level compute breakdowns
- Recording and playback controls

#### 3. Mocking
Interactive testing and mocking:
- Click-to-inspect mode for component discovery
- Type-based and tree-based primitive discovery
- Mock creation and management
- Network simulation controls

#### 4. Debugging
Advanced debugging tools with 4 sub-tabs:
- **Components** - Component-to-hook mapping and query tracking
- **Timeline** - Event visualization and timeline
- **Action Impact** - Action execution flow and affected objects
- **Action Chains** - Cascading actions and circular loop detection

## Recent Updates

### v0.0.3 - 2025-11-03

**UI/UX Improvements:**
- 🎯 **Docking Modes** - Chrome DevTools-style docking (float, bottom, right)
  - Click dock icon to cycle through modes
  - Smart resize handles based on dock mode
  - Window resize handling for docked panels
  - Persistent dock mode preference
- 🎯 **Tab Reorganization** - Streamlined from 8 tabs to 4 organized tabs
  - **Performance** tab combines Cache + Actions with unified operations list
  - **Debugging** tab with 4 sub-tabs (Components, Timeline, Action Impact, Action Chains)
  - **Compute** and **Mocking** tabs remain focused
  - Better information architecture and reduced clutter
- 🏷️ **Renamed to "OSDK Devtools"** - More concise and accurate branding

### v0.0.2 - 2025-11-02

**New Features:**
- 🧪 **Mocking & Testing System** - Complete mocking framework for OSDK primitives
  - Click-to-inspect mode for interactive component selection
  - Intelligent primitive discovery with type-based matching
    - NEW: Type-based discovery finds all components using the same object type
    - Example: Clicking a filter component finds all related list components
  - Support for mocking objects, lists, actions, and links
  - Static and dynamic mock data generation
  - Network simulation with configurable delays and failure rates
  - Mock management UI with enable/disable and usage tracking

- 🔍 **Enhanced Component Context Capture** - Improved React fiber access
  - Synchronous hook registration during render phase
  - Direct React module import for reliable fiber access
  - Support for `useOsdkObject`, `useOsdkObjects`, `useOsdkAction`, `useLinks`, and `useObjectSet`
  - Real-time component-to-hook binding with proper cleanup

**Bug Fixes:**
- 🐛 Fixed hook registration timing issue
  - Moved from `useEffect` to synchronous render-phase registration
  - Ensures React context is available when hooks register
  - Added comprehensive logging for debugging registration flow

- 🐛 Fixed mock creation error handling
  - Added development-mode error display in `MonitorErrorBoundary`
  - Improved state management for mock configurations
  - Added validation for primitive data structures
  - Better error messaging and recovery options

**Technical Improvements:**
- Enhanced `ComponentPrimitiveDiscovery` with intelligent type-based discovery
  - Detects filter/selector components and finds all related components by object type
  - Added `getBindingsByObjectType` method to ComponentQueryRegistry
  - Falls back to tree-based discovery for non-filter components
- Implemented `ClickToInspectSystem` for interactive component selection
- Created `MockManager` and `NetworkSimulator` for test scenario management
- Enhanced `EnhancedObservableClientMonitor` with registration wrapper methods
- Added comprehensive logging throughout the registration and mocking pipeline

### v0.0.1 - 2025-10-29

**New Features:**
- 🎯 **Action Impact Visualization** - New "Action Impact" tab showing complete action execution flow
  - Phase-by-phase breakdown of action lifecycle
  - Track affected objects and component re-renders
  - Calculate optimistic speedup metrics
  - View query invalidation and refetch details

- 🎯 **Action Chain Detection** - New "Action Chains" tab for debugging cascading actions
  - Detect when actions trigger other actions
  - Identify circular action loops with warnings
  - See trigger mechanisms (explicit, hook-effect, rollback, refetch)
  - Calculate chain depth and total duration

- ✨ Added Component-to-Query Mapping feature in "Components" tab
  - View all active React components using OSDK hooks
  - See hook types, query signatures, and source locations
  - Search and filter components
  - Click source locations to open in VSCode

**Bug Fixes:**
- 🐛 Fixed PropertyAccessTracker Proxy breaking `$as()` method on OSDK objects
  - Changed to use `Reflect.get()` for proper symbol property handling
  - Ensures compatibility with OSDK internal mechanisms

**Implementation Details:**
- Added `ActionImpactTracker` and `ActionChainTracker` backend classes
- Integrated with existing `EventTimeline` for temporal correlation
- Automatic event subscription and processing
- ~2,200 lines of new code with full test coverage (17 tests)