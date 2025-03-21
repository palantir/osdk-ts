import type { DataValueClientToWire } from "../mapping/DataValueMapping.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";
import type { ActionResults, ValidateActionResponseV2 } from "./ActionResults.js";
export type ApplyActionOptions = {
	$returnEdits?: true
	$validateOnly?: false
} | {
	$validateOnly?: true
	$returnEdits?: false
};
export type ApplyBatchActionOptions = {
	$returnEdits?: boolean
};
/**
* Helper types for converting action definition parameter types to typescript types
*/
export declare namespace ActionParam {
	type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueClientToWire[T];
	type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T> | OsdkObjectPrimaryKeyType<T>;
	type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
	type InterfaceType<T extends InterfaceDefinition> = {
		$objectType: NonNullable<T["__DefinitionMetadata"]> extends {
			implementedBy: infer U
		} ? (U extends ReadonlyArray<never> ? string : U extends ReadonlyArray<string> ? U[number] : string) : string
		$primaryKey: string | number
	};
	type StructType<T extends Record<string, keyof DataValueClientToWire>> = { [K in keyof T] : DataValueClientToWire[T[K]] };
}
export type ActionEditResponse = ActionResults;
export type ActionValidationResponse = ValidateActionResponseV2;
