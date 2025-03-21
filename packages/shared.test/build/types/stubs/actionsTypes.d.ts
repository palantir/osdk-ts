import type { ActionTypeV2, ObjectTypeApiName } from "@osdk/foundry.ontologies";
export declare const PromoteEmployee: ActionTypeV2;
export declare const PromoteEmployeeObject: ActionTypeV2;
export declare const CreateOffice: ActionTypeV2;
export declare const CreateOfficeAndEmployee: ActionTypeV2;
interface MoveOfficeActionDef {
	readonly apiName: "moveOffice";
	readonly description: "Update an office's physical location";
	readonly displayName: "move-office";
	readonly parameters: {
		readonly officeId: {
			readonly dataType: {
				readonly type: "string"
			}
			readonly required: true
		}
		readonly newAddress: {
			readonly description: "The office's new physical address (not necessarily shipping address)"
			readonly dataType: {
				readonly type: "string"
			}
			readonly required: false
		}
		readonly newCapacity: {
			readonly description: "The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)"
			readonly dataType: {
				readonly type: "integer"
			}
			readonly required: false
		}
		readonly officeNames: {
			readonly description: "A list of all office names"
			readonly dataType: {
				readonly type: "array"
				readonly subType: {
					readonly type: "integer"
				}
			}
			readonly required: false
		}
	};
	readonly rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2";
	readonly operations: [{
		readonly type: "modifyObject"
		readonly objectTypeApiName: ObjectTypeApiName
	}];
	readonly status: "ACTIVE";
}
export declare const MoveOffice: MoveOfficeActionDef;
export declare const ActionTakesObjectSet: ActionTypeV2;
export declare const ActionTakesAttachment: {
	readonly apiName: "actionTakesAttachment"
	readonly description: "An action which takes an attachment"
	readonly parameters: {
		readonly attachment: {
			readonly dataType: {
				readonly type: "attachment"
			}
			readonly required: true
		}
	}
	readonly rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f3"
	readonly operations: []
	readonly status: "ACTIVE"
};
export declare const ActionTakesMedia: ActionTypeV2;
export declare const ActionTypeWithUnsupportedTypes: ActionTypeV2;
export declare const ActionTakesInterface: ActionTypeV2;
export declare const ActionTakesAnotherInterface: ActionTypeV2;
export declare const ActionCreatesInterface: ActionTypeV2;
export declare const ActionTakesStruct: ActionTypeV2;
export {};
