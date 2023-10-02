import { PageToken } from "./PageToken";
import { LinkTypeSide } from "./LinkTypeSide";

export interface ListOutgoingLinkTypesResponse {
    nextPageToken?: PageToken;
    /** The list of link type sides in the current page. */
    data: Array<LinkTypeSide>;
}
