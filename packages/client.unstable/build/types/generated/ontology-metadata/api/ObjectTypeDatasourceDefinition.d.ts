import type { ObjectTypeDatasetDatasource } from "./ObjectTypeDatasetDatasource.js";
import type { ObjectTypeDatasetDatasourceV2 } from "./ObjectTypeDatasetDatasourceV2.js";
import type { ObjectTypeDatasetDatasourceV3 } from "./ObjectTypeDatasetDatasourceV3.js";
import type { ObjectTypeDerivedPropertiesDatasource } from "./ObjectTypeDerivedPropertiesDatasource.js";
import type { ObjectTypeDirectDatasource } from "./ObjectTypeDirectDatasource.js";
import type { ObjectTypeEditsOnlyDatasource } from "./ObjectTypeEditsOnlyDatasource.js";
import type { ObjectTypeGeotimeSeriesDatasource } from "./ObjectTypeGeotimeSeriesDatasource.js";
import type { ObjectTypeMediaDatasource } from "./ObjectTypeMediaDatasource.js";
import type { ObjectTypeMediaSetViewDatasource } from "./ObjectTypeMediaSetViewDatasource.js";
import type { ObjectTypeRestrictedStreamDatasource } from "./ObjectTypeRestrictedStreamDatasource.js";
import type { ObjectTypeRestrictedViewDatasource } from "./ObjectTypeRestrictedViewDatasource.js";
import type { ObjectTypeRestrictedViewDatasourceV2 } from "./ObjectTypeRestrictedViewDatasourceV2.js";
import type { ObjectTypeStreamDatasource } from "./ObjectTypeStreamDatasource.js";
import type { ObjectTypeStreamDatasourceV2 } from "./ObjectTypeStreamDatasourceV2.js";
import type { ObjectTypeTableDatasource } from "./ObjectTypeTableDatasource.js";
import type { ObjectTypeTimeSeriesDatasource } from "./ObjectTypeTimeSeriesDatasource.js";
export interface ObjectTypeDatasourceDefinition_dataset {
	type: "dataset";
	dataset: ObjectTypeDatasetDatasource;
}
export interface ObjectTypeDatasourceDefinition_stream {
	type: "stream";
	stream: ObjectTypeStreamDatasource;
}
export interface ObjectTypeDatasourceDefinition_streamV2 {
	type: "streamV2";
	streamV2: ObjectTypeStreamDatasourceV2;
}
export interface ObjectTypeDatasourceDefinition_restrictedView {
	type: "restrictedView";
	restrictedView: ObjectTypeRestrictedViewDatasource;
}
export interface ObjectTypeDatasourceDefinition_timeSeries {
	type: "timeSeries";
	timeSeries: ObjectTypeTimeSeriesDatasource;
}
export interface ObjectTypeDatasourceDefinition_datasetV2 {
	type: "datasetV2";
	datasetV2: ObjectTypeDatasetDatasourceV2;
}
export interface ObjectTypeDatasourceDefinition_datasetV3 {
	type: "datasetV3";
	datasetV3: ObjectTypeDatasetDatasourceV3;
}
export interface ObjectTypeDatasourceDefinition_restrictedViewV2 {
	type: "restrictedViewV2";
	restrictedViewV2: ObjectTypeRestrictedViewDatasourceV2;
}
export interface ObjectTypeDatasourceDefinition_restrictedStream {
	type: "restrictedStream";
	restrictedStream: ObjectTypeRestrictedStreamDatasource;
}
export interface ObjectTypeDatasourceDefinition_media {
	type: "media";
	media: ObjectTypeMediaDatasource;
}
export interface ObjectTypeDatasourceDefinition_mediaSetView {
	type: "mediaSetView";
	mediaSetView: ObjectTypeMediaSetViewDatasource;
}
export interface ObjectTypeDatasourceDefinition_geotimeSeries {
	type: "geotimeSeries";
	geotimeSeries: ObjectTypeGeotimeSeriesDatasource;
}
export interface ObjectTypeDatasourceDefinition_table {
	type: "table";
	table: ObjectTypeTableDatasource;
}
export interface ObjectTypeDatasourceDefinition_editsOnly {
	type: "editsOnly";
	editsOnly: ObjectTypeEditsOnlyDatasource;
}
export interface ObjectTypeDatasourceDefinition_direct {
	type: "direct";
	direct: ObjectTypeDirectDatasource;
}
export interface ObjectTypeDatasourceDefinition_derived {
	type: "derived";
	derived: ObjectTypeDerivedPropertiesDatasource;
}
/**
* Wrapper type for all supported object type datasource types.
*/
export type ObjectTypeDatasourceDefinition = ObjectTypeDatasourceDefinition_dataset | ObjectTypeDatasourceDefinition_stream | ObjectTypeDatasourceDefinition_streamV2 | ObjectTypeDatasourceDefinition_restrictedView | ObjectTypeDatasourceDefinition_timeSeries | ObjectTypeDatasourceDefinition_datasetV2 | ObjectTypeDatasourceDefinition_datasetV3 | ObjectTypeDatasourceDefinition_restrictedViewV2 | ObjectTypeDatasourceDefinition_restrictedStream | ObjectTypeDatasourceDefinition_media | ObjectTypeDatasourceDefinition_mediaSetView | ObjectTypeDatasourceDefinition_geotimeSeries | ObjectTypeDatasourceDefinition_table | ObjectTypeDatasourceDefinition_editsOnly | ObjectTypeDatasourceDefinition_direct | ObjectTypeDatasourceDefinition_derived;
