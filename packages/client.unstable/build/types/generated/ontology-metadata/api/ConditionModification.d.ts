import type { AndConditionModification } from "./AndConditionModification.js";
import type { ComparisonConditionModification } from "./ComparisonConditionModification.js";
import type { MarkingsConditionModification } from "./MarkingsConditionModification.js";
import type { NotConditionModification } from "./NotConditionModification.js";
import type { OrConditionModification } from "./OrConditionModification.js";
import type { Redacted } from "./Redacted.js";
import type { RegexConditionModification } from "./RegexConditionModification.js";
import type { TrueCondition } from "./TrueCondition.js";
export interface ConditionModification_true {
	type: "true";
	true: TrueCondition;
}
export interface ConditionModification_or {
	type: "or";
	or: OrConditionModification;
}
export interface ConditionModification_and {
	type: "and";
	and: AndConditionModification;
}
export interface ConditionModification_not {
	type: "not";
	not: NotConditionModification;
}
export interface ConditionModification_comparison {
	type: "comparison";
	comparison: ComparisonConditionModification;
}
export interface ConditionModification_markings {
	type: "markings";
	markings: MarkingsConditionModification;
}
export interface ConditionModification_regex {
	type: "regex";
	regex: RegexConditionModification;
}
export interface ConditionModification_redacted {
	type: "redacted";
	redacted: Redacted;
}
export type ConditionModification = ConditionModification_true | ConditionModification_or | ConditionModification_and | ConditionModification_not | ConditionModification_comparison | ConditionModification_markings | ConditionModification_regex | ConditionModification_redacted;
