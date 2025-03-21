import type { CombinedOntologyHistoryPageToken } from "./CombinedOntologyHistoryPageToken.js";
/**
* Request to load a page of the combined history of an Ontology and
* SystemEntityMetadata.
*/
export interface GetCombinedOntologyHistoryRequest {
	pageToken: CombinedOntologyHistoryPageToken | undefined;
	pageSizeLimit: number;
}
