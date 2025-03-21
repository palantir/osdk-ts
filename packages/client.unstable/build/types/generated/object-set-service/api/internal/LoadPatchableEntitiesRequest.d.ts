import type { EntityLocator } from "../EntityLocator.js";
import type { ObjectSetContext } from "../ObjectSetContext.js";
/**
* Specifies entity locators of objects or many-to-many links to be loaded for patching.
*/
export interface LoadPatchableEntitiesRequest {
	entityLocators: Array<EntityLocator>;
	objectSetContext: ObjectSetContext | undefined;
}
