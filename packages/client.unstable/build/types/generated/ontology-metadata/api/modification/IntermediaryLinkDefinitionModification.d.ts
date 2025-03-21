import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeMetadata } from "../LinkTypeMetadata.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
/**
* Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
* This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
* This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
* with properties.
*/
export interface IntermediaryLinkDefinitionModification {
	objectTypeAToBLinkMetadata: LinkTypeMetadata;
	objectTypeBToALinkMetadata: LinkTypeMetadata;
	intermediaryObjectTypeId: ObjectTypeId;
	objectTypeIdA: ObjectTypeId;
	objectTypeIdB: ObjectTypeId;
	aToIntermediaryLinkTypeId: LinkTypeId;
	intermediaryToBLinkTypeId: LinkTypeId;
}
