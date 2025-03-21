import type { PropertyTypeType, SharedPropertyType } from "./types.js";
/**
* Defines a foreign shared property type you want to take as an input to your product. The typeHint field is used for OSDK generation
*/
export declare function importSharedPropertyType(opts: {
	apiName: string
	packageName?: string
	typeHint: PropertyTypeType
}): SharedPropertyType;
