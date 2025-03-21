import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when a media set datasource references non-media reference properties.
*/
export interface MediaDatasourceDoesNotReferenceMediaReferencePropertiesError {
	objectType: ObjectTypeRid;
	backingMediaRids: Array<string>;
	nonMediaPropertyTypeRids: Array<PropertyTypeRid>;
}
