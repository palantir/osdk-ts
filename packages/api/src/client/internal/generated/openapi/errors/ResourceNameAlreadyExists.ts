import { FolderRid } from "../components/FolderRid";

/** The provided resource name is already in use by another resource in the same folder. */
export interface ResourceNameAlreadyExists {
    errorCode: "CONFLICT";
    errorName: "ResourceNameAlreadyExists";
    errorInstanceId: string;
    parameters: {
        parentFolderRid: FolderRid;
        resourceName: string;
    };
}
