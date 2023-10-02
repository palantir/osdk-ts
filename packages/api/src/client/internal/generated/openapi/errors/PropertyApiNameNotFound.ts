import { PropertyId } from "../components/PropertyId";
import { ValueType } from "../components/ValueType";

/**
 * A property that was required to have an API name, such as a primary key, is missing one. You can set an API
 * name for it using the **Ontology Manager**.
 *
 */
export interface PropertyApiNameNotFound {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertyApiNameNotFound";
    errorInstanceId: string;
    parameters: {
        propertyId: PropertyId;
        propertyBaseType: ValueType;
    };
}
