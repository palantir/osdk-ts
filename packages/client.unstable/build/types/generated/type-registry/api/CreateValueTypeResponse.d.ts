import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";
export interface CreateValueTypeResponse {
	rid: ValueTypeRid;
	versionId: ValueTypeVersionId;
}
