import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
import type { OntologyIrBaseParameterType } from "./types/OntologyIrBaseParameterType.js";
/**
* Parameters of an ActionType represent what inputs the ActionType requires.
*/
export interface OntologyIrParameter {
	id: ParameterId;
	rid: ParameterRid;
	type: OntologyIrBaseParameterType;
	displayMetadata: ParameterDisplayMetadata;
}
