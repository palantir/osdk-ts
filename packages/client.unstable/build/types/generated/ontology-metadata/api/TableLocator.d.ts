import type { BranchId } from "./BranchId.js";
import type { TableRid } from "./TableRid.js";
/**
* A locator for a table. This is a combination of the table rid and branch rid.
*/
export interface TableLocator {
	tableRid: TableRid;
	branchId: BranchId;
}
