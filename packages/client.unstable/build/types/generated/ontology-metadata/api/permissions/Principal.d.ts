import type { EveryPrincipal } from "./EveryPrincipal.js";
import type { GroupPrincipal } from "./GroupPrincipal.js";
import type { UserPrincipal } from "./UserPrincipal.js";
export interface Principal_everyone {
	type: "everyone";
	everyone: EveryPrincipal;
}
export interface Principal_group {
	type: "group";
	group: GroupPrincipal;
}
export interface Principal_user {
	type: "user";
	user: UserPrincipal;
}
/**
* The principal to add/remove a role to.
*/
export type Principal = Principal_everyone | Principal_group | Principal_user;
