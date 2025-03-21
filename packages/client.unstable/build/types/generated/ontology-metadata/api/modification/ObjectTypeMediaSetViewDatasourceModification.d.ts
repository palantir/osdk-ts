import type { MarkingId } from "../MarkingId.js";
import type { MediaSetViewLocator } from "../MediaSetViewLocator.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Object type datasource that is backed by a media set view. This datasource differs from
* ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
* has access to a property backed by this datasource, they will be able to see the media item it references.
*/
export interface ObjectTypeMediaSetViewDatasourceModification {
	mediaSetViewLocator: MediaSetViewLocator;
	properties: Array<PropertyTypeId>;
	assumedMarkings: Array<MarkingId>;
}
