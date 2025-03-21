import type { DefaultTimezone } from "./DefaultTimezone.js";
import type { TimeFormat } from "./TimeFormat.js";
/**
* The timezone configuration of a timestamp value
*/
export interface TimestampConfiguration {
	canUserModifyTimezone: boolean;
	defaultTimezone: DefaultTimezone;
	timeFormat: TimeFormat | undefined;
}
