import { PageToken } from "./PageToken";
import { QueryType } from "./QueryType";

export interface ListQueryTypesResponse {
    nextPageToken?: PageToken;
    data: Array<QueryType>;
}
