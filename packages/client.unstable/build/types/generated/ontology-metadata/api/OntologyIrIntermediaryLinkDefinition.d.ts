import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeMetadata } from "./LinkTypeMetadata.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
/**
* Represents a link between two ObjectTypes with an intermediary ObjectType acting as a bridge.
* This LinkType can be used to jump from ObjectType A to B without specifying two separate search-arounds.
* This LinkType can also be used to simulate a ManyToMany LinkType backed by an RV, or a ManyToMany LinkType
* with properties.
*
* If any special interaction is required on the intermediary ObjectType (for example filtering) the two
* connecting LinkTypes should be used instead.
*/
export interface OntologyIrIntermediaryLinkDefinition {
	objectTypeAToBLinkMetadata: LinkTypeMetadata;
	objectTypeBToALinkMetadata: LinkTypeMetadata;
	intermediaryObjectTypeRid: ObjectTypeApiName;
	objectTypeRidA: ObjectTypeApiName;
	objectTypeRidB: ObjectTypeApiName;
	aToIntermediaryLinkTypeRid: LinkTypeId;
	intermediaryToBLinkTypeRid: LinkTypeId;
}
