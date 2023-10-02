import { FilePath } from "./FilePath";
import { TransactionRid } from "./TransactionRid";

/** */
export type File = { path: FilePath; transactionRid: TransactionRid; sizeBytes?: number; updatedTime: string; };
