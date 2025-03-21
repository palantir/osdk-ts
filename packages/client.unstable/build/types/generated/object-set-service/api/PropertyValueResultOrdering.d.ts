import type { PropertyOrdering } from "./PropertyOrdering.js";
/**
* Ordering which causes objects to be returned in an order determined by values of provided properties in set
* order. If property ordering is empty, the results will be sorted in an unspecified but deterministic order
*/
export interface PropertyValueResultOrdering {
	propertyOrdering: Array<PropertyOrdering>;
}
