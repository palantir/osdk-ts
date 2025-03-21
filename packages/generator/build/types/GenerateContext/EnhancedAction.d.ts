import type { ActionTypeV2, LogicRule } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";
export declare class EnhancedAction extends EnhancedBase<ActionTypeV2> {
	raw: ActionTypeV2;
	constructor(common: EnhanceCommon, raw: ActionTypeV2);
	get description(): string | undefined;
	get parameters(): ActionTypeV2["parameters"];
	get operations(): LogicRule[];
	get paramsIdentifier(): string;
	get definitionIdentifier(): string;
	get definitionParamsIdentifier(): string;
}
