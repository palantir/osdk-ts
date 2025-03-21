import type { DerivedProperties } from "./DerivedProperties.js";
import type { ObjectLoadingResponseOptions } from "./ObjectLoadingResponseOptions.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertySetV2 } from "./PropertySetV2.js";
import type { ReferenceSigningOptions } from "./ReferenceSigningOptions.js";
import type { ResponseOptions } from "./ResponseOptions.js";
import type { ResultOrdering } from "./ResultOrdering.js";
export interface GetTopObjectsInitialPageRequest {
	objectSet: ObjectSet;
	objectSetContext: ObjectSetContext;
	runtimeDerivedProperties: Record<ObjectTypeId, DerivedProperties>;
	propertySet: PropertySetV2;
	resultOrdering: ResultOrdering;
	pageSize: number;
	responseOptions: ResponseOptions | undefined;
	referenceSigningOptions: ReferenceSigningOptions | undefined;
	objectLoadingResponseOptions: ObjectLoadingResponseOptions | undefined;
}
