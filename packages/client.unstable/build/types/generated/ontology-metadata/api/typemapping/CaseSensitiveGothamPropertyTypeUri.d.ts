/**
* This type exists because Conjure does not support using an alias of an external type as a key to a map
* (see LoadGothamTypeInstallationStatusesResponse). Values of this type should always be lowercased in
* responses, but clients should convert to an internal case-insensitive type where possible.
*/
export type CaseSensitiveGothamPropertyTypeUri = string;
