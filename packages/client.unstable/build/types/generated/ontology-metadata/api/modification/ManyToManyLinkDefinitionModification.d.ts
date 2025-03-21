import type { LinkTypeMetadata } from "../LinkTypeMetadata.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { LinkTypePeeringMetadataModification } from "./LinkTypePeeringMetadataModification.js";
export interface ManyToManyLinkDefinitionModification {
	objectTypeAToBLinkMetadata: LinkTypeMetadata;
	objectTypeBToALinkMetadata: LinkTypeMetadata;
	objectTypeIdA: ObjectTypeId;
	objectTypeIdB: ObjectTypeId;
	peeringMetadata: LinkTypePeeringMetadataModification | undefined;
}
