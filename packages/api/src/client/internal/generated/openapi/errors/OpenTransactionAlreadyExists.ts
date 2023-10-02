import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** A transaction is already open on this dataset and branch. A branch of a dataset can only have one open transaction at a time. */
export interface OpenTransactionAlreadyExists {
    errorCode: "CONFLICT";
    errorName: "OpenTransactionAlreadyExists";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
