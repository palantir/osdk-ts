/**
* A string indicating the API Name to use for the given entity that will be a field of an ObjectType.
* This API name will be used to access the entity in programming languages.
* It must adhere to the following rules:
* - Match the unicode identifier syntax: https://unicode.org/reports/tr31/
* - Contain at most 100 characters.
*/
export type ObjectTypeFieldApiName = string;
