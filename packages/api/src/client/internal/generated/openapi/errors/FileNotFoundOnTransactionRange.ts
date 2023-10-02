import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { FilePath } from "../components/FilePath";

/** The requested file could not be found on the given transaction range, or the client token does not have access to it. */
export interface FileNotFoundOnTransactionRange {
    errorCode: "NOT_FOUND";
    errorName: "FileNotFoundOnTransactionRange";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        startTransactionRid: TransactionRid;
        endTransactionRid: TransactionRid;
        path: FilePath;
    };
}
