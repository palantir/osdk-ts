/**
* Submits the set of all valid apply action requests defined in the parent request order until the first invalid
* apply action request or the first request which makes the overall parent request container invalid, e.g.
* duplicate conflicting edits on the same object. Subsequent requests will not be processed and returned
* as unattempted.
*/
export interface SubmitValidEntriesInOrderUntilFirstFailureMode {}
