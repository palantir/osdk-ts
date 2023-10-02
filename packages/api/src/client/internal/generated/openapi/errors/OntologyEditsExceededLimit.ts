/**
 * The number of edits to the Ontology exceeded the allowed limit.
 * This may happen because of the request or because the Action is modifying too many objects.
 * Please change the size of your request or contact the Ontology administrator.
 *
 */
export interface OntologyEditsExceededLimit {
    errorCode: "INVALID_ARGUMENT";
    errorName: "OntologyEditsExceededLimit";
    errorInstanceId: string;
    parameters: {
        editsCount: number;
        editsLimit: number;
    };
}
