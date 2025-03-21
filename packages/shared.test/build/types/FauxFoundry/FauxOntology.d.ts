import { type ObjectTypeDefinition } from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { ReadonlyDeep } from "type-fest";
import type { FauxActionImpl } from "./FauxActionImpl.js";
import type { FauxQueryImpl } from "./FauxQueryImpl.js";
import type { TH_ObjectTypeFullMetadata } from "./typeHelpers/TH_ObjectTypeFullMetadata.js";
/**
* Currently Unsupported Concepts:
* - many:many links.
*/
export declare class FauxOntology {
	#private;
	constructor(ontology: OntologiesV2.OntologyV2);
	get apiName(): OntologiesV2.OntologyApiName;
	getOntologyFullMetadata(): OntologiesV2.OntologyFullMetadata;
	getAllInterfaceTypes(): OntologiesV2.InterfaceType[];
	getAllObjectTypes(): OntologiesV2.ObjectTypeFullMetadata[];
	getAllActionTypes(): OntologiesV2.ActionTypeV2[];
	getAllQueryTypes(): OntologiesV2.QueryTypeV2[];
	getInterfaceType(interfaceType: string): OntologiesV2.InterfaceType;
	getObjectTypeFullMetadata(objectTypeApiName: string): OntologiesV2.ObjectTypeFullMetadata | undefined;
	getObjectTypeFullMetadataOrThrow(objectTypeApiName: string): OntologiesV2.ObjectTypeFullMetadata;
	getActionDef(actionTypeApiName: string): OntologiesV2.ActionTypeV2;
	getActionImpl(actionTypeApiName: string): FauxActionImpl;
	getQueryDef(queryTypeApiName: string): OntologiesV2.QueryTypeV2;
	getQueryImpl(queryTypeApiName: string): FauxQueryImpl;
	getInterfaceToObjectTypeMappings(objectApiNames: Iterable<OntologiesV2.ObjectTypeApiName>): Record<OntologiesV2.InterfaceTypeApiName, OntologiesV2.InterfaceToObjectTypeMappings>;
	getLinkTypeSideV2(objectTypeApiName: string, linkTypeName: string): OntologiesV2.LinkTypeSideV2;
	getOtherLinkTypeSideV2OrThrow(objectTypeApiName: string, linkTypeName: string): OntologiesV2.LinkTypeSideV2;
	getBothLinkTypeSides(leftObjectType: string, leftLinkName: string, rightObjectType: string): [OntologiesV2.LinkTypeSideV2, OntologiesV2.LinkTypeSideV2];
	registerObjectType<Q extends ObjectTypeDefinition>(def: TH_ObjectTypeFullMetadata<Q>): void;
	registerObjectType(def: ReadonlyDeep<OntologiesV2.ObjectTypeFullMetadata>): void;
	registerActionType<Q extends OntologiesV2.ActionTypeV2>(def: Q, implementation?: FauxActionImpl<Q>): void;
	registerActionType(def: OntologiesV2.ActionTypeV2, implementation?: FauxActionImpl): void;
	registerQueryType(def: OntologiesV2.QueryTypeV2, implementation?: FauxQueryImpl): void;
	registerInterfaceType(def: OntologiesV2.InterfaceType): void;
	registerSharedPropertyType(def: OntologiesV2.SharedPropertyType): void;
}
