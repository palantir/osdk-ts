import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace createFooInterface {
	type ParamsDefinition = {
		createdInterface: {
			multiplicity: false
			nullable: false
			type: "objectType"
		}
	};
	interface Params {
		readonly createdInterface: ActionParam.PrimitiveType<"objectType">;
	}
	interface Signatures {
		applyAction<
			P extends createFooInterface.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<createFooInterface.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* @param {ActionParam.PrimitiveType<"objectType">} createdInterface
*/
export interface createFooInterface extends ActionDefinition<createFooInterface.Signatures> {
	__DefinitionMetadata?: {
		apiName: "createFooInterface"
		displayName: "Create Foo Interface"
		modifiedEntities: {}
		parameters: createFooInterface.ParamsDefinition
		rid: "ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817"
		status: "EXPERIMENTAL"
		type: "action"
		signatures: createFooInterface.Signatures
	};
	apiName: "createFooInterface";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const createFooInterface: createFooInterface;
