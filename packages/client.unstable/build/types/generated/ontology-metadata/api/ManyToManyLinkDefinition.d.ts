import type { LinkTypeMetadata } from "./LinkTypeMetadata.js";
import type { LinkTypePeeringMetadata } from "./LinkTypePeeringMetadata.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
export interface ManyToManyLinkDefinition {
	objectTypeAToBLinkMetadata: LinkTypeMetadata;
	objectTypeBToALinkMetadata: LinkTypeMetadata;
	objectTypeRidA: ObjectTypeRid;
	objectTypeRidB: ObjectTypeRid;
	objectTypeAPrimaryKeyPropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
	objectTypeBPrimaryKeyPropertyMapping: Record<PropertyTypeRid, PropertyTypeRid>;
	peeringMetadata: LinkTypePeeringMetadata | undefined;
}
