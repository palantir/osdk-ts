import type { BooleanValue } from "./BooleanValue.js";
import type { DateValue } from "./DateValue.js";
import type { DoubleValue } from "./DoubleValue.js";
import type { GeohashValue } from "./GeohashValue.js";
import type { IntegerValue } from "./IntegerValue.js";
import type { LongValue } from "./LongValue.js";
import type { NullValue } from "./NullValue.js";
import type { StringValue } from "./StringValue.js";
import type { TimestampValue } from "./TimestampValue.js";
export interface StructFieldDataValue_boolean {
	type: "boolean";
	boolean: BooleanValue;
}
export interface StructFieldDataValue_integer {
	type: "integer";
	integer: IntegerValue;
}
export interface StructFieldDataValue_long {
	type: "long";
	long: LongValue;
}
export interface StructFieldDataValue_double {
	type: "double";
	double: DoubleValue;
}
export interface StructFieldDataValue_string {
	type: "string";
	string: StringValue;
}
export interface StructFieldDataValue_date {
	type: "date";
	date: DateValue;
}
export interface StructFieldDataValue_geohash {
	type: "geohash";
	geohash: GeohashValue;
}
export interface StructFieldDataValue_timestamp {
	type: "timestamp";
	timestamp: TimestampValue;
}
export interface StructFieldDataValue_null {
	type: "null";
	null: NullValue;
}
/**
* DataValue types that are allowed as struct parameter field. Each struct field in a struct parameter is mapped
* mapped to a StructFieldDataValue. See StructFieldBaseParameterType for which types are supported for struct
* parameter fields.
*/
export type StructFieldDataValue = StructFieldDataValue_boolean | StructFieldDataValue_integer | StructFieldDataValue_long | StructFieldDataValue_double | StructFieldDataValue_string | StructFieldDataValue_date | StructFieldDataValue_geohash | StructFieldDataValue_timestamp | StructFieldDataValue_null;
