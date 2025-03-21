import type { DateBucketing } from "./DateBucketing.js";
import type { GeoHashBucketing } from "./GeoHashBucketing.js";
import type { NumericBucketing } from "./NumericBucketing.js";
import type { StringBucketing } from "./StringBucketing.js";
export interface Bucketing_exactValue {
	type: "exactValue";
	exactValue: StringBucketing;
}
export interface Bucketing_keywords {
	type: "keywords";
	keywords: StringBucketing;
}
export interface Bucketing_geoHash {
	type: "geoHash";
	geoHash: GeoHashBucketing;
}
export interface Bucketing_numeric {
	type: "numeric";
	numeric: NumericBucketing;
}
export interface Bucketing_date {
	type: "date";
	date: DateBucketing;
}
/**
* How to assign values of a property into buckets.
*/
export type Bucketing = Bucketing_exactValue | Bucketing_keywords | Bucketing_geoHash | Bucketing_numeric | Bucketing_date;
