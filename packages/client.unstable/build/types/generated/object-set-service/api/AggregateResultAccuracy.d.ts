import type { AccurateAggregateResultAccuracy } from "./AccurateAggregateResultAccuracy.js";
import type { ApproximateAggregateResultAccuracy } from "./ApproximateAggregateResultAccuracy.js";
export interface AggregateResultAccuracy_accurate {
	type: "accurate";
	accurate: AccurateAggregateResultAccuracy;
}
export interface AggregateResultAccuracy_approximate {
	type: "approximate";
	approximate: ApproximateAggregateResultAccuracy;
}
/**
* The accuracy of an aggregation result.
*/
export type AggregateResultAccuracy = AggregateResultAccuracy_accurate | AggregateResultAccuracy_approximate;
