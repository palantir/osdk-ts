import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace actionTakesAttachment {
	type ParamsDefinition = {
		attachment: {
			multiplicity: false
			nullable: false
			type: "attachment"
		}
	};
	interface Params {
		readonly attachment: ActionParam.PrimitiveType<"attachment">;
	}
	interface Signatures {
		/**
		* An action which takes an attachment
		*/
		applyAction<
			P extends actionTakesAttachment.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<actionTakesAttachment.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* An action which takes an attachment
* @param {ActionParam.PrimitiveType<"attachment">} attachment
*/
export interface actionTakesAttachment extends ActionDefinition<actionTakesAttachment.Signatures> {
	__DefinitionMetadata?: {
		apiName: "actionTakesAttachment"
		description: "An action which takes an attachment"
		modifiedEntities: {}
		parameters: actionTakesAttachment.ParamsDefinition
		rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3"
		status: "ACTIVE"
		type: "action"
		signatures: actionTakesAttachment.Signatures
	};
	apiName: "actionTakesAttachment";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const actionTakesAttachment: actionTakesAttachment;
