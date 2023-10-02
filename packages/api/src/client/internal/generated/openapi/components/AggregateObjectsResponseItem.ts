import { AggregationGroupKey } from "./AggregationGroupKey";
import { AggregationGroupValue } from "./AggregationGroupValue";
import { AggregationMetricResult } from "./AggregationMetricResult";

export interface AggregateObjectsResponseItem {
    group: Record<AggregationGroupKey, AggregationGroupValue>;
    metrics: Array<AggregationMetricResult>;
}
