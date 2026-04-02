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

import React from "react";
import type {
  AnimatedBounds,
  AnimationOptions,
  OverlayBounds,
} from "../types.js";
import {
  DEFAULT_CONVERGENCE_THRESHOLD,
  interpolate,
  INTERPOLATION_FACTORS,
} from "../utils/interpolation.js";

class AnimationBoundsStore {
  private current: AnimatedBounds | null = null;
  private animationFrameId: number | null = null;
  private listeners: Set<() => void> = new Set();
  private hasRenderedOnce = false;

  constructor(
    private targetBounds: OverlayBounds,
    private interpolationFactor: number,
    private convergenceThreshold: number,
    private enabled: boolean,
  ) {
    this.current = {
      x: targetBounds.x,
      y: targetBounds.y,
      width: targetBounds.width,
      height: targetBounds.height,
    };
    this.hasRenderedOnce = true;

    if (enabled) {
      this.startAnimation();
    }
  }

  subscribe = (onStoreChange: () => void): () => void => {
    this.listeners.add(onStoreChange);
    return () => {
      this.listeners.delete(onStoreChange);
    };
  };

  getSnapshot = (): AnimatedBounds | null => {
    return this.current;
  };

  updateTarget(
    targetBounds: OverlayBounds,
    interpolationFactor: number,
    convergenceThreshold: number,
    enabled: boolean,
  ): void {
    this.targetBounds = targetBounds;
    this.interpolationFactor = interpolationFactor;
    this.convergenceThreshold = convergenceThreshold;
    this.enabled = enabled;

    if (!this.hasRenderedOnce || !enabled) {
      this.cancelAnimation();
      this.current = {
        x: targetBounds.x,
        y: targetBounds.y,
        width: targetBounds.width,
        height: targetBounds.height,
      };
      this.hasRenderedOnce = true;
      this.notify();
      return;
    }

    this.cancelAnimation();
    this.startAnimation();
  }

  dispose(): void {
    this.cancelAnimation();
    this.listeners.clear();
  }

  private startAnimation(): void {
    const animate = () => {
      const targetX = this.targetBounds.x;
      const targetY = this.targetBounds.y;
      const targetWidth = this.targetBounds.width;
      const targetHeight = this.targetBounds.height;

      if (!this.current) {
        this.current = {
          x: targetX,
          y: targetY,
          width: targetWidth,
          height: targetHeight,
        };
        this.animationFrameId = null;
        this.notify();
        return;
      }

      const nextX = interpolate(
        this.current.x,
        targetX,
        this.interpolationFactor,
      );
      const nextY = interpolate(
        this.current.y,
        targetY,
        this.interpolationFactor,
      );
      const nextWidth = interpolate(
        this.current.width,
        targetWidth,
        this.interpolationFactor,
      );
      const nextHeight = interpolate(
        this.current.height,
        targetHeight,
        this.interpolationFactor,
      );

      const hasConverged = Math.abs(nextX - targetX) < this.convergenceThreshold
        && Math.abs(nextY - targetY) < this.convergenceThreshold
        && Math.abs(nextWidth - targetWidth) < this.convergenceThreshold
        && Math.abs(nextHeight - targetHeight) < this.convergenceThreshold;

      if (hasConverged) {
        this.current = {
          x: targetX,
          y: targetY,
          width: targetWidth,
          height: targetHeight,
        };
        this.animationFrameId = null;
      } else {
        this.current = {
          x: nextX,
          y: nextY,
          width: nextWidth,
          height: nextHeight,
        };
        this.animationFrameId = requestAnimationFrame(animate);
      }
      this.notify();
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private cancelAnimation(): void {
    if (this.animationFrameId != null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export function useAnimatedBounds(
  targetBounds: OverlayBounds | null,
  options: AnimationOptions = {},
): AnimatedBounds | null {
  const {
    interpolationFactor = INTERPOLATION_FACTORS.selection,
    convergenceThreshold = DEFAULT_CONVERGENCE_THRESHOLD,
    enabled = true,
  } = options;

  const storeRef = React.useRef<AnimationBoundsStore | null>(null);

  if (targetBounds) {
    if (storeRef.current) {
      storeRef.current.updateTarget(
        targetBounds,
        interpolationFactor,
        convergenceThreshold,
        enabled,
      );
    } else {
      storeRef.current = new AnimationBoundsStore(
        targetBounds,
        interpolationFactor,
        convergenceThreshold,
        enabled,
      );
    }
  } else {
    if (storeRef.current) {
      storeRef.current.dispose();
      storeRef.current = null;
    }
  }

  // Deps use `targetBounds == null` (boolean) so callbacks only change when
  // transitioning between null/non-null, not on every bounds update.
  // The store handles internal updates via its own subscription mechanism.
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const store = storeRef.current;
    if (!store) {
      return () => {};
    }
    return store.subscribe(onStoreChange);
  }, [targetBounds == null]);

  const getSnapshot = React.useCallback((): AnimatedBounds | null => {
    const store = storeRef.current;
    if (!store) {
      return null;
    }
    return store.getSnapshot();
  }, [targetBounds == null]);

  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
