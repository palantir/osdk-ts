import type { RelationCardinality } from "../../api/RelationCardinality.js";
import type { LinkTypeArchetypeDescription } from "./LinkTypeArchetypeDescription.js";
import type { LinkTypeArchetypeDisplayName } from "./LinkTypeArchetypeDisplayName.js";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";
/**
* This is used in `WorkflowArchetype` to represent an identifier to which an `LinkType` will be associated to in a `Workflow` definition.
*/
export interface LinkTypeArchetype {
	id: LinkTypeArchetypeId;
	displayName: LinkTypeArchetypeDisplayName;
	description: LinkTypeArchetypeDescription;
	fromObjectType: ObjectTypeArchetypeId;
	toObjectType: ObjectTypeArchetypeId;
	relationCardinality: RelationCardinality | undefined;
	requiredIfObjectTypeArchetypesDefined: boolean;
}
