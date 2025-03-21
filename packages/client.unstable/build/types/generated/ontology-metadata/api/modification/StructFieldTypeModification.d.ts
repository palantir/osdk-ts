import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { StructFieldAlias } from "../StructFieldAlias.js";
import type { StructFieldDisplayMetadata } from "../StructFieldDisplayMetadata.js";
import type { TypeClass } from "../TypeClass.js";
import type { TypeForModification } from "./TypeForModification.js";
export interface StructFieldTypeModification {
	displayMetadata: StructFieldDisplayMetadata;
	apiName: ObjectTypeFieldApiName;
	fieldType: TypeForModification;
	aliases: Array<StructFieldAlias>;
	typeClasses: Array<TypeClass>;
}
