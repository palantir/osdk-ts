import { BranchId } from "../components/BranchId";

/** The requested branch name cannot be used. Branch names cannot be empty and must not look like RIDs or UUIDs. */
export interface InvalidBranchId {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidBranchId";
    errorInstanceId: string;
    parameters: {
        branchId: BranchId;
    };
}
