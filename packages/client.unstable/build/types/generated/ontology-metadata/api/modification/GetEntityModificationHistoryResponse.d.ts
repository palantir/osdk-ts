import type { EntityModificationHistoryPageItem } from "./EntityModificationHistoryPageItem.js";
import type { ModificationHistoryPageToken } from "./ModificationHistoryPageToken.js";
export interface GetEntityModificationHistoryResponse {
	entityModificationPageItems: Array<EntityModificationHistoryPageItem>;
	nextPageToken: ModificationHistoryPageToken | undefined;
}
