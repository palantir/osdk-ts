import type { HumanReadableFormat } from "./HumanReadableFormat.js";
import type { TimeCodeFormat } from "./TimeCodeFormat.js";
export interface DurationFormatStyle_humanReadable {
	type: "humanReadable";
	humanReadable: HumanReadableFormat;
}
export interface DurationFormatStyle_timecode {
	type: "timecode";
	timecode: TimeCodeFormat;
}
/**
* The style in which the duration is formatted.
*/
export type DurationFormatStyle = DurationFormatStyle_humanReadable | DurationFormatStyle_timecode;
