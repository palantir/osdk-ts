import type { DirectedLinkTypeRid, Type } from "@osdk/client.unstable";
import type { MinimalClient } from "../MinimalClientContext.js";
export interface ObjectPropertyMapping {
	apiName: string;
	id: string;
	propertyIdToApiNameMapping: Record<string, string>;
	propertyApiNameToIdMapping: Record<string, string>;
	pk: {
		rid: string
		apiName: string
		type: Type
	};
}
type ObjectLinkMapping = Record<string, {
	apiName: string
	directedLinkTypeRid: DirectedLinkTypeRid
	otherObjectType: string
}>;
export declare class MetadataClient {
	#private;
	constructor(client: MinimalClient);
	forObjectByRid: (key: string) => Promise<{
		getPropertyMapping: () => Promise<ObjectPropertyMapping>
		getLinkMapping: () => Promise<ObjectLinkMapping>
		getRid: () => string
		getApiName: () => Promise<string | undefined>
	}>;
	forObjectByApiName: (key: string) => Promise<{
		getPropertyMapping: () => Promise<ObjectPropertyMapping>
		getLinkMapping: () => Promise<ObjectLinkMapping>
		getRid: () => string
		getApiName: () => Promise<string | undefined>
	}>;
	ontologyVersion: (key: string) => Promise<string>;
}
export declare const metadataCacheClient: (key: MinimalClient) => Promise<MetadataClient>;
export {};
