import { PageToken } from "./PageToken";
import { ActionType } from "./ActionType";

export interface ListActionTypesResponse {
    nextPageToken?: PageToken;
    data: Array<ActionType>;
}
