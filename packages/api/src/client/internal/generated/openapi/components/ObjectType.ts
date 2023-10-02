import { ObjectTypeApiName } from "./ObjectTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { ObjectTypeVisibility } from "./ObjectTypeVisibility";
import { PropertyApiName } from "./PropertyApiName";
import { Property } from "./Property";
import { ObjectTypeRid } from "./ObjectTypeRid";

/** Represents an object type in the Ontology. */
export interface ObjectType {
    apiName: ObjectTypeApiName;
    displayName?: DisplayName;
    status: ReleaseStatus;
    /** The description of the object type. */
    description?: string;
    visibility?: ObjectTypeVisibility;
    /** The primary key of the object. This is a list of properties that can be used to uniquely identify the object. */
    primaryKey: Array<PropertyApiName>;
    /** A map of the properties of the object type. */
    properties: Record<PropertyApiName, Property>;
    rid: ObjectTypeRid;
}
