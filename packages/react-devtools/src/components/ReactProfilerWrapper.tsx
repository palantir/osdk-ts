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

import React, { Profiler } from "react";
import type { RenderAttributionTracker } from "../utils/RenderAttributionTracker.js";

export interface ReactProfilerWrapperProps {
  children: React.ReactNode;
  renderAttributionTracker: RenderAttributionTracker | null;
  enabled?: boolean;
}

export function ReactProfilerWrapper({
  children,
  renderAttributionTracker,
  enabled = true,
}: ReactProfilerWrapperProps): React.JSX.Element {
  const handleRender = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
  ) => {
    if (enabled && renderAttributionTracker) {
      const normalizedPhase = phase === "nested-update" ? "update" : phase;
      renderAttributionTracker.recordRender(
        id,
        normalizedPhase,
        actualDuration,
      );
    }
  };

  if (!enabled || !renderAttributionTracker) {
    return <>{children}</>;
  }

  return (
    <Profiler id="osdk-monitor-root" onRender={handleRender}>
      {children}
    </Profiler>
  );
}
