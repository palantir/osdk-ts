import type { AccessSubRequestRid } from "../AccessSubRequestRid.js";
import type { AccessSubRequestVersion } from "../AccessSubRequestVersion.js";
import type { AccessSubRequestDetails } from "./AccessSubRequestDetails.js";
import type { AccessSubRequestMetadata } from "./AccessSubRequestMetadata.js";
/**
* An instance of an access subrequest.
*/
export interface AccessSubRequest {
	rid: AccessSubRequestRid;
	version: AccessSubRequestVersion;
	details: AccessSubRequestDetails;
	metadata: AccessSubRequestMetadata;
}
