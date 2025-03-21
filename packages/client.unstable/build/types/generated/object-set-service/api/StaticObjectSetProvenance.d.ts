import type { CustomProvenance } from "./CustomProvenance.js";
import type { MaterializationProvenance } from "./MaterializationProvenance.js";
export interface StaticObjectSetProvenance_materialization {
	type: "materialization";
	materialization: MaterializationProvenance;
}
export interface StaticObjectSetProvenance_custom {
	type: "custom";
	custom: CustomProvenance;
}
/**
* Describes the origin of the particular set of objects in a static object set.
*/
export type StaticObjectSetProvenance = StaticObjectSetProvenance_materialization | StaticObjectSetProvenance_custom;
