import type { ExpectedGeoHashBaseType } from "./ExpectedGeoHashBaseType.js";
import type { ExpectedStringBaseType } from "./ExpectedStringBaseType.js";
import type { ExpectedTimestampBaseType } from "./ExpectedTimestampBaseType.js";
export interface GothamIntrinsicExpectedBaseType_timestamp {
	type: "timestamp";
	timestamp: ExpectedTimestampBaseType;
}
export interface GothamIntrinsicExpectedBaseType_geoHash {
	type: "geoHash";
	geoHash: ExpectedGeoHashBaseType;
}
export interface GothamIntrinsicExpectedBaseType_string {
	type: "string";
	string: ExpectedStringBaseType;
}
export type GothamIntrinsicExpectedBaseType = GothamIntrinsicExpectedBaseType_timestamp | GothamIntrinsicExpectedBaseType_geoHash | GothamIntrinsicExpectedBaseType_string;
