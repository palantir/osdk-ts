import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";
/**
* Condition encoding a join between two Object Sets via a many to many Link Type. The equivalent SQL expression would be `objectSetA.objectSetAProperty = manyToMany.manyToManyAProperty AND manyToMany.manyToManyBProperty = objectSetB.objectSetBProperty`.
*/
export interface ManyToManyJoinCondition {
	objectSetA: ReferenceObjectSet;
	objectSetB: ReferenceObjectSet;
	objectSetAProperty: PropertyTypeRid;
	objectSetBProperty: PropertyTypeRid;
	manyToMany: LinkTypeRid;
	manyToManyAProperty: PropertyTypeRid;
	manyToManyBProperty: PropertyTypeRid;
}
