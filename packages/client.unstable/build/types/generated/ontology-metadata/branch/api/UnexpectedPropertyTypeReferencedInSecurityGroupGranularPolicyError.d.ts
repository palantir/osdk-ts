import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { Type } from "../../api/Type.js";
/**
* A property referenced in granular policy security is not of expected type.
*/
export interface UnexpectedPropertyTypeReferencedInSecurityGroupGranularPolicyError {
	objectTypeRid: ObjectTypeRid;
	datasourceRid: DatasourceRid;
	expectedPropertyType: string;
	propertyTypeId: PropertyTypeId;
	actualOntologyType: Type;
}
