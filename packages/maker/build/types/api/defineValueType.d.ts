import type { ValueTypeDefinitionVersion, ValueTypeType } from "./types.js";
type NewValueTypeDefinitionBacking = { [Type in ValueTypeType as Type["type"]] : {
	type: Type["value"]
	constraints?: Type["constraints"]
} };
type NewValueTypeDefinition = NewValueTypeDefinitionBacking[keyof NewValueTypeDefinitionBacking];
export declare function defineValueType(opts: {
	apiName: string
	displayName: string
	description?: string
	type: NewValueTypeDefinition
	version: string
}): ValueTypeDefinitionVersion;
export {};
