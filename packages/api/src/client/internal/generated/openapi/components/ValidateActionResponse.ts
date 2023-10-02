import { ValidationResult } from "./ValidationResult";
import { SubmissionCriteriaEvaluation } from "./SubmissionCriteriaEvaluation";
import { ParameterId } from "./ParameterId";
import { ParameterEvaluationResult } from "./ParameterEvaluationResult";

export interface ValidateActionResponse {
    result: ValidationResult;
    submissionCriteria: Array<SubmissionCriteriaEvaluation>;
    parameters: Record<ParameterId, ParameterEvaluationResult>;
}
