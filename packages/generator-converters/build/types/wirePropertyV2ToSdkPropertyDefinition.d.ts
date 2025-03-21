import type { ObjectMetadata } from "@osdk/api";
import type { PropertyV2, SharedPropertyType } from "@osdk/foundry.ontologies";
export declare function wirePropertyV2ToSdkPropertyDefinition(input: (PropertyV2 | SharedPropertyType) & {
	nullable?: boolean
}, isNullable?: boolean, log?: {
	info: (msg: string) => void
}): ObjectMetadata.Property | undefined;
