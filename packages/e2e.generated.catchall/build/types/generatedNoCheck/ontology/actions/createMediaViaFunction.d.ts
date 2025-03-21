import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace createMediaViaFunction {
	type ParamsDefinition = {
		mediaItem: {
			multiplicity: false
			nullable: false
			type: "mediaReference"
		}
	};
	interface Params {
		readonly mediaItem: ActionParam.PrimitiveType<"mediaReference">;
	}
	interface Signatures {
		applyAction<
			P extends createMediaViaFunction.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<createMediaViaFunction.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* @param {ActionParam.PrimitiveType<"mediaReference">} mediaItem
*/
export interface createMediaViaFunction extends ActionDefinition<createMediaViaFunction.Signatures> {
	__DefinitionMetadata?: {
		apiName: "createMediaViaFunction"
		displayName: "Create media object via function"
		modifiedEntities: {
			MnayanOsdkMediaObject: {
				created: true
				modified: false
			}
		}
		parameters: createMediaViaFunction.ParamsDefinition
		rid: "ri.actions.main.action-type.55c19ac6-47a4-46f6-9bab-b97f9016ff92"
		status: "EXPERIMENTAL"
		type: "action"
		signatures: createMediaViaFunction.Signatures
	};
	apiName: "createMediaViaFunction";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const createMediaViaFunction: createMediaViaFunction;
