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
import type { MinimalFs } from "../../../MinimalFs.js";
import { formatTs } from "../../../util/test/formatTs.js";
import { reexportConsts } from "../util/reexportConsts.js";
import { reexportTypes } from "../util/reexportTypes.js";
import { generateAggregationsAggregations } from "./aggregations/generateAggregationsAggregations.js";
import { generateGroupBy } from "./aggregations/generateGroupBy.js";
import { generateMetrics } from "./aggregations/generateMetrics.js";

export async function generateAggregationsDir(
  fs: MinimalFs,
  runtimeDistDir: string,
  importExt = "",
) {
  const aggregationsDir = path.join(runtimeDistDir, "aggregations");
  await fs.mkdir(aggregationsDir, { recursive: true });

  await generateGroupBy(fs, aggregationsDir, importExt);
  await generateAggregationsAggregations(fs, aggregationsDir);
  await generateMetrics(fs, aggregationsDir, importExt);

  await fs.writeFile(
    path.join(aggregationsDir, "index.ts"),
    await formatTs(`
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./AggregatableObjectSet${importExt}";
    }
    ${"" // Skipping this one, its hard to imagine it being used
      // export * from "./aggregationConverters${importExt}";
    }
    
    export * from "./Aggregations${importExt}";
    export * from "./ComputeStep${importExt}";
    export * from "./CountOperation${importExt}";
    export * from "./groupBy/index${importExt}";
    export * from "./internalAggregationRequest${importExt}";
    export * from "./metrics/index${importExt}";
  `),
  );

  await fs.writeFile(
    path.join(aggregationsDir, "ComputeStep.ts"),
    await formatTs(
      `
      import { ObjectSetDefinition } from "../baseTypes/index${importExt}";
      import { FoundryClientOptions } from "../client/${importExt}";
      import { AggregateObjectsError, OntologyMetadata, Result } from "../ontologyProvider/index${importExt}";
      import { AggregationClause, AggregationResult, BucketGroup, BucketValue, InternalBucketing, Metrics, MetricValue } from "./Aggregations${importExt}";
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
