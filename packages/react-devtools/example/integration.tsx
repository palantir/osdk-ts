/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createClient } from "@osdk/client";
import {
  enableReactToolkitMonitor,
  MonitoringPanel,
} from "@osdk/react-devtools";
import { OsdkProvider2, useOsdkAction, useOsdkObject } from "@osdk/react/new";
import React from "react";
import type { Todo } from "./types"; // Your generated OSDK types

/**
 * Example integration showing how to use the React Toolkit Monitor
 * in a typical OSDK React application.
 */

// Step 1: Create your OSDK client as usual
const client = createClient({
  baseUrl: "https://your-stack.palantir.com",
  auth: {
    type: "token",
    token: "your-token",
  },
});

// Step 2: Enable monitoring (development only)
const { monitoredClient, metricsStore, dispose } =
  process.env.NODE_ENV === "development"
    ? enableReactToolkitMonitor(client.observableClient)
    : {
      monitoredClient: client.observableClient,
      metricsStore: null,
      dispose: () => {},
    };

// Step 3: Use the monitored client in your app
export function App() {
  return (
    <OsdkProvider2 observableClient={monitoredClient}>
      {/* Your application components */}
      <YourAppContent />

      {/* Add the monitoring panel (only in development) */}
      {process.env.NODE_ENV === "development" && metricsStore && (
        <MonitoringPanel metricsStore={metricsStore} />
      )}
    </OsdkProvider2>
  );
}

// Example component using React Toolkit hooks

function YourAppContent() {
  // These hooks will be monitored automatically
  const { object: todo, isLoading } = useOsdkObject(Todo, "todo-123");
  const { applyAction } = useOsdkAction(completeTodo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{todo?.title}</h1>
      <button
        onClick={() =>
          applyAction({
            todo: todo!.$primaryKey,
            $optimisticUpdate: (ctx) => {
              // Optimistic updates will be tracked!
              ctx.updateObject(todo!, { completed: true });
            },
          })}
      >
        Complete Todo
      </button>
    </div>
  );
}

/**
 * Alternative: Minimal setup with automatic panel injection
 *
 * For the simplest integration, you can create a wrapped provider
 * that automatically includes the monitoring panel.
 */
export const MonitoredOsdkProvider: React.FC<{
  children: React.ReactNode;
  client: ReturnType<typeof createClient>;
}> = ({ children, client }) => {
  // Only enable in development
  if (process.env.NODE_ENV !== "development") {
    return (
      <OsdkProvider2 observableClient={client.observableClient}>
        {children}
      </OsdkProvider2>
    );
  }

  const { monitoredClient, metricsStore, dispose } = enableReactToolkitMonitor(
    client.observableClient,
  );

  // Clean up on unmount
  React.useEffect(() => {
    return () => dispose();
  }, []);

  return (
    <OsdkProvider2 observableClient={monitoredClient}>
      {children}
      <MonitoringPanel metricsStore={metricsStore} />
    </OsdkProvider2>
  );
};

// Usage with the wrapped provider
export function AppWithAutoMonitoring() {
  return (
    <MonitoredOsdkProvider client={client}>
      <YourAppContent />
    </MonitoredOsdkProvider>
  );
}
