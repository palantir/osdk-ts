/**
* An rid identifying the LinkType. This rid is generated randomly and is safe for logging purposes. The
* LinkTypeRid for a LinkType is immutable. If a LinkType is deleted and recreated with the same LinkTypeId,
* the LinkTypeRid will be different.
*/
export type LinkTypeRid = string;
