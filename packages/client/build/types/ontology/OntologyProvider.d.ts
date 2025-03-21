import type { ActionMetadata, InterfaceMetadata, ObjectMetadata, QueryMetadata } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare const InterfaceDefinitions: unique symbol;
export interface FetchedObjectTypeDefinition extends ObjectMetadata {
	[InterfaceDefinitions]: {
		[key: string]: {
			def: InterfaceMetadata
		}
	};
}
export interface OntologyProvider {
	/**
	* Returns the current known definition for the object.
	*
	* May result in multiple network calls. May cache results. May invalidate results
	* @param apiName
	* @returns
	*/
	getObjectDefinition: (apiName: string) => Promise<FetchedObjectTypeDefinition>;
	/**
	* Returns the current known definition for the interface.
	*
	* May result in multiple network calls. May cache results. May invalidate results
	* @param apiName
	* @returns
	*/
	getInterfaceDefinition: (apiName: string) => Promise<InterfaceMetadata>;
	getQueryDefinition: (apiName: string) => Promise<QueryMetadata>;
	getActionDefinition: (apiName: string) => Promise<ActionMetadata>;
}
export type OntologyProviderFactory<T extends OntologyProvider = OntologyProvider> = (client: MinimalClient) => T;
