import type { ActionDefinition, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { BarInterface } from "../interfaces/BarInterface.js";
export declare namespace deleteBarInterface {
	type ParamsDefinition = {
		deletedInterface: {
			multiplicity: false
			nullable: false
			type: ActionMetadata.DataType.Interface<BarInterface>
		}
	};
	interface Params {
		readonly deletedInterface: ActionParam.InterfaceType<BarInterface>;
	}
	interface Signatures {
		applyAction<
			P extends deleteBarInterface.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<deleteBarInterface.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* @param {ActionParam.InterfaceType<BarInterface>} deletedInterface
*/
export interface deleteBarInterface extends ActionDefinition<deleteBarInterface.Signatures> {
	__DefinitionMetadata?: {
		apiName: "deleteBarInterface"
		displayName: "Delete Bar Interface"
		modifiedEntities: {}
		parameters: deleteBarInterface.ParamsDefinition
		rid: "ri.actions.main.action-type.3828bab4-4ac7-4fdf-a780-6ccbc359d817"
		status: "EXPERIMENTAL"
		type: "action"
		signatures: deleteBarInterface.Signatures
	};
	apiName: "deleteBarInterface";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const deleteBarInterface: deleteBarInterface;
