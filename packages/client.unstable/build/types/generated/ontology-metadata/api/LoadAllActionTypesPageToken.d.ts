/**
* A paging token used to retrieve further pages of a load response. Clients shouldn't make any assumptions about
* the content of the token and it should not be parsed/modified. This is safe to log.
*/
export type LoadAllActionTypesPageToken = string;
