/**
* This is a human readable id for the PropertyType. ids.PropertyTypeIds can be made up of lower or upper case
* letters, numbers, dashes and underscores. ids.PropertyTypeId(s) are mutable at the moment. However, changing
* it has the same effect as deleting and creating a new PropertyType. You should be careful when changing
* it as there may be consumers (Hubble object views, plugins) that may be referencing it.
*
* Please note that this is not safe to log as it is user-inputted and may contain sensitive information.
*/
export type PropertyTypeId = string;
