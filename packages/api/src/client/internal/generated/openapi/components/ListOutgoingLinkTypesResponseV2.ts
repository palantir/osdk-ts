import { PageToken } from "./PageToken";
import { LinkTypeSideV2 } from "./LinkTypeSideV2";

export type ListOutgoingLinkTypesResponseV2 = { nextPageToken?: PageToken; data: Array<LinkTypeSideV2>; };
