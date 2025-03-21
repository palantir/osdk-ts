import type { UntranslatableSecurityFailureType } from "./UntranslatableSecurityFailureType.js";
/**
* The requested Delegate cannot be integrated into Gotham.
*/
export interface UntranslatableSecurity {
	causes: Array<UntranslatableSecurityFailureType>;
}
