import type { ModificationHistoryPageItem } from "./ModificationHistoryPageItem.js";
import type { ModificationHistoryPageToken } from "./ModificationHistoryPageToken.js";
export interface GetModificationHistoryResponse {
	modificationPageItems: Array<ModificationHistoryPageItem>;
	nextPageToken: ModificationHistoryPageToken | undefined;
}
