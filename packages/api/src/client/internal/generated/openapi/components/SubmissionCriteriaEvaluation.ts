import { ValidationResult } from "./ValidationResult";

/**
 * Contains the status of the **submission criteria**.
 * **Submission criteria** are the prerequisites that need to be satisfied before an Action can be applied.
 * These are configured in the **Ontology Manager**.
 *
 */
export interface SubmissionCriteriaEvaluation {
    /**
     * The message indicating one of the **submission criteria** was not satisfied.
     * This is configured per **submission criteria** in the **Ontology Manager**.
     *
     */
    configuredFailureMessage?: string;
    result: ValidationResult;
}
