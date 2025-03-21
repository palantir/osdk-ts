/**
* The name of an ActionType that can be referenced in code. Valid API names have the following conditions:
* * All lower case kebab-case
* * Numbers are permitted, but not as the first character.
* * No special characters are allowed.
* * API names cannot be longer than 100 characters.
* API names must be unique - requests that attempt to re-use an existing API name will be rejected.
*/
export type ActionTypeApiName = string;
