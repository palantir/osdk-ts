import type { ActionRevertEnabledFor } from "./ActionRevertEnabledFor.js";
/**
* This provides the conditions under which the Action Type can be reverted. Note that matching one of these
* conditions is necessary but not sufficient for an action to be reverted, as it is also required that none of
* the modified entities have received further edits after the action was applied.
*
* The list of conditions is not permitted to be empty, and any such modifications will fail.
*/
export interface ActionRevert {
	enabledFor: Array<ActionRevertEnabledFor>;
}
