import type { StructFieldRid } from "../StructFieldRid.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";
/**
* The propertyMappings field stores which struct fields populate the Gotham intrinsic values for this property.
* Struct fields that are marked as intrinsics here will be ignored during type mapping. This means if you had a
* struct like {age: int, startDate: timestamp (intrinsic), location: geohash (intrinsic)}, Gotham would ignore
* the latter 2 fields and map this as an integer property type, not a struct property type.
*/
export interface GothamPropertyIntrinsicMappingV3 {
	propertyMappings: Record<GothamIntrinsicV2, StructFieldRid>;
}
