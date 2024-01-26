/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import type { MinimalFs } from "../../../../MinimalFs";
import { formatTs } from "../../../../util/test/formatTs";
import { reexportTypes } from "../../util/reexportTypes";

export async function generateTimeSeriesDir(
  timeseriesDir: string,
  fs: MinimalFs,
) {
  await fs.mkdir(timeseriesDir, { recursive: true });
  await fs.writeFile(
    path.join(timeseriesDir, "index.ts"),
    await formatTs(`
    export * from "./TimeSeries";
    export * from "./TimeSeriesDuration";
    export * from "./TimeSeriesPoint";
    ${"" // Internal type
      // export * from "./TimeSeriesProperty";
    }
    export * from "./TimeSeriesQuery";
    export * from "./TimeSeriesTerminalOperations";
  `),
  );

  await fs.writeFile(
    path.join(timeseriesDir, "TimeSeries.ts"),
    await formatTs(
      reexportTypes(
        ["TimeSeries"],
        `<T extends number | string>`,
      ),
    ),
  );

  await fs.writeFile(
    path.join(timeseriesDir, "TimeSeriesDuration.ts"),
    await formatTs(
      reexportTypes([`WhenUnit`, `DurationUnit`, `TimeSeriesDuration`]),
    ),
  );

  await fs.writeFile(
    path.join(timeseriesDir, "TimeSeriesPoint.ts"),
    await formatTs(
      reexportTypes(
        ["TimeSeriesPoint"],
        `<T extends number | string>`,
      ),
    ),
  );
  await fs.writeFile(
    path.join(timeseriesDir, "TimeSeriesQuery.ts"),
    await formatTs(
      reexportTypes(
        ["TimeSeriesQuery"],
        `<T extends number | string>`,
      ),
    ),
  );

  await fs.writeFile(
    path.join(timeseriesDir, "TimeSeriesTerminalOperations.ts"),
    await formatTs(
      reexportTypes(
        ["TimeSeriesTerminalOperations", "TimeSeriesIterator"],
        `<T extends number | string>`,
      ),
    ),
  );
}
