/**
* A reference to a column in Foundry.
*/
export interface ColumnLocator {
	columnName: string;
	datasetRid: string;
	writebackDatasetRid: string | undefined;
}
