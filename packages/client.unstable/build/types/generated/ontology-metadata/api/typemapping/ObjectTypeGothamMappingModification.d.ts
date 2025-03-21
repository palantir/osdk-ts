import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { GothamObjectTypeUri } from "./GothamObjectTypeUri.js";
import type { GothamOntologyParentType } from "./GothamOntologyParentType.js";
import type { PropertyTypeGothamMapping } from "./PropertyTypeGothamMapping.js";
import type { RevDbIntegrationState } from "./RevDbIntegrationState.js";
/**
* An ObjectTypeGothamMappingModification included in a client request can include all three fields, although
* the value of the included fields have not been modified. Thus, to determine whether the URI or propertyMapping
* is being modified, we compare the filed values with those obtained from the StorageObjectTypeGothamMapping.
* Only the Marketplace service user is allowed to modify the URI and propertyMapping.
*/
export interface ObjectTypeGothamMappingModification {
	uri: GothamObjectTypeUri | undefined;
	parentType: GothamOntologyParentType | undefined;
	parentTypeUri: GothamObjectTypeUri | undefined;
	gothamMappingEnabled: boolean | undefined;
	propertyMapping: Record<PropertyTypeRid, PropertyTypeGothamMapping>;
	clearGothamMapping: boolean | undefined;
	revDbIntegrationState: RevDbIntegrationState | undefined;
}
