import type { InterfaceLinkTypeCardinality } from "./InterfaceLinkTypeCardinality.js";
import type { InterfaceLinkTypeMetadata } from "./InterfaceLinkTypeMetadata.js";
import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid.js";
import type { LinkedEntityTypeId } from "./LinkedEntityTypeId.js";
export interface InterfaceLinkType {
	rid: InterfaceLinkTypeRid;
	metadata: InterfaceLinkTypeMetadata;
	linkedEntityTypeId: LinkedEntityTypeId;
	cardinality: InterfaceLinkTypeCardinality;
	required: boolean;
}
