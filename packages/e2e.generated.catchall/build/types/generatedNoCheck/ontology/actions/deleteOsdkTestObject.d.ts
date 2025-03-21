import type { ActionDefinition, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { OsdkTestObject } from "../objects/OsdkTestObject.js";
export declare namespace deleteOsdkTestObject {
	type ParamsDefinition = {
		OsdkTestObject: {
			multiplicity: false
			nullable: false
			type: ActionMetadata.DataType.Object<OsdkTestObject>
		}
	};
	interface Params {
		readonly OsdkTestObject: ActionParam.ObjectType<OsdkTestObject>;
	}
	interface Signatures {
		applyAction<
			P extends deleteOsdkTestObject.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<deleteOsdkTestObject.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* @param {ActionParam.ObjectType<OsdkTestObject>} OsdkTestObject
*/
export interface deleteOsdkTestObject extends ActionDefinition<deleteOsdkTestObject.Signatures> {
	__DefinitionMetadata?: {
		apiName: "deleteOsdkTestObject"
		displayName: "Delete Osdk Test Object"
		modifiedEntities: {}
		parameters: deleteOsdkTestObject.ParamsDefinition
		rid: "ri.actions.main.action-type.3858bab4-49c7-4fdf-a780-6ccbc359d817"
		status: "EXPERIMENTAL"
		type: "action"
		signatures: deleteOsdkTestObject.Signatures
	};
	apiName: "deleteOsdkTestObject";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const deleteOsdkTestObject: deleteOsdkTestObject;
