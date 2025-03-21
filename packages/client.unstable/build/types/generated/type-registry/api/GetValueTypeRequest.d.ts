import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";
/**
* Request to retrieve a single Value Type. When versionId is omitted latest version of value type will be returned.
*/
export interface GetValueTypeRequest {
	versionId: ValueTypeVersionId | undefined;
}
