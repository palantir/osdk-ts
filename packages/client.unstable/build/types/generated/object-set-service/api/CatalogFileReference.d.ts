import type { DatasetRid } from "./DatasetRid.js";
import type { TransactionRid } from "./TransactionRid.js";
/**
* Reference to a specific catalog file
*/
export interface CatalogFileReference {
	datasetRid: DatasetRid;
	endTransactionRid: TransactionRid;
	logicalFilePath: string;
}
