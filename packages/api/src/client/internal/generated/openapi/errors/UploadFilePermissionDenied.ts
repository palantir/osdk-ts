import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { FilePath } from "../components/FilePath";

/** The provided token does not have permission to upload the given file to the given dataset and transaction. */
export interface UploadFilePermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "UploadFilePermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
        path: FilePath;
    };
}
