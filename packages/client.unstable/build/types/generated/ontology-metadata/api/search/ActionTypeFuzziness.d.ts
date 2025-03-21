import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface ActionTypeFuzziness_off {
	type: "off";
	off: FuzzinessOff;
}
export interface ActionTypeFuzziness_auto {
	type: "auto";
	auto: FuzzinessAuto;
}
/**
* Fuzziness setting for `contains` FullTextStringPredicates.
*/
export type ActionTypeFuzziness = ActionTypeFuzziness_off | ActionTypeFuzziness_auto;
