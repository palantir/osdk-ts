import { DatasetRid } from "./DatasetRid";
import { DatasetName } from "./DatasetName";
import { FolderRid } from "./FolderRid";

export interface Dataset {
    rid: DatasetRid;
    name: DatasetName;
    parentFolderRid: FolderRid;
}
