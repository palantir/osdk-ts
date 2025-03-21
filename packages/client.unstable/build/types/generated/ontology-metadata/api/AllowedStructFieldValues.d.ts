import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterDateTimeRangeOrEmpty } from "./ParameterDateTimeRangeOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
import type { ParameterRangeOrEmpty } from "./ParameterRangeOrEmpty.js";
import type { ParameterValueOneOfOrEmpty } from "./ParameterValueOneOfOrEmpty.js";
export interface AllowedStructFieldValues_oneOf {
	type: "oneOf";
	oneOf: ParameterValueOneOfOrEmpty;
}
export interface AllowedStructFieldValues_range {
	type: "range";
	range: ParameterRangeOrEmpty;
}
export interface AllowedStructFieldValues_text {
	type: "text";
	text: ParameterFreeTextOrEmpty;
}
export interface AllowedStructFieldValues_datetime {
	type: "datetime";
	datetime: ParameterDateTimeRangeOrEmpty;
}
export interface AllowedStructFieldValues_boolean {
	type: "boolean";
	boolean: ParameterBooleanOrEmpty;
}
export interface AllowedStructFieldValues_geohash {
	type: "geohash";
	geohash: ParameterGeohashOrEmpty;
}
export type AllowedStructFieldValues = AllowedStructFieldValues_oneOf | AllowedStructFieldValues_range | AllowedStructFieldValues_text | AllowedStructFieldValues_datetime | AllowedStructFieldValues_boolean | AllowedStructFieldValues_geohash;
