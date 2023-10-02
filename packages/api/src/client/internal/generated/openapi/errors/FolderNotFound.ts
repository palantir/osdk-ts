import { FolderRid } from "../components/FolderRid";

/** The requested folder could not be found, or the client token does not have access to it. */
export interface FolderNotFound {
    errorCode: "NOT_FOUND";
    errorName: "FolderNotFound";
    errorInstanceId: string;
    parameters: {
        folderRid: FolderRid;
    };
}
