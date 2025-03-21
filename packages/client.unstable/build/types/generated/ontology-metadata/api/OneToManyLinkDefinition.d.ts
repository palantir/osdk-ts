import type { LinkTypeMetadata } from "./LinkTypeMetadata.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OneToManyLinkCardinalityHint } from "./OneToManyLinkCardinalityHint.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
export interface OneToManyLinkDefinition {
	cardinalityHint: OneToManyLinkCardinalityHint;
	manyToOneLinkMetadata: LinkTypeMetadata;
	objectTypeRidManySide: ObjectTypeRid;
	objectTypeRidOneSide: ObjectTypeRid;
	oneToManyLinkMetadata: LinkTypeMetadata;
	oneSidePrimaryKeyToManySidePropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
}
