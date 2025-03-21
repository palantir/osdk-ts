import type { OntologyIrAndCondition } from "./OntologyIrAndCondition.js";
import type { OntologyIrComparisonCondition } from "./OntologyIrComparisonCondition.js";
import type { OntologyIrMarkingsCondition } from "./OntologyIrMarkingsCondition.js";
import type { OntologyIrNotCondition } from "./OntologyIrNotCondition.js";
import type { OntologyIrOrCondition } from "./OntologyIrOrCondition.js";
import type { OntologyIrRegexCondition } from "./OntologyIrRegexCondition.js";
import type { Redacted } from "./Redacted.js";
import type { TrueCondition } from "./TrueCondition.js";
export interface OntologyIrCondition_true {
	type: "true";
	true: TrueCondition;
}
export interface OntologyIrCondition_or {
	type: "or";
	or: OntologyIrOrCondition;
}
export interface OntologyIrCondition_and {
	type: "and";
	and: OntologyIrAndCondition;
}
export interface OntologyIrCondition_not {
	type: "not";
	not: OntologyIrNotCondition;
}
export interface OntologyIrCondition_comparison {
	type: "comparison";
	comparison: OntologyIrComparisonCondition;
}
export interface OntologyIrCondition_markings {
	type: "markings";
	markings: OntologyIrMarkingsCondition;
}
export interface OntologyIrCondition_regex {
	type: "regex";
	regex: OntologyIrRegexCondition;
}
export interface OntologyIrCondition_redacted {
	type: "redacted";
	redacted: Redacted;
}
export type OntologyIrCondition = OntologyIrCondition_true | OntologyIrCondition_or | OntologyIrCondition_and | OntologyIrCondition_not | OntologyIrCondition_comparison | OntologyIrCondition_markings | OntologyIrCondition_regex | OntologyIrCondition_redacted;
