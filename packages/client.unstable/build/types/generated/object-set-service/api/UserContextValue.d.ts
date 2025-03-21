import type { MultipassAttribute } from "./MultipassAttribute.js";
import type { MultipassUserId } from "./MultipassUserId.js";
export interface UserContextValue_multipassUserId {
	type: "multipassUserId";
	multipassUserId: MultipassUserId;
}
export interface UserContextValue_multipassAttribute {
	type: "multipassAttribute";
	multipassAttribute: MultipassAttribute;
}
/**
* Represents a value that is resolved at runtime via the context of who is querying the object set.
*/
export type UserContextValue = UserContextValue_multipassUserId | UserContextValue_multipassAttribute;
