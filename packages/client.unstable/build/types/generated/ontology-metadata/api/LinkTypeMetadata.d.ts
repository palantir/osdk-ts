import type { LinkTypeDisplayMetadata } from "./LinkTypeDisplayMetadata.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { TypeClass } from "./TypeClass.js";
export interface LinkTypeMetadata {
	displayMetadata: LinkTypeDisplayMetadata;
	typeClasses: Array<TypeClass>;
	apiName: ObjectTypeFieldApiName | undefined;
}
