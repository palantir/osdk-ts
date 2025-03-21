import type { DatasourcePredicate } from "./DatasourcePredicate.js";
import type { PropertyPredicate } from "./PropertyPredicate.js";
export interface DataFilter {
	datasourceFilter: DatasourcePredicate;
	propertyFilter: PropertyPredicate;
}
