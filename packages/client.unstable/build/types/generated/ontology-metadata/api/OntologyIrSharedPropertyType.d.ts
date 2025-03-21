import type { BaseFormatter } from "./BaseFormatter.js";
import type { DataConstraints } from "./DataConstraints.js";
import type { SharedPropertyTypeAlias } from "./entitymetadata/SharedPropertyTypeAlias.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrType } from "./OntologyIrType.js";
import type { SharedPropertyTypeDisplayMetadata } from "./SharedPropertyTypeDisplayMetadata.js";
import type { TypeClass } from "./TypeClass.js";
import type { SharedPropertyTypeGothamMapping } from "./typemapping/SharedPropertyTypeGothamMapping.js";
import type { ValueTypeApiNameReference } from "./ValueTypeApiNameReference.js";
/**
* A property type that can be shared across object types.
*/
export interface OntologyIrSharedPropertyType {
	apiName: ObjectTypeFieldApiName;
	displayMetadata: SharedPropertyTypeDisplayMetadata;
	indexedForSearch: boolean;
	baseFormatter: BaseFormatter | undefined;
	type: OntologyIrType;
	typeClasses: Array<TypeClass>;
	dataConstraints: DataConstraints | undefined;
	gothamMapping: SharedPropertyTypeGothamMapping | undefined;
	valueType: ValueTypeApiNameReference | undefined;
	aliases: Array<SharedPropertyTypeAlias>;
}
