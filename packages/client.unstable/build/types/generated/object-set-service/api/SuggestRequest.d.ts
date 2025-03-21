import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { PropertyId } from "./PropertyId.js";
import type { ResponseOptions } from "./ResponseOptions.js";
import type { SuggestInput } from "./SuggestInput.js";
export interface SuggestRequest {
	objectSet: ObjectSet;
	objectSetContext: ObjectSetContext;
	propertyId: PropertyId;
	suggestInput: SuggestInput;
	numRequestedValues: number;
	responseOptions: ResponseOptions | undefined;
}
