/**/
import type { ValueTypeReference } from "./ValueTypeReference.js";
import type { ValueTypeMetadata } from "./ValueTypeMetadata.js";
import type { ValueType } from "./ValueType.js";
export interface BatchGetValueTypeResponse {
reference: ValueTypeReference;
metadata: ValueTypeMetadata;
valueType: ValueType;
}