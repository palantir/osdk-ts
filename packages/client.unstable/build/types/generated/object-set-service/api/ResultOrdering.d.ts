import type { PropertyValueResultOrdering } from "./PropertyValueResultOrdering.js";
import type { RelevancyResultOrdering } from "./RelevancyResultOrdering.js";
import type { UnspecifiedResultOrdering } from "./UnspecifiedResultOrdering.js";
export interface ResultOrdering_relevancy {
	type: "relevancy";
	relevancy: RelevancyResultOrdering;
}
export interface ResultOrdering_propertyValue {
	type: "propertyValue";
	propertyValue: PropertyValueResultOrdering;
}
export interface ResultOrdering_unspecified {
	type: "unspecified";
	unspecified: UnspecifiedResultOrdering;
}
/**
* Describes how results should be ordered.
*/
export type ResultOrdering = ResultOrdering_relevancy | ResultOrdering_propertyValue | ResultOrdering_unspecified;
