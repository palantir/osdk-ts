import type { LocalTimezone } from "./LocalTimezone.js";
import type { SpecifiedTimezone } from "./SpecifiedTimezone.js";
export interface DefaultTimezone_localTimezone {
	type: "localTimezone";
	localTimezone: LocalTimezone;
}
export interface DefaultTimezone_setTimezone {
	type: "setTimezone";
	setTimezone: SpecifiedTimezone;
}
export type DefaultTimezone = DefaultTimezone_localTimezone | DefaultTimezone_setTimezone;
