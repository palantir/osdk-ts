/**
* A paging token used to retrieve further pages of an ActionType search by including it in the
* ActionTypeSearchRequest. Clients shouldn't make any assumptions about the content of the token and it
* should not be parsed/modified.
*/
export type ActionTypeSearchPageToken = string;
