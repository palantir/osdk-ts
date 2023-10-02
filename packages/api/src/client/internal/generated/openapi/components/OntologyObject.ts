import { PropertyApiName } from "./PropertyApiName";
import { PropertyValue } from "./PropertyValue";
import { ObjectRid } from "./ObjectRid";

/** Represents an object in the Ontology. */
export interface OntologyObject {
    /** A map of the property values of the object. */
    properties: Record<PropertyApiName, PropertyValue>;
    rid: ObjectRid;
}
