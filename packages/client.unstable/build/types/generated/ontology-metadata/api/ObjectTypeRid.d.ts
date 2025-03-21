/**
* An rid identifying the ObjectType. This rid is generated randomly and is safe for logging purposes. Access
* to the ObjectType is also controlled by checking operations on this rid. The ObjectTypeRid for an
* ObjectType is immutable. If an ObjectType is deleted and recreated with the same ObjectTypeId, the
* ObjectTypeRid will be different.
*/
export type ObjectTypeRid = string;
