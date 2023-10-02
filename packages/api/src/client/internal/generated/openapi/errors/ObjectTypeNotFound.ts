import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { ObjectTypeRid } from "../components/ObjectTypeRid";

/** The requested object type is not found, or the client token does not have access to it. */
export interface ObjectTypeNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ObjectTypeNotFound";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        objectTypeRid: ObjectTypeRid;
    };
}
