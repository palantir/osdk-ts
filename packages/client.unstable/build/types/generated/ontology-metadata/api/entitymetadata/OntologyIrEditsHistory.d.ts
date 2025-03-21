import type { NoEditsHistory } from "./NoEditsHistory.js";
import type { OntologyIrEditsHistoryConfig } from "./OntologyIrEditsHistoryConfig.js";
export interface OntologyIrEditsHistory_config {
	type: "config";
	config: OntologyIrEditsHistoryConfig;
}
export interface OntologyIrEditsHistory_none {
	type: "none";
	none: NoEditsHistory;
}
export type OntologyIrEditsHistory = OntologyIrEditsHistory_config | OntologyIrEditsHistory_none;
