import type { TimestampConfiguration } from "./TimestampConfiguration.js";
/**
* TimestampListType specifies that this parameter must be a list of Timestamps.
*/
export interface TimestampListType {
	configuration: TimestampConfiguration | undefined;
}
