import type { ActionTypeLoadRequestV2 } from "./ActionTypeLoadRequestV2.js";
import type { DatasourceType } from "./DatasourceType.js";
import type { EntityMetadataLoadRequest } from "./EntityMetadataLoadRequest.js";
import type { InterfaceTypeLoadRequest } from "./InterfaceTypeLoadRequest.js";
import type { LinkTypeLoadRequest } from "./LinkTypeLoadRequest.js";
import type { ObjectTypeLoadRequest } from "./ObjectTypeLoadRequest.js";
import type { SharedPropertyTypeLoadRequest } from "./SharedPropertyTypeLoadRequest.js";
import type { TypeGroupLoadRequest } from "./TypeGroupLoadRequest.js";
/**
* Request to batch load Ontology entities. If any of the requested
* entities are not available in the specified version or the user is
* missing permissions to see them, the corresponding entry in the
* response will be empty.
*/
export interface OntologyBulkLoadEntitiesRequest {
	datasourceTypes: Array<DatasourceType>;
	objectTypes: Array<ObjectTypeLoadRequest>;
	linkTypes: Array<LinkTypeLoadRequest>;
	sharedPropertyTypes: Array<SharedPropertyTypeLoadRequest>;
	interfaceTypes: Array<InterfaceTypeLoadRequest>;
	typeGroups: Array<TypeGroupLoadRequest>;
	actionTypes: Array<ActionTypeLoadRequestV2>;
	loadRedacted: boolean | undefined;
	includeObjectTypeCount: boolean | undefined;
	includeTypeGroupEntitiesCount: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
	includeEntityMetadata: boolean | undefined;
	entityMetadata: EntityMetadataLoadRequest | undefined;
}
