import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";
export interface VersionedReferencedType {
	rid: ValueTypeRid;
	version: ValueTypeVersionId;
}
