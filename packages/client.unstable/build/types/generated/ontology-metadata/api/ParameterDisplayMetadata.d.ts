import type { StructParameterFieldDisplayMetadata } from "./StructParameterFieldDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
import type { StructParameterFieldApiName } from "./types/StructParameterFieldApiName.js";
export interface ParameterDisplayMetadata {
	displayName: string;
	typeClasses: Array<TypeClass>;
	description: string;
	structFields: Record<StructParameterFieldApiName, StructParameterFieldDisplayMetadata>;
}
