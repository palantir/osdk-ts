import type { OntologyIrValueReferenceSource } from "./OntologyIrValueReferenceSource.js";
import type { RuleSetRid } from "./RuleSetRid.js";
import type { ValueReferenceId } from "./ValueReferenceId.js";
/**
* Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
* be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
* binding point (e.g. the property to which the rule set is bound).
*/
export interface OntologyIrRuleSetBinding {
	ruleSetRid: RuleSetRid;
	bindings: Record<ValueReferenceId, OntologyIrValueReferenceSource>;
}
