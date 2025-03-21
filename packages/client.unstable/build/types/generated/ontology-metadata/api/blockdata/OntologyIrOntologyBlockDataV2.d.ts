import type { InterfaceTypeApiName } from "../InterfaceTypeApiName.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OntologyIrBlockPermissionInformation } from "./OntologyIrBlockPermissionInformation.js";
import type { OntologyIrInterfaceTypeBlockDataV2 } from "./OntologyIrInterfaceTypeBlockDataV2.js";
import type { OntologyIrLinkTypeBlockDataV2 } from "./OntologyIrLinkTypeBlockDataV2.js";
import type { OntologyIrObjectTypeBlockDataV2 } from "./OntologyIrObjectTypeBlockDataV2.js";
import type { OntologyIrSharedPropertyTypeBlockDataV2 } from "./OntologyIrSharedPropertyTypeBlockDataV2.js";
export interface OntologyIrOntologyBlockDataV2 {
	objectTypes: Record<ObjectTypeApiName, OntologyIrObjectTypeBlockDataV2>;
	sharedPropertyTypes: Record<ObjectTypeFieldApiName, OntologyIrSharedPropertyTypeBlockDataV2>;
	linkTypes: Record<LinkTypeId, OntologyIrLinkTypeBlockDataV2>;
	interfaceTypes: Record<InterfaceTypeApiName, OntologyIrInterfaceTypeBlockDataV2>;
	blockPermissionInformation: OntologyIrBlockPermissionInformation | undefined;
}
