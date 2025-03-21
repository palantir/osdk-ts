import type { PropertyValueWireToClient } from "./mapping/PropertyValueMapping.js";
import type { PrimaryKeyTypes } from "./ontology/PrimaryKeyTypes.js";
/**
* @deprecated Use OsdkBase
*/
export type OsdkObject<N extends string> = {
	readonly $apiName: N
	readonly $objectType: string
	readonly $primaryKey: PropertyValueWireToClient[PrimaryKeyTypes]
};
