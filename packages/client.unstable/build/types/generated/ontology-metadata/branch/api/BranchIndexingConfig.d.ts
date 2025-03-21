import type { IndexedBranchConfig } from "./IndexedBranchConfig.js";
import type { NonIndexedBranchConfig } from "./NonIndexedBranchConfig.js";
export interface BranchIndexingConfig_indexed {
	type: "indexed";
	indexed: IndexedBranchConfig;
}
export interface BranchIndexingConfig_nonIndexed {
	type: "nonIndexed";
	nonIndexed: NonIndexedBranchConfig;
}
export type BranchIndexingConfig = BranchIndexingConfig_indexed | BranchIndexingConfig_nonIndexed;
