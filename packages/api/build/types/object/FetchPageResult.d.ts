import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { ExtractOptions, IsNever, Osdk } from "../OsdkObjectFrom.js";
import type { PageResult } from "../PageResult.js";
import type { NullabilityAdherence } from "./FetchPageArgs.js";
/** exposed for a test */
export type RespectNullability<S extends NullabilityAdherence> = S extends false ? false : true;
/** exposed for a test */
export type UnionIfFalse<
	S extends string,
	JUST_S_IF_TRUE extends boolean,
	E
> = IsNever<S> extends true ? never : JUST_S_IF_TRUE extends true ? S : S | E;
/** exposed for a test */
export type UnionIfTrue<
	S extends string,
	UNION_IF_TRUE extends boolean,
	E extends string
> = IsNever<S> extends true ? never : UNION_IF_TRUE extends true ? S | E : S;
/**
* Helper type for converting fetch options into an Osdk object
*/
export type FetchPageResult<
	Q extends ObjectOrInterfaceDefinition,
	L extends PropertyKeys<Q>,
	R extends boolean,
	S extends NullabilityAdherence,
	T extends boolean
> = PageResult<PropertyKeys<Q> extends L ? Osdk.Instance<Q, ExtractOptions<R, S, T>> : Osdk.Instance<Q, ExtractOptions<R, S, T>, L>>;
/**
* Helper type for converting fetch options into an Osdk object
*/
export type SingleOsdkResult<
	Q extends ObjectOrInterfaceDefinition,
	L extends PropertyKeys<Q> | (keyof RDPs & string),
	R extends boolean,
	S extends NullabilityAdherence,
	RDPs extends Record<string, SimplePropertyDef> = {},
	T extends boolean = false
> = Osdk.Instance<Q, ExtractOptions<R, S, T>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, { [K in Extract<keyof RDPs, L>] : RDPs[K] }>;
export type IsAny<T> = unknown extends T ? [keyof T] extends [never] ? false : true : false;
