import { LinkTypeApiName } from "../components/LinkTypeApiName";
import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";
import { PrimaryKeyValue } from "../components/PrimaryKeyValue";

/** The linked object with the given primary key is not found, or the user does not have access to it. */
export interface LinkedObjectNotFound {
    errorCode: "NOT_FOUND";
    errorName: "LinkedObjectNotFound";
    errorInstanceId: string;
    parameters: {
        linkType: LinkTypeApiName;
        linkedObjectType: ObjectTypeApiName;
        linkedObjectPrimaryKey: Record<PropertyApiName, PrimaryKeyValue>;
    };
}
