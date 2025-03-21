import type { AggregateRequest } from "../../api/AggregateRequest.js";
import type { Backend } from "../../api/Backend.js";
export interface ObjectSetAggregationServiceAggregateRequestParams {
	request: AggregateRequest;
	backend: Backend | undefined;
}
