import { OntologyObject } from "./OntologyObject";
import { PageToken } from "./PageToken";

export interface SearchObjectsResponse {
    data: Array<OntologyObject>;
    nextPageToken?: PageToken;
}
