import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
export type LinkNames<Q extends ObjectOrInterfaceDefinition> = keyof CompileTimeMetadata<Q>["links"] & string;
export type LinkedType<
	Q extends ObjectOrInterfaceDefinition,
	L extends LinkNames<Q>
> = NonNullable<CompileTimeMetadata<Q>["links"][L]["__OsdkLinkTargetType"]>;
