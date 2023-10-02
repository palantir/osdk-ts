import { AggregationGroupKeyV2 } from "./AggregationGroupKeyV2";
import { AggregationGroupValueV2 } from "./AggregationGroupValueV2";
import { AggregationMetricResultV2 } from "./AggregationMetricResultV2";

export type AggregateObjectsResponseItemV2 = { group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>; metrics: Array<AggregationMetricResultV2>; };
