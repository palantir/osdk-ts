import type { ActionLogValueModification } from "./ActionLogValueModification.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Users can optionally configure an ActionLogicRule for their ActionType that defines how Action parameters and
* their properties should be mapped to properties of their Action Log Object Type.
*/
export interface ActionLogRuleModification {
	actionLogObjectTypeId: ObjectTypeId;
	propertyValues: Record<PropertyTypeId, ActionLogValueModification>;
	reasonCodes: Array<PropertyTypeId>;
	editedObjectRelations: Record<ObjectTypeId, LinkTypeId>;
	enabled: boolean;
}
