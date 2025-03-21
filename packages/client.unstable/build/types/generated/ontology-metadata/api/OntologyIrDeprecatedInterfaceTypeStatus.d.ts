import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
/**
* This status indicates that the interface is reaching the end of its life and will be removed as per the
* deadline specified.
*/
export interface OntologyIrDeprecatedInterfaceTypeStatus {
	message: string;
	deadline: string;
	replacedBy: InterfaceTypeApiName | undefined;
}
