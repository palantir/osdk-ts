import type { ObjectSetContext } from "../api/ObjectSetContext.js";
import type { LoggableEntityLocator } from "./LoggableEntityLocator.js";
/**
* See com.palantir.object.set.api.LoadPatchableEntitiesRequest
*/
export interface LoggableLoadPatchableEntitiesRequest {
	entityLocators: Array<LoggableEntityLocator>;
	objectSetContext: ObjectSetContext | undefined;
}
