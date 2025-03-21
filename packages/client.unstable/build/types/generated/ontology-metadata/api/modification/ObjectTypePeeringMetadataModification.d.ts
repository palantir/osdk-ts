import type { ObjectTypePeeringMetadataV1 } from "../ObjectTypePeeringMetadataV1.js";
import type { DropObjectTypePeeringMetadata } from "./DropObjectTypePeeringMetadata.js";
export interface ObjectTypePeeringMetadataModification_drop {
	type: "drop";
	drop: DropObjectTypePeeringMetadata;
}
export interface ObjectTypePeeringMetadataModification_v1 {
	type: "v1";
	v1: ObjectTypePeeringMetadataV1;
}
export type ObjectTypePeeringMetadataModification = ObjectTypePeeringMetadataModification_drop | ObjectTypePeeringMetadataModification_v1;
