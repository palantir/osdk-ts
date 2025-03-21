import type { UserId } from "../UserId.js";
/**
* Principal that represents a user. Identified by the user id.
*/
export interface UserPrincipal {
	user: UserId;
}
