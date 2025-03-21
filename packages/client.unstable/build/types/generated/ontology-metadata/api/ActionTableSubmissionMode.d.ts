import type { SubmitAllValidOrNothingThrowingMode } from "./SubmitAllValidOrNothingThrowingMode.js";
import type { SubmitValidEntriesInOrderUntilFirstFailureMode } from "./SubmitValidEntriesInOrderUntilFirstFailureMode.js";
export interface ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure {
	type: "submitValidEntriesInOrderUntilFirstFailure";
	submitValidEntriesInOrderUntilFirstFailure: SubmitValidEntriesInOrderUntilFirstFailureMode;
}
export interface ActionTableSubmissionMode_submitAllValidOrNothingThrowing {
	type: "submitAllValidOrNothingThrowing";
	submitAllValidOrNothingThrowing: SubmitAllValidOrNothingThrowingMode;
}
/**
* Submission mode defining the validation and processing result handling of action application requests.
*/
export type ActionTableSubmissionMode = ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure | ActionTableSubmissionMode_submitAllValidOrNothingThrowing;
