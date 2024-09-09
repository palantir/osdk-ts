/**/
import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";

/**
 * Reference representing a specific version of a Value Type. When versionId is omitted, we assume it is referencing the latest version available at the time.
 */
export interface ValueTypeReference {
rid: ValueTypeRid;
versionId: ValueTypeVersionId | undefined;
}