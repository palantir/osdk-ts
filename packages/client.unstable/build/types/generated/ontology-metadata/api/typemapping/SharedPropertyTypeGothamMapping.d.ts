import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { GothamPropertyComponentUri } from "./GothamPropertyComponentUri.js";
import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";
export interface SharedPropertyTypeGothamMapping {
	uri: GothamPropertyTypeUri;
	structApiNameToComponentUriMapping: Record<ObjectTypeFieldApiName, GothamPropertyComponentUri>;
}
