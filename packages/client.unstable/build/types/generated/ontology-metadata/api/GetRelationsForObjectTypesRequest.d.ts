import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to batch get BidirectionalRelations for ObjectTypes.
*
* Please note that this has been deprecated. Please switch to GetLinkTypesForObjectTypesRequest instead.
*/
export interface GetRelationsForObjectTypesRequest {
	partialObjectTypeVersions: Record<ObjectTypeId, OntologyVersion>;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
