import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type { ObjectTypeDefinition, ReleaseStatus } from "./ObjectTypeDefinition.js";
export interface ActionMetadata {
	type: "action";
	apiName: string;
	description?: string;
	displayName?: string;
	parameters: Record<any, ActionMetadata.Parameter<any>>;
	modifiedEntities?: Partial<Record<any, {
		created: boolean
		modified: boolean
	}>>;
	status: ReleaseStatus;
	rid: string;
}
export declare namespace ActionMetadata {
	interface Parameter<T_Target extends ObjectTypeDefinition = never> {
		type: DataType.BaseActionParameterTypes | DataType.Object<any> | DataType.ObjectSet<any> | DataType.Interface<any> | DataType.Struct<any>;
		description?: string;
		multiplicity?: boolean;
		nullable?: boolean;
	}
	namespace DataType {
		type BaseActionParameterTypes = "boolean" | "string" | "integer" | "long" | "double" | "datetime" | "timestamp" | "attachment" | "marking" | "mediaReference" | "objectType";
		interface Object<T_Target extends ObjectTypeDefinition = never> {
			__OsdkTargetType?: T_Target;
			type: "object";
			object: T_Target["apiName"];
		}
		interface Interface<T_Target extends InterfaceDefinition = never> {
			__OsdkTargetType?: T_Target;
			type: "interface";
			interface: T_Target["apiName"];
		}
		interface ObjectSet<T_Target extends ObjectTypeDefinition = never> {
			__OsdkTargetType?: T_Target;
			type: "objectSet";
			objectSet: T_Target["apiName"];
		}
		interface Struct<T extends Record<string, DataType.BaseActionParameterTypes>> {
			type: "struct";
			struct: T;
		}
	}
}
export interface ActionCompileTimeMetadata<T> {
	signatures: T;
}
export interface ActionDefinition<T_signatures = never> {
	type: "action";
	apiName: string;
	osdkMetadata?: OsdkMetadata;
	__DefinitionMetadata?: ActionCompileTimeMetadata<T_signatures> & ActionMetadata;
}
