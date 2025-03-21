import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { CombinedModificationType } from "./CombinedModificationType.js";
/**
* Summary of ObjectTypes and LinkTypes affected by the modification.
* ObjectTypes and LinkTypes will be listed if one or more of the following applies:
* - The ObjectType/LinkType was created, updated or deleted
* - The associated ObjectTypeEntityMetadata/LinkTypeEntityMetadata was updated
* - The associated ObjectTypeSystemEntityMetadata/LinkTypeSystemEntityMetadata was updated.
*/
export interface CombinedOntologyHistoryPageItemSummary {
	affectedObjectTypes: Record<ObjectTypeRid, CombinedModificationType>;
	affectedLinkTypes: Record<LinkTypeRid, CombinedModificationType>;
}
