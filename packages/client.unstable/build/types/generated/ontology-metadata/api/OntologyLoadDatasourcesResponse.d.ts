import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ManyToManyLinkTypeDatasource } from "./ManyToManyLinkTypeDatasource.js";
import type { ObjectTypeDatasource } from "./ObjectTypeDatasource.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Response to OntologyLoadDatasourcesRequest.
*/
export interface OntologyLoadDatasourcesResponse {
	manyToManyLinkTypes: Record<LinkTypeRid, Array<ManyToManyLinkTypeDatasource>>;
	objectTypes: Record<ObjectTypeRid, Array<ObjectTypeDatasource>>;
}
