import type { BlueprintIcon } from "./iconNames.js";
import type { InterfaceType, PropertyTypeType, SharedPropertyType } from "./types.js";
type SimplifiedInterfaceTypeStatus = {
	type: "deprecated"
	message: string
	deadline: string
} | {
	type: "active"
} | {
	type: "experimental"
};
export declare function defineInterface(opts: {
	apiName: string
	displayName?: string
	description?: string
	icon?: {
		locator: BlueprintIcon
		color: string
	}
	status?: SimplifiedInterfaceTypeStatus
	properties?: Record<string, SharedPropertyType | PropertyTypeType>
	extends?: InterfaceType | InterfaceType[] | string | string[]
}): InterfaceType;
export {};
