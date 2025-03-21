import type { Augment, ObjectOrInterfaceDefinition, PropertyKeys } from "@osdk/api";
export declare function augment<
	Q extends ObjectOrInterfaceDefinition,
	T extends PropertyKeys<Q>
>(type: Q, ...properties: T[]): Augment<Q, T>;
