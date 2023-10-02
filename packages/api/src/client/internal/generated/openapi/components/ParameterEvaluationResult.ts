import { ValidationResult } from "./ValidationResult";
import { ParameterEvaluatedConstraint } from "./ParameterEvaluatedConstraint";

/** Represents the validity of a parameter against the configured constraints. */
export type ParameterEvaluationResult = { result: ValidationResult; evaluatedConstraints: Array<ParameterEvaluatedConstraint>; required: boolean; };
