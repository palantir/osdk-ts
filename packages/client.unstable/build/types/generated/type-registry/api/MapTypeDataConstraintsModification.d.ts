import type { DataConstraintModification } from "./DataConstraintModification.js";
import type { MapUniqueValuesConstraint } from "./MapUniqueValuesConstraint.js";
export interface MapTypeDataConstraintsModification {
	keyTypeDataConstraints: Array<DataConstraintModification>;
	valueTypeDataConstraints: Array<DataConstraintModification>;
	uniqueValues: MapUniqueValuesConstraint | undefined;
}
