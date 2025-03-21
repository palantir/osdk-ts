import type { EditsHistoryConfig } from "./EditsHistoryConfig.js";
import type { NoEditsHistory } from "./NoEditsHistory.js";
export interface EditsHistory_config {
	type: "config";
	config: EditsHistoryConfig;
}
export interface EditsHistory_none {
	type: "none";
	none: NoEditsHistory;
}
export type EditsHistory = EditsHistory_config | EditsHistory_none;
