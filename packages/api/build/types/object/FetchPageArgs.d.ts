import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
export type NullabilityAdherence = false | "throw" | "drop";
export declare namespace NullabilityAdherence {
	type Default = "throw";
}
export interface SelectArg<
	Q extends ObjectOrInterfaceDefinition,
	L extends PropertyKeys<Q> = PropertyKeys<Q>,
	R extends boolean = false,
	S extends NullabilityAdherence = NullabilityAdherence.Default
> {
	$select?: readonly L[];
	$includeRid?: R;
}
export interface OrderByArg<
	Q extends ObjectOrInterfaceDefinition,
	L extends PropertyKeys<Q> = PropertyKeys<Q>
> {
	$orderBy?: { [K in L]? : "asc" | "desc" };
}
export type SelectArgToKeys<
	Q extends ObjectOrInterfaceDefinition,
	A extends SelectArg<Q, any, any>
> = A extends SelectArg<Q, never> ? PropertyKeys<Q> : A["$select"] extends readonly string[] ? A["$select"][number] : PropertyKeys<Q>;
export interface FetchPageArgs<
	Q extends ObjectOrInterfaceDefinition,
	K extends PropertyKeys<Q> = PropertyKeys<Q>,
	R extends boolean = false,
	A extends Augments = never,
	S extends NullabilityAdherence = NullabilityAdherence.Default,
	T extends boolean = false
> extends AsyncIterArgs<Q, K, R, A, S, T> {
	$nextPageToken?: string;
	$pageSize?: number;
}
export interface AsyncIterArgs<
	Q extends ObjectOrInterfaceDefinition,
	K extends PropertyKeys<Q> = PropertyKeys<Q>,
	R extends boolean = false,
	A extends Augments = never,
	S extends NullabilityAdherence = NullabilityAdherence.Default,
	T extends boolean = false
> extends SelectArg<Q, K, R, S>, OrderByArg<Q, PropertyKeys<Q>> {
	$__UNSTABLE_useOldInterfaceApis?: boolean;
	$includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
}
export type Augment<
	X extends ObjectOrInterfaceDefinition,
	T extends string
> = { [K in CompileTimeMetadata<X>["apiName"]] : T[] };
export type Augments = Record<string, string[]>;
