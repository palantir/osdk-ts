import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { StructFieldAlias } from "./StructFieldAlias.js";
import type { StructFieldDisplayMetadata } from "./StructFieldDisplayMetadata.js";
import type { StructFieldRid } from "./StructFieldRid.js";
import type { Type } from "./Type.js";
import type { TypeClass } from "./TypeClass.js";
/**
* Represents an ordered set of fields and values.
*/
export interface StructFieldType {
	structFieldRid: StructFieldRid;
	displayMetadata: StructFieldDisplayMetadata;
	apiName: ObjectTypeFieldApiName;
	fieldType: Type;
	aliases: Array<StructFieldAlias>;
	typeClasses: Array<TypeClass>;
}
