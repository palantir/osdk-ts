import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";
import type { ObjectOrInterfaceDefinition } from "./ontology/ObjectOrInterface.js";
import type { ObjectSpecifier } from "./ontology/ObjectSpecifier.js";
import type { ObjectTypeDefinition } from "./ontology/ObjectTypeDefinition.js";
import type { PrimaryKeyTypes } from "./ontology/PrimaryKeyTypes.js";
import type { OsdkObjectPrimaryKeyType } from "./OsdkObjectPrimaryKeyType.js";
export type OsdkBase<Q extends ObjectOrInterfaceDefinition> = {
	readonly $apiName: Q["apiName"]
	readonly $objectType: string
	readonly $primaryKey: PrimaryKeyType<Q>
	readonly $title: string | undefined
	readonly $objectSpecifier: ObjectSpecifier<Q>
};
export type PrimaryKeyType<Q extends ObjectOrInterfaceDefinition> = (Q extends ObjectTypeDefinition ? OsdkObjectPrimaryKeyType<Q> : unknown) & PropertyValueWireToClient[PrimaryKeyTypes];
