import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* An error representing when a media set or media set view datasource references properties that do not exist
* on the object type.
*/
export interface MediaDatasourceDoesNotReferenceExistingPropertiesError {
	objectType: ObjectTypeRid;
	backingMediaRids: Array<string>;
	nonExistentPropertyTypeIds: Array<PropertyTypeId>;
}
