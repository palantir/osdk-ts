import type { RestrictedViewTransactionRid } from "../RestrictedViewTransactionRid.js";
/**
* Provenance information for a restricted view that is made available by Object Storage services.
*/
export interface RestrictedViewSecurityProvenanceInformation {
	restrictedViewTransaction: RestrictedViewTransactionRid;
}
