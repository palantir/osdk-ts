import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrType } from "./OntologyIrType.js";
import type { StructFieldAlias } from "./StructFieldAlias.js";
import type { StructFieldDisplayMetadata } from "./StructFieldDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
/**
* Represents an ordered set of fields and values.
*/
export interface OntologyIrStructFieldType {
	displayMetadata: StructFieldDisplayMetadata;
	apiName: ObjectTypeFieldApiName;
	fieldType: OntologyIrType;
	aliases: Array<StructFieldAlias>;
	typeClasses: Array<TypeClass>;
}
