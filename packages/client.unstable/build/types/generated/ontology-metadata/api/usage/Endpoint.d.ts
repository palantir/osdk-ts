import type { EndpointStatus } from "./EndpointStatus.js";
/**
* This type is used to indicate which endpoint was called and the status of that endpoint.
*/
export interface Endpoint {
	endpointPath: string;
	endpointStatus: EndpointStatus;
}
