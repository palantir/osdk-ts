import type { ObjectIdentifier } from "./ObjectIdentifier.js";
import type { ObjectLoadingResponseOptions } from "./ObjectLoadingResponseOptions.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { PropertySetV2 } from "./PropertySetV2.js";
import type { ReferenceSigningOptions } from "./ReferenceSigningOptions.js";
import type { ResponseOptions } from "./ResponseOptions.js";
export interface LoadObjectsRequest {
	objectIdentifiers: Array<ObjectIdentifier>;
	propertySet: PropertySetV2;
	objectSetContext: ObjectSetContext;
	referenceSigningOptions: ReferenceSigningOptions | undefined;
	responseOptions: ResponseOptions | undefined;
	objectLoadingResponseOptions: ObjectLoadingResponseOptions | undefined;
}
