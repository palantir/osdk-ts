import type { InterfaceLinkTypeCardinality } from "./InterfaceLinkTypeCardinality.js";
import type { InterfaceLinkTypeMetadata } from "./InterfaceLinkTypeMetadata.js";
import type { OntologyIrLinkedEntityTypeId } from "./OntologyIrLinkedEntityTypeId.js";
export interface OntologyIrInterfaceLinkType {
	metadata: InterfaceLinkTypeMetadata;
	linkedEntityTypeId: OntologyIrLinkedEntityTypeId;
	cardinality: InterfaceLinkTypeCardinality;
	required: boolean;
}
