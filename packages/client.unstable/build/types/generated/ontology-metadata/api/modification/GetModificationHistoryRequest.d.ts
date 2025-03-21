import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { ModificationHistoryPageToken } from "./ModificationHistoryPageToken.js";
export interface GetModificationHistoryRequest {
	pageToken: ModificationHistoryPageToken | undefined;
	limit: number;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
