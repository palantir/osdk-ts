import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrMediaSourceRid } from "./OntologyIrMediaSourceRid.js";
/**
* Object type datasource that is backed by media, uniquely identified by its rid.
*/
export interface OntologyIrObjectTypeMediaDatasource {
	mediaSourceRids: Array<OntologyIrMediaSourceRid>;
	properties: Array<ObjectTypeFieldApiName>;
}
