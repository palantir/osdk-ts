import type { CompileTimeMetadata } from "@osdk/api";
import type { ObjectTypeV2 } from "@osdk/foundry.ontologies";
import type { ToObjectTypeDefinition } from "./ToObjectTypeDefinition.js";
export type JustProps<T extends ObjectTypeV2> = CompileTimeMetadata<ToObjectTypeDefinition<T>>["props"];
