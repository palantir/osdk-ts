/**
* UNRESTRICTED means the type is fully indexed, and changing aspects of it such as the parent type requires reindex.
* FEDERATED_ONLY means the type does not contain any stored data in Gotham, and can be changed freely without reindex.
* DEPRECATED_* indicates that the type was previously UNRESTRICTED/FEDERATED_ONLY, but is now DEPRECATED (hidden from most UIs in Gotham).
*/
export type GothamUsageRestriction = "UNRESTRICTED" | "FEDERATED_ONLY" | "DEPRECATED_UNRESTRICTED" | "DEPRECATED_FEDERATED_ONLY";
