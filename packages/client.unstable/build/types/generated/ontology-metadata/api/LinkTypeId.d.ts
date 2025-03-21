/**
* This is a human readable id for the LinkType. LinkTypeIds can be made up of lower case letters,
* numbers and dashes, but they should start with an alphabet. The LinkTypeId is immutable for now.
* To change the LinkTypeId you need to delete the LinkType and re-create it. In future we plan to
* make it mutable, hence you should use the LinkTypeRid for cases where you need to rely on an
* immutable identifier.
*
* Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
*/
export type LinkTypeId = string;
