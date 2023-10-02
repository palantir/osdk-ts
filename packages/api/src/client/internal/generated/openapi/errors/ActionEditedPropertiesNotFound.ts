/**
 * Actions attempted to edit properties that could not be found on the object type.
 * Please contact the Ontology administrator to resolve this issue.
 *
 */
export interface ActionEditedPropertiesNotFound {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ActionEditedPropertiesNotFound";
    errorInstanceId: string;
    parameters: {
    };
}
