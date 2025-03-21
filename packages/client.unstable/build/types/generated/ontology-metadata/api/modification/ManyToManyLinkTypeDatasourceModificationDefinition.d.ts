import type { ManyToManyLinkTypeDatasetDatasourceModification } from "./ManyToManyLinkTypeDatasetDatasourceModification.js";
import type { ManyToManyLinkTypeStreamDatasourceModification } from "./ManyToManyLinkTypeStreamDatasourceModification.js";
export interface ManyToManyLinkTypeDatasourceModificationDefinition_dataset {
	type: "dataset";
	dataset: ManyToManyLinkTypeDatasetDatasourceModification;
}
export interface ManyToManyLinkTypeDatasourceModificationDefinition_stream {
	type: "stream";
	stream: ManyToManyLinkTypeStreamDatasourceModification;
}
/**
* Wrapper type for all supported many to many link type datasource types.
*/
export type ManyToManyLinkTypeDatasourceModificationDefinition = ManyToManyLinkTypeDatasourceModificationDefinition_dataset | ManyToManyLinkTypeDatasourceModificationDefinition_stream;
