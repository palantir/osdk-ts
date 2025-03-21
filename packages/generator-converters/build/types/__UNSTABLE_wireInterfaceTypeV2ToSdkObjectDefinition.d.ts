import type { InterfaceMetadata } from "@osdk/api";
import type { InterfaceType } from "@osdk/foundry.ontologies";
export declare function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(interfaceType: InterfaceType, v2: boolean, log?: {
	info: (msg: string) => void
}): InterfaceMetadata;
