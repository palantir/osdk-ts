import type { InterfaceLinkTypeCardinality } from "../InterfaceLinkTypeCardinality.js";
import type { InterfaceLinkTypeMetadata } from "../InterfaceLinkTypeMetadata.js";
import type { InterfaceLinkTypeRidOrIdInRequest } from "../InterfaceLinkTypeRidOrIdInRequest.js";
import type { LinkedEntityTypeRidOrIdInRequest } from "../LinkedEntityTypeRidOrIdInRequest.js";
export interface InterfaceLinkTypeModification {
	id: InterfaceLinkTypeRidOrIdInRequest;
	metadata: InterfaceLinkTypeMetadata;
	linkedEntityTypeRidOrIdInRequest: LinkedEntityTypeRidOrIdInRequest;
	cardinality: InterfaceLinkTypeCardinality;
	required: boolean;
}
