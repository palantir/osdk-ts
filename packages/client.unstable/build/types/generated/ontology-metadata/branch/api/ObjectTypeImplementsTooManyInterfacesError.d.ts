import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An object type implements more than the allowed number of interfaces. The number of interfaces implemented
* includes both explicit and implicit implementations. If an object type implements InterfaceB which extends
* InterfaceA, then the number of implementations the object type has is 2.
*/
export interface ObjectTypeImplementsTooManyInterfacesError {
	objectTypeRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
	actualNumberOfImplements: number;
	maximumNumberOfImplements: number;
}
