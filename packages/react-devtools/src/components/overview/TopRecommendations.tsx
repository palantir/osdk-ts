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

import { Callout, type Intent } from "@blueprintjs/core";
import React, { useCallback, useSyncExternalStore } from "react";

import type { MonitorStore } from "../../store/MonitorStore.js";
import type {
  Recommendation,
  RecommendationLevel,
} from "../../utils/PerformanceRecommendationEngine.js";
import { CopyPromptButton } from "../CopyPromptButton.js";

import styles from "./OverviewPanel.module.scss";

const POLL_MS = 2000;

interface RecommendationsState {
  recommendations: Recommendation[];
  listeners: Set<() => void>;
  timer: ReturnType<typeof setInterval> | undefined;
  refCount: number;
}

const stateByStore = new WeakMap<MonitorStore, RecommendationsState>();

function getState(store: MonitorStore): RecommendationsState {
  let state = stateByStore.get(store);
  if (state === undefined) {
    state = {
      recommendations: [],
      listeners: new Set(),
      timer: undefined,
      refCount: 0,
    };
    stateByStore.set(store, state);
  }
  return state;
}

async function refresh(
  store: MonitorStore,
  state: RecommendationsState
): Promise<void> {
  try {
    const snapshot = await store.getCacheSnapshot();
    state.recommendations = store
      .getRecommendationEngine()
      .generateRecommendations(snapshot);
    for (const listener of state.listeners) {
      listener();
    }
  } catch {
    // Snapshot generation can transiently fail; keep the previous value.
  }
}

/**
 * Recommendations come from the (async) cache snapshot + the recommendation
 * engine, so we poll while mounted via an external store. The polling lives in
 * the useSyncExternalStore subscribe callback — it starts on first subscriber
 * and tears down when the last one leaves.
 */
function useRecommendations(monitorStore: MonitorStore): Recommendation[] {
  const subscribe = useCallback(
    (cb: () => void) => {
      const state = getState(monitorStore);
      state.listeners.add(cb);
      state.refCount += 1;
      if (state.timer === undefined) {
        void refresh(monitorStore, state);
        state.timer = setInterval(
          () => void refresh(monitorStore, state),
          POLL_MS
        );
      }
      return () => {
        state.listeners.delete(cb);
        state.refCount -= 1;
        if (state.refCount <= 0 && state.timer !== undefined) {
          clearInterval(state.timer);
          state.timer = undefined;
        }
      };
    },
    [monitorStore]
  );
  const getSnapshot = useCallback(
    () => getState(monitorStore).recommendations,
    [monitorStore]
  );
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

function levelToIntent(level: RecommendationLevel): Intent {
  switch (level) {
    case "critical": {
      return "danger";
    }
    case "high": {
      return "warning";
    }
    case "medium": {
      return "primary";
    }
    default: {
      return "none";
    }
  }
}

interface TopRecommendationsProps {
  monitorStore: MonitorStore;
}

/**
 * The top few performance recommendations, each with a one-click "Copy prompt"
 * button that puts an AI-ready fix prompt on the clipboard.
 */
export const TopRecommendations: React.FC<TopRecommendationsProps> = ({
  monitorStore,
}) => {
  const recommendations = useRecommendations(monitorStore);
  const top = recommendations.slice(0, 3);

  return (
    <div className={styles.section}>
      <div className={styles.recHeader}>
        <span className={styles.sectionTitle}>Top recommendations</span>
        {recommendations.length > 0 ? (
          <CopyPromptButton
            recommendations={recommendations}
            label="Copy all"
          />
        ) : null}
      </div>
      {top.length === 0 ? (
        <div className={styles.empty}>No recommendations right now.</div>
      ) : (
        top.map((rec) => (
          <Callout
            key={rec.id}
            className={styles.recItem}
            intent={levelToIntent(rec.level)}
            title={rec.title}
          >
            <div className={styles.recBody}>{rec.description}</div>
            <div className={styles.recActions}>
              <CopyPromptButton recommendation={rec} />
            </div>
          </Callout>
        ))
      )}
    </div>
  );
};
