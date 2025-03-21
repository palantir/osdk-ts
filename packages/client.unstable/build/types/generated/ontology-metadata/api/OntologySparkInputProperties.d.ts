import type { DatasetRid } from "./DatasetRid.js";
import type { OntologyDatasetType } from "./OntologyDatasetType.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Resolved properties to read an ontology entity through a delegate dataset in spark.
*/
export interface OntologySparkInputProperties {
	datasetRid: DatasetRid;
	ontologyDatasetType: OntologyDatasetType;
	ontologyVersion: OntologyVersion;
	endTransactionRid: string;
	schemaBranchId: string;
	schemaVersionId: string;
}
