import type { OntologyVersion } from "../OntologyVersion.js";
import type { CombinedOntologyHistoryPageItemSummary } from "./CombinedOntologyHistoryPageItemSummary.js";
/**
* A history item corresponding to a modification of the Ontology or SystemEntityMetadata.
* Contains a list of all ObjectTypes and LinkTypes affected by the modification.
*/
export interface CombinedOntologyHistoryPageItem {
	ontologyVersion: OntologyVersion;
	summary: CombinedOntologyHistoryPageItemSummary;
}
