import type { ObjectLoadingResponseOptions } from "./ObjectLoadingResponseOptions.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { PropertySetV2 } from "./PropertySetV2.js";
import type { ResponseOptions } from "./ResponseOptions.js";
export interface GetAllObjectsInitialPageRequest {
	objectSet: ObjectSet;
	objectSetContext: ObjectSetContext;
	propertySet: PropertySetV2;
	pageSize: number;
	responseOptions: ResponseOptions | undefined;
	objectLoadingResponseOptions: ObjectLoadingResponseOptions | undefined;
}
