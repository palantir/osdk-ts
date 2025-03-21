import type { ObjectOrInterfaceDefinition } from "./ObjectOrInterface.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";
export type FilteredPropertyKeys<
	O extends ObjectOrInterfaceDefinition,
	T extends WirePropertyTypes
> = { [K in keyof NonNullable<O["__DefinitionMetadata"]>["properties"]] : NonNullable<O["__DefinitionMetadata"]>["properties"][K]["type"] extends T ? K : never }[keyof NonNullable<O["__DefinitionMetadata"]>["properties"]];
