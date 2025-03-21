/**
* A parameter value type that consists of a list of Geohashes. Only WGS-84 coordinates are supported.
*/
export interface GeohashListValue {
	geohashes: Array<string>;
}
