import { ValidationResult } from "./ValidationResult";

/**
 * Contains the status of the **submission criteria**.
 * **Submission criteria** are the prerequisites that need to be satisfied before an Action can be applied.
 * These are configured in the **Ontology Manager**.
 *
 */
export type SubmissionCriteriaEvaluation = { configuredFailureMessage?: string; result: ValidationResult; };
