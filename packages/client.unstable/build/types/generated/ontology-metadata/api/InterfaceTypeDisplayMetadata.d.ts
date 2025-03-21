import type { Icon } from "./Icon.js";
/**
* This includes metadata which can be used by front-ends when displaying an interface.
*/
export interface InterfaceTypeDisplayMetadata {
	displayName: string;
	description: string | undefined;
	icon: Icon | undefined;
}
