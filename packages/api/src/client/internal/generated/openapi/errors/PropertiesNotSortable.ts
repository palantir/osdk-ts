import { PropertyApiName } from "../components/PropertyApiName";

/**
 * Results could not be ordered by the requested properties. Please mark the properties as *Searchable* and
 * *Sortable* in the **Ontology Manager** to enable their use in `orderBy` parameters. There may be a short delay
 * between the time a property is set to *Searchable* and *Sortable* and when it can be used.
 *
 */
export interface PropertiesNotSortable {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertiesNotSortable";
    errorInstanceId: string;
    parameters: {
        properties: Array<PropertyApiName>;
    };
}
