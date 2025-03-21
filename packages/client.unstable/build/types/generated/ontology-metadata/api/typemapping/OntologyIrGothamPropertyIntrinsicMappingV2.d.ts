import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";
/**
* The propertyMappings field stores which properties populate the intrinsic values for specific Gotham
* intrinsics.
*
* A foundry property that represents a property level intrinsic in Gotham. These are read from TypeClasses.
*/
export interface OntologyIrGothamPropertyIntrinsicMappingV2 {
	propertyMappings: Record<GothamIntrinsicV2, ObjectTypeFieldApiName>;
}
