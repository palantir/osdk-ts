import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface TypeGroupFuzziness_off {
	type: "off";
	off: FuzzinessOff;
}
export interface TypeGroupFuzziness_auto {
	type: "auto";
	auto: FuzzinessAuto;
}
/**
* Fuzziness setting for `contains` FullTextStringPredicates.
*/
export type TypeGroupFuzziness = TypeGroupFuzziness_off | TypeGroupFuzziness_auto;
