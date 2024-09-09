/**/
import type { ArrayTypeDataConstraintsModification } from "./ArrayTypeDataConstraintsModification.js";
import type { BooleanTypeDataConstraints } from "./BooleanTypeDataConstraints.js";
import type { BinaryTypeDataConstraints } from "./BinaryTypeDataConstraints.js";
import type { DateTypeDataConstraints } from "./DateTypeDataConstraints.js";
import type { DecimalTypeDataConstraints } from "./DecimalTypeDataConstraints.js";
import type { DoubleTypeDataConstraints } from "./DoubleTypeDataConstraints.js";
import type { FloatTypeDataConstraints } from "./FloatTypeDataConstraints.js";
import type { IntegerTypeDataConstraints } from "./IntegerTypeDataConstraints.js";
import type { LongTypeDataConstraints } from "./LongTypeDataConstraints.js";
import type { MapTypeDataConstraintsModification } from "./MapTypeDataConstraintsModification.js";
import type { NullableDataConstraint } from "./NullableDataConstraint.js";
import type { ShortTypeDataConstraints } from "./ShortTypeDataConstraints.js";
import type { StringTypeDataConstraints } from "./StringTypeDataConstraints.js";
import type { StructTypeDataConstraintsModification } from "./StructTypeDataConstraintsModification.js";
import type { StructTypeV2DataConstraintsModification } from "./StructTypeV2DataConstraintsModification.js";
import type { TimestampTypeDataConstraints } from "./TimestampTypeDataConstraints.js";
export interface DataConstraintModification_array {
type: "array";
array: ArrayTypeDataConstraintsModification
}

export interface DataConstraintModification_boolean {
type: "boolean";
boolean: BooleanTypeDataConstraints
}

export interface DataConstraintModification_binary {
type: "binary";
binary: BinaryTypeDataConstraints
}

export interface DataConstraintModification_date {
type: "date";
date: DateTypeDataConstraints
}

export interface DataConstraintModification_decimal {
type: "decimal";
decimal: DecimalTypeDataConstraints
}

export interface DataConstraintModification_double {
type: "double";
double: DoubleTypeDataConstraints
}

export interface DataConstraintModification_float {
type: "float";
float: FloatTypeDataConstraints
}

export interface DataConstraintModification_integer {
type: "integer";
integer: IntegerTypeDataConstraints
}

export interface DataConstraintModification_long {
type: "long";
long: LongTypeDataConstraints
}

export interface DataConstraintModification_map {
type: "map";
map: MapTypeDataConstraintsModification
}

export interface DataConstraintModification_nullable {
type: "nullable";
nullable: NullableDataConstraint
}

export interface DataConstraintModification_short {
type: "short";
short: ShortTypeDataConstraints
}

export interface DataConstraintModification_string {
type: "string";
string: StringTypeDataConstraints
}

export interface DataConstraintModification_struct {
type: "struct";
struct: StructTypeDataConstraintsModification
}

export interface DataConstraintModification_structV2 {
type: "structV2";
structV2: StructTypeV2DataConstraintsModification
}

export interface DataConstraintModification_timestamp {
type: "timestamp";
timestamp: TimestampTypeDataConstraints
}
/**
 * A copy of DataConstraint made to decouple the storage and request types for Value Type data
 * constraint representation. At the moment, the only difference between the types is for StructV2.
 */
export type DataConstraintModification = DataConstraintModification_array | DataConstraintModification_boolean | DataConstraintModification_binary | DataConstraintModification_date | DataConstraintModification_decimal | DataConstraintModification_double | DataConstraintModification_float | DataConstraintModification_integer | DataConstraintModification_long | DataConstraintModification_map | DataConstraintModification_nullable | DataConstraintModification_short | DataConstraintModification_string | DataConstraintModification_struct | DataConstraintModification_structV2 | DataConstraintModification_timestamp