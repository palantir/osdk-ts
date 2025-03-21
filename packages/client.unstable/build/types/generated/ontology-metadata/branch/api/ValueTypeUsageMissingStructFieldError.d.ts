import type { ObjectTypeFieldApiName } from "../../api/ObjectTypeFieldApiName.js";
/**
* The property type is missing one or more struct fields from the value type. The property type should have a
* superset of the fields on the value type. A struct field's API name must match the value type's field name.
*/
export interface ValueTypeUsageMissingStructFieldError {
	missingStructFields: Array<ObjectTypeFieldApiName>;
}
