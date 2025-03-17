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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { Duration } from "date-fns";
import { constructNow, isAfter, isBefore, sub } from "date-fns";

const toDuration: Record<
  OntologiesV2.RelativeTimeSeriesTimeUnit,
  (v: number) => Duration
> = {
  "DAYS": (v) => ({ days: v }),
  "HOURS": (v) => ({ hours: v }),
  "MILLISECONDS": (v) => ({ seconds: v / 1000 }),
  "MINUTES": (v) => ({ minutes: v }),
  "MONTHS": (v) => ({ months: v }),
  "SECONDS": (v) => ({ seconds: v }),
  "WEEKS": (v) => ({ weeks: v }),
  "YEARS": (v) => ({ years: v }),
};

export function filterTimeSeriesData(
  data: OntologiesV2.TimeSeriesPoint[],
  { range }: OntologiesV2.StreamTimeSeriesPointsRequest,
  now: Date = constructNow(Date.now()),
): OntologiesV2.TimeSeriesPoint[] {
  if (!range) {
    return data; // TODO is this the right default?
  }

  const start = extractDate(range, "startTime", now);
  const end = extractDate(range, "endTime", now);

  const ret = data.filter((point) => {
    if (range.type === "relative") {
      return (!end || isAfter(point.time, end))
        && (!start || isBefore(point.time, start));
    } else {
      return (!end || isBefore(point.time, end))
        && (!start || isAfter(point.time, start));
    }
  });

  return ret;
}

function extractDate(
  range: OntologiesV2.TimeRange,
  key: "startTime" | "endTime",
  now: number | Date | string,
) {
  if (range.type === "absolute") {
    return range[key];
  }
  const x = range[key];
  if (!x) return undefined;

  const method = x.when === "BEFORE" ? sub : sub;
  return method(now, toDuration[x.unit](x.value));
}
