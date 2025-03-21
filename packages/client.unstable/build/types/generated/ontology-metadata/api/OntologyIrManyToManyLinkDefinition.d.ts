import type { OntologyIrPropertyToPropertyMapping } from "./blockdata/OntologyIrPropertyToPropertyMapping.js";
import type { LinkTypeMetadata } from "./LinkTypeMetadata.js";
import type { LinkTypePeeringMetadata } from "./LinkTypePeeringMetadata.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
export interface OntologyIrManyToManyLinkDefinition {
	objectTypeAToBLinkMetadata: LinkTypeMetadata;
	objectTypeBToALinkMetadata: LinkTypeMetadata;
	objectTypeRidA: ObjectTypeApiName;
	objectTypeRidB: ObjectTypeApiName;
	peeringMetadata: LinkTypePeeringMetadata | undefined;
	objectTypeAPrimaryKeyPropertyMapping: Array<OntologyIrPropertyToPropertyMapping>;
	objectTypeBPrimaryKeyPropertyMapping: Array<OntologyIrPropertyToPropertyMapping>;
}
