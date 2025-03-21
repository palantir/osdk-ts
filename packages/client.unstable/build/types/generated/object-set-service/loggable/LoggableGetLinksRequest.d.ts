import type { DirectedRelation } from "../api/DirectedRelation.js";
import type { ObjectSetContext } from "../api/ObjectSetContext.js";
import type { LoggableObjectIdentifier } from "./LoggableObjectIdentifier.js";
/**
* See com.palantir.object.set.api.GetLinksRequest
*/
export interface LoggableGetLinksRequest {
	objectIdentifiers: Array<LoggableObjectIdentifier>;
	objectSetContext: ObjectSetContext;
	directedRelation: DirectedRelation;
	pageSize: number;
}
