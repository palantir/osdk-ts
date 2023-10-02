import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";
import { TransactionRid } from "../components/TransactionRid";

/** A schema could not be found for the given dataset and branch, or the client token does not have access to it. */
export interface SchemaNotFound {
    errorCode: "NOT_FOUND";
    errorName: "SchemaNotFound";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
        transactionRid: TransactionRid;
    };
}
