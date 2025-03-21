import type { ClosedStatusV2 } from "./ClosedStatusV2.js";
import type { MergedStatusV2 } from "./MergedStatusV2.js";
import type { OpenStatusV2 } from "./OpenStatusV2.js";
export interface ProposalStatusV2_open {
	type: "open";
	open: OpenStatusV2;
}
export interface ProposalStatusV2_merged {
	type: "merged";
	merged: MergedStatusV2;
}
export interface ProposalStatusV2_closed {
	type: "closed";
	closed: ClosedStatusV2;
}
export type ProposalStatusV2 = ProposalStatusV2_open | ProposalStatusV2_merged | ProposalStatusV2_closed;
