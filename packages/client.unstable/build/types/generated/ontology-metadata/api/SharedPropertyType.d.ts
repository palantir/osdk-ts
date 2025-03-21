import type { BaseFormatter } from "./BaseFormatter.js";
import type { DataConstraints } from "./DataConstraints.js";
import type { EntityProvenance } from "./entitymetadata/provenance/EntityProvenance.js";
import type { SharedPropertyTypeAlias } from "./entitymetadata/SharedPropertyTypeAlias.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { SharedPropertyTypeDisplayMetadata } from "./SharedPropertyTypeDisplayMetadata.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
import type { Type } from "./Type.js";
import type { TypeClass } from "./TypeClass.js";
import type { SharedPropertyTypeGothamMapping } from "./typemapping/SharedPropertyTypeGothamMapping.js";
import type { ValueTypeReference } from "./ValueTypeReference.js";
/**
* A property type that can be shared across object types.
*/
export interface SharedPropertyType {
	rid: SharedPropertyTypeRid;
	apiName: ObjectTypeFieldApiName;
	displayMetadata: SharedPropertyTypeDisplayMetadata;
	indexedForSearch: boolean;
	baseFormatter: BaseFormatter | undefined;
	type: Type;
	typeClasses: Array<TypeClass>;
	dataConstraints: DataConstraints | undefined;
	gothamMapping: SharedPropertyTypeGothamMapping | undefined;
	valueType: ValueTypeReference | undefined;
	aliases: Array<SharedPropertyTypeAlias>;
	provenance: EntityProvenance | undefined;
}
