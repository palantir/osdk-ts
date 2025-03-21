import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace moveOffice {
	type ParamsDefinition = {
		newAddress: {
			description: "The office's new physical address (not necessarily shipping address)"
			multiplicity: false
			nullable: true
			type: "string"
		}
		newCapacity: {
			description: "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)"
			multiplicity: false
			nullable: true
			type: "integer"
		}
		officeId: {
			multiplicity: false
			nullable: false
			type: "string"
		}
		officeNames: {
			description: "A list of all office names"
			multiplicity: true
			nullable: true
			type: "integer"
		}
	};
	interface Params {
		/**
		* The office's new physical address (not necessarily shipping address)
		*/
		readonly newAddress?: ActionParam.PrimitiveType<"string">;
		/**
		* The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
		*/
		readonly newCapacity?: ActionParam.PrimitiveType<"integer">;
		readonly officeId: ActionParam.PrimitiveType<"string">;
		/**
		* A list of all office names
		*/
		readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<"integer">>;
	}
	interface Signatures {
		/**
		* Update an office's physical location
		*/
		applyAction<
			P extends moveOffice.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<moveOffice.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* Update an office's physical location
* @param {ActionParam.PrimitiveType<"string">} [newAddress] The office's new physical address (not necessarily shipping address)
* @param {ActionParam.PrimitiveType<"integer">} [newCapacity] The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
* @param {ActionParam.PrimitiveType<"string">} officeId
* @param {ActionParam.PrimitiveType<"integer">} [officeNames] A list of all office names
*/
export interface moveOffice extends ActionDefinition<moveOffice.Signatures> {
	__DefinitionMetadata?: {
		apiName: "moveOffice"
		description: "Update an office's physical location"
		displayName: "move-office"
		modifiedEntities: {
			Office: {
				created: false
				modified: true
			}
		}
		parameters: moveOffice.ParamsDefinition
		rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2"
		status: "ACTIVE"
		type: "action"
		signatures: moveOffice.Signatures
	};
	apiName: "moveOffice";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const moveOffice: moveOffice;
