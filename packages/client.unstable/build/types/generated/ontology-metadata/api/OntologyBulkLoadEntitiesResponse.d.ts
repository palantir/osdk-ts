import type { ActionTypeLoadResponseV2 } from "./ActionTypeLoadResponseV2.js";
import type { InterfaceTypeLoadResponse } from "./InterfaceTypeLoadResponse.js";
import type { LinkTypeLoadResponse } from "./LinkTypeLoadResponse.js";
import type { ObjectTypeLoadResponse } from "./ObjectTypeLoadResponse.js";
import type { SharedPropertyTypeLoadResponse } from "./SharedPropertyTypeLoadResponse.js";
import type { TypeGroupLoadResponse } from "./TypeGroupLoadResponse.js";
/**
* Response to OntologyBulkLoadEntitiesRequest. If any of the requested
* entities are not available in the specified version or the user is
* missing permissions to see them, the corresponding entry in the
* response will be empty.
*/
export interface OntologyBulkLoadEntitiesResponse {
	objectTypes: Array<ObjectTypeLoadResponse | undefined>;
	linkTypes: Array<LinkTypeLoadResponse | undefined>;
	sharedPropertyTypes: Array<SharedPropertyTypeLoadResponse | undefined>;
	interfaceTypes: Array<InterfaceTypeLoadResponse | undefined>;
	typeGroups: Array<TypeGroupLoadResponse | undefined>;
	actionTypes: Array<ActionTypeLoadResponseV2 | undefined>;
}
