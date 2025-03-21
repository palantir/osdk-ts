import type { DatasetTransactionRid } from "../DatasetTransactionRid.js";
/**
* Provenance information for a dataset that is made available by Object Storage services.
*/
export interface DatasetSecurityProvenanceInformation {
	datasetTransaction: DatasetTransactionRid;
}
