import { DatasetName } from "./DatasetName";
import { FolderRid } from "./FolderRid";

export interface CreateDatasetRequest {
    name: DatasetName;
    parentFolderRid: FolderRid;
}
