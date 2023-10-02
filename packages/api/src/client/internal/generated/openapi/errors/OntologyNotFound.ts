import { OntologyRid } from "../components/OntologyRid";
import { OntologyApiName } from "../components/OntologyApiName";

/** The requested Ontology is not found, or the client token does not have access to it. */
export interface OntologyNotFound {
    errorCode: "NOT_FOUND";
    errorName: "OntologyNotFound";
    errorInstanceId: string;
    parameters: {
        ontologyRid: OntologyRid;
        apiName: OntologyApiName;
    };
}
