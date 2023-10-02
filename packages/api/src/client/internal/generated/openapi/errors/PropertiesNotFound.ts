import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";

/** The requested properties are not found on the object type. */
export interface PropertiesNotFound {
    errorCode: "NOT_FOUND";
    errorName: "PropertiesNotFound";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        properties: Array<PropertyApiName>;
    };
}
