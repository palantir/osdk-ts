import type { MarkingSubtype } from "./MarkingSubtype.js";
export interface BaseParameterSubtype_marking {
	type: "marking";
	marking: MarkingSubtype;
}
/**
* Subtypes for Parameters that have additional type information.
*/
export type BaseParameterSubtype = BaseParameterSubtype_marking;
