import type { GetClientPropertyValueFromWire } from "./mapping/PropertyValueMapping.js";
import type { ObjectMetadata } from "./ontology/ObjectTypeDefinition.js";
type MaybeArray<
	T extends {
		multiplicity?: boolean | undefined
	},
	U
> = T["multiplicity"] extends true ? Array<U> : U;
type MaybeNullable<
	T extends ObjectMetadata.Property,
	U
> = T["nullable"] extends true ? U | undefined : U;
type Raw<T> = T extends Array<any> ? T[0] : T;
type Converted<T> = T extends Array<any> ? T[1] : T;
/**
* @param {T} ObjectMetadata.Property in literal form
* @param {STRICTLY_ENFORCE_NULLABLE}  S for strict. If false, always `|undefined`
*/
export type OsdkObjectPropertyType<
	T extends ObjectMetadata.Property,
	STRICTLY_ENFORCE_NULLABLE extends boolean = true
> = STRICTLY_ENFORCE_NULLABLE extends false ? MaybeArray<T, Converted<GetClientPropertyValueFromWire<T["type"]>>> | undefined : MaybeNullable<T, MaybeArray<T, Converted<GetClientPropertyValueFromWire<T["type"]>>>>;
export type OsdkObjectRawPropertyType<T extends ObjectMetadata.Property> = MaybeNullable<T, MaybeArray<T, Raw<GetClientPropertyValueFromWire<T["type"]>>>>;
export {};
