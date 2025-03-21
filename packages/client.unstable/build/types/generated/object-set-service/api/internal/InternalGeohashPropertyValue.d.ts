/**
* An object property value that represents a comma separated latitude-longitude string. This differs from OSS's
* public API PropertyValue in that it's a string instead of a blob with 2 doubles. Reasons for this decision are
* explained in Issue #5885 in the objects-data-funnel repo.
*/
export type InternalGeohashPropertyValue = string;
