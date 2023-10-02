import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** The requested branch could not be found, or the client token does not have access to it. */
export interface BranchNotFound {
    errorCode: "NOT_FOUND";
    errorName: "BranchNotFound";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
