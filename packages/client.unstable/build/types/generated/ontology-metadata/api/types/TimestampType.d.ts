import type { TimestampConfiguration } from "./TimestampConfiguration.js";
/**
* TimestampType specifies that this parameter must be a Timestamp.
*/
export interface TimestampType {
	configuration: TimestampConfiguration | undefined;
}
