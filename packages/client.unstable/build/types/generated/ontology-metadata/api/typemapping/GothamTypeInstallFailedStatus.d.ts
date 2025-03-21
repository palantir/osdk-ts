/**
* The type has failed installation at least once. The installation will be retried later.
* The latest error message for the failure and the current failure count are returned.
*/
export interface GothamTypeInstallFailedStatus {
	lastFailureMessage: string;
	failureCount: number;
}
