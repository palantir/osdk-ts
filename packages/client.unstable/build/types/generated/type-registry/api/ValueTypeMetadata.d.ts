import type { BaseType } from "./BaseType.js";
import type { PermissioningRid } from "./PermissioningRid.js";
import type { ValueTypeApiName } from "./ValueTypeApiName.js";
import type { ValueTypeDisplayMetadata } from "./ValueTypeDisplayMetadata.js";
import type { ValueTypeProvenanceSource } from "./ValueTypeProvenanceSource.js";
import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeStatus } from "./ValueTypeStatus.js";
/**
* Shared metadata common for all version of a value type.
*/
export interface ValueTypeMetadata {
	rid: ValueTypeRid;
	apiName: ValueTypeApiName;
	displayMetadata: ValueTypeDisplayMetadata;
	baseType: BaseType;
	permissioningRid: PermissioningRid;
	status: ValueTypeStatus;
	valueTypeProvenanceSource: ValueTypeProvenanceSource | undefined;
}
