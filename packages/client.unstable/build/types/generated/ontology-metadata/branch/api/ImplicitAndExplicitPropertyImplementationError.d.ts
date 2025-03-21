import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An object type implements multiple interfaces and explicitly provides some property mappings for some
* interfaces but not for others. It is required to explicitly provide property mappings for all interfaces or
* for none.
*/
export interface ImplicitAndExplicitPropertyImplementationError {
	objectRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId | undefined;
}
