import type { LoadAllObjectTypesPageToken } from "./LoadAllObjectTypesPageToken.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { VersionReference } from "./VersionReference.js";
/**
* Request to load a page of all ObjectTypes visible to the user in an Ontology.
*/
export interface LoadAllObjectTypesFromOntologyPageRequest {
	ontologyRid: OntologyRid;
	versionReference: VersionReference;
	pageToken: LoadAllObjectTypesPageToken | undefined;
	pageSizeLimit: number;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
