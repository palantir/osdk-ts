import type { EndpointStatus } from "./EndpointStatus.js";
/**
* Number of interactions with the entity during the requested time window, grouped by endpoint status.
* If any of the EndpointStatus is missing it means that there were no interations of that type or it was
* filtered out based on the status types specified in the request.
*/
export type DeprecationUsage = Record<EndpointStatus, number>;
