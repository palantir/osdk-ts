import { ValidationResult } from "./ValidationResult";
import { ParameterEvaluatedConstraint } from "./ParameterEvaluatedConstraint";

/** Represents the validity of a parameter against the configured constraints. */
export interface ParameterEvaluationResult {
    result: ValidationResult;
    evaluatedConstraints: Array<ParameterEvaluatedConstraint>;
    /** Represents whether the parameter is a required input to the action. */
    required: boolean;
}
