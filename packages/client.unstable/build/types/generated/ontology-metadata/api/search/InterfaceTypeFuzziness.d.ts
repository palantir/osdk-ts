import type { FuzzinessAuto } from "./FuzzinessAuto.js";
import type { FuzzinessOff } from "./FuzzinessOff.js";
export interface InterfaceTypeFuzziness_off {
	type: "off";
	off: FuzzinessOff;
}
export interface InterfaceTypeFuzziness_auto {
	type: "auto";
	auto: FuzzinessAuto;
}
/**
* Fuzziness setting for `contains` FullTextStringPredicates.
*/
export type InterfaceTypeFuzziness = InterfaceTypeFuzziness_off | InterfaceTypeFuzziness_auto;
