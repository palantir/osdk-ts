import { PropertyApiName } from "../components/PropertyApiName";

/**
 * Results could not be filtered by the requested properties. Please mark the properties as *Searchable* and
 * *Selectable* in the **Ontology Manager** to be able to filter on those properties. There may be a short delay
 * between the time a property is marked *Searchable* and *Selectable* and when it can be used.
 *
 */
export interface PropertiesNotFilterable {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertiesNotFilterable";
    errorInstanceId: string;
    parameters: {
        properties: Array<PropertyApiName>;
    };
}
