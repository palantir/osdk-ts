import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
import type { ModificationType } from "./ModificationType.js";
export interface ModificationHistoryPageItemSummary {
	affectedObjectTypes: Record<ObjectTypeRid, ModificationType>;
	affectedLinkTypes: Record<LinkTypeRid, ModificationType>;
	affectedRuleSets: Record<RuleSetRid, ModificationType>;
	affectedActionTypes: Record<ActionTypeRid, ModificationType>;
	affectedSharedPropertyTypes: Record<SharedPropertyTypeRid, ModificationType>;
	affectedInterfaceTypes: Record<InterfaceTypeRid, ModificationType>;
	affectedObjectTypeEntityMetadatas: Record<ObjectTypeRid, ModificationType>;
	affectedLinkTypeEntityMetadatas: Record<LinkTypeRid, ModificationType>;
	affectedObjectTypeSchemaMigrations: Record<ObjectTypeRid, ModificationType>;
	affectedTypeGroups: Record<TypeGroupRid, ModificationType>;
}
