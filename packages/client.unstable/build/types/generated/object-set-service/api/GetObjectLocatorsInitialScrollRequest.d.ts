import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { PropertySort } from "./PropertySort.js";
import type { ResponseOptions } from "./ResponseOptions.js";
/**
* Initial request to scroll through objects in an ObjectSet.
*/
export interface GetObjectLocatorsInitialScrollRequest {
	objectSet: ObjectSet;
	objectSetContext: ObjectSetContext | undefined;
	pageSize: number;
	sort: Array<PropertySort> | undefined;
	responseOptions: ResponseOptions | undefined;
}
