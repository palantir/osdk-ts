/**
* This is a human readable id for the ObjectType. ObjectTypeIds can be made up of lower case letters,
* numbers and dashes, but they should start with an alphabet. Once you create an ObjectType, the
* ObjectTypeId is immutable. To change the ObjectTypeId you need to delete the ObjectType and re-create
* it. In future we plan to make it mutable, hence you should use the ObjectTypeRid for cases where
* you need to rely on on an immutable identifier.
*
* Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
*/
export type ObjectTypeId = string;
