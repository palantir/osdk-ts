import type { BooleanType } from "./BooleanType.js";
import type { DateType } from "./DateType.js";
import type { DoubleType } from "./DoubleType.js";
import type { GeohashType } from "./GeohashType.js";
import type { IntegerType } from "./IntegerType.js";
import type { LongType } from "./LongType.js";
import type { StringType } from "./StringType.js";
import type { TimestampType } from "./TimestampType.js";
export interface StructFieldBaseParameterType_boolean {
	type: "boolean";
	boolean: BooleanType;
}
export interface StructFieldBaseParameterType_integer {
	type: "integer";
	integer: IntegerType;
}
export interface StructFieldBaseParameterType_long {
	type: "long";
	long: LongType;
}
export interface StructFieldBaseParameterType_double {
	type: "double";
	double: DoubleType;
}
export interface StructFieldBaseParameterType_string {
	type: "string";
	string: StringType;
}
export interface StructFieldBaseParameterType_geohash {
	type: "geohash";
	geohash: GeohashType;
}
export interface StructFieldBaseParameterType_timestamp {
	type: "timestamp";
	timestamp: TimestampType;
}
export interface StructFieldBaseParameterType_date {
	type: "date";
	date: DateType;
}
/**
* All of the possible types for fields of a Struct Parameter. This should be the intersection of allowed struct
* property field types (https://www.palantir.com/docs/foundry/object-link-types/structs-overview/), and the
* inhabitants of the BaseParameterType union.
*/
export type StructFieldBaseParameterType = StructFieldBaseParameterType_boolean | StructFieldBaseParameterType_integer | StructFieldBaseParameterType_long | StructFieldBaseParameterType_double | StructFieldBaseParameterType_string | StructFieldBaseParameterType_geohash | StructFieldBaseParameterType_timestamp | StructFieldBaseParameterType_date;
