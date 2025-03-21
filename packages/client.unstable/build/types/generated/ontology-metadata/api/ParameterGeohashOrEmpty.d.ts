import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterGeohash } from "./ParameterGeohash.js";
export interface ParameterGeohashOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterGeohashOrEmpty_geohash {
	type: "geohash";
	geohash: ParameterGeohash;
}
export type ParameterGeohashOrEmpty = ParameterGeohashOrEmpty_empty | ParameterGeohashOrEmpty_geohash;
