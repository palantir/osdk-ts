import { FolderRid } from "../components/FolderRid";
import { DatasetName } from "../components/DatasetName";

/** The provided token does not have permission to create a dataset in this folder. */
export interface CreateDatasetPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "CreateDatasetPermissionDenied";
    errorInstanceId: string;
    parameters: {
        parentFolderRid: FolderRid;
        name: DatasetName;
    };
}
