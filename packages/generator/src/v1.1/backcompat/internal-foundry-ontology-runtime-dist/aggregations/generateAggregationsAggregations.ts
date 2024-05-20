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
import type { MinimalFs } from "../../../../MinimalFs.js";
import { formatTs } from "../../../../util/test/formatTs.js";
import { reexportConsts } from "../../util/reexportConsts.js";
import { reexportTypes } from "../../util/reexportTypes.js";

export async function generateAggregationsAggregations(
  fs: MinimalFs,
  aggregationsDir: string,
) {
  await fs.writeFile(
    path.join(aggregationsDir, "Aggregations.ts"),
    await formatTs(
      `
      import { LocalDate, Timestamp } from "@osdk/legacy-client";
      `
        + reexportTypes([
          "Double",
          "Rangeable",
          "MetricValue",
          "Date",
          "BucketKey",
          "BucketValue",
          "TimeUnit",
          "BucketGroup",
          "Metrics",
          "AggregatableProperties",
          "AggregationClause",
        ])
        + reexportTypes(["Range"], "<T extends Rangeable>", "<T>")
        + reexportTypes(
          ["BaseGroupBy"],
          "<_T extends BucketValue = BucketValue>",
        )
        + reexportTypes(
          ["Duration"],
          "<_T extends Timestamp | LocalDate = Timestamp | LocalDate>",
        )
        + reexportTypes(
          [
            "AggregatableProperty",
            "MultipleAggregationsOperations",
          ],
          "<_T extends MetricValue = MetricValue>",
        )
        + reexportTypes(
          ["AggregationGroup"],
          "<TMetrics extends Metrics | MetricValue, TBucketGroup extends BucketGroup>",
        )
        + reexportTypes(
          ["Bucketing"],
          "<_T extends string , _X extends BucketValue>",
        )
        + reexportTypes(
          ["AggregationResult"],
          "<TBucketGroup extends BucketGroup, TMetrics extends Metrics | MetricValue>",
        )
        + reexportTypes(
          ["BaseBucketing"],
          "<TBucketKey extends BucketKey, TBucketValue extends BucketValue, Kind extends string>",
        )
        + reexportTypes(
          ["ExactValueBucketing", "InternalBucketing"],
          `<TBucketKey extends BucketKey, TBucketValue extends BucketValue>`,
        )
        + reexportTypes(
          ["RangeBucketing", "FixedWidthBucketing"],
          `<TBucketKey extends BucketKey, TBucketValue extends Range<Rangeable>>`,
        ) + reexportTypes(
          ["DurationBucketing"],
          `<TBucketKey extends BucketKey, TBucketValue extends Date>`,
        )
        + reexportTypes(
          ["InternalBucketingVisitor"],
          "<TBucketKey extends BucketKey, T extends BucketValue, R>",
        )
        + reexportTypes(
          ["AggregationBuilderResult"],
          "<T, TMultipleAggregationProperties>",
        )
        + reexportTypes(
          [
            "AggregatablePropertiesForResult",
            "AggregatablePropertyNamesForResult",
          ],
          "<TAggregatableProperties, TResult extends MetricValue>",
        )
        + reexportConsts(["assertBucketingInternal", "visitInternalBucketing"])
        + reexportTypes(
          ["AggregatableObjectSetStep"],
          "<TAggregatableProperties, TMultipleAggregationProperties, TBucketableProperties, TBucketGroup extends BucketGroup = {}>",
        )
        + reexportTypes(
          ["GroupedTerminalAggregationOperations"],
          "<TAggregatableProperties, TMultipleAggregationProperties, TBucketGroup extends BucketGroup = {}>",
        ),
    ),
  );
}
