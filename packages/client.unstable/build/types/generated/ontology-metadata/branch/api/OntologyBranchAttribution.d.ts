import type { UserId } from "../../api/UserId.js";
export interface OntologyBranchAttribution {
	createdAt: string;
	lastUpdatedAt: string;
	author: UserId;
}
