import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";
/**
* Summary of the conflicting entities. Conflicting entities are calculated by finding the intersection of entities that are updated/deleted on a branch and entities that are updated/deleted on the default branch between the latestRebasedVersion and a target ontologyVersion.
*/
export interface ConflictingEntitiesSummary {
	objectTypes: Array<ObjectTypeRid>;
	objectTypeEntityMetadatas: Array<ObjectTypeRid>;
	objectTypeSchemaMigrations: Array<ObjectTypeRid>;
	linkTypes: Array<LinkTypeRid>;
	linkTypeEntityMetadatas: Array<LinkTypeRid>;
	actionTypes: Array<ActionTypeRid>;
	sharedPropertyTypes: Array<SharedPropertyTypeRid>;
	interfaceTypes: Array<InterfaceTypeRid>;
	typeGroups: Array<TypeGroupRid>;
	ruleSets: Array<RuleSetRid>;
}
