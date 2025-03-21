import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";
/**
* Condition encoding a join between two Object Sets. The equivalent SQL expression would be `leftObjectSet.leftProperty = rightObjectSet.rightProperty`.
*/
export interface ObjectTypeJoinCondition {
	leftObjectSet: ReferenceObjectSet;
	leftProperty: PropertyTypeRid;
	rightObjectSet: ReferenceObjectSet;
	rightProperty: PropertyTypeRid;
}
