import { DatasetRid } from "./DatasetRid";
import { DatasetName } from "./DatasetName";
import { FolderRid } from "./FolderRid";

/** */
export type Dataset = { rid: DatasetRid; name: DatasetName; parentFolderRid: FolderRid; };
