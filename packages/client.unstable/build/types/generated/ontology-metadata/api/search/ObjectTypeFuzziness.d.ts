import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface ObjectTypeFuzziness_off {
	type: "off";
	off: FuzzinessOff;
}
export interface ObjectTypeFuzziness_auto {
	type: "auto";
	auto: FuzzinessAuto;
}
/**
* Fuzziness setting for `contains` FullTextStringPredicates.
*/
export type ObjectTypeFuzziness = ObjectTypeFuzziness_off | ObjectTypeFuzziness_auto;
