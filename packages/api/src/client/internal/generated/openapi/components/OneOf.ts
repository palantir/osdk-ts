import { ParameterOption } from "./ParameterOption";

/**
 * The parameter has a manually predefined set of options.
 *
 */
export interface OneOf {
    options: Array<ParameterOption>;
    /** A flag denoting whether custom, user provided values will be considered valid. This is configured via the **Allowed "Other" value** toggle in the **Ontology Manager**. */
    otherValuesAllowed: boolean;
}
