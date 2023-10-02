import { MaxAggregation } from "./MaxAggregation";
import { MinAggregation } from "./MinAggregation";
import { AvgAggregation } from "./AvgAggregation";
import { SumAggregation } from "./SumAggregation";
import { CountAggregation } from "./CountAggregation";
import { ApproximateDistinctAggregation } from "./ApproximateDistinctAggregation";

export interface Aggregation_Max extends MaxAggregation {
    type: "max";
}

export interface Aggregation_Min extends MinAggregation {
    type: "min";
}

export interface Aggregation_Avg extends AvgAggregation {
    type: "avg";
}

export interface Aggregation_Sum extends SumAggregation {
    type: "sum";
}

export interface Aggregation_Count extends CountAggregation {
    type: "count";
}

export interface Aggregation_ApproximateDistinct extends ApproximateDistinctAggregation {
    type: "approximateDistinct";
}

export type Aggregation = Aggregation_Max | Aggregation_Min | Aggregation_Avg | Aggregation_Sum | Aggregation_Count | Aggregation_ApproximateDistinct;
