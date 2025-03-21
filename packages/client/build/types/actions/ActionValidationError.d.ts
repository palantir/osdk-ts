import type { ActionValidationResponse } from "@osdk/api";
export declare class ActionValidationError extends Error {
	validation: ActionValidationResponse;
	constructor(validation: ActionValidationResponse);
}
