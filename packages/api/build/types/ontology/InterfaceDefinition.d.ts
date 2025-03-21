import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { ObjectInterfaceBaseMetadata, ObjectInterfaceCompileDefinition } from "./ObjectTypeDefinition.js";
export interface InterfaceMetadata extends ObjectInterfaceBaseMetadata {
	type: "interface";
	implementedBy?: ReadonlyArray<string>;
}
export interface InterfaceDefinition {
	type: "interface";
	apiName: string;
	osdkMetadata?: OsdkMetadata;
	__DefinitionMetadata?: InterfaceMetadata & ObjectInterfaceCompileDefinition;
}
