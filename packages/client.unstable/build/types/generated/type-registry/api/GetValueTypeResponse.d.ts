import type { ValueType } from "./ValueType.js";
import type { ValueTypeMetadata } from "./ValueTypeMetadata.js";
export interface GetValueTypeResponse {
	valueType: ValueType;
	metadata: ValueTypeMetadata;
}
