import type { ManyToManyLinkTypeDatasetDatasource } from "./ManyToManyLinkTypeDatasetDatasource.js";
import type { ManyToManyLinkTypeStreamDatasource } from "./ManyToManyLinkTypeStreamDatasource.js";
export interface ManyToManyLinkTypeDatasourceDefinition_dataset {
	type: "dataset";
	dataset: ManyToManyLinkTypeDatasetDatasource;
}
export interface ManyToManyLinkTypeDatasourceDefinition_stream {
	type: "stream";
	stream: ManyToManyLinkTypeStreamDatasource;
}
/**
* Wrapper type for all supported many to many link type datasource types.
*/
export type ManyToManyLinkTypeDatasourceDefinition = ManyToManyLinkTypeDatasourceDefinition_dataset | ManyToManyLinkTypeDatasourceDefinition_stream;
