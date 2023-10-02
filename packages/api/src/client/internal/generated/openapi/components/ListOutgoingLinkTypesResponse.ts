import { PageToken } from "./PageToken";
import { LinkTypeSide } from "./LinkTypeSide";

/** */
export type ListOutgoingLinkTypesResponse = { nextPageToken?: PageToken; data: Array<LinkTypeSide>; };
