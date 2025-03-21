import type { DatetimeTimezoneDefinition } from "./DatetimeTimezoneDefinition.js";
import type { UserTimezone } from "./UserTimezone.js";
export interface DatetimeTimezone_static {
	type: "static";
	static: DatetimeTimezoneDefinition;
}
export interface DatetimeTimezone_user {
	type: "user";
	user: UserTimezone;
}
export type DatetimeTimezone = DatetimeTimezone_static | DatetimeTimezone_user;
