import { DatasetRid } from "../components/DatasetRid";
import { TransactionRid } from "../components/TransactionRid";
import { FilePath } from "../components/FilePath";

/** The given file path already exists in the dataset and transaction. */
export interface FileAlreadyExists {
    errorCode: "NOT_FOUND";
    errorName: "FileAlreadyExists";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        transactionRid: TransactionRid;
        path: FilePath;
    };
}
