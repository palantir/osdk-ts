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

/** Bands the custom filter offers, and the salary floor each one maps to. */
export const SALARY_BANDS = {
  any: undefined,
  "over-100k": 100_000,
  "over-200k": 200_000,
} as const;

export type SalaryBand = keyof typeof SALARY_BANDS;

export function isSalaryBand(value: unknown): value is SalaryBand {
  return typeof value === "string" && value in SALARY_BANDS;
}

interface CustomSalaryBandInputProps {
  band: SalaryBand;
  onBandChanged: (band: SalaryBand) => void;
}

/**
 * Stands in for whatever bespoke control a consumer would supply through a
 * CUSTOM filter's `renderInput` — the point is that FilterList renders it and
 * routes its state, not that the control itself is interesting.
 */
export function CustomSalaryBandInput({
  band,
  onBandChanged,
}: CustomSalaryBandInputProps) {
  return (
    <select
      aria-label="Salary band"
      value={band}
      onChange={(event) => {
        const next = event.target.value;
        if (isSalaryBand(next)) {
          onBandChanged(next);
        }
      }}
      style={{ width: "100%" }}
    >
      <option value="any">Any salary</option>
      <option value="over-100k">Over 100k</option>
      <option value="over-200k">Over 200k</option>
    </select>
  );
}
