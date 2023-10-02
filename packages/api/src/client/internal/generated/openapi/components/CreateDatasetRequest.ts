import { DatasetName } from "./DatasetName";
import { FolderRid } from "./FolderRid";

/** */
export type CreateDatasetRequest = { name: DatasetName; parentFolderRid: FolderRid; };
