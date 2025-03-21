import type { InterfaceType } from "./types.js";
type ApiNameOrInterfaceType = string | InterfaceType;
type Many = {
	apiName: string
	from: InterfaceType
	toMany: ApiNameOrInterfaceType
	toOne?: never
	displayName?: string
	description?: string
	required?: boolean
};
type One = {
	apiName: string
	from: InterfaceType
	toOne: ApiNameOrInterfaceType
	toMany?: never
	displayName?: string
	description?: string
	required?: boolean
};
export declare function defineInterfaceLinkConstraint(linkDef: One | Many): void;
export {};
