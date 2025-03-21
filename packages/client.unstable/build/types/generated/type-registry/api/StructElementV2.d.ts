import type { BaseType } from "./BaseType.js";
import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";
export interface StructElementV2 {
	identifier: StructFieldIdentifier;
	baseType: BaseType;
}
