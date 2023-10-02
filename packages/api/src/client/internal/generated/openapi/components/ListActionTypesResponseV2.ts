import { PageToken } from "./PageToken";
import { ActionTypeV2 } from "./ActionTypeV2";

export interface ListActionTypesResponseV2 {
    nextPageToken?: PageToken;
    data: Array<ActionTypeV2>;
}
