import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface SharedPropertyTypeFuzziness_off {
	type: "off";
	off: FuzzinessOff;
}
export interface SharedPropertyTypeFuzziness_auto {
	type: "auto";
	auto: FuzzinessAuto;
}
/**
* Fuzziness setting for `contains` FullTextStringPredicates.
*/
export type SharedPropertyTypeFuzziness = SharedPropertyTypeFuzziness_off | SharedPropertyTypeFuzziness_auto;
