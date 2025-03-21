import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";
import type { CompileTimeMetadata, ObjectTypeDefinition } from "./ontology/ObjectTypeDefinition.js";
export type OsdkObjectPrimaryKeyType<Q extends ObjectTypeDefinition> = PropertyValueWireToClient[CompileTimeMetadata<Q>["primaryKeyType"]];
