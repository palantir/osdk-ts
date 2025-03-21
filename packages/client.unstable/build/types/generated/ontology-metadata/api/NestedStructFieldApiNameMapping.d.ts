import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { StructFieldName } from "./StructFieldName.js";
export interface NestedStructFieldApiNameMapping {
	apiName: ObjectTypeFieldApiName;
	mappings: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}
