import type { LinkTypeMetadata } from "../LinkTypeMetadata.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { OneToManyLinkCardinalityHint } from "../OneToManyLinkCardinalityHint.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
export interface OneToManyLinkDefinitionModification {
	cardinalityHint: OneToManyLinkCardinalityHint;
	manyToOneLinkMetadata: LinkTypeMetadata;
	objectTypeIdManySide: ObjectTypeId;
	objectTypeIdOneSide: ObjectTypeId;
	oneToManyLinkMetadata: LinkTypeMetadata;
	oneSidePrimaryKeyToManySidePropertyMapping: Record<PropertyTypeId, PropertyTypeId>;
}
