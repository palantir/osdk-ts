import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { GothamIntrinsic } from "./GothamIntrinsic.js";
/**
* A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
* The propertyMappings field stores which other properties this intrinsic should be set for in Gotham.
*/
export interface GothamPropertyIntrinsicMapping {
	gothamIntrinsicType: GothamIntrinsic;
	propertyMappings: Array<PropertyTypeRid>;
}
