import type { ValueType } from "./ValueType.js";
import type { ValueTypeMetadata } from "./ValueTypeMetadata.js";
import type { ValueTypeReference } from "./ValueTypeReference.js";
export interface BatchGetValueTypeResponse {
	reference: ValueTypeReference;
	metadata: ValueTypeMetadata;
	valueType: ValueType;
}
