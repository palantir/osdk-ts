import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterDateTimeRangeOrEmptyModification } from "./ParameterDateTimeRangeOrEmptyModification.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterRangeOrEmptyModification } from "./ParameterRangeOrEmptyModification.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
export interface AllowedStructFieldValuesModification_oneOf {
	type: "oneOf";
	oneOf: ParameterValueOneOfOrEmpty;
}
export interface AllowedStructFieldValuesModification_range {
	type: "range";
	range: ParameterRangeOrEmptyModification;
}
export interface AllowedStructFieldValuesModification_text {
	type: "text";
	text: ParameterFreeTextOrEmpty;
}
export interface AllowedStructFieldValuesModification_datetime {
	type: "datetime";
	datetime: ParameterDateTimeRangeOrEmptyModification;
}
export interface AllowedStructFieldValuesModification_boolean {
	type: "boolean";
	boolean: ParameterBooleanOrEmpty;
}
export interface AllowedStructFieldValuesModification_geohash {
	type: "geohash";
	geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValuesModification = AllowedStructFieldValuesModification_oneOf | AllowedStructFieldValuesModification_range | AllowedStructFieldValuesModification_text | AllowedStructFieldValuesModification_datetime | AllowedStructFieldValuesModification_boolean | AllowedStructFieldValuesModification_geohash;
