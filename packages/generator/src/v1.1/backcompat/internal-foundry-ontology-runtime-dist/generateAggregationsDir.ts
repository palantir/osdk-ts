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
import { reexportConsts } from "../util/reexportConsts";
import { reexportTypes } from "../util/reexportTypes";
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
    await formatTs(`
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./AggregatableObjectSet";
    }
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./aggregationConverters";
    }
    
    export * from "./Aggregations";
    export * from "./ComputeStep";
    export * from "./CountOperation";
    export * from "./groupBy";
    export * from "./internalAggregationRequest";
    export * from "./metrics";
  `),
  );

  await fs.writeFile(
    path.join(aggregationsDir, "ComputeStep.ts"),
    await formatTs(
      `
      import { ObjectSetDefinition } from "../baseTypes";
      import { FoundryClientOptions } from "../client";
      import { AggregateObjectsError, OntologyMetadata, Result } from "../ontologyProvider";
      import { AggregationClause, AggregationResult, BucketGroup, BucketValue, InternalBucketing, Metrics, MetricValue } from "./Aggregations";
      `
        + reexportConsts(["ComputeStep"])
        + reexportTypes(
          ["ComputeStep"],
          "<TBucketGroup extends BucketGroup, TMetrics extends Metrics | MetricValue> ",
        )
        + reexportTypes(
          ["AggregationComputeStep"],
          "<TBucketGroup extends BucketGroup, TMetrics extends Metrics | MetricValue>",
        )
        + `
    
    `,
    ),
  );

  await fs.writeFile(
    path.join(aggregationsDir, "CountOperation.ts"),
    await formatTs(
      ``
        + reexportConsts(["CountOperation", "isCountOperation"])
        + reexportTypes(["CountOperation"]),
    ),
  );

  await fs.writeFile(
    path.join(aggregationsDir, "internalAggregationRequest.ts"),
    await formatTs(
      reexportTypes(["InternalAggregationRequest"]),
    ),
  );
}
