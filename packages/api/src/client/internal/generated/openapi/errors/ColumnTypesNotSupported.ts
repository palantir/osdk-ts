import { DatasetRid } from "../components/DatasetRid";

/** The dataset contains column types that are not supported. */
export interface ColumnTypesNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ColumnTypesNotSupported";
    errorInstanceId: string;
    parameters: {
        datasetRid: DatasetRid;
    };
}
