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
import type { MinimalFs } from "../../../MinimalFs";
import { formatTs } from "../../../util/test/formatTs";
import { generateAggregationsAggregations } from "./aggregations/generateAggregationsAggregations";
import { generateGroupBy } from "./aggregations/generateGroupBy";
import { generateMetrics } from "./aggregations/generateMetrics";

export async function generateAggregationsDir(
  fs: MinimalFs,
  runtimeDistDir: string,
) {
  const aggregationsDir = path.join(runtimeDistDir, "aggregations");
  await fs.mkdir(aggregationsDir, { recursive: true });

  await generateGroupBy(fs, aggregationsDir);
  await generateAggregationsAggregations(fs, aggregationsDir);
  await generateMetrics(fs, aggregationsDir);

  await fs.writeFile(
    path.join(aggregationsDir, "index.ts"),
    // TRASHFIXME
    await formatTs(`
    // export * from "./AggregatableObjectSet";
    // export * from "./aggregationConverters";
    export * from "./Aggregations";
    // export * from "./ComputeStep";
    // export * from "./CountOperation";
    export * from "./groupBy";
    // export * from "./internalAggregationRequest";
    // export * from "./metrics";
  `),
  );
}
