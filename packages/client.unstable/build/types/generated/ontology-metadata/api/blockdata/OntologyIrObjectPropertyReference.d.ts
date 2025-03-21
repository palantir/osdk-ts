import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
/**
* Property reference containing the api name of the object
*/
export interface OntologyIrObjectPropertyReference {
	apiName: ObjectTypeFieldApiName;
	object: ObjectTypeApiName;
}
