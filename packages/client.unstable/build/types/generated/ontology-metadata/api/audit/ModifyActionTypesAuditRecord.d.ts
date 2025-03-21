import type { CreatedActionTypeAuditRecord } from "./CreatedActionTypeAuditRecord.js";
import type { UpdatedActionTypeAuditRecord } from "./UpdatedActionTypeAuditRecord.js";
export interface ModifyActionTypesAuditRecord {
	createdActionTypes: Array<CreatedActionTypeAuditRecord>;
	updatedActionTypes: Array<UpdatedActionTypeAuditRecord>;
}
