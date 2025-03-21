import type { ApiNameValueTypeReference, SharedPropertyTypeGothamMapping } from "@osdk/client.unstable";
import type { PropertyTypeType, SharedPropertyType } from "./types.js";
export declare function defineSharedPropertyType(opts: {
	apiName: string
	type: PropertyTypeType
	array?: boolean
	description?: string
	displayName?: string
	valueType?: ApiNameValueTypeReference
	typeClasses?: SharedPropertyType["typeClasses"]
	gothamMapping?: SharedPropertyTypeGothamMapping
}): SharedPropertyType;
