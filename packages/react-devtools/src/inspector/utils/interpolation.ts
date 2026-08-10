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

export function interpolate(
  start: number,
  end: number,
  factor: number,
): number {
  return start + (end - start) * factor;
}

export const INTERPOLATION_FACTORS = {
  selection: 0.95,
  drag: 0.7,
  crosshair: 0.3,
} as const;

export const DEFAULT_CONVERGENCE_THRESHOLD = 0.5;
