import type { TransitionWindow } from "./TransitionWindow.js";
/**
* A set of TransitionWindows during which the migration state machine can do possibly disruptive transitions.
* An empty set means that it is always safe to do the transitions. Examples of disruptive transitions are
* temporarily disabling edits and perf degradation when interacting with migrating ontology entity.
*/
export interface TransitionWindows {
	timeIntervals: Array<TransitionWindow>;
}
