import { DatasetRid } from "../components/DatasetRid";
import { BranchId } from "../components/BranchId";

/** todo */
export interface PutSchemaPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "PutSchemaPermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
        branchId: BranchId;
    };
}
