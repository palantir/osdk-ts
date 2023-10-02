import { PropertyApiName } from "./PropertyApiName";
import { PropertyValue } from "./PropertyValue";
import { ObjectRid } from "./ObjectRid";

/** Represents an object in the Ontology. */
export type OntologyObject = { properties: Record<PropertyApiName, PropertyValue>; rid: ObjectRid; };
