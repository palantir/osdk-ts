import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";
import { FilePath } from "../components/FilePath";

/** The requested file could not be found on the given branch, or the client token does not have access to it. */
export interface FileNotFoundOnBranch {
    errorCode: "NOT_FOUND";
    errorName: "FileNotFoundOnBranch";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
        path: FilePath;
    };
}
