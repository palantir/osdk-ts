import type { PropertyId } from "./PropertyId.js";
import type { UserContextValue } from "./UserContextValue.js";
/**
* An object matches an UserContextFilter iff the value of the provided property is exactly equal to the provided user context.
*/
export interface UserContextFilter {
	propertyId: PropertyId;
	userContext: UserContextValue;
}
