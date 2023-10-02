import { DisplayName } from "./DisplayName";

/**
 * A possible value for the parameter. This is defined in the **Ontology Manager** by Actions admins.
 *
 */
export interface ParameterOption {
    displayName?: DisplayName;
    /** An allowed configured value for a parameter within an action. */
    value?: any;
}
