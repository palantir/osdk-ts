import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
/**
* This status indicates that the interface is reaching the end of its life and will be removed as per the
* deadline specified.
*/
export interface DeprecatedInterfaceTypeStatus {
	message: string;
	deadline: string;
	replacedBy: InterfaceTypeRid | undefined;
}
