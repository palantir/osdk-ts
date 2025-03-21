import type { DataSetName } from "./blockdata/DataSetName.js";
import type { OntologyIrPropertyToColumnMapping } from "./blockdata/OntologyIrPropertyToColumnMapping.js";
/**
* Many to many link type datasource that is backed by a dataset in foundry, uniquely identified by its rid and
* branch.
*/
export interface OntologyIrManyToManyLinkTypeDatasetDatasource {
	datasetRid: DataSetName;
	writebackDatasetRid: DataSetName | undefined;
	objectTypeAPrimaryKeyMapping: Array<OntologyIrPropertyToColumnMapping>;
	objectTypeBPrimaryKeyMapping: Array<OntologyIrPropertyToColumnMapping>;
}
