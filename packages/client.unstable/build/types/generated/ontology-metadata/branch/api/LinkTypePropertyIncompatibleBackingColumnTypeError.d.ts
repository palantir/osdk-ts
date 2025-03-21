import type { FoundryFieldType } from "../../api/FoundryFieldType.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when the property of a many-to-many link type has a type that is incompatible with the type of the backing data.
*/
export interface LinkTypePropertyIncompatibleBackingColumnTypeError {
	linkType: LinkTypeRid;
	propertyType: PropertyTypeRid;
	validColumnTypes: Array<FoundryFieldType>;
	providedColumnType: FoundryFieldType;
}
