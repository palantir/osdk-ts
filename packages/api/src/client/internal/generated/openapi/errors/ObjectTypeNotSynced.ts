import { ObjectTypeApiName } from "../components/ObjectTypeApiName";

/**
 * The requested object types are not synced into the ontology. Please reach out to your Ontology
 * Administrator to re-index the object type in Ontology Management Application.
 *
 */
export interface ObjectTypeNotSynced {
    errorCode: "CONFLICT";
    errorName: "ObjectTypeNotSynced";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
    };
}
