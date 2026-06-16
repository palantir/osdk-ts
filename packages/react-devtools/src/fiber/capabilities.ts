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

export type FiberFeature =
  | "component-inspection"
  | "hook-discovery"
  | "render-tracking"
  | "state-inspection"
  | "metadata-extraction"
  | "fiber-discovery";

export interface FiberCapabilities {
  hookInstalled: boolean;
  rendererDetected: boolean;
  fiberAccessWorking: boolean;
  detectedReactVersion: string | null;
  lastValidationTime: number;
  errorCount: number;
  disabledFeatures: Set<FiberFeature>;
}

interface DegradationConfig {
  errorThreshold: number;
  recoveryTimeout: number;
}

const DEFAULT_DEGRADATION_CONFIG: DegradationConfig = {
  errorThreshold: 3,
  recoveryTimeout: 30000,
};

type CapabilitiesListener = (capabilities: FiberCapabilities) => void;

export class FiberCapabilitiesManager {
  private capabilities: FiberCapabilities;
  private cachedSnapshot: Readonly<FiberCapabilities> | null = null;
  private listeners: Set<CapabilitiesListener> = new Set();
  private featureErrorCounts: Map<FiberFeature, number> = new Map();
  private featureLastError: Map<FiberFeature, number> = new Map();
  private recoveryTimers: Map<FiberFeature, ReturnType<typeof setTimeout>> =
    new Map();
  private config: DegradationConfig;

  constructor(config: Partial<DegradationConfig> = {}) {
    this.config = { ...DEFAULT_DEGRADATION_CONFIG, ...config };
    this.capabilities = {
      hookInstalled: false,
      rendererDetected: false,
      fiberAccessWorking: false,
      detectedReactVersion: null,
      lastValidationTime: 0,
      errorCount: 0,
      disabledFeatures: new Set(),
    };
  }

  getCapabilities(): Readonly<FiberCapabilities> {
    if (this.cachedSnapshot != null) {
      return this.cachedSnapshot;
    }
    this.cachedSnapshot = {
      ...this.capabilities,
      disabledFeatures: new Set(this.capabilities.disabledFeatures),
    };
    return this.cachedSnapshot;
  }

  isFeatureAvailable(feature: FiberFeature): boolean {
    if (this.capabilities.disabledFeatures.has(feature)) {
      return false;
    }
    return this.capabilities.fiberAccessWorking;
  }

  setCapability<K extends keyof FiberCapabilities>(
    key: K,
    value: FiberCapabilities[K],
  ): void {
    const oldValue = this.capabilities[key];
    if (oldValue === value) {
      return;
    }

    this.capabilities = {
      ...this.capabilities,
      [key]: value,
    };
    this.cachedSnapshot = null;
    this.notifyListeners();
  }

  recordError(feature: FiberFeature, error: unknown): void {
    const currentCount = this.featureErrorCounts.get(feature) ?? 0;
    const newCount = currentCount + 1;
    this.featureErrorCounts.set(feature, newCount);
    this.featureLastError.set(feature, Date.now());

    this.capabilities = {
      ...this.capabilities,
      errorCount: this.capabilities.errorCount + 1,
    };
    this.cachedSnapshot = null;

    if (newCount >= this.config.errorThreshold) {
      this.disableFeature(feature);
    }

    this.scheduleRecoveryCheck(feature);
    this.notifyListeners();

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        `[OSDK DevTools] Fiber feature "${feature}" error (${newCount}/${this.config.errorThreshold}):`,
        error,
      );
    }
  }

  clearErrors(feature: FiberFeature): void {
    this.featureErrorCounts.delete(feature);
    this.featureLastError.delete(feature);

    if (this.capabilities.disabledFeatures.has(feature)) {
      const newDisabled = new Set(this.capabilities.disabledFeatures);
      newDisabled.delete(feature);
      this.capabilities = {
        ...this.capabilities,
        disabledFeatures: newDisabled,
      };
      this.cachedSnapshot = null;
      this.notifyListeners();
    }
  }

  resetAll(): void {
    this.featureErrorCounts.clear();
    this.featureLastError.clear();
    this.capabilities = {
      ...this.capabilities,
      errorCount: 0,
      disabledFeatures: new Set(),
    };
    this.cachedSnapshot = null;
    this.notifyListeners();
  }

  onCapabilitiesChange(listener: CapabilitiesListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  dispose(): void {
    for (const timer of this.recoveryTimers.values()) {
      clearTimeout(timer);
    }
    this.recoveryTimers.clear();
    this.listeners.clear();
  }

  private disableFeature(feature: FiberFeature): void {
    if (this.capabilities.disabledFeatures.has(feature)) {
      return;
    }

    const newDisabled = new Set(this.capabilities.disabledFeatures);
    newDisabled.add(feature);
    this.capabilities = {
      ...this.capabilities,
      disabledFeatures: newDisabled,
    };
    this.cachedSnapshot = null;

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        `[OSDK DevTools] Fiber feature "${feature}" has been disabled due to repeated errors`,
      );
    }
  }

  private scheduleRecoveryCheck(feature: FiberFeature): void {
    const existingTimer = this.recoveryTimers.get(feature);
    if (existingTimer !== undefined) {
      clearTimeout(existingTimer);
    }

    const timer = setTimeout(() => {
      this.recoveryTimers.delete(feature);
      const lastError = this.featureLastError.get(feature);
      if (lastError && Date.now() - lastError >= this.config.recoveryTimeout) {
        this.clearErrors(feature);
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.info(
            `[OSDK DevTools] Fiber feature "${feature}" re-enabled after recovery timeout`,
          );
        }
      }
    }, this.config.recoveryTimeout);

    this.recoveryTimers.set(feature, timer);
  }

  private notifyListeners(): void {
    const snapshot = this.getCapabilities();
    for (const listener of this.listeners) {
      try {
        listener(snapshot);
      } catch {
        // Ignore listener errors
      }
    }
  }
}

let instance: FiberCapabilitiesManager | null = null;

export function getCapabilitiesManager(): FiberCapabilitiesManager {
  if (instance == null) {
    instance = new FiberCapabilitiesManager();
  }
  return instance;
}
