import type { Duration } from "./Duration.js";
/**
* Configurations for allowing the original action applier to revert the action.
*/
export interface ActionApplierRevertConfig {
	withinDuration: Duration | undefined;
}
