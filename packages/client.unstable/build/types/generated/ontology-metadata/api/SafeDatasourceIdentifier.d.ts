import type { DatasetRid } from "./DatasetRid.js";
import type { DerivedPropertiesSourceRid } from "./DerivedPropertiesSourceRid.js";
import type { DirectSourceRid } from "./DirectSourceRid.js";
import type { EditsOnlyRid } from "./EditsOnlyRid.js";
import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
import type { MediaSetViewLocator } from "./MediaSetViewLocator.js";
import type { MediaSourceRid } from "./MediaSourceRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { StreamLocatorRid } from "./StreamLocatorRid.js";
import type { TableRid } from "./TableRid.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
export interface SafeDatasourceIdentifier_datasetRid {
	type: "datasetRid";
	datasetRid: DatasetRid;
}
export interface SafeDatasourceIdentifier_streamLocatorRid {
	type: "streamLocatorRid";
	streamLocatorRid: StreamLocatorRid;
}
export interface SafeDatasourceIdentifier_restrictedViewRid {
	type: "restrictedViewRid";
	restrictedViewRid: RestrictedViewRid;
}
export interface SafeDatasourceIdentifier_timeSeriesSyncRid {
	type: "timeSeriesSyncRid";
	timeSeriesSyncRid: TimeSeriesSyncRid;
}
export interface SafeDatasourceIdentifier_restrictedStream {
	type: "restrictedStream";
	restrictedStream: RestrictedViewRid;
}
export interface SafeDatasourceIdentifier_mediaSourceRids {
	type: "mediaSourceRids";
	mediaSourceRids: Array<MediaSourceRid>;
}
export interface SafeDatasourceIdentifier_mediaSetView {
	type: "mediaSetView";
	mediaSetView: MediaSetViewLocator;
}
export interface SafeDatasourceIdentifier_geotimeSeriesIntegrationRid {
	type: "geotimeSeriesIntegrationRid";
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}
export interface SafeDatasourceIdentifier_editsOnly {
	type: "editsOnly";
	editsOnly: EditsOnlyRid;
}
export interface SafeDatasourceIdentifier_directSourceRid {
	type: "directSourceRid";
	directSourceRid: DirectSourceRid;
}
export interface SafeDatasourceIdentifier_derivedPropertiesSourceRid {
	type: "derivedPropertiesSourceRid";
	derivedPropertiesSourceRid: DerivedPropertiesSourceRid;
}
export interface SafeDatasourceIdentifier_tableRid {
	type: "tableRid";
	tableRid: TableRid;
}
/**
* Union type representing safe parts of different datasource identifiers
*/
export type SafeDatasourceIdentifier = SafeDatasourceIdentifier_datasetRid | SafeDatasourceIdentifier_streamLocatorRid | SafeDatasourceIdentifier_restrictedViewRid | SafeDatasourceIdentifier_timeSeriesSyncRid | SafeDatasourceIdentifier_restrictedStream | SafeDatasourceIdentifier_mediaSourceRids | SafeDatasourceIdentifier_mediaSetView | SafeDatasourceIdentifier_geotimeSeriesIntegrationRid | SafeDatasourceIdentifier_editsOnly | SafeDatasourceIdentifier_directSourceRid | SafeDatasourceIdentifier_derivedPropertiesSourceRid | SafeDatasourceIdentifier_tableRid;
