import type { InterfaceDefinition, InterfaceMetadata, ObjectMetadata, ObjectOrInterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
type MetadataFor<T extends ObjectOrInterfaceDefinition> = T extends InterfaceDefinition ? InterfaceMetadata : T extends ObjectTypeDefinition ? ObjectMetadata : never;
export declare function useOsdkMetadata<T extends ObjectOrInterfaceDefinition>(type: T): {
	loading: boolean
	metadata?: MetadataFor<T>
};
export {};
