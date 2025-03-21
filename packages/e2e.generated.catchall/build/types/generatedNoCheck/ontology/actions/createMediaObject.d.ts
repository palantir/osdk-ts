import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace createMediaObject {
	type ParamsDefinition = {
		media_reference: {
			multiplicity: false
			nullable: false
			type: "mediaReference"
		}
		path: {
			multiplicity: false
			nullable: false
			type: "string"
		}
	};
	interface Params {
		readonly media_reference: ActionParam.PrimitiveType<"mediaReference">;
		readonly path: ActionParam.PrimitiveType<"string">;
	}
	interface Signatures {
		applyAction<
			P extends createMediaObject.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<createMediaObject.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
* @param {ActionParam.PrimitiveType<"string">} path
*/
export interface createMediaObject extends ActionDefinition<createMediaObject.Signatures> {
	__DefinitionMetadata?: {
		apiName: "createMediaObject"
		displayName: "Create media object"
		modifiedEntities: {
			MnayanOsdkMediaObject: {
				created: true
				modified: false
			}
		}
		parameters: createMediaObject.ParamsDefinition
		rid: "ri.actions.main.action-type.55c19ac6-47a4-46f6-9bab-b97f9016ff92"
		status: "EXPERIMENTAL"
		type: "action"
		signatures: createMediaObject.Signatures
	};
	apiName: "createMediaObject";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const createMediaObject: createMediaObject;
