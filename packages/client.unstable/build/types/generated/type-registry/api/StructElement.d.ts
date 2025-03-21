import type { BaseType } from "./BaseType.js";
import type { StructElementName } from "./StructElementName.js";
export interface StructElement {
	name: StructElementName;
	type: BaseType;
}
