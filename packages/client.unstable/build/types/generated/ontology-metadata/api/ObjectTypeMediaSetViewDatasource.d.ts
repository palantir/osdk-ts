import type { MarkingId } from "./MarkingId.js";
import type { MediaSetViewLocator } from "./MediaSetViewLocator.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource that is backed by a media set view, uniquely identified by its rid. This datasource
* differs from ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
* has access to a property backed by this datasource, they will be able to see the media item it references.
*/
export interface ObjectTypeMediaSetViewDatasource {
	mediaSetViewLocator: MediaSetViewLocator;
	properties: Array<PropertyTypeRid>;
	assumedMarkings: Array<MarkingId>;
}
