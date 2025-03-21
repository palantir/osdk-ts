import type { UserPropertyId } from "./UserPropertyId.js";
import type { UserPropertyValue } from "./UserPropertyValue.js";
export interface UserProperty {
	userId: UserPropertyId;
	propertyValue: UserPropertyValue;
}
