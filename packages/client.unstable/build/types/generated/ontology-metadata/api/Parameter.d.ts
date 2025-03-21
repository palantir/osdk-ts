import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { BaseParameterType } from "./types/BaseParameterType.js";
/**
* Parameters of an ActionType represent what inputs the ActionType requires.
*/
export interface Parameter {
	id: ParameterId;
	rid: ParameterRid;
	type: BaseParameterType;
	displayMetadata: ParameterDisplayMetadata;
}
