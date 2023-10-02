import { PageToken } from "./PageToken";
import { LinkTypeSideV2 } from "./LinkTypeSideV2";

export interface ListOutgoingLinkTypesResponseV2 {
    nextPageToken?: PageToken;
    /** The list of link type sides in the current page. */
    data: Array<LinkTypeSideV2>;
}
