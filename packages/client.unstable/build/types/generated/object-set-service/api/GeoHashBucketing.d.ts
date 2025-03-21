import type { BucketCountLimit } from "./BucketCountLimit.js";
import type { GeoHashPrecision } from "./GeoHashPrecision.js";
/**
* Bucketing into grid cells by a geohash property.
*/
export interface GeoHashBucketing {
	precision: GeoHashPrecision;
	maxBuckets: BucketCountLimit;
}
