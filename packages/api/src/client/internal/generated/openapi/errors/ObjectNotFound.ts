import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";
import { PrimaryKeyValue } from "../components/PrimaryKeyValue";

/** The requested object is not found, or the client token does not have access to it. */
export interface ObjectNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ObjectNotFound";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        primaryKey: Record<PropertyApiName, PrimaryKeyValue>;
    };
}
