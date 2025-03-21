/**
* A paging token used to retrieve further pages of an ObjectType search by including it in the
* ObjectTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
* should not be parsed/modified.
*/
export type ObjectTypeSearchPageToken = string;
