import type { ApplicationRid } from "./ApplicationRid.js";
import type { ClientId } from "./ClientId.js";
export interface BulkGetApplicationsForClientsResponse {
	results: Record<ClientId, ApplicationRid>;
}
