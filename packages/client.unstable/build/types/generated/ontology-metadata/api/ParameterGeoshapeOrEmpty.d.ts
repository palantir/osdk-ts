import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterGeoshape } from "./ParameterGeoshape.js";
export interface ParameterGeoshapeOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterGeoshapeOrEmpty_geoshape {
	type: "geoshape";
	geoshape: ParameterGeoshape;
}
export type ParameterGeoshapeOrEmpty = ParameterGeoshapeOrEmpty_empty | ParameterGeoshapeOrEmpty_geoshape;
