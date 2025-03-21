import type { LoggableStructElement } from "./LoggableStructElement.js";
/**
* See com.palantir.object.set.api.Struct
*/
export interface LoggableStruct {
	structElements: Array<LoggableStructElement>;
}
