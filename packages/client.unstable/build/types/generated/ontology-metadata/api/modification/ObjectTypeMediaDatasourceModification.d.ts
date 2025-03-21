import type { MediaSourceRid } from "../MediaSourceRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Object type datasource that is backed by media.
*/
export interface ObjectTypeMediaDatasourceModification {
	mediaSourceRids: Array<MediaSourceRid>;
	properties: Array<PropertyTypeId>;
}
