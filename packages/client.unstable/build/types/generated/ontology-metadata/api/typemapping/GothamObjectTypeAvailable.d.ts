import type { TypeClass } from "../TypeClass.js";
import type { GothamRepresentativePropertyType } from "./GothamRepresentativePropertyType.js";
import type { ObjectTypeGothamMappingModification } from "./ObjectTypeGothamMappingModification.js";
/**
* Represents a Gotham object type that is available to be imported.
*/
export interface GothamObjectTypeAvailable {
	gothamMapping: ObjectTypeGothamMappingModification;
	displayName: string;
	description: string;
	typeClasses: Array<TypeClass>;
	representativePropertyTypes: Array<GothamRepresentativePropertyType>;
	aliases: Array<string>;
}
