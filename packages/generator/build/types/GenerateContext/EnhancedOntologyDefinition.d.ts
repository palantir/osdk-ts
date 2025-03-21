import type { OntologyV2 } from "@osdk/foundry.ontologies";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedAction } from "./EnhancedAction.js";
import { EnhancedInterfaceType } from "./EnhancedInterfaceType.js";
import { EnhancedObjectType } from "./EnhancedObjectType.js";
import { EnhancedQuery } from "./EnhancedQuery.js";
import { EnhancedSharedPropertyType } from "./EnhancedSharedPropertyType.js";
import { ForeignType } from "./ForeignType.js";
type RequiredType<K extends "objectTypes" | "actionTypes" | "interfaceTypes" | "queryTypes" | "sharedPropertyTypes"> = <L extends boolean = false>(fullApiName: string, localOnly?: L) => L extends true ? EnhancedOntologyDefinition[K][string] : ForeignType;
export declare class EnhancedOntologyDefinition {
	#private;
	ontology: OntologyV2;
	objectTypes: Record<string, EnhancedObjectType | ForeignType>;
	actionTypes: Record<string, EnhancedAction>;
	queryTypes: Record<string, EnhancedQuery>;
	interfaceTypes: Record<string, EnhancedInterfaceType | ForeignType>;
	sharedPropertyTypes: Record<string, EnhancedSharedPropertyType | ForeignType>;
	raw: WireOntologyDefinition;
	common: EnhanceCommon;
	constructor(raw: WireOntologyDefinition, importExt: string, externalObjects?: Map<string, string>, externalInterfaces?: Map<string, string>, externalSpts?: Map<string, string>);
	requireObjectType: RequiredType<"objectTypes">;
	requireInterfaceType: RequiredType<"interfaceTypes">;
	requireActionType: RequiredType<"actionTypes">;
	requireQueryType: RequiredType<"queryTypes">;
	requireSharedPropertyType: RequiredType<"sharedPropertyTypes">;
}
export {};
