import { ObjectTypeApiName } from "../components/ObjectTypeApiName";

/**
 * The requested object type has been changed in the **Ontology Manager** and changes are currently being applied. Wait a
 * few seconds and try again.
 *
 */
export interface OntologySyncing {
    errorCode: "CONFLICT";
    errorName: "OntologySyncing";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
    };
}
