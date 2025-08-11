In FetchPageArgs.ts I've extended the OrderBy type to include the "relevance" field. In cases where the user orders by "relevance" I want to return the WithOrderByRelevance type in OsdkObjectFrom.ts.

Pipe this type change to all the functions that consume this OrderBy type
