import type { DirectedLinkTypeRid } from "./DirectedLinkTypeRid.js";
import type { ObjectsSelection } from "./ObjectsSelection.js";
/**
* A single query entry for paging links. Query specifies the link types with link side and object selection.
*/
export interface GetBulkLinksPageRequestEntry {
	directedLinkTypes: Array<DirectedLinkTypeRid>;
	objects: ObjectsSelection;
}
