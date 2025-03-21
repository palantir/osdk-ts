import type { ObjectMetadata } from "@osdk/api";
import type { ObjectTypeFullMetadata, PropertyApiName, PropertyV2 } from "@osdk/foundry.ontologies";
export declare function wireObjectTypeFullMetadataToSdkObjectMetadata(objectTypeWithLink: ObjectTypeFullMetadata & {
	objectType: {
		properties: Record<PropertyApiName, PropertyV2 & {
			nullable?: boolean
		}>
	}
}, v2: boolean, log?: {
	info: (msg: string) => void
}): ObjectMetadata;
