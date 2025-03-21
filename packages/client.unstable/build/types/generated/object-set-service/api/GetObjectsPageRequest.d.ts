import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { PageToken } from "./PageToken.js";
import type { PropertySort } from "./PropertySort.js";
import type { ResponseOptions } from "./ResponseOptions.js";
export interface GetObjectsPageRequest {
	objectSet: ObjectSet;
	objectSetContext: ObjectSetContext | undefined;
	pageSize: number;
	pageToken: PageToken | undefined;
	sort: Array<PropertySort> | undefined;
	responseOptions: ResponseOptions | undefined;
}
