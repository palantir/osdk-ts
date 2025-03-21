/**
* The status returned by the request as indicated by its HTTP status code.
* A 2xx HTTP status code indicates SUCCESS, 4xx and 5xx codes indicate ERROR, other codes indicate OTHER.
*/
export type Status = "SUCCESS" | "ERROR" | "OTHER";
