import type { BaseType } from "./BaseType.js";
import type { ExampleValue } from "./ExampleValue.js";
import type { PermissioningRid } from "./PermissioningRid.js";
import type { ValueTypeApiName } from "./ValueTypeApiName.js";
import type { ValueTypeDataConstraintModification } from "./ValueTypeDataConstraintModification.js";
import type { ValueTypeDisplayMetadata } from "./ValueTypeDisplayMetadata.js";
export interface CreateValueTypeRequest {
	apiName: ValueTypeApiName;
	displayMetadata: ValueTypeDisplayMetadata;
	baseType: BaseType;
	constraints: Array<ValueTypeDataConstraintModification>;
	exampleValues: Array<ExampleValue>;
	permissioningRid: PermissioningRid;
}
