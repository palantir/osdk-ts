/**
* Ordering which causes objects to be returned in an arbitrary order - no assumptions should be made about
* the ordering of returned objects.
* Consider using this whenever there's no need to have the results be returned in any specific ordering as it
* can cause the request to complete faster.
*/
export interface UnspecifiedResultOrdering {}
