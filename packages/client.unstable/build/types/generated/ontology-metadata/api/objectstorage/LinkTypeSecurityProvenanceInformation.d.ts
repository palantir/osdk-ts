import type { DatasetSecurityProvenanceInformation } from "./DatasetSecurityProvenanceInformation.js";
import type { ProvenanceRid } from "./ProvenanceRid.js";
import type { RestrictedViewSecurityProvenanceInformation } from "./RestrictedViewSecurityProvenanceInformation.js";
export interface LinkTypeSecurityProvenanceInformation_dataset {
	type: "dataset";
	dataset: DatasetSecurityProvenanceInformation;
}
export interface LinkTypeSecurityProvenanceInformation_restrictedView {
	type: "restrictedView";
	restrictedView: RestrictedViewSecurityProvenanceInformation;
}
export interface LinkTypeSecurityProvenanceInformation_rid {
	type: "rid";
	rid: ProvenanceRid;
}
/**
* Security provenance information for a resource backing a LinkType.
*/
export type LinkTypeSecurityProvenanceInformation = LinkTypeSecurityProvenanceInformation_dataset | LinkTypeSecurityProvenanceInformation_restrictedView | LinkTypeSecurityProvenanceInformation_rid;
