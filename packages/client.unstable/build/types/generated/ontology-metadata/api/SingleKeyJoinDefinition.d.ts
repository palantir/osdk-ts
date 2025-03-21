import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyId } from "./PropertyId.js";
export interface SingleKeyJoinDefinition {
	primaryKeyObjectTypeId: ObjectTypeId;
	foreignKeyObjectTypeId: ObjectTypeId;
	foreignKeyPropertyId: PropertyId;
}
