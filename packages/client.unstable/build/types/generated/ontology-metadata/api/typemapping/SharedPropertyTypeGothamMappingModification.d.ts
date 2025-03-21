import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { GothamPropertyComponentUri } from "./GothamPropertyComponentUri.js";
import type { GothamPropertyTypeUri } from "./GothamPropertyTypeUri.js";
export interface SharedPropertyTypeGothamMappingModification {
	uri: GothamPropertyTypeUri | undefined;
	structApiNameToComponentUriMapping: Record<ObjectTypeFieldApiName, GothamPropertyComponentUri>;
}
