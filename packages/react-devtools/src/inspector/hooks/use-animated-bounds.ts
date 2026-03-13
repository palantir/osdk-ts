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

import { useCallback, useEffect, useRef, useState } from "react";
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

export function useAnimatedBounds(
  targetBounds: OverlayBounds | null,
  options: AnimationOptions = {},
): AnimatedBounds | null {
  const {
    interpolationFactor = INTERPOLATION_FACTORS.selection,
    convergenceThreshold = DEFAULT_CONVERGENCE_THRESHOLD,
    enabled = true,
  } = options;

  const [currentBounds, setCurrentBounds] = useState<AnimatedBounds | null>(
    null,
  );
  const animationFrameRef = useRef<number | null>(null);
  const hasRenderedOnceRef = useRef(false);

  const cancelAnimation = useCallback(() => {
    if (animationFrameRef.current != null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!targetBounds) {
      cancelAnimation();
      setCurrentBounds(null);
      hasRenderedOnceRef.current = false;
      return;
    }

    if (!hasRenderedOnceRef.current || !enabled) {
      setCurrentBounds({
        x: targetBounds.x,
        y: targetBounds.y,
        width: targetBounds.width,
        height: targetBounds.height,
      });
      hasRenderedOnceRef.current = true;
      return;
    }

    const targetX = targetBounds.x;
    const targetY = targetBounds.y;
    const targetWidth = targetBounds.width;
    const targetHeight = targetBounds.height;

    const animate = () => {
      setCurrentBounds((current) => {
        if (!current) {
          return {
            x: targetX,
            y: targetY,
            width: targetWidth,
            height: targetHeight,
          };
        }

        const nextX = interpolate(current.x, targetX, interpolationFactor);
        const nextY = interpolate(current.y, targetY, interpolationFactor);
        const nextWidth = interpolate(
          current.width,
          targetWidth,
          interpolationFactor,
        );
        const nextHeight = interpolate(
          current.height,
          targetHeight,
          interpolationFactor,
        );

        const hasConverged = Math.abs(nextX - targetX) < convergenceThreshold
          && Math.abs(nextY - targetY) < convergenceThreshold
          && Math.abs(nextWidth - targetWidth) < convergenceThreshold
          && Math.abs(nextHeight - targetHeight) < convergenceThreshold;

        if (hasConverged) {
          animationFrameRef.current = null;
          return {
            x: targetX,
            y: targetY,
            width: targetWidth,
            height: targetHeight,
          };
        }

        animationFrameRef.current = requestAnimationFrame(animate);
        return {
          x: nextX,
          y: nextY,
          width: nextWidth,
          height: nextHeight,
        };
      });
    };

    cancelAnimation();
    animationFrameRef.current = requestAnimationFrame(animate);

    return cancelAnimation;
  }, [
    targetBounds?.x,
    targetBounds?.y,
    targetBounds?.width,
    targetBounds?.height,
    interpolationFactor,
    convergenceThreshold,
    enabled,
    cancelAnimation,
  ]);

  useEffect(() => {
    return cancelAnimation;
  }, [cancelAnimation]);

  return currentBounds;
}
