import type { DatasetSecurityProvenanceInformation } from "./DatasetSecurityProvenanceInformation.js";
import type { ProvenanceRid } from "./ProvenanceRid.js";
import type { RestrictedViewSecurityProvenanceInformation } from "./RestrictedViewSecurityProvenanceInformation.js";
import type { StreamSecurityProvenanceInformation } from "./StreamSecurityProvenanceInformation.js";
import type { TimeSeriesSecurityProvenanceInformation } from "./TimeSeriesSecurityProvenanceInformation.js";
export interface ObjectTypeSecurityProvenanceInformation_dataset {
	type: "dataset";
	dataset: DatasetSecurityProvenanceInformation;
}
export interface ObjectTypeSecurityProvenanceInformation_restrictedView {
	type: "restrictedView";
	restrictedView: RestrictedViewSecurityProvenanceInformation;
}
export interface ObjectTypeSecurityProvenanceInformation_timeSeries {
	type: "timeSeries";
	timeSeries: TimeSeriesSecurityProvenanceInformation;
}
export interface ObjectTypeSecurityProvenanceInformation_stream {
	type: "stream";
	stream: StreamSecurityProvenanceInformation;
}
export interface ObjectTypeSecurityProvenanceInformation_rid {
	type: "rid";
	rid: ProvenanceRid;
}
/**
* Security provenance information for a resource backing an ObjectType.
*/
export type ObjectTypeSecurityProvenanceInformation = ObjectTypeSecurityProvenanceInformation_dataset | ObjectTypeSecurityProvenanceInformation_restrictedView | ObjectTypeSecurityProvenanceInformation_timeSeries | ObjectTypeSecurityProvenanceInformation_stream | ObjectTypeSecurityProvenanceInformation_rid;
