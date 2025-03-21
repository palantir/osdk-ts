import type { ValueTypeApiName } from "./ValueTypeApiName.js";
import type { ValueTypeDisplayMetadata } from "./ValueTypeDisplayMetadata.js";
import type { ValueTypeStatus } from "./ValueTypeStatus.js";
export interface UpdateValueTypeRequest {
	apiName: ValueTypeApiName;
	displayMetadata: ValueTypeDisplayMetadata;
	status: ValueTypeStatus;
}
