/**
* Fetches the given URL, converting the body to JSON, setting the Content-Type header to application/json,
* and calling .json() on the response.
*/
/** @deprecated */
export type FetchAsJsonFn = (url: URL, requestInit: Omit<RequestInit, "body"> & {
	body?: object | undefined
}) => Promise<any>;
