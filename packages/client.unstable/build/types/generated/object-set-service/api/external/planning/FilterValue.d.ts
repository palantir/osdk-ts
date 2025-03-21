import type { BooleanFilterValue } from "../../BooleanFilterValue.js";
import type { DateFilterValue } from "../../DateFilterValue.js";
import type { DecimalFilterValue } from "../../DecimalFilterValue.js";
import type { DoubleFilterValue } from "../../DoubleFilterValue.js";
import type { GeoPointFilterValue } from "../../GeoPointFilterValue.js";
import type { GeoShapeFilterValue } from "../../GeoShapeFilterValue.js";
import type { IntegerFilterValue } from "../../IntegerFilterValue.js";
import type { LongFilterValue } from "../../LongFilterValue.js";
import type { StringFilterValue } from "../../StringFilterValue.js";
import type { TimestampFilterValue } from "../../TimestampFilterValue.js";
export interface FilterValue_string {
	type: "string";
	string: StringFilterValue;
}
export interface FilterValue_integer {
	type: "integer";
	integer: IntegerFilterValue;
}
export interface FilterValue_long {
	type: "long";
	long: LongFilterValue;
}
export interface FilterValue_double {
	type: "double";
	double: DoubleFilterValue;
}
export interface FilterValue_decimal {
	type: "decimal";
	decimal: DecimalFilterValue;
}
export interface FilterValue_boolean {
	type: "boolean";
	boolean: BooleanFilterValue;
}
export interface FilterValue_date {
	type: "date";
	date: DateFilterValue;
}
export interface FilterValue_timestamp {
	type: "timestamp";
	timestamp: TimestampFilterValue;
}
export interface FilterValue_geoPoint {
	type: "geoPoint";
	geoPoint: GeoPointFilterValue;
}
export interface FilterValue_geoShape {
	type: "geoShape";
	geoShape: GeoShapeFilterValue;
}
/**
* The value on a filter.
*/
export type FilterValue = FilterValue_string | FilterValue_integer | FilterValue_long | FilterValue_double | FilterValue_decimal | FilterValue_boolean | FilterValue_date | FilterValue_timestamp | FilterValue_geoPoint | FilterValue_geoShape;
