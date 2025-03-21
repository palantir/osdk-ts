import type { CompileTimeMetadata, ObjectOrInterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
type ApiNameAsString<T extends ObjectOrInterfaceDefinition> = CompileTimeMetadata<T>["apiName"];
export type PropMapToObject<
	FROM extends ObjectOrInterfaceDefinition,
	TO extends ObjectTypeDefinition
> = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];
export {};
