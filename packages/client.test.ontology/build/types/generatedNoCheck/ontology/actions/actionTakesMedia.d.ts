import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace actionTakesMedia {
	type ParamsDefinition = {
		media_reference: {
			multiplicity: false
			nullable: false
			type: "mediaReference"
		}
	};
	interface Params {
		readonly media_reference: ActionParam.PrimitiveType<"mediaReference">;
	}
	interface Signatures {
		/**
		* An action which takes a mediaReference parameter
		*/
		applyAction<
			P extends actionTakesMedia.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<actionTakesMedia.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* An action which takes a mediaReference parameter
* @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
*/
export interface actionTakesMedia extends ActionDefinition<actionTakesMedia.Signatures> {
	__DefinitionMetadata?: {
		apiName: "actionTakesMedia"
		description: "An action which takes a mediaReference parameter"
		modifiedEntities: {}
		parameters: actionTakesMedia.ParamsDefinition
		rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3"
		status: "ACTIVE"
		type: "action"
		signatures: actionTakesMedia.Signatures
	};
	apiName: "actionTakesMedia";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const actionTakesMedia: actionTakesMedia;
