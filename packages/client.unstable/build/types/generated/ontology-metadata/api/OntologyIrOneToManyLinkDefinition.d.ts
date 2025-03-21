import type { OntologyIrPropertyToPropertyMapping } from "./blockdata/OntologyIrPropertyToPropertyMapping.js";
import type { LinkTypeMetadata } from "./LinkTypeMetadata.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { OneToManyLinkCardinalityHint } from "./OneToManyLinkCardinalityHint.js";
export interface OntologyIrOneToManyLinkDefinition {
	cardinalityHint: OneToManyLinkCardinalityHint;
	manyToOneLinkMetadata: LinkTypeMetadata;
	objectTypeRidManySide: ObjectTypeApiName;
	objectTypeRidOneSide: ObjectTypeApiName;
	oneToManyLinkMetadata: LinkTypeMetadata;
	oneSidePrimaryKeyToManySidePropertyMapping: Array<OntologyIrPropertyToPropertyMapping>;
}
