import type { EditsHistoryConfigModification } from "./EditsHistoryConfigModification.js";
import type { NoEditsHistoryModification } from "./NoEditsHistoryModification.js";
export interface EditsHistoryModification_config {
	type: "config";
	config: EditsHistoryConfigModification;
}
export interface EditsHistoryModification_none {
	type: "none";
	none: NoEditsHistoryModification;
}
export type EditsHistoryModification = EditsHistoryModification_config | EditsHistoryModification_none;
