import type { Attribution } from "../Attribution.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { ModificationHistoryPageItemSummary } from "./ModificationHistoryPageItemSummary.js";
import type { OntologyModificationDescription } from "./OntologyModificationDescription.js";
export interface ModificationHistoryPageItem {
	previousOntologyVersion: OntologyVersion | undefined;
	ontologyVersion: OntologyVersion;
	attribution: Attribution;
	summary: ModificationHistoryPageItemSummary;
	description: OntologyModificationDescription | undefined;
	sourceOntologyBranchRid: OntologyBranchRid | undefined;
}
