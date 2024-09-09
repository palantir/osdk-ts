/**/
import type { ValueTypeRid } from "../../api/ValueTypeRid.js";
import type { ValueTypeApiName } from "../../api/ValueTypeApiName.js";
import type { DisplayName } from "../../api/DisplayName.js";
import type { Description } from "../../api/Description.js";
import type { PermissioningRid } from "./PermissioningRid.js";
import type { BaseTypeEnum } from "../../api/BaseTypeEnum.js";
export interface IndexedValueType {
rid: ValueTypeRid;
apiName: ValueTypeApiName;
displayName: DisplayName;
description: Description | undefined;
permissioningRid: PermissioningRid;
baseType: BaseTypeEnum;
}