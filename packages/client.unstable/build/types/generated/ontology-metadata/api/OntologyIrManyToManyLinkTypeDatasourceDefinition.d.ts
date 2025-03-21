import type { OntologyIrManyToManyLinkTypeDatasetDatasource } from "./OntologyIrManyToManyLinkTypeDatasetDatasource.js";
export interface OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset {
	type: "dataset";
	dataset: OntologyIrManyToManyLinkTypeDatasetDatasource;
}
/**
* Wrapper type for all supported many to many link type datasource types.
*/
export type OntologyIrManyToManyLinkTypeDatasourceDefinition = OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset;
