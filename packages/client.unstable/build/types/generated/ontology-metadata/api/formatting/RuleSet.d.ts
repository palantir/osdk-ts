import type { DataType } from "../DataType.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { ValueReferenceId } from "../ValueReferenceId.js";
import type { RuleChain } from "./RuleChain.js";
import type { RuleSetNamedType } from "./RuleSetNamedType.js";
/**
* A set of rules that can be applied to a property. This should correspond to a semantic set of formatting
* rules.
*
* For example:
* - Number (accounting): renders negative numbers with "()", and sets the right amount of parentheses.
* - Number (compact): renders millions as `$nM`
* - ...
*
* These rules can be re-used in different contexts by re-binding the value references as required.
*/
export interface RuleSet {
	rid: RuleSetRid;
	name: string;
	description: string | undefined;
	itType: DataType | undefined;
	namedTypes: Record<ValueReferenceId, RuleSetNamedType>;
	chains: Array<RuleChain>;
}
