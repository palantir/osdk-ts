import type { AggregationExecutionMode } from "./AggregationExecutionMode.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ResponseOptions } from "./ResponseOptions.js";
import type { RootAggregation } from "./RootAggregation.js";
export interface AggregateRequest {
	aggregation: RootAggregation;
	objectSet: ObjectSet;
	executionMode: AggregationExecutionMode | undefined;
	objectSetContext: ObjectSetContext | undefined;
	responseOptions: ResponseOptions | undefined;
}
