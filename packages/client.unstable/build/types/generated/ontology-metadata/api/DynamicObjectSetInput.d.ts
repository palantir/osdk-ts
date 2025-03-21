import type { DynamicObjectSetInputBase } from "./DynamicObjectSetInputBase.js";
import type { DynamicObjectSetInputParameter } from "./DynamicObjectSetInputParameter.js";
import type { DynamicObjectSetInputUnioned } from "./DynamicObjectSetInputUnioned.js";
export interface DynamicObjectSetInput_base {
	type: "base";
	base: DynamicObjectSetInputBase;
}
export interface DynamicObjectSetInput_parameter {
	type: "parameter";
	parameter: DynamicObjectSetInputParameter;
}
export interface DynamicObjectSetInput_unioned {
	type: "unioned";
	unioned: DynamicObjectSetInputUnioned;
}
/**
* A wrapper used to reference an ObjectSet
*/
export type DynamicObjectSetInput = DynamicObjectSetInput_base | DynamicObjectSetInput_parameter | DynamicObjectSetInput_unioned;
