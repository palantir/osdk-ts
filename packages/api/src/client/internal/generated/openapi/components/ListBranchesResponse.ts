import { PageToken } from "./PageToken";
import { Branch } from "./Branch";

export interface ListBranchesResponse {
    nextPageToken?: PageToken;
    /** The list of branches in the current page. */
    data: Array<Branch>;
}
