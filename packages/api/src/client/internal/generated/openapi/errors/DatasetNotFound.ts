import { DatasetRid } from "../components/DatasetRid";

/** The requested dataset could not be found, or the client token does not have access to it. */
export interface DatasetNotFound {
    errorCode: "NOT_FOUND";
    errorName: "DatasetNotFound";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
    };
}
