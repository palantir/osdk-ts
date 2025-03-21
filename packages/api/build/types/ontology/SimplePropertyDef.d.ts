import type { GetClientPropertyValueFromWire } from "../mapping/PropertyValueMapping.js";
import type { ObjectMetadata, PropertyDef } from "./ObjectTypeDefinition.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";
export type SimplePropertyDef = WirePropertyTypes | undefined | Array<WirePropertyTypes>;
export declare namespace SimplePropertyDef {
	type Make<
		T extends WirePropertyTypes,
		N extends boolean | undefined,
		M extends boolean | undefined
	> = M extends true ? N extends true ? Array<T> | undefined : Array<T> : N extends true ? T | undefined : T;
	type FromPropertyMetadata<P extends ObjectMetadata.Property> = Make<P["type"], P["nullable"], P["multiplicity"]>;
	type ExtractMultiplicity<T extends WirePropertyTypes | undefined | Array<WirePropertyTypes>> = NonNullable<T> extends Array<any> ? "array" : "single";
	type ExtractWirePropertyType<T extends SimplePropertyDef> = T extends Array<infer Z> ? NonNullable<Z> : NonNullable<T>;
	type ExtractNullable<T extends SimplePropertyDef> = [undefined] extends [T] ? "nullable" : [[undefined]] extends [T] ? "nullable" : "non-nullable";
	type ToPropertyDef<S extends SimplePropertyDef> = PropertyDef<SimplePropertyDef.ExtractWirePropertyType<S>, SimplePropertyDef.ExtractNullable<S>, SimplePropertyDef.ExtractMultiplicity<S>>;
	type ExtractRuntimeBaseType<S extends SimplePropertyDef> = GetClientPropertyValueFromWire<SimplePropertyDef.ExtractWirePropertyType<S>>;
	type ToRuntimeProperty<S extends SimplePropertyDef> = ExtractMultiplicity<S> extends "array" ? ExtractNullable<S> extends "nullable" ? Array<ExtractRuntimeBaseType<S>> | undefined : Array<ExtractRuntimeBaseType<S>> : ExtractNullable<S> extends "nullable" ? ExtractRuntimeBaseType<S> | undefined : ExtractRuntimeBaseType<S>;
}
