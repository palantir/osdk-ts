import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { ParameterId } from "./ParameterId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldApiNameOrRid } from "./StructFieldApiNameOrRid.js";
export interface ObjectParameterStructFieldValueModification {
	parameterId: ParameterId;
	propertyTypeId: PropertyTypeId;
	structFieldApiName: ObjectTypeFieldApiName | undefined;
	structFieldApiNameOrRid: StructFieldApiNameOrRid | undefined;
}
