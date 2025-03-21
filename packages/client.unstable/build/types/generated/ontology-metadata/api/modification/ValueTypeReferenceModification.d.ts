import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { ValueTypeVersionId } from "../ValueTypeVersionId.js";
export interface ValueTypeReferenceModification {
	rid: ValueTypeRid;
	versionId: ValueTypeVersionId | undefined;
}
