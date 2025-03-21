import type { DatetimeLocalizedFormat } from "./DatetimeLocalizedFormat.js";
import type { DatetimeStringFormat } from "./DatetimeStringFormat.js";
export interface DatetimeFormat_stringFormat {
	type: "stringFormat";
	stringFormat: DatetimeStringFormat;
}
export interface DatetimeFormat_localizedFormat {
	type: "localizedFormat";
	localizedFormat: DatetimeLocalizedFormat;
}
export type DatetimeFormat = DatetimeFormat_stringFormat | DatetimeFormat_localizedFormat;
