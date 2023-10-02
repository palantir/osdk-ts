import { PropertyApiName } from "./PropertyApiName";
import { PropertyValue } from "./PropertyValue";

/** Represents an object in the Ontology. */
export type OntologyObjectV2 = Record<PropertyApiName, PropertyValue>;
