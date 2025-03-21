import type { DatasetRidAndBranchId } from "./DatasetRidAndBranchId.js";
import type { DerivedPropertiesSourceRid } from "./DerivedPropertiesSourceRid.js";
import type { DirectSourceRid } from "./DirectSourceRid.js";
import type { EditsOnlyRid } from "./EditsOnlyRid.js";
import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
import type { MediaSetViewLocator } from "./MediaSetViewLocator.js";
import type { MediaSourceRid } from "./MediaSourceRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { StreamLocator } from "./StreamLocator.js";
import type { TableLocator } from "./TableLocator.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
export interface DatasourceIdentifier_datasetRidAndBranchId {
	type: "datasetRidAndBranchId";
	datasetRidAndBranchId: DatasetRidAndBranchId;
}
export interface DatasourceIdentifier_streamLocator {
	type: "streamLocator";
	streamLocator: StreamLocator;
}
export interface DatasourceIdentifier_restrictedViewRid {
	type: "restrictedViewRid";
	restrictedViewRid: RestrictedViewRid;
}
export interface DatasourceIdentifier_timeSeriesSyncRid {
	type: "timeSeriesSyncRid";
	timeSeriesSyncRid: TimeSeriesSyncRid;
}
export interface DatasourceIdentifier_restrictedStream {
	type: "restrictedStream";
	restrictedStream: RestrictedViewRid;
}
export interface DatasourceIdentifier_mediaSourceRids {
	type: "mediaSourceRids";
	mediaSourceRids: Array<MediaSourceRid>;
}
export interface DatasourceIdentifier_mediaSetView {
	type: "mediaSetView";
	mediaSetView: MediaSetViewLocator;
}
export interface DatasourceIdentifier_geotimeSeriesIntegrationRid {
	type: "geotimeSeriesIntegrationRid";
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
export interface DatasourceIdentifier_table {
	type: "table";
	table: TableLocator;
}
export interface DatasourceIdentifier_editsOnly {
	type: "editsOnly";
	editsOnly: EditsOnlyRid;
}
export interface DatasourceIdentifier_directSourceRid {
	type: "directSourceRid";
	directSourceRid: DirectSourceRid;
}
export interface DatasourceIdentifier_derivedPropertiesSourceRid {
	type: "derivedPropertiesSourceRid";
	derivedPropertiesSourceRid: DerivedPropertiesSourceRid;
}
/**
* Union type to represent the different datasource identifiers
*/
export type DatasourceIdentifier = DatasourceIdentifier_datasetRidAndBranchId | DatasourceIdentifier_streamLocator | DatasourceIdentifier_restrictedViewRid | DatasourceIdentifier_timeSeriesSyncRid | DatasourceIdentifier_restrictedStream | DatasourceIdentifier_mediaSourceRids | DatasourceIdentifier_mediaSetView | DatasourceIdentifier_geotimeSeriesIntegrationRid | DatasourceIdentifier_table | DatasourceIdentifier_editsOnly | DatasourceIdentifier_directSourceRid | DatasourceIdentifier_derivedPropertiesSourceRid;
