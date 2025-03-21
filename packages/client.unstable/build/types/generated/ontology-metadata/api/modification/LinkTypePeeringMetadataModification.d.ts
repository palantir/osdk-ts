import type { LinkTypePeeringMetadataV1 } from "../LinkTypePeeringMetadataV1.js";
import type { DropLinkTypePeeringMetadata } from "./DropLinkTypePeeringMetadata.js";
export interface LinkTypePeeringMetadataModification_drop {
	type: "drop";
	drop: DropLinkTypePeeringMetadata;
}
export interface LinkTypePeeringMetadataModification_v1 {
	type: "v1";
	v1: LinkTypePeeringMetadataV1;
}
export type LinkTypePeeringMetadataModification = LinkTypePeeringMetadataModification_drop | LinkTypePeeringMetadataModification_v1;
