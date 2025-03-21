/**
* Internal representation of a float value. Even though it is represented as a double, same as in the OSS
* public API, a dedicated float type is necessary so that Actions can distinguish double property types
* from float property types, as defined in OMS.
*/
export type InternalFloatPropertyValue = number;
