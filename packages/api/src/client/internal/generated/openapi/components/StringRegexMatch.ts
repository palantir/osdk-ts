/**
 * The parameter value must match a predefined regular expression.
 *
 */
export interface StringRegexMatch {
    /** The regular expression configured in the **Ontology Manager**. */
    regex: string;
    /**
     * The message indicating that the regular expression was not matched.
     * This is configured per parameter in the **Ontology Manager**.
     *
     */
    configuredFailureMessage?: string;
}
