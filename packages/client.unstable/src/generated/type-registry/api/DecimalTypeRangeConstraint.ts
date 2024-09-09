/**/
import type { DecimalTypeDataValue } from "./DecimalTypeDataValue.js";
export interface DecimalTypeRangeConstraint {
min: DecimalTypeDataValue | undefined;
max: DecimalTypeDataValue | undefined;
}