import type { OntologyIrParameterDateTimeRangeOrEmpty } from "./OntologyIrParameterDateTimeRangeOrEmpty.js";
import type { OntologyIrParameterRangeOrEmpty } from "./OntologyIrParameterRangeOrEmpty.js";
import type { OntologyIrParameterValueOneOfOrEmpty } from "./OntologyIrParameterValueOneOfOrEmpty.js";
import type { ParameterBooleanOrEmpty } from "./ParameterBooleanOrEmpty.js";
import type { ParameterFreeTextOrEmpty } from "./ParameterFreeTextOrEmpty.js";
import type { ParameterGeohashOrEmpty } from "./ParameterGeohashOrEmpty.js";
export interface OntologyIrAllowedStructFieldValues_oneOf {
	type: "oneOf";
	oneOf: OntologyIrParameterValueOneOfOrEmpty;
}
export interface OntologyIrAllowedStructFieldValues_range {
	type: "range";
	range: OntologyIrParameterRangeOrEmpty;
}
export interface OntologyIrAllowedStructFieldValues_text {
	type: "text";
	text: ParameterFreeTextOrEmpty;
}
export interface OntologyIrAllowedStructFieldValues_datetime {
	type: "datetime";
	datetime: OntologyIrParameterDateTimeRangeOrEmpty;
}
export interface OntologyIrAllowedStructFieldValues_boolean {
	type: "boolean";
	boolean: ParameterBooleanOrEmpty;
}
export interface OntologyIrAllowedStructFieldValues_geohash {
	type: "geohash";
	geohash: ParameterGeohashOrEmpty;
}
export type OntologyIrAllowedStructFieldValues = OntologyIrAllowedStructFieldValues_oneOf | OntologyIrAllowedStructFieldValues_range | OntologyIrAllowedStructFieldValues_text | OntologyIrAllowedStructFieldValues_datetime | OntologyIrAllowedStructFieldValues_boolean | OntologyIrAllowedStructFieldValues_geohash;
