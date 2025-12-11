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

import { useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { MonitorEvent } from "../utils/EventTimeline.js";

export function useTimelineEvents(
  monitorStore: MonitorStore,
  timeWindowMs: number = 10000,
): MonitorEvent[] {
  const [events, setEvents] = useState<MonitorEvent[]>([]);

  useEffect(() => {
    const timeline = monitorStore.getEventTimeline();

    const loadEvents = () => {
      const now = Date.now();
      const allEvents = timeline.getAllEvents();
      setEvents(allEvents.filter((e) => e.timestamp >= now - timeWindowMs));
    };

    loadEvents();

    const unsubscribe = timeline.subscribe(() => {
      loadEvents();
    });

    // The interval is needed to prune events that fall outside the time window
    // as time passes. The subscription only triggers on NEW events, not on time passing.
    const cleanupInterval = setInterval(loadEvents, 1000);

    return () => {
      unsubscribe();
      clearInterval(cleanupInterval);
    };
  }, [monitorStore, timeWindowMs]);

  return events;
}
