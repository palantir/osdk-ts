import type { CombinedOntologyHistoryPageItem } from "./CombinedOntologyHistoryPageItem.js";
import type { CombinedOntologyHistoryPageToken } from "./CombinedOntologyHistoryPageToken.js";
/**
* Response containing a page of the combined history of an Ontology and
* SystemEntityMetadata.
*/
export interface GetCombinedOntologyHistoryResponse {
	modificationPageItems: Array<CombinedOntologyHistoryPageItem>;
	nextPageToken: CombinedOntologyHistoryPageToken | undefined;
}
