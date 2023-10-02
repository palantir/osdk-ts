import { ObjectTypeApiName } from "./ObjectTypeApiName";
import { DisplayName } from "./DisplayName";
import { ReleaseStatus } from "./ReleaseStatus";
import { PropertyApiName } from "./PropertyApiName";
import { PropertyV2 } from "./PropertyV2";
import { ObjectTypeRid } from "./ObjectTypeRid";
import { ObjectTypeVisibility } from "./ObjectTypeVisibility";

/** Represents an object type in the Ontology. */
export type ObjectTypeV2 = { apiName: ObjectTypeApiName; displayName?: DisplayName; status: ReleaseStatus; description?: string; primaryKey: PropertyApiName; properties: Record<PropertyApiName, PropertyV2>; rid: ObjectTypeRid; visibility?: ObjectTypeVisibility; };
