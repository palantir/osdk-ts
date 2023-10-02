import { PageToken } from "./PageToken";
import { OntologyObject } from "./OntologyObject";

export interface ListObjectsResponse {
    nextPageToken?: PageToken;
    /** The list of objects in the current page. */
    data: Array<OntologyObject>;
}
