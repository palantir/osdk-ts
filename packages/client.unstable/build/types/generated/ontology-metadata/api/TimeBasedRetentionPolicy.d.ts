/**
* A retention policy where the datasource will contain at least data from the specified time window.
*/
export interface TimeBasedRetentionPolicy {
	window: string;
}
