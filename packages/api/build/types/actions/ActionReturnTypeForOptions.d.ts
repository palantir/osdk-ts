import type { ActionEditResponse, ActionValidationResponse, ApplyActionOptions, ApplyBatchActionOptions } from "./Actions.js";
export type ActionReturnTypeForOptions<Op extends ApplyActionOptions | ApplyBatchActionOptions> = Op extends {
	$validateOnly: true
} ? ActionValidationResponse : Op extends {
	$returnEdits: true
} ? ActionEditResponse : undefined;
