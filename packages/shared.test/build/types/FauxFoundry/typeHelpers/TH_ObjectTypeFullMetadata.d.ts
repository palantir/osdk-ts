import type { CompileTimeMetadata, ObjectMetadata, ObjectTypeDefinition } from "@osdk/api";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
interface TypeHelper_Property<Q extends ObjectMetadata.Property> extends OntologiesV2.PropertyV2 {
	dataType: OntologiesV2.ObjectPropertyType & {
		type: Q["type"]
	};
}
type TypeHelper_Properties<Q extends ObjectTypeDefinition> = { [K in keyof CompileTimeMetadata<Q>["properties"]] : TypeHelper_Property<CompileTimeMetadata<Q>["properties"][K]> };
interface TypeHelper_ObjectType<Q extends ObjectTypeDefinition> extends OntologiesV2.ObjectTypeV2 {
	apiName: Q["apiName"];
	primaryKey: CompileTimeMetadata<Q>["primaryKeyApiName"];
	titleProperty: CompileTimeMetadata<Q>["titleProperty"];
	properties: TypeHelper_Properties<Q>;
}
export interface TH_ObjectTypeFullMetadata<Q extends ObjectTypeDefinition> extends OntologiesV2.ObjectTypeFullMetadata {
	objectType: TypeHelper_ObjectType<Q>;
}
export {};
