import type { MediaSourceRid } from "./MediaSourceRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource that is backed by media, uniquely identified by its rid.
*/
export interface ObjectTypeMediaDatasource {
	mediaSourceRids: Array<MediaSourceRid>;
	properties: Array<PropertyTypeRid>;
}
