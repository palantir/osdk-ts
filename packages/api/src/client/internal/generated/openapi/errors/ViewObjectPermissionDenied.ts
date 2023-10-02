import { ObjectTypeApiName } from "../components/ObjectTypeApiName";

/**
 * The user does not have permission to view objects of this `ObjectType`.
 *
 */
export interface ViewObjectPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "ViewObjectPermissionDenied";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
    };
}
