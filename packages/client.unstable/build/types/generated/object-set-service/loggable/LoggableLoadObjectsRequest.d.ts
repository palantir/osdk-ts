import type { ObjectLoadingResponseOptions } from "../api/ObjectLoadingResponseOptions.js";
import type { ObjectSetContext } from "../api/ObjectSetContext.js";
import type { PropertySetV2 } from "../api/PropertySetV2.js";
import type { ReferenceSigningOptions } from "../api/ReferenceSigningOptions.js";
import type { LoggableObjectIdentifier } from "./LoggableObjectIdentifier.js";
/**
* See com.palantir.object.set.api.LoadObjectsRequest
*/
export interface LoggableLoadObjectsRequest {
	objectIdentifiers: Array<LoggableObjectIdentifier>;
	propertySet: PropertySetV2;
	objectSetContext: ObjectSetContext;
	referenceSigningOptions: ReferenceSigningOptions | undefined;
	objectLoadingResponseOptions: ObjectLoadingResponseOptions | undefined;
}
