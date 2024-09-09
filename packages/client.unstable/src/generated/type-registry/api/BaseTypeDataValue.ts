/**/
import type { ArrayTypeDataValue } from "./ArrayTypeDataValue.js";
import type { BooleanTypeDataValue } from "./BooleanTypeDataValue.js";
import type { BinaryTypeDataValue } from "./BinaryTypeDataValue.js";
import type { ByteTypeDataValue } from "./ByteTypeDataValue.js";
import type { DateTypeDataValue } from "./DateTypeDataValue.js";
import type { DecimalTypeDataValue } from "./DecimalTypeDataValue.js";
import type { DoubleTypeDataValue } from "./DoubleTypeDataValue.js";
import type { FloatTypeDataValue } from "./FloatTypeDataValue.js";
import type { IntegerTypeDataValue } from "./IntegerTypeDataValue.js";
import type { LongTypeDataValue } from "./LongTypeDataValue.js";
import type { MapTypeDataValue } from "./MapTypeDataValue.js";
import type { OptionalTypeDataValue } from "./OptionalTypeDataValue.js";
import type { ShortTypeDataValue } from "./ShortTypeDataValue.js";
import type { StringTypeDataValue } from "./StringTypeDataValue.js";
import type { StructTypeDataValue } from "./StructTypeDataValue.js";
import type { TimestampTypeDataValue } from "./TimestampTypeDataValue.js";
export interface BaseTypeDataValue_array {
type: "array";
array: ArrayTypeDataValue
}

export interface BaseTypeDataValue_boolean {
type: "boolean";
boolean: BooleanTypeDataValue
}

export interface BaseTypeDataValue_binary {
type: "binary";
binary: BinaryTypeDataValue
}

export interface BaseTypeDataValue_byte {
type: "byte";
byte: ByteTypeDataValue
}

export interface BaseTypeDataValue_date {
type: "date";
date: DateTypeDataValue
}

export interface BaseTypeDataValue_decimal {
type: "decimal";
decimal: DecimalTypeDataValue
}

export interface BaseTypeDataValue_double {
type: "double";
double: DoubleTypeDataValue
}

export interface BaseTypeDataValue_float {
type: "float";
float: FloatTypeDataValue
}

export interface BaseTypeDataValue_integer {
type: "integer";
integer: IntegerTypeDataValue
}

export interface BaseTypeDataValue_long {
type: "long";
long: LongTypeDataValue
}

export interface BaseTypeDataValue_map {
type: "map";
map: MapTypeDataValue
}

export interface BaseTypeDataValue_optional {
type: "optional";
optional: OptionalTypeDataValue
}

export interface BaseTypeDataValue_short {
type: "short";
short: ShortTypeDataValue
}

export interface BaseTypeDataValue_string {
type: "string";
string: StringTypeDataValue
}

export interface BaseTypeDataValue_struct {
type: "struct";
struct: StructTypeDataValue
}

export interface BaseTypeDataValue_timestamp {
type: "timestamp";
timestamp: TimestampTypeDataValue
}
/**
 * Data values representation of the base types. Used for defining the actual data constraints and to represent
 * actual data values.
 */
export type BaseTypeDataValue = BaseTypeDataValue_array | BaseTypeDataValue_boolean | BaseTypeDataValue_binary | BaseTypeDataValue_byte | BaseTypeDataValue_date | BaseTypeDataValue_decimal | BaseTypeDataValue_double | BaseTypeDataValue_float | BaseTypeDataValue_integer | BaseTypeDataValue_long | BaseTypeDataValue_map | BaseTypeDataValue_optional | BaseTypeDataValue_short | BaseTypeDataValue_string | BaseTypeDataValue_struct | BaseTypeDataValue_timestamp