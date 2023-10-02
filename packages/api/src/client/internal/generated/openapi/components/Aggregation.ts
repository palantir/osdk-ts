import { MaxAggregation } from "./MaxAggregation";
import { MinAggregation } from "./MinAggregation";
import { AvgAggregation } from "./AvgAggregation";
import { SumAggregation } from "./SumAggregation";
import { CountAggregation } from "./CountAggregation";
import { ApproximateDistinctAggregation } from "./ApproximateDistinctAggregation";

export interface Aggregation_Max extends MaxAggregation {
    type: "max";
}

function isMax(obj: Aggregation): obj is Aggregation_Max {
    return (obj.type === "max");
}

function max(obj: MaxAggregation): Aggregation_Max {
    return {
        ...obj,
        type: "max",
    };
}

export interface Aggregation_Min extends MinAggregation {
    type: "min";
}

function isMin(obj: Aggregation): obj is Aggregation_Min {
    return (obj.type === "min");
}

function min(obj: MinAggregation): Aggregation_Min {
    return {
        ...obj,
        type: "min",
    };
}

export interface Aggregation_Avg extends AvgAggregation {
    type: "avg";
}

function isAvg(obj: Aggregation): obj is Aggregation_Avg {
    return (obj.type === "avg");
}

function avg(obj: AvgAggregation): Aggregation_Avg {
    return {
        ...obj,
        type: "avg",
    };
}

export interface Aggregation_Sum extends SumAggregation {
    type: "sum";
}

function isSum(obj: Aggregation): obj is Aggregation_Sum {
    return (obj.type === "sum");
}

function sum(obj: SumAggregation): Aggregation_Sum {
    return {
        ...obj,
        type: "sum",
    };
}

export interface Aggregation_Count extends CountAggregation {
    type: "count";
}

function isCount(obj: Aggregation): obj is Aggregation_Count {
    return (obj.type === "count");
}

function count(obj: CountAggregation): Aggregation_Count {
    return {
        ...obj,
        type: "count",
    };
}

export interface Aggregation_ApproximateDistinct extends ApproximateDistinctAggregation {
    type: "approximateDistinct";
}

function isApproximateDistinct(obj: Aggregation): obj is Aggregation_ApproximateDistinct {
    return (obj.type === "approximateDistinct");
}

function approximateDistinct(obj: ApproximateDistinctAggregation): Aggregation_ApproximateDistinct {
    return {
        ...obj,
        type: "approximateDistinct",
    };
}

export interface AggregationVisitor<T> {
    max: (obj: MaxAggregation) => T;
    min: (obj: MinAggregation) => T;
    avg: (obj: AvgAggregation) => T;
    sum: (obj: SumAggregation) => T;
    count: (obj: CountAggregation) => T;
    approximateDistinct: (obj: ApproximateDistinctAggregation) => T;
    unknown: (obj: Aggregation) => T;
}

function visit<T>(obj: Aggregation, visitor: AggregationVisitor<T>): T {
    if (isMax(obj)) {
        return visitor.max(obj);
    }

    if (isMin(obj)) {
        return visitor.min(obj);
    }

    if (isAvg(obj)) {
        return visitor.avg(obj);
    }

    if (isSum(obj)) {
        return visitor.sum(obj);
    }

    if (isCount(obj)) {
        return visitor.count(obj);
    }

    if (isApproximateDistinct(obj)) {
        return visitor.approximateDistinct(obj);
    }

    return visitor.unknown(obj);
}

export type Aggregation = Aggregation_Max | Aggregation_Min | Aggregation_Avg | Aggregation_Sum | Aggregation_Count | Aggregation_ApproximateDistinct;

export const Aggregation = {
    isMax: isMax,
    max: max,
    isMin: isMin,
    min: min,
    isAvg: isAvg,
    avg: avg,
    isSum: isSum,
    sum: sum,
    isCount: isCount,
    count: count,
    isApproximateDistinct: isApproximateDistinct,
    approximateDistinct: approximateDistinct,
    visit: visit,
};
