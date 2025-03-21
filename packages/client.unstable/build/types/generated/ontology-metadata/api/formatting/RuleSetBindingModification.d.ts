import type { ValueReferenceId } from "../ValueReferenceId.js";
import type { RuleSetIdentifier } from "./RuleSetIdentifier.js";
import type { ValueReferenceSourceModification } from "./ValueReferenceSourceModification.js";
export interface RuleSetBindingModification {
	ruleSetIdentifier: RuleSetIdentifier;
	bindings: Record<ValueReferenceId, ValueReferenceSourceModification>;
}
