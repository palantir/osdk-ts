import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when the property of a many-to-many link type is backed by a column and that column is missing from the backing datasource.
*/
export interface ColumnMissingFromBackingDatasourceForLinkTypeError {
	linkType: LinkTypeRid;
	propertyType: PropertyTypeRid;
}
