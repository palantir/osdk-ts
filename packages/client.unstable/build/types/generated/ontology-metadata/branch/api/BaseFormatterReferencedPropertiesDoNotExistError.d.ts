import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* One or more property types referenced in a BaseFormatter definition do not exist.
*/
export interface BaseFormatterReferencedPropertiesDoNotExistError {
	sourcePropertyTypeRid: PropertyTypeRid | undefined;
	missingPropertyTypeRids: Array<PropertyTypeRid> | undefined;
	sourcePropertyTypeId: PropertyTypeId | undefined;
	missingPropertyTypeIds: Array<PropertyTypeId> | undefined;
}
