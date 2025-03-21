import type { BaseFormatter } from "../BaseFormatter.js";
import type { SharedPropertyTypeAlias } from "../entitymetadata/SharedPropertyTypeAlias.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { SharedPropertyTypeDisplayMetadata } from "../SharedPropertyTypeDisplayMetadata.js";
import type { TypeClass } from "../TypeClass.js";
import type { SharedPropertyTypeGothamMappingModification } from "../typemapping/SharedPropertyTypeGothamMappingModification.js";
import type { DataConstraintsModification } from "./DataConstraintsModification.js";
import type { EntityProvenanceModification } from "./EntityProvenanceModification.js";
import type { TypeForModification } from "./TypeForModification.js";
import type { ValueTypeReferenceModification } from "./ValueTypeReferenceModification.js";
export interface SharedPropertyTypeModification {
	apiName: ObjectTypeFieldApiName | undefined;
	displayMetadata: SharedPropertyTypeDisplayMetadata;
	baseFormatter: BaseFormatter | undefined;
	type: TypeForModification;
	typeClasses: Array<TypeClass>;
	indexedForSearch: boolean;
	dataConstraints: DataConstraintsModification | undefined;
	gothamMapping: SharedPropertyTypeGothamMappingModification | undefined;
	valueType: ValueTypeReferenceModification | undefined;
	provenance: EntityProvenanceModification | undefined;
	aliases: Array<SharedPropertyTypeAlias> | undefined;
}
