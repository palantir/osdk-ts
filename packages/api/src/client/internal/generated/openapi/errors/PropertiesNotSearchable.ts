import { PropertyApiName } from "../components/PropertyApiName";

/**
 * Search is not enabled on the specified properties. Please mark the properties as *Searchable*
 * in the **Ontology Manager** to enable search on them. There may be a short delay
 * between the time a property is marked *Searchable* and when it can be used.
 *
 */
export interface PropertiesNotSearchable {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertiesNotSearchable";
    errorInstanceId: string;
    parameters: {
        propertyApiNames: Array<PropertyApiName>;
    };
}
