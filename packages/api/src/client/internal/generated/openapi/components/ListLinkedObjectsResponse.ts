import { PageToken } from "./PageToken";
import { OntologyObject } from "./OntologyObject";

export interface ListLinkedObjectsResponse {
    nextPageToken?: PageToken;
    data: Array<OntologyObject>;
}
