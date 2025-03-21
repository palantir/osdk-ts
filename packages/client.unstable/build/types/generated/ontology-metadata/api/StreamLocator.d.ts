import type { BranchId } from "./BranchId.js";
import type { StreamLocatorRid } from "./StreamLocatorRid.js";
/**
* Representing a stream locator which is uniquely defined by its rid and branch id.
*/
export interface StreamLocator {
	streamLocatorRid: StreamLocatorRid;
	branchId: BranchId;
}
