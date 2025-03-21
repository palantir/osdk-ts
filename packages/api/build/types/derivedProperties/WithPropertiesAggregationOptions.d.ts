export type CollectWithPropAggregations = "collectSet" | "collectList";
export type BaseWithPropAggregations = "approximateDistinct" | "exactDistinct";
export type StringWithPropAggregateOption = BaseWithPropAggregations | CollectWithPropAggregations;
export type NumericWithPropAggregateOption = "min" | "max" | "sum" | "avg" | "approximatePercentile" | BaseWithPropAggregations | CollectWithPropAggregations;
