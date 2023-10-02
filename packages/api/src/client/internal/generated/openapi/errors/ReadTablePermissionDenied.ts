import { DatasetRid } from "../components/DatasetRid";

/** The provided token does not have permission to read the given dataset as a table. */
export interface ReadTablePermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "ReadTablePermissionDenied";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
    };
}
