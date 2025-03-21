import type { ActionDefinition } from "@osdk/client";
import { ActionValidationError } from "@osdk/client";
import type { ActionSignatureFromDef, ObservableClient } from "@osdk/client/unstable-do-not-use";
type ApplyActionParams<Q extends ActionDefinition<any>> = Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0] & { [K in keyof ObservableClient.ApplyActionOptions as `$${K}`] : ObservableClient.ApplyActionOptions[K] };
export interface UseOsdkActionResult<Q extends ActionDefinition<any>> {
	applyAction: (args: ApplyActionParams<Q>) => Promise<unknown>;
	error: undefined | Partial<{
		actionValidation: ActionValidationError
		unknown: unknown
	}>;
	data: unknown;
	isPending: boolean;
}
export declare function useOsdkAction<Q extends ActionDefinition<any>>(actionDef: Q): UseOsdkActionResult<Q>;
export {};
