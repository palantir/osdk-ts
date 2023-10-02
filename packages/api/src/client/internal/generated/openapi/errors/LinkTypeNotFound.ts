import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { LinkTypeApiName } from "../components/LinkTypeApiName";

/** The link type is not found, or the user does not have access to it. */
export interface LinkTypeNotFound {
    errorCode: "NOT_FOUND";
    errorName: "LinkTypeNotFound";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        linkType: LinkTypeApiName;
    };
}
