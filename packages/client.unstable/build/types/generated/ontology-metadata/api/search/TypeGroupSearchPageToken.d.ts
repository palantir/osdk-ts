/**
* A paging token used to retrieve further pages of an TypeGroups search by including it in the
* TypeGroupSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
* should not be parsed/modified.
*/
export type TypeGroupSearchPageToken = string;
