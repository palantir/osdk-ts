import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "./SimplePropertyDef.js";
export type ObjectOrInterfaceDefinition = ObjectTypeDefinition | InterfaceDefinition;
export declare namespace DerivedObjectOrInterfaceDefinition {
	type WithDerivedProperties<
		K extends ObjectOrInterfaceDefinition,
		D extends Record<string, SimplePropertyDef>
	> = {
		__DefinitionMetadata: {
			properties: { [T in keyof D] : SimplePropertyDef.ToPropertyDef<D[T]> }
			props: { [T in keyof D] : SimplePropertyDef.ToRuntimeProperty<D[T]> }
		}
	} & K;
}
export type PropertyKeys<
	O extends ObjectOrInterfaceDefinition,
	RDPs extends Record<string, SimplePropertyDef> = {}
> = (keyof NonNullable<O["__DefinitionMetadata"]>["properties"] | keyof RDPs) & string;
