import type { AccessSubRequestDetails } from "./AccessSubRequestDetails.js";
import type { AccessSubRequestMetadata } from "./AccessSubRequestMetadata.js";
/**
* Modifications necessary to create or modify a subrequest.
*/
export interface AccessSubRequestModification {
	accessSubRequestMetadata: AccessSubRequestMetadata;
	accessSubRequestDetails: AccessSubRequestDetails;
}
