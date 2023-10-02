import { PageToken } from "./PageToken";
import { ObjectTypeV2 } from "./ObjectTypeV2";

export interface ListObjectTypesV2Response {
    nextPageToken?: PageToken;
    /** The list of object types in the current page. */
    data: Array<ObjectTypeV2>;
}
