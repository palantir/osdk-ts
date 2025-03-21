import type { MaxEditDistance } from "./MaxEditDistance.js";
/**
* Parameters used to control fuzzy searching.
*/
export interface Fuzziness {
	maxEditDistance: MaxEditDistance;
}
