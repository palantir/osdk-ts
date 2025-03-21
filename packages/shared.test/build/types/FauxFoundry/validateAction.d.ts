import type { MediaReference } from "@osdk/foundry.core";
import type { ActionTypeV2, ApplyActionRequestV2, BatchApplyActionRequestItem, ValidateActionResponseV2 } from "@osdk/foundry.ontologies";
import type { FauxDataStore } from "./FauxDataStore.js";
export declare function validateAction(payload: ApplyActionRequestV2 | BatchApplyActionRequestItem, def: ActionTypeV2, dataStore: FauxDataStore): ValidateActionResponseV2;
export declare function isMediaReference(o: any): o is MediaReference;
export declare function isInterfaceActionParam(value: any): value is {
	objectTypeApiName: string
	primaryKeyValue: string | number | boolean
};
