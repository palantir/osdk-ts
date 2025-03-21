import type { IntegerTypeDataValue } from "./IntegerTypeDataValue.js";
export interface IntegerTypeRangeConstraint {
	min: IntegerTypeDataValue | undefined;
	max: IntegerTypeDataValue | undefined;
}
