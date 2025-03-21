import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { EntityRid } from "./EntityRid.js";
import type { ModificationHistoryPageToken } from "./ModificationHistoryPageToken.js";
export interface GetEntityModificationHistoryRequest {
	pageToken: ModificationHistoryPageToken | undefined;
	limit: number;
	entityRid: EntityRid;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
