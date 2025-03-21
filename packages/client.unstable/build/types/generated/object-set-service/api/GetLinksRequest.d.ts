import type { DirectedRelation } from "./DirectedRelation.js";
import type { ObjectIdentifier } from "./ObjectIdentifier.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ResponseOptions } from "./ResponseOptions.js";
export interface GetLinksRequest {
	objectIdentifiers: Array<ObjectIdentifier>;
	objectSetContext: ObjectSetContext;
	directedRelation: DirectedRelation;
	pageSize: number;
	responseOptions: ResponseOptions | undefined;
}
