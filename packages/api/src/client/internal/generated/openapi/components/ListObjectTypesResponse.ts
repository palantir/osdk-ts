import { PageToken } from "./PageToken";
import { ObjectType } from "./ObjectType";

export interface ListObjectTypesResponse {
    nextPageToken?: PageToken;
    /** The list of object types in the current page. */
    data: Array<ObjectType>;
}
