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
import type { EventTimeline, MonitorEvent } from "../utils/EventTimeline.js";

export interface UseTimelineOptions {
  timeWindow?: number;
  eventTypes?: MonitorEvent["type"][];
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export interface UseTimelineResult {
  events: MonitorEvent[];
  totalEvents: number;
  eventCounts: Map<MonitorEvent["type"], number>;
  refresh: () => void;
}

export function useTimeline(
  timeline: EventTimeline | null,
  options: UseTimelineOptions = {},
): UseTimelineResult {
  const {
    timeWindow = 10000,
    eventTypes,
    autoRefresh = true,
    refreshInterval = 1000,
  } = options;

  const [events, setEvents] = useState<MonitorEvent[]>([]);
  const [eventCounts, setEventCounts] = useState<
    Map<MonitorEvent["type"], number>
  >(new Map());

  const refresh = () => {
    if (!timeline) {
      setEvents([]);
      setEventCounts(new Map());
      return;
    }

    const now = Date.now();
    const startTime = now - timeWindow;

    let filteredEvents = timeline.getAllEvents().filter(
      (e) => e.timestamp >= startTime,
    );

    if (eventTypes && eventTypes.length > 0) {
      filteredEvents = filteredEvents.filter((e) =>
        eventTypes.includes(e.type)
      );
    }

    setEvents(filteredEvents);
    setEventCounts(timeline.getEventCounts());
  };

  useEffect(() => {
    refresh();

    if (!timeline || !autoRefresh) {
      return;
    }

    const unsubscribe = timeline.subscribe(() => {
      refresh();
    });

    const intervalId = setInterval(refresh, refreshInterval);

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, [timeline, timeWindow, autoRefresh, refreshInterval]);

  return {
    events,
    totalEvents: timeline?.getSize() ?? 0,
    eventCounts,
    refresh,
  };
}
