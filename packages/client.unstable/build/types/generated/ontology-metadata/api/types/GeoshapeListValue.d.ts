import type { Geoshape } from "./Geoshape.js";
/**
* A parameter value type that consists of a list of Geoshapes.
*/
export interface GeoshapeListValue {
	geoshapes: Array<Geoshape>;
}
