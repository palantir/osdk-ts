import { ObjectTypeApiName } from "./ObjectTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { ObjectTypeVisibility } from "./ObjectTypeVisibility";
import { PropertyApiName } from "./PropertyApiName";
import { Property } from "./Property";
import { ObjectTypeRid } from "./ObjectTypeRid";

/** Represents an object type in the Ontology. */
export type ObjectType = { apiName: ObjectTypeApiName; displayName?: DisplayName; status: ReleaseStatus; description?: string; visibility?: ObjectTypeVisibility; primaryKey: Array<PropertyApiName>; properties: Record<PropertyApiName, Property>; rid: ObjectTypeRid; };
