import type { DatetimeFormat } from "./DatetimeFormat.js";
import type { DatetimeTimezone } from "./DatetimeTimezone.js";
export interface TimestampFormatter {
	format: DatetimeFormat;
	displayTimezone: DatetimeTimezone;
}
