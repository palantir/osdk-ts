import type { InterfaceDefinition, InterfaceMetadata } from "./InterfaceDefinition.js";
import type { ObjectOrInterfaceDefinition } from "./ObjectOrInterface.js";
export type ObjectSpecifier<Q extends ObjectOrInterfaceDefinition> = string & {
	__apiName: Q["apiName"] | (Q extends InterfaceDefinition ? NonNullable<Q["__DefinitionMetadata"]> extends InterfaceMetadata ? NonNullable<NonNullable<Q["__DefinitionMetadata"]>["implementedBy"]>[number] : never : never)
};
