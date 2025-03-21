import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
export interface ObjectTypeWithProperties {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRids: Array<PropertyTypeRid>;
}
