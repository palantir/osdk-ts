import type { ObjectRid } from "./ObjectRid.js";
import type { StaticObjectSetProvenance } from "./StaticObjectSetProvenance.js";
/**
* Object Set containing objects with given ObjectRids.
*/
export interface StaticObjectSet {
	objectRids: Array<ObjectRid>;
	provenance: StaticObjectSetProvenance | undefined;
}
