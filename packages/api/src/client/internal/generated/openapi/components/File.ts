import { FilePath } from "./FilePath";
import { TransactionRid } from "./TransactionRid";

export interface File {
    path: FilePath;
    transactionRid: TransactionRid;
    sizeBytes?: number;
    updatedTime: string;
}
