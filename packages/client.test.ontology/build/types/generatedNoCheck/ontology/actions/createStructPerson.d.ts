import type { ActionDefinition, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
export declare namespace createStructPerson {
	type ParamsDefinition = {
		address: {
			multiplicity: false
			nullable: true
			type: ActionMetadata.DataType.Struct<{
				city: "string"
				state: "string"
				zipcode: "integer"
			}>
		}
		name: {
			multiplicity: false
			nullable: false
			type: "string"
		}
	};
	interface Params {
		readonly address?: ActionParam.StructType<{
			city: "string"
			state: "string"
			zipcode: "integer"
		}>;
		readonly name: ActionParam.PrimitiveType<"string">;
	}
	interface Signatures {
		/**
		* Create a struct
		*/
		applyAction<
			P extends createStructPerson.Params,
			OP extends ApplyActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
		batchApplyAction<
			P extends ReadonlyArray<createStructPerson.Params>,
			OP extends ApplyBatchActionOptions
		>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	}
}
/**
* Create a struct
* @param {ActionParam.StructType<{"city":"string","state":"string","zipcode":"integer"}>} [address]
* @param {ActionParam.PrimitiveType<"string">} name
*/
export interface createStructPerson extends ActionDefinition<createStructPerson.Signatures> {
	__DefinitionMetadata?: {
		apiName: "createStructPerson"
		description: "Create a struct"
		modifiedEntities: {}
		parameters: createStructPerson.ParamsDefinition
		rid: "ri.ontology.main.action-type.9f24017d-cf17-4fa8-84c3-8e01e5d594f2"
		status: "ACTIVE"
		type: "action"
		signatures: createStructPerson.Signatures
	};
	apiName: "createStructPerson";
	type: "action";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const createStructPerson: createStructPerson;
