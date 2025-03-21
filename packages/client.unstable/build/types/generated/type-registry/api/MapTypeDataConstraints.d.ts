import type { DataConstraint } from "./DataConstraint.js";
import type { MapUniqueValuesConstraint } from "./MapUniqueValuesConstraint.js";
export interface MapTypeDataConstraints {
	keyTypeDataConstraints: Array<DataConstraint>;
	valueTypeDataConstraints: Array<DataConstraint>;
	uniqueValues: MapUniqueValuesConstraint | undefined;
}
