import type { TimeFormat12Hour } from "./TimeFormat12Hour.js";
import type { TimeFormat24Hour } from "./TimeFormat24Hour.js";
export interface TimeFormat_timeFormat24Hour {
	type: "timeFormat24Hour";
	timeFormat24Hour: TimeFormat24Hour;
}
export interface TimeFormat_timeFormat12Hour {
	type: "timeFormat12Hour";
	timeFormat12Hour: TimeFormat12Hour;
}
export type TimeFormat = TimeFormat_timeFormat24Hour | TimeFormat_timeFormat12Hour;
