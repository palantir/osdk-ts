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
import { reexportConsts } from "../../util/reexportConsts";
import { reexportTypes } from "../../util/reexportTypes";

export async function generateMetrics(fs: MinimalFs, aggregationsDir: string) {
  const metricsDir = path.join(aggregationsDir, "metrics");

  await fs.mkdir(metricsDir, { recursive: true });

  await fs.writeFile(
    path.join(metricsDir, "metrics.ts"),
    await formatTs(
      `export {MetricValueType} from "@osdk/legacy-client";`,
    ),
  );

  await fs.writeFile(
    path.join(metricsDir, "ApproximateDistinctCountAggregatableProperty.ts"),
    await formatTs(
      reexportConsts(["ApproximateDistinctCountAggregatableProperty"])
        + reexportTypes(["ApproximateDistinctCountAggregatableProperty"]),
    ),
  );

  await fs.writeFile(
    path.join(metricsDir, "MultipleAggregatableProperty.ts"),
    await formatTs(
      `
        import { Double, MetricValue, MultipleAggregationsOperations } from "../Aggregations";
        import { MetricValueType } from "./metrics";
      `
        + reexportConsts(["MultipleAggregatableProperty"])
        + reexportTypes(
          ["MultipleAggregatableProperty"],
          "<TResult extends MetricValue = Double>",
        ),
    ),
  );

  for (
    const typeName of [
      "DefaultAggregatableProperty",
      "LocalDatePropertyMetric",
      "NumericPropertyMetric",
      "TimestampPropertyMetric",
    ]
  ) {
    await fs.writeFile(
      path.join(metricsDir, `${typeName}.ts`),
      await formatTs(
        `
          import { MultipleAggregatableProperty } from "./MultipleAggregatableProperty";
        `
          + reexportConsts([typeName]),
      ),
    );
  }

  await fs.writeFile(
    path.join(metricsDir, "index.ts"),
    await formatTs(
      `
      export * from "./ApproximateDistinctCountAggregatableProperty";
      export * from "./DefaultAggregatableProperty";
      export * from "./LocalDatePropertyMetric";
      export * from "./metrics";
      export * from "./MultipleAggregatableProperty";
      export * from "./NumericPropertyMetric";
      export * from "./TimestampPropertyMetric";
      `,
    ),
  );
}
