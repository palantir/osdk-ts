import type { ObjectMetadata, PropertyDef, PropertyValueWireToClient } from "@osdk/api";
import type { ObjectTypeV2, PropertyV2 } from "@osdk/foundry.ontologies";
type PropertyV2ToWirePropertyTypes<T extends PropertyV2> = T["dataType"]["type"] extends "array" ? never : T["dataType"]["type"] extends "date" ? "timestamp" : Exclude<T["dataType"]["type"], "array" | "date" | "struct" | "cipherText" | "timeseries" | "vector">;
export type ToObjectTypeDefinition<T extends ObjectTypeV2> = {
	type: "object"
	apiName: T["apiName"]
	__DefinitionMetadata: Omit<ObjectMetadata, "properties"> & {
		props: { [key in keyof T["properties"] & string] : PropertyValueWireToClient[PropertyV2ToWirePropertyTypes<T["properties"][key]>] }
		properties: { [key in keyof T["properties"] & string] : PropertyDef<PropertyV2ToWirePropertyTypes<T["properties"][key]>> }
	}
};
export {};
